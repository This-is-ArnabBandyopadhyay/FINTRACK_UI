import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Animated,
  StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {styles, inboxItemStyles, colors} from './styles';
import SidebarMenu from './SidebarMenu';
import ConversationScreen from './ConversationScreen';
import ComposeScreen from './ComposeScreen';
import Dashboard from '../Dashboard/Dashboard';

const InboxScreen = () => {
  // State management
  const [state, setState] = useState({
    conversations: [],
    loading: true,
    selectedConversation: null,
    sidebarVisible: false,
    composeVisible: false,
    fabVisible: true,
    currentScreen: 'inbox',
  });

  // Animation refs
  const fadeAnim = useState(new Animated.Value(0))[0];
  const fabAnim = useState(new Animated.Value(1))[0];

  // Mock data for conversations
  const mockConversations = [
    {
      id: '1',
      contactName: 'John Doe',
      phoneNumber: '+1234567890',
      lastMessage: 'Hey, how are you doing?',
      time: '10:30 AM',
      unread: true,
      messages: [
        {id: '1', text: 'Hey there!', time: '10:20 AM', incoming: true},
        {
          id: '2',
          text: 'Hey, how are you doing?',
          time: '10:30 AM',
          incoming: false,
        },
      ],
    },
    {
      id: '2',
      contactName: 'Jane Smith',
      phoneNumber: '+1987654321',
      lastMessage: 'Meeting at 2pm tomorrow',
      time: 'Yesterday',
      unread: false,
      messages: [
        {
          id: '1',
          text: 'Hi Jane, about tomorrow...',
          time: 'Yesterday',
          incoming: false,
        },
        {
          id: '2',
          text: 'Meeting at 2pm tomorrow',
          time: 'Yesterday',
          incoming: true,
        },
      ],
    },
  ];

  useEffect(() => {
    // Simulate loading conversations
    const timer = setTimeout(() => {
      setState(prev => ({
        ...prev,
        conversations: mockConversations,
        loading: false,
      }));
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Animation handlers
  const showComposeScreen = () => {
    Animated.parallel([
      Animated.timing(fabAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setState(prev => ({...prev, composeVisible: true, fabVisible: false}));
    });
  };

  const hideComposeScreen = () => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(fabAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setState(prev => ({...prev, composeVisible: false, fabVisible: true}));
    });
  };

  // Action handlers
  const handleScreenChange = screen => {
    setState(prev => ({...prev, currentScreen: screen, sidebarVisible: false}));
  };

  const handleSendMessage = (recipient, message) => {
    console.log('Sending to:', recipient, 'Message:', message);
    hideComposeScreen();
  };

  const handleConversationPress = conversation => {
    setState(prev => ({...prev, selectedConversation: conversation}));
  };

  const handleBackToInbox = () => {
    setState(prev => ({...prev, selectedConversation: null}));
  };

  const toggleSidebar = () => {
    setState(prev => ({...prev, sidebarVisible: !prev.sidebarVisible}));
  };

  // Render different screens based on state
  if (state.currentScreen === 'dashboard') {
    return <Dashboard onBack={() => handleScreenChange('inbox')} />;
  }

  if (state.loading) {
    return (
      <View style={[styles.container, styles.emptyContainer]}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  if (state.selectedConversation && state.currentScreen === 'inbox') {
    return (
      <ConversationScreen
        conversation={state.selectedConversation}
        onBack={handleBackToInbox}
      />
    );
  }

  // Main inbox render
  return (
    <View style={styles.container}>
      <SidebarMenu
        visible={state.sidebarVisible}
        onClose={() => toggleSidebar()}
        setCurrentScreen={handleScreenChange}
        currentScreen={state.currentScreen}
      />

      <View style={styles.header}>
        <TouchableOpacity onPress={toggleSidebar}>
          <Text style={{color: colors.textPrimary}}>☰</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Messages</Text>
        <TouchableOpacity
          onPress={() => handleScreenChange('dashboard')}
          activeOpacity={0.7}>
          <LinearGradient
            colors={['#3A4ED5', '#8D3AC7']}
            style={styles.gradientButton}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}>
            <Text style={styles.gradientButtonText}>Go to Dashboard</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>

      {state.conversations.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No messages</Text>
        </View>
      ) : (
        <FlatList
          style={styles.listContainer}
          data={state.conversations}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <TouchableOpacity
              style={inboxItemStyles.container}
              onPress={() => handleConversationPress(item)}>
              <View style={inboxItemStyles.avatar}>
                <Text style={inboxItemStyles.avatarText}>
                  {item.contactName.charAt(0)}
                </Text>
              </View>
              <View style={inboxItemStyles.content}>
                <View style={inboxItemStyles.topLine}>
                  <Text
                    style={[
                      inboxItemStyles.name,
                      item.unread && inboxItemStyles.unreadName,
                    ]}>
                    {item.contactName}
                  </Text>
                  <Text style={inboxItemStyles.time}>{item.time}</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text
                    style={[
                      inboxItemStyles.preview,
                      item.unread && inboxItemStyles.unreadPreview,
                    ]}
                    numberOfLines={1}>
                    {item.lastMessage}
                  </Text>
                  {item.unread && (
                    <View style={inboxItemStyles.unreadIndicator} />
                  )}
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      )}

      {state.fabVisible && (
        <Animated.View
          style={[
            styles.fab,
            {
              opacity: fabAnim,
              transform: [
                {
                  scale: fabAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0.5, 1],
                  }),
                },
              ],
            },
          ]}>
          <TouchableOpacity onPress={showComposeScreen}>
            <Text style={styles.fabIcon}>+</Text>
          </TouchableOpacity>
        </Animated.View>
      )}

      {state.composeVisible && (
        <Animated.View
          style={[StyleSheet.absoluteFill, {opacity: fadeAnim, zIndex: 10}]}>
          <ComposeScreen
            onSend={handleSendMessage}
            onCancel={hideComposeScreen}
            conversation={state.selectedConversation}
          />
        </Animated.View>
      )}
    </View>
  );
};

export default InboxScreen;

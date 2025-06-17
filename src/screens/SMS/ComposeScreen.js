import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Keyboard,
} from 'react-native';
import {colors} from './styles';
import MessageBubble from './MessageBubble';

const ComposeScreen = ({onSend, onCancel}) => {
  // Screen states: 'contacts' | 'compose' | 'message'
  const [screen, setScreen] = useState('contacts');
  const [recipient, setRecipient] = useState('');
  const [message, setMessage] = useState('');
  const [contacts] = useState([
    {id: '1', name: 'John Doe', phone: '+1234567890', avatar: 'JD'},
    {id: '2', name: 'Jane Smith', phone: '+1987654321', avatar: 'JS'},
    {id: '3', name: 'Mike Johnson', phone: '+1122334455', avatar: 'MJ'},
    {id: '4', name: 'Sarah Williams', phone: '+5566778899', avatar: 'SW'},
  ]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [messages, setMessages] = useState([]);
  const flatListRef = useRef(null);

  const findContactByPhone = phone => {
    return contacts.find(contact => contact.phone === phone);
  };

  const handleSend = () => {
    if (recipient.trim() === '' || message.trim() === '') return;

    const newMsg = {
      id: Date.now().toString(),
      text: message,
      time: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
      incoming: false,
    };

    setMessages([...messages, newMsg]);
    setMessage('');

    // if (onSend) {
    //   onSend(recipient, message);
    // }

    setTimeout(() => {
      flatListRef.current?.scrollToEnd({animated: true});
    }, 100);
  };

  const handleContactSelect = contact => {
    setRecipient(contact.phone);
    setScreen('compose');
    Keyboard.dismiss();
  };

  const handleSearchSubmit = () => {
    if (recipient.trim().length > 0) {
      setScreen('compose');
      Keyboard.dismiss();
    }
  };

  const handleRecipientChange = text => {
    setRecipient(text);

    if (text.length > 0) {
      const filtered = contacts.filter(
        contact =>
          contact.name.toLowerCase().includes(text.toLowerCase()) ||
          contact.phone.includes(text),
      );
      setFilteredContacts(filtered);
    } else {
      setFilteredContacts([]);
    }
  };

  const handleBackToContacts = () => {
    setScreen('contacts');
    setMessage('');
  };

  const handleCancelToInbox = () => {
    onCancel();
  };

  // Contacts Screen
  if (screen === 'contacts') {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleCancelToInbox}>
            <Text style={{color: colors.textPrimary, fontSize: 24}}>←</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>New Message</Text>
          <View style={styles.headerButton}></View> {/* Spacer */}
        </View>

        <View style={styles.recipientContainer}>
          <Text style={styles.label}>To:</Text>
          <TextInput
            style={styles.recipientInput}
            value={recipient}
            onChangeText={handleRecipientChange}
            onSubmitEditing={handleSearchSubmit}
            placeholder="Enter phone number or name"
            placeholderTextColor={colors.textSecondary}
            keyboardType="default"
            autoFocus={true}
            returnKeyType="search"
          />
          {recipient.length > 0 && (
            <TouchableOpacity
              onPress={handleSearchSubmit}
              style={styles.searchButton}>
              <Text style={styles.searchButtonText}>Search</Text>
            </TouchableOpacity>
          )}
        </View>

        <ScrollView
          style={styles.contactsContainer}
          keyboardShouldPersistTaps="handled">
          {recipient === '' && (
            <Text style={styles.sectionTitle}>Frequent contacts</Text>
          )}
          {(recipient ? filteredContacts : contacts).map(item => (
            <TouchableOpacity
              key={item.id}
              style={styles.contactItem}
              onPress={() => handleContactSelect(item)}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>{item.avatar}</Text>
              </View>
              <View style={styles.contactInfo}>
                <Text style={styles.contactName}>{item.name}</Text>
                <Text style={styles.contactPhone}>{item.phone}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );
  }

  // Compose Screen (after contact selection)
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackToContacts}>
          <Text style={{color: colors.textPrimary, fontSize: 28}}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitleRecipient}>
          {(() => {
            const contact = findContactByPhone(recipient);
            return contact ? `${contact.name} (${recipient})` : recipient;
          })()}
        </Text>
        {/* <TouchableOpacity
          onPress={handleCancelToInbox}
          style={styles.headerButton}>
          <Text style={styles.headerButtonText}>Cancel</Text>
        </TouchableOpacity> */}
      </View>

      <FlatList
        ref={flatListRef}
        style={styles.messagesContainer}
        contentContainerStyle={styles.messagesContent}
        data={messages}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <MessageBubble
            message={item.text}
            isIncoming={item.incoming}
            time={item.time}
          />
        )}
        onContentSizeChange={() =>
          flatListRef.current?.scrollToEnd({animated: true})
        }
      />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoidingView}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={message}
            onChangeText={setMessage}
            placeholder="Type your message here..."
            placeholderTextColor={colors.textSecondary}
            multiline
            numberOfLines={4}
          />
          <TouchableOpacity
            style={[styles.sendButton, !message && styles.disabledButton]}
            onPress={handleSend}
            disabled={!message}>
            <Text style={styles.sendButtonText}>Send</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundDark,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: colors.backgroundLight,
    borderBottomWidth: 1,
    borderBottomColor: colors.divider,
    marginTop: 55,
  },
  // headerButton: {
  //   padding: 8,
  // },
  // headerButtonText: {
  //   color: colors.primary,
  //   fontSize: 16,
  // },
  headerTitle: {
    marginLeft: 150,
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.textPrimary,
  },
  headerTitleRecipient: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.textPrimary,
    // marginRight: 50,
  },
  disabledButton: {
    opacity: 0.5,
  },
  recipientContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: colors.backgroundLight,
    borderBottomWidth: 1,
    borderBottomColor: colors.divider,
  },
  label: {
    marginRight: 10,
    color: colors.textPrimary,
  },
  recipientInput: {
    flex: 1,
    color: colors.textPrimary,
    fontSize: 16,
  },
  searchButton: {
    marginLeft: 10,
    padding: 8,
    backgroundColor: colors.primary,
    borderRadius: 4,
  },
  searchButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  contactsContainer: {
    flex: 1,
    backgroundColor: colors.background,
  },
  sectionTitle: {
    padding: 15,
    color: colors.textSecondary,
    fontSize: 14,
    backgroundColor: colors.backgroundLight,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: colors.divider,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  avatarText: {
    color: 'white',
    fontWeight: 'bold',
  },
  contactInfo: {
    flex: 1,
  },
  contactName: {
    fontSize: 16,
    color: colors.textPrimary,
    marginBottom: 3,
  },
  contactPhone: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  messagesContainer: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: colors.backgroundDark,
  },
  messagesContent: {
    paddingVertical: 16,
  },
  keyboardAvoidingView: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    backgroundColor: colors.backgroundLight,
    borderTopWidth: 1,
    borderTopColor: colors.divider,
  },
  input: {
    flex: 1,
    backgroundColor: colors.backgroundDark,
    color: colors.textPrimary,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 8,
    maxHeight: 120,
  },
  sendButton: {
    backgroundColor: colors.primary,
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  sendButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ComposeScreen;

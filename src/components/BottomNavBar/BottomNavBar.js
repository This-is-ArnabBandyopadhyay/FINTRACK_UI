

import React from 'react';
import {View, TouchableOpacity, Text, Animated} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './BottomNavBarStyles';
//import Transactions from '../Transactions/Transactions';

const BottomNavBar = ({onTabPress,currentScreen,onScreenChange}) => {
  //const [activeTab, setActiveTab] = useState('home');
  //const [showTransactions, setShowTransactions] = useState(false);
  const scaleValues = {
    home: new Animated.Value(1),
    transactions: new Animated.Value(1),
    upload: new Animated.Value(1),
    stats: new Animated.Value(1),
    profile: new Animated.Value(1),
  };

  const navItems = [
    {
      id: 'home',
      iconName: 'home-outline',
      activeIconName: 'home',
      label: 'Home',
      badgeCount: 0,
    },
    {
      id: 'transactions',
      iconName: 'swap-horizontal',
      activeIconName: 'swap-horizontal-bold',
      label: 'Transactions',
      badgeCount: 3,
    },
    {
      id: 'upload',
      iconName: 'plus-circle-outline',
      activeIconName: 'plus-circle',
      label: '',
      badgeCount: 0,
      isCenter: true,
    },
    {
      id: 'stats',
      iconName: 'chart-bar',
      activeIconName: 'chart-bar',
      label: 'SmartInsight',
      badgeCount: 0,
    },
    {
      id: 'profile',
      iconName: 'account-outline',
      activeIconName: 'account',
      label: 'Profile',
      badgeCount: 1,
    },
  ];

  const handlePress = item => {
   
    animateIcon(item.id);
    onScreenChange(item.id);

     if (onTabPress) {
      onTabPress(item.id);
    }
  };


  const animateIcon = tabId => {
    Animated.sequence([
      Animated.timing(scaleValues[tabId], {
        toValue: 0.8,
        duration: 50,
        useNativeDriver: true,
      }),
      Animated.timing(scaleValues[tabId], {
        toValue: 1.2,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleValues[tabId], {
        toValue: 1,
        duration: 50,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <>
      <View style={styles.container}>
        {navItems.map(item => (
          <TouchableOpacity
            key={item.id}
            style={[styles.tabButton, item.isCenter && styles.centerButton]}
            onPress={() => handlePress(item)}
            activeOpacity={0.7}>
            <View style={styles.iconContainer}>
              <Animated.View
                style={{transform: [{scale: scaleValues[item.id]}]}}>
                <Icon
                  name={
                    currentScreen === item.id ? item.activeIconName : item.iconName
                  }
                  size={item.isCenter ? 32 : 24}
                  style={[
                    styles.icon,
                    currentScreen === item.id && styles.activeIcon,
                    item.isCenter && styles.centerIcon,
                  ]}
                />
              </Animated.View>
              {item.badgeCount > 0 && (
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>
                    {item.badgeCount > 9 ? '9+' : item.badgeCount}
                  </Text>
                </View>
              )}
            </View>
            {!!item.label && (
              <Text
                style={[
                  styles.label,
                  currentScreen === item.id && styles.activeLabel,
                ]}>
                {item.label}
              </Text>
            )}
          </TouchableOpacity>
        ))}
      </View>
    </>
  );
};

export default BottomNavBar;





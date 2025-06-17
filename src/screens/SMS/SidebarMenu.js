import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {View, Text, TouchableOpacity, StyleSheet, Animated} from 'react-native';
import {colors} from './styles';

const SidebarMenu = ({visible, onClose,setCurrentScreen}) => {
  const [animation] = useState(new Animated.Value(0));
  

  React.useEffect(() => {
    Animated.timing(animation, {
      toValue: visible ? 1 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [visible, animation]);

  const translateX = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [-300, 0],
  });

  const overlayOpacity = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 0.5],
  });

  if (!visible && animation._value === 0) {
    return null;
  }

  const handleMenuItemPress = menuItem => {

    onClose();
    if (menuItem === 'dashboard')
    {
      setCurrentScreen('dashboard');
    }
    else {
      console.log(`Selected menu item: ${menuItem}`);
    }

  };

  return (
    <>
      <Animated.View style={[styles.overlay, {opacity: overlayOpacity}]}>
        <TouchableOpacity
          style={StyleSheet.absoluteFill}
          onPress={onClose}
          activeOpacity={1}
        />
      </Animated.View>

      <Animated.View style={[styles.sidebar, {transform: [{translateX}]}]}>
        <View style={styles.sidebarHeader}>
          <Text style={styles.sidebarTitle}>Fintrack SMS</Text>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>×</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.menuItems}>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => handleMenuItemPress('Inbox')}>
            <Text style={styles.menuItemText}>Inbox</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => handleMenuItemPress('Starred')}>
            <Text style={styles.menuItemText}>Starred</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => handleMenuItemPress('Sent')}>
            <Text style={styles.menuItemText}>Sent</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => handleMenuItemPress('Drafts')}>
            <Text style={styles.menuItemText}>Drafts</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => handleMenuItemPress('Trash')}>
            <Text style={styles.menuItemText}>Trash</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => handleMenuItemPress('Settings')}>
            <Text style={styles.menuItemText}>Settings</Text>
          </TouchableOpacity>
        </View>

        {/* Add this fixed gradient button at the bottom */}
        {/* <View style={styles.bottomButtonContainer}>
          <TouchableOpacity
            onPress={() => handleMenuItemPress('dashboard')}
            activeOpacity={0.7}>
            <LinearGradient
              colors={['#3A4ED5', '#8D3AC7']}
              style={styles.gradientButton}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}>
              <Text style={styles.gradientButtonText}>Go to Dashboard</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View> */}
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'black',
  },
  sidebar: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    width: 230,
    backgroundColor: colors.backgroundLight,
    zIndex: 100,
    elevation: 5,
  },
  sidebarHeader: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.divider,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sidebarTitle: {
    color: colors.textPrimary,
    fontSize: 20,
    fontWeight: 'bold',
  },
  menuItems: {
    paddingVertical: 10,
  },
  menuItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: colors.divider,
  },
  menuItemText: {
    color: colors.textPrimary,
    fontSize: 16,
  },
  closeButton: {
    backgroundColor: '#333',
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 20,
    lineHeight: 20,
  },
  // bottomButtonContainer: {
  //   position: 'absolute',
  //   bottom: 0,
  //   left: 0,
  //   right: 0,
  //   padding: 20,
  //   backgroundColor: colors.backgroundLight, // Match your sidebar background
  // },
  // gradientButton: {
  //   padding: 15,
  //   borderRadius: 8,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   elevation: 3,
  //   shadowColor: '#000',
  //   shadowOffset: {width: 0, height: 2},
  //   shadowOpacity: 0.3,
  //   shadowRadius: 3,
  // },
  // gradientButtonText: {
  //   color: 'white',
  //   fontSize: 16,
  //   fontWeight: 'bold',
  // },
});

export default SidebarMenu;

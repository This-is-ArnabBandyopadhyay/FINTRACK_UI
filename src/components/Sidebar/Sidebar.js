//src/components/Sidebar/Sidebar.js
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {View, Text, TouchableOpacity, Animated} from 'react-native';
import styles from './SidebarStyles';

const Sidebar = ({isOpen, closeSidebar, animatedValue, onScreenChange,onBack}) => {
  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-300, 0],
  });

  const pointerEvents = isOpen ? 'auto' : 'none';

  const handleMenuItemPress = (screen) => { 
    onScreenChange(screen);
    closeSidebar();
  }

  return (
    <Animated.View
      style={[
        styles.sidebarContainer,
        {transform: [{translateX}]},
        pointerEvents,
      ]}>
      <View style={styles.sidebarHeader}>
        <Text style={styles.sidebarTitle}>Fintrack Menu</Text>
        <TouchableOpacity onPress={closeSidebar} style={styles.closeButton}>
          <Text style={styles.closeButtonText}>×</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => handleMenuItemPress('dashboard')}>
        <Text style={styles.menuText}>📊 Dashboard</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => handleMenuItemPress('transactions')}>
        <Text style={styles.menuText}>💵 Transactions</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => handleMenuItemPress('stats')}>
        <Text style={styles.menuText}>📈 Analytics / Smart Insights</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem}>
        <Text style={styles.menuText}>🎯 Goals</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem}>
        <Text style={styles.menuText}>⚙ Settings</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Fintrack Pro v1.0</Text>
      </View>

      {/* Add this fixed gradient button at the bottom */}
      {/* <View style={styles.bottomButtonContainer}>
        <TouchableOpacity onPress={() => onBack()} activeOpacity={0.7}>
          <LinearGradient
            colors={['#FF7B25', '#FF4D6D']}
            style={styles.gradientButton}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}>
            <Text style={styles.gradientButtonText}>Go to Messages</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View> */}
    </Animated.View>
  );
};

export default Sidebar;



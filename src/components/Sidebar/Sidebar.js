// src/components/Sidebar/Sidebar.js
import React from 'react';
import {View, Text, TouchableOpacity, Animated} from 'react-native';
import styles from './SidebarStyles';

const Sidebar = ({ isOpen, closeSidebar, animatedValue }) => {
  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-300, 0],
  });

  const pointerEvents = isOpen ? 'auto' : 'none';

  return (
    <Animated.View
      style={[styles.sidebarContainer, { transform: [{ translateX }]}, pointerEvents,]}>
      <View style={styles.sidebarHeader}>
        <Text style={styles.sidebarTitle}>Fintrack Menu</Text>
        <TouchableOpacity onPress={closeSidebar} style={styles.closeButton}>
          <Text style={styles.closeButtonText}>×</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.menuItem}>
        <Text style={styles.menuText}>📊 Dashboard</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem}>
        <Text style={styles.menuText}>💵 Transactions</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem}>
        <Text style={styles.menuText}>📈 Analytics</Text>
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
    </Animated.View>
  );
};

export default Sidebar;

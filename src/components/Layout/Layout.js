// src/components/Layout/Layout.js
import React, {useState, useRef} from 'react';
import {
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Sidebar from '../Sidebar/Sidebar';
import BottomNavBar from '../BottomNavBar/BottomNavBar';
import styles from './LayoutStyles';


const Layout = ({children, currentScreen, onScreenChange}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const animatedValue = useRef(new Animated.Value(0)).current;

  const toggleSidebar = () => {
    if (sidebarOpen) {
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start(() => setSidebarOpen(false));
    } else {
      setSidebarOpen(true);
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };

  const closeSidebar = () => {
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setSidebarOpen(false));
  };

  const handleScreenChange = (screen) => {
    onScreenChange(screen);
    setSidebarOpen(false); // Close sidebar when changing screen
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#0a1f3a" />

      {sidebarOpen && (
        <TouchableOpacity
          style={styles.overlay}
          activeOpacity={1}
          onPress={closeSidebar}
        />
      )}

      <Sidebar
        isOpen={sidebarOpen}
        closeSidebar={closeSidebar}
        onClose={() => setSidebarOpen(false)}
        animatedValue={animatedValue}
        currentScreen={currentScreen}
        onScreenChange={onScreenChange}
      />

      <View style={styles.mainContainer}>
        <TouchableOpacity onPress={toggleSidebar} style={styles.menuButton}>
          <Icon name="menu" size={25} color="#fff" />
        </TouchableOpacity>

        {children}

        <View style={styles.bottomNavContainer}>
          <BottomNavBar
            currentScreen={currentScreen}
            onScreenChange={handleScreenChange}
            onMenuPress={() => setSidebarOpen(!sidebarOpen)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Layout ;



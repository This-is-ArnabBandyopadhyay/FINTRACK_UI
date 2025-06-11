// Description: Main entry point for the FintrackApp UI, integrating the Dashboard screen and setting up the status bar.

import React from 'react';
import Dashboard from './src/screens/Dashboard';
import { StatusBar, LogBox } from 'react-native';

LogBox.ignoreLogs(['Animated:`useNativeDriver` was not specified']);

const App = () => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#0a1f3a" // Matches your dashboard header
      />
      <Dashboard />
    </>
  );
};

export default App;

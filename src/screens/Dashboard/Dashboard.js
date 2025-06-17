// src/screens/Dashboard.js

import React, {useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import Layout from '../../components/Layout/Layout';
import styles from './DashboardStyles';
import Transactions from '../Transactions/Transactions';
import SmartInsights from '../SmartInsights/SmartInsights';

const Dashboard = ({onBack}) => {
  // const [sidebarOpen, setSidebarOpen] = useState(false);
  // const animatedValue = useRef(new Animated.Value(0)).current;
  const [currentScreen, setCurrentScreen] = useState('dashboard');

  const handleScreenChange = screen => {
    setCurrentScreen(screen);
  };

  const handleBackFromTransactions = () => {
    setCurrentScreen('home');
  };

  const handleBackFromSmartInsights = () => {
    setCurrentScreen('home');
  };

  return (
    <Layout currentScreen={currentScreen} onScreenChange={handleScreenChange} onBack={onBack}>
      {(currentScreen === 'dashboard' || currentScreen === 'home') && (
        <ScrollView contentContainerStyle={styles.scrollContent}>
          {/* Header with Gradient */}

          <LinearGradient
            colors={['#2657eb', '#de6161']}
            style={styles.header}
            start={{x: 0, y: 0}}
            end={{ x: 1, y: 1 }}>
            <Text style={styles.headerText}>🚀 Fintrack Dashboard</Text>
            <Text style={styles.subHeaderText}>Your AI Finance Assistant</Text>
          </LinearGradient>

          {/* Cards Section */}
          <View style={styles.cardsContainer}>
            {/* Total Balance Card */}
            <LinearGradient
              // colors={['#1e3c72', '#2a5298']}
              //colors={['#ff7e5f', '#feb47b']}
              //colors={['#00c6ff', '#0072ff']}
              colors={['#ff6a00', '#ee0979']}
              // colors={['#FF9900', '#1ABC9C']}
              style={styles.card}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}>
              <Text style={styles.label}>Total Balance</Text>
              <Text style={styles.value}>₹ 1,25,300</Text>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>View Report</Text>
                <Icon name="chevron-right" size={20} color="#fff" />
              </TouchableOpacity>
            </LinearGradient>

            {/* Monthly Spend Card */}
            <LinearGradient
              colors={['#FF9900', '#1ABC9C']}
              style={styles.card}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}>
              <Text style={styles.label}>Monthly Spend</Text>
              <Text style={styles.value}>₹ 25,400</Text>
              <TouchableOpacity style={[styles.button, styles.warningButton]}>
                <Text style={styles.buttonText}>Track Spending</Text>
                <Icon name="chart-line" size={20} color="#fff" />
              </TouchableOpacity>
            </LinearGradient>

            {/* Categorized Expenses */}
            <LinearGradient
              colors={['#11998e', '#38ef7d']}
              style={styles.card}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}>
              <Text style={styles.label}>Categorized Summary</Text>
              <View style={styles.infoItem}>
                <Icon name="food" size={18} color="#fff" />
                <Text style={styles.info}> Food: ₹ 7,000</Text>
              </View>
              <View style={styles.infoItem}>
                <Icon name="car" size={18} color="#fff" />
                <Text style={styles.info}> Travel: ₹ 4,500</Text>
              </View>
              <View style={styles.infoItem}>
                <Icon name="lightbulb" size={18} color="#fff" />
                <Text style={styles.info}> Bills: ₹ 5,000</Text>
              </View>
            </LinearGradient>

            {/* AI Insights */}
            <LinearGradient
              colors={['#f12711', '#f5af19']}
              style={styles.card}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}>
              <Text style={styles.label}>AI Insights</Text>
              <View style={styles.infoItem}>
                <Icon name="alert" size={18} color="#fff" />
                <Text style={styles.info}>
                  {' '}
                  3 Unnecessary expenses detected
                </Text>
              </View>
              <View style={styles.infoItem}>
                <Icon name="check" size={18} color="#fff" />
                <Text style={styles.info}>
                  {' '}
                  You saved 10% more than last month
                </Text>
              </View>
            </LinearGradient>

            {/* Data Sync */}
            <LinearGradient
              colors={['#4776E6', '#8E54E9']}
              style={styles.card}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}>
              <Text style={styles.label}>Data Sync</Text>
              <View style={styles.infoItem}>
                <Icon name="email-outline" size={18} color="#fff" />
                <Text style={styles.info}> Email: Synced</Text>
              </View>
              <View style={styles.infoItem}>
                <Icon name="message-text-outline" size={18} color="#fff" />
                <Text style={styles.info}> SMS: Synced</Text>
              </View>
              <View style={styles.infoItem}>
                <Icon name="bank-transfer" size={18} color="#fff" />
                <Text style={styles.info}> UPI: Synced</Text>
              </View>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Sync Now</Text>
                <Icon name="sync" size={20} color="#fff" />
              </TouchableOpacity>
            </LinearGradient>

            {/* Blockchain Info */}
            <LinearGradient
              colors={['#4da0b0','#f44336']}
              style={styles.card}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}>
              <Text style={styles.label}>Blockchain Records</Text>
              <View style={styles.infoItem}>
                <Icon name="file-document" size={18} color="#fff" />
                <Text style={styles.info}> Txn1: 4f5g...3ad</Text>
              </View>
              <View style={styles.infoItem}>
                <Icon name="file-document" size={18} color="#fff" />
                <Text style={styles.info}> Txn2: 2d6h...2be</Text>
              </View>
              <View style={styles.infoItem}>
                <Icon name="file-document" size={18} color="#fff" />
                <Text style={styles.info}> Txn3: 7ab9...8dc</Text>
              </View>
            </LinearGradient>
          </View>
        </ScrollView>
      )}
      {currentScreen === 'transactions' && (
        <Transactions onBack={handleBackFromTransactions} />
      )}
      {currentScreen === 'stats' && (
        <SmartInsights onBack={handleBackFromSmartInsights} />
      )}
    </Layout>
  );
};

export default Dashboard;



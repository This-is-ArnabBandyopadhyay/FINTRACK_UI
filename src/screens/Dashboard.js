// // src/screens/Dashboard.js
// import React from 'react';
// import {
//   View,
//   Text,
//   ScrollView,
//   StyleSheet,
//   StatusBar,
//   TouchableOpacity,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import LinearGradient from 'react-native-linear-gradient';

// const Dashboard = () => {
//   return (
//     <ScrollView style={styles.container}>
//       <StatusBar barStyle="light-content" />

//       {/* Header with Gradient */}
//       <LinearGradient colors={['#1e3c72', '#2a5298']} style={styles.header}>
//         <Text style={styles.headerText}>🚀 Fintrack Dashboard</Text>
//         <Text style={styles.subHeaderText}>Your AI Finance Assistant</Text>
//       </LinearGradient>

//       {/* Total Balance Card */}
//       <View style={styles.card}>
//         <Text style={styles.label}>Total Balance</Text>
//         <Text style={styles.value}>₹ 1,25,300</Text>
//         <TouchableOpacity style={styles.button}>
//           <Text style={styles.buttonText}>View Report</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Monthly Spend Card */}
//       <View style={styles.card}>
//         <Text style={styles.label}>Monthly Spend</Text>
//         <Text style={styles.value}>₹ 25,400</Text>
//         <TouchableOpacity style={[styles.button, styles.warningButton]}>
//           <Text style={styles.buttonText}>Track Spending</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Categorized Expenses */}
//       <View style={styles.card}>
//         <Text style={styles.label}>Categorized Summary</Text>
//         <Text style={styles.info}>🍕 Food: ₹ 7,000</Text>
//         <Text style={styles.info}>🚗 Travel: ₹ 4,500</Text>
//         <Text style={styles.info}>💡 Bills: ₹ 5,000</Text>
//       </View>

//       {/* AI Insights */}
//       <View style={styles.card}>
//         <Text style={styles.label}>AI Insights</Text>
//         <Text style={styles.info}>⚠ 3 Unnecessary expenses detected</Text>
//         <Text style={styles.info}>✅ You saved 10% more than last month</Text>
//       </View>

//       {/* Data Sync */}
//       <View style={styles.card}>
//         <Text style={styles.label}>Data Sync</Text>
//         <Text style={styles.info}>
//           <Icon name="email-outline" size={18} color="#90caf9" /> Email: Synced
//         </Text>
//         <Text style={styles.info}>
//           <Icon name="message-text-outline" size={18} color="#90caf9" /> SMS:
//           Synced
//         </Text>
//         <Text style={styles.info}>
//           <Icon name="bank-transfer" size={18} color="#90caf9" /> UPI: Synced
//         </Text>

//         <TouchableOpacity style={styles.button}>
//           <Text style={styles.buttonText}>Sync Now</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Blockchain Info */}
//       <View style={styles.card}>
//         <Text style={styles.label}>Blockchain Records</Text>
//         <Text style={styles.info}>🧾 Txn1: 4f5g...3ad</Text>
//         <Text style={styles.info}>🧾 Txn2: 2d6h...2be</Text>
//         <Text style={styles.info}>🧾 Txn3: 7ab9...8dc</Text>
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#121212',
//   },
//   header: {
//     padding: 24,
//     paddingTop: 60,
//     borderBottomLeftRadius: 24,
//     borderBottomRightRadius: 24,
//     marginBottom: 20,
//     elevation: 8,
//   },
//   headerText: {
//     fontSize: 26,
//     fontWeight: 'bold',
//     color: '#ffffff',
//     textAlign: 'center',
//   },
//   subHeaderText: {
//     fontSize: 16,
//     color: '#bbdefb',
//     textAlign: 'center',
//     marginTop: 4,
//   },
//   card: {
//     backgroundColor: '#1f1f1f',
//     padding: 18,
//     borderRadius: 16,
//     marginHorizontal: 16,
//     marginBottom: 16,
//     shadowColor: '#000',
//     shadowOpacity: 0.2,
//     shadowRadius: 6,
//     shadowOffset: {width: 0, height: 2},
//     elevation: 5,
//   },
//   label: {
//     fontSize: 18,
//     color: '#90caf9',
//     fontWeight: '600',
//     marginBottom: 6,
//   },
//   value: {
//     fontSize: 24,
//     color: '#ffffff',
//     fontWeight: 'bold',
//   },
//   info: {
//     fontSize: 16,
//     color: '#cccccc',
//     marginTop: 6,
//   },
//   button: {
//     marginTop: 14,
//     backgroundColor: '#2196f3',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 8,
//     alignSelf: 'flex-start',
//   },
//   buttonText: {
//     color: '#ffffff',
//     fontWeight: '600',
//   },
//   warningButton: {
//     backgroundColor: '#ff7043',
//   },
// });

// export default Dashboard;

////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

// src/screens/Dashboard.js

import React, {useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import Layout from '../components/Layout/Layout';
import styles from './DashboardStyles';

const Dashboard = () => {
  // const [sidebarOpen, setSidebarOpen] = useState(false);
  // const animatedValue = useRef(new Animated.Value(0)).current;
  const [currentScreen, setCurrentScreen] = useState('dashboard');

  return (
    <Layout currentScreen={currentScreen} onTabPress={setCurrentScreen}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header with Gradient */}

        <LinearGradient
          colors={['#0a1f3a', '#1a3a6a']}
          style={styles.header}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}>
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
              <Text style={styles.info}> 3 Unnecessary expenses detected</Text>
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
            colors={['#0f2027', '#203a43', '#2c5364']}
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
    </Layout>
  );
};

export default Dashboard;

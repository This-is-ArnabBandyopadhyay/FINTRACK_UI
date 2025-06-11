

import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Animated,
} from 'react-native';
import TransactionsStyles from './TransactionsStyle';
import * as Progress from 'react-native-progress';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
//import Dashboard from '../../screens/Dashboard';


const {width} = Dimensions.get('window');

// Dummy data with more realistic transactions
const transactions = [
  // ... (keep your existing transaction data)
  {
    id: 1,
    category: 'Grocery',
    amount: -85.2,
    date: 'Today, 10:30 AM',
    type: 'expense',
    iconColor: '#FF9F43',
  },
  {
    id: 2,
    category: 'Salary',
    amount: 3250.0,
    date: 'Yesterday, 9:00 AM',
    type: 'income',
    iconColor: '#4CD964',
  },
  {
    id: 3,
    category: 'Dining',
    amount: -62.5,
    date: 'Yesterday, 7:45 PM',
    type: 'expense',
    iconColor: '#FF5E5E',
  },
  {
    id: 4,
    category: 'Freelance',
    amount: 450.0,
    date: 'Mar 15, 2:30 PM',
    type: 'income',
    iconColor: '#5AC8FA',
  },
  {
    id: 5,
    category: 'Shopping',
    amount: -129.99,
    date: 'Mar 14, 4:15 PM',
    type: 'expense',
    iconColor: '#AF52DE',
  },
  {
    id: 6,
    category: 'Investment',
    amount: 250.0,
    date: 'Mar 12, 11:20 AM',
    type: 'income',
    iconColor: '#5856D6',
  },
  {
    id: 7,
    category: 'Transport',
    amount: -35.75,
    date: 'Mar 12, 8:30 AM',
    type: 'expense',
    iconColor: '#007AFF',
  },
  {
    id: 8,
    category: 'Bonus',
    amount: 500.0,
    date: 'Mar 10, 3:15 PM',
    type: 'income',
    iconColor: '#34C759',
  },
];

const spendingCategories = [
  // ... (keep your existing category data)
  {name: 'Food', amount: 620, color: '#FF9F43'},
  {name: 'Transport', amount: 280, color: '#5AC8FA'},
  {name: 'Shopping', amount: 450, color: '#AF52DE'},
  {name: 'Entertainment', amount: 220, color: '#FF5E5E'},
  {name: 'Bills', amount: 350, color: '#5856D6'},
];

const weeklyData = [
  // ... (keep your existing weekly data)
  {day: 'Mon', amount: 120, color: '#6C7EE1'},
  {day: 'Tue', amount: 200, color: '#6C7EE1'},
  {day: 'Wed', amount: 90, color: '#6C7EE1'},
  {day: 'Thu', amount: 150, color: '#6C7EE1'},
  {day: 'Fri', amount: 240, color: '#6C7EE1'},
  {day: 'Sat', amount: 80, color: '#6C7EE1'},
  {day: 'Sun', amount: 110, color: '#6C7EE1'},
];

const totalSpending = spendingCategories.reduce(
  (sum, cat) => sum + cat.amount,
  0,
);
 const maxWeeklyAmount = Math.max(...weeklyData.map(item => item.amount));
 const totalBalance = transactions.reduce((sum, t) => sum + t.amount, 0);

const Transactions = ({onClose,onBack}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const scrollViewRef = useRef();

  const handleBack = ()=> {
   
    if (onBack) {
      onBack();
    } else if (onClose) {
      onClose();
    }

  }

  const handleScroll = Animated.event(
    [{nativeEvent: {contentOffset: {x: scrollX}}}],
    {useNativeDriver: false},
  );

  const handlePageChange = event => {
    const pageNumber = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentPage(pageNumber);
  };

  const goToPage = page => {
    scrollViewRef.current?.scrollTo({x: width * page, animated: true});
  };

  return (
    <View style={TransactionsStyles.container}>
      {/* Header with back button*/}

      <View style={TransactionsStyles.header}>
        <TouchableOpacity
          onPress={handleBack}
          style={TransactionsStyles.backButton}>
          <Icon name="arrow-left" size={24} color="#FF9900"  />
        </TouchableOpacity>
        <Text style={TransactionsStyles.headerText}>Financial Dashboard</Text>
        <TouchableOpacity style={TransactionsStyles.filterButton}>
          <Text style={TransactionsStyles.filterText}>Filter</Text>
        </TouchableOpacity>
      </View>

      {/* Main Horizontal Scroll View */}
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        onMomentumScrollEnd={handlePageChange}
        style={TransactionsStyles.mainScrollView}>
        {/* Page 1: Overview */}
        <View style={TransactionsStyles.page}>
          <View style={TransactionsStyles.balanceCard}>
            <Text style={TransactionsStyles.balanceTitle}>Total Balance</Text>
            <Text style={TransactionsStyles.balanceAmount}>
              ${totalBalance.toFixed(2)}
            </Text>
            <Text style={TransactionsStyles.balanceInfo}>
              +5.2% from last month
            </Text>
          </View>

          <View style={TransactionsStyles.visualizationContainer}>
            <Text style={TransactionsStyles.visualizationTitle}>
              Weekly Spending
            </Text>
            <View style={TransactionsStyles.barChart}>
              {weeklyData.map((item, index) => (
                <View key={index} style={{alignItems: 'center'}}>
                  <View
                    style={[
                      TransactionsStyles.bar,
                      {
                        height: (item.amount / maxWeeklyAmount) * 150,
                        backgroundColor: item.color,
                        opacity: 0.8 + index * 0.02,
                      },
                    ]}
                  />
                  <Text style={TransactionsStyles.barLabel}>{item.day}</Text>
                </View>
              ))}
            </View>

            <View style={TransactionsStyles.statsContainer}>
              <View style={TransactionsStyles.statItem}>
                <Text style={TransactionsStyles.statLabel}>Total Spending</Text>
                <Text style={TransactionsStyles.statValue}>$890</Text>
              </View>
              <View style={TransactionsStyles.statItem}>
                <Text style={TransactionsStyles.statLabel}>Highest Day</Text>
                <Text style={TransactionsStyles.statValue}>$240 (Fri)</Text>
              </View>
              <View style={TransactionsStyles.statItem}>
                <Text style={TransactionsStyles.statLabel}>Avg. Daily</Text>
                <Text style={TransactionsStyles.statValue}>$127.14</Text>
              </View>
            </View>
          </View>
        </View>
        {/* Page 2: Categories */}
        <View style={TransactionsStyles.page}>
          <View style={TransactionsStyles.visualizationContainer}>
            <Text style={TransactionsStyles.visualizationTitle}>
              Spending by Category
            </Text>
            <View style={TransactionsStyles.pieChartContainer}>
              <Progress.Pie
                progress={0.7}
                size={200}
                color={spendingCategories[0].color}
                unfilledColor="#253055"
                borderWidth={0}
                thickness={14}
              />
            </View>
            <View style={TransactionsStyles.categoryList}>
              {spendingCategories.map((category, index) => (
                <View key={index} style={TransactionsStyles.categoryItem}>
                  <View
                    style={[
                      TransactionsStyles.categoryColor,
                      {backgroundColor: category.color},
                    ]}
                  />
                  <Text style={TransactionsStyles.categoryText}>
                    {category.name}
                  </Text>
                  <Text style={TransactionsStyles.categoryAmount}>
                    ${category.amount} (
                    {((category.amount / totalSpending) * 100).toFixed(0)}%)
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </View>
        // {/* Page 3: Transactions */}
        <View style={TransactionsStyles.page}>
          <View style={TransactionsStyles.visualizationContainer}>
            <Text style={TransactionsStyles.visualizationTitle}>
              Recent Transactions
            </Text>
            <ScrollView
              style={TransactionsStyles.transactionsContainer}
              showsVerticalScrollIndicator={false}>
              {transactions.map(transaction => (
                <View
                  key={transaction.id}
                  style={TransactionsStyles.transactionItem}>
                  <View style={TransactionsStyles.transactionLeft}>
                    <View
                      style={[
                        TransactionsStyles.transactionIcon,
                        {backgroundColor: transaction.iconColor},
                      ]}>
                      <Text
                        style={{
                          color: '#FFFFFF',
                          fontWeight: 'bold',
                          fontSize: 16,
                        }}>
                        {transaction.category.charAt(0)}
                      </Text>
                    </View>
                    <View style={TransactionsStyles.transactionDetails}>
                      <Text style={TransactionsStyles.transactionCategory}>
                        {transaction.category}
                      </Text>
                      <Text style={TransactionsStyles.transactionDate}>
                        {transaction.date}
                      </Text>
                    </View>
                  </View>
                  <Text
                    style={[
                      TransactionsStyles.transactionAmount,
                      transaction.amount > 0
                        ? TransactionsStyles.incomeAmount
                        : TransactionsStyles.expenseAmount,
                    ]}>
                    {transaction.amount > 0 ? '+' : ''}$
                    {Math.abs(transaction.amount).toFixed(2)}
                  </Text>
                </View>
              ))}
            </ScrollView>
          </View>
        </View>
      </ScrollView>

      {/* Pagination */}
      <View style={TransactionsStyles.paginationContainer}>
        {[0, 1, 2].map(i => (
          <TouchableOpacity key={i} onPress={() => goToPage(i)}>
            <View
              style={[
                TransactionsStyles.paginationDot,
                currentPage === i && TransactionsStyles.activeDot,
              ]}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Transactions;
// import React, {useState} from 'react';
// import {View, Text,TouchableOpacity, FlatList} from 'react-native';
// import {MaterialCommunityIcons} from 'react-native-vector-icons/MaterialCommunityIcons';
// import TransactionsStyle from './TransactionsStyle';

// const Transactions = ({onClose}) => {
//   const [activeTab, setActiveTab] = useState('all');

//   // Sample transaction data
//   const transactions = [
//     {
//       id: '1',
//       type: 'sent',
//       amount: 0.5,
//       currency: 'BTC',
//       to: '3FZb...Wef',
//       date: '10:42 AM',
//       status: 'completed',
//     },
//     {
//       id: '2',
//       type: 'received',
//       amount: 1.2,
//       currency: 'ETH',
//       from: '0x892...3a4',
//       date: 'Yesterday',
//       status: 'completed',
//     },
//     {
//       id: '3',
//       type: 'swap',
//       amount: 100,
//       currency: 'USDT',
//       to: 'BUSD',
//       date: 'Apr 15',
//       status: 'pending',
//     },
//     {
//       id: '4',
//       type: 'sent',
//       amount: 0.1,
//       currency: 'BTC',
//       to: '1A1z...dEH',
//       date: 'Apr 12',
//       status: 'completed',
//     },
//     {
//       id: '5',
//       type: 'received',
//       amount: 2.5,
//       currency: 'SOL',
//       from: 'HNXc...3k9',
//       date: 'Apr 10',
//       status: 'completed',
//     },
//   ];

//   const filteredTransactions = transactions.filter(tx => {
//     if (activeTab === 'all') return true;
//     if (activeTab === 'sent') return tx.type === 'sent';
//     if (activeTab === 'received') return tx.type === 'received';
//     return tx.type === 'swap';
//   });

//   const renderTransactionIcon = type => {
//     switch (type) {
//       case 'sent':
//         return (
//           <MaterialCommunityIcons
//             name="arrow-top-right"
//             style={TransactionsStyle.txIconSent}
//           />
//         );
//       case 'received':
//         return (
//           <MaterialCommunityIcons
//             name="arrow-bottom-left"
//             style={TransactionsStyle.txIconReceived}
//           />
//         );
//       case 'swap':
//         return (
//           <MaterialCommunityIcons
//             name="swap-horizontal"
//             style={TransactionsStyle.txIconSwap}
//           />
//         );
//       default:
//         return null;
//     }
//   };

//   const renderTransactionItem = ({item}) => (
//     <TouchableOpacity style={TransactionsStyle.txItem}>
//       <View style={TransactionsStyle.txLeft}>
//         {renderTransactionIcon(item.type)}
//         <View style={TransactionsStyle.txDetails}>
//           <Text style={TransactionsStyle.txType}>
//             {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
//             {item.type === 'sent'
//               ? ` to ${item.to}`
//               : item.type === 'received'
//               ? ` from ${item.from}`
//               : ` ${item.currency} to ${item.to}`}
//           </Text>
//           <Text style={TransactionsStyle.txDate}>{item.date}</Text>
//         </View>
//       </View>
//       <View style={TransactionsStyle.txRight}>
//         <Text
//           style={[
//             TransactionsStyle.txAmount,
//             item.type === 'sent'
//               ? TransactionsStyle.txAmountSent
//               : item.type === 'received'
//               ? TransactionsStyle.txAmountReceived
//               : TransactionsStyle.txAmountSwap,
//           ]}>
//           {item.type === 'sent' ? '-' : item.type === 'received' ? '+' : ''}
//           {item.amount} {item.currency}
//         </Text>
//         <Text
//           style={[
//             TransactionsStyle.txStatus,
//             item.status === 'completed'
//               ? TransactionsStyle.txStatusCompleted
//               : TransactionsStyle.txStatusPending,
//           ]}>
//           {item.status}
//         </Text>
//       </View>
//     </TouchableOpacity>
//   );

//   return (
//     <View style={TransactionsStyle.container}>
//       {/* Header */}
//       <View style={TransactionsStyle.header}>
//         <Text style={TransactionsStyle.headerTitle}>Transactions</Text>
//         <TouchableOpacity
//           onPress={onClose}
//           style={TransactionsStyle.closeButton}>
//           <MaterialCommunityIcons
//             name="close"
//             style={TransactionsStyle.closeIcon}
//           />
//         </TouchableOpacity>
//       </View>

//       {/* Tabs */}
//       <View style={TransactionsStyle.tabsContainer}>
//         <TouchableOpacity
//           style={[
//             TransactionsStyle.tab,
//             activeTab === 'all' && TransactionsStyle.activeTab,
//           ]}
//           onPress={() => setActiveTab('all')}>
//           <Text
//             style={[
//               TransactionsStyle.tabText,
//               activeTab === 'all' && TransactionsStyle.activeTabText,
//             ]}>
//             All
//           </Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[
//             TransactionsStyle.tab,
//             activeTab === 'sent' && TransactionsStyle.activeTab,
//           ]}
//           onPress={() => setActiveTab('sent')}>
//           <MaterialCommunityIcons
//             name="arrow-top-right"
//             style={[
//               TransactionsStyle.tabIcon,
//               activeTab === 'sent' && TransactionsStyle.activeTabIcon,
//             ]}
//           />
//           <Text
//             style={[
//               TransactionsStyle.tabText,
//               activeTab === 'sent' && TransactionsStyle.activeTabText,
//             ]}>
//             Sent
//           </Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[
//             TransactionsStyle.tab,
//             activeTab === 'received' && TransactionsStyle.activeTab,
//           ]}
//           onPress={() => setActiveTab('received')}>
//           <MaterialCommunityIcons
//             name="arrow-bottom-left"
//             style={[
//               TransactionsStyle.tabIcon,
//               activeTab === 'received' && TransactionsStyle.activeTabIcon,
//             ]}
//           />
//           <Text
//             style={[
//               TransactionsStyle.tabText,
//               activeTab === 'received' && TransactionsStyle.activeTabText,
//             ]}>
//             Received
//           </Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[
//             TransactionsStyle.tab,
//             activeTab === 'swap' && TransactionsStyle.activeTab,
//           ]}
//           onPress={() => setActiveTab('swap')}>
//           <MaterialCommunityIcons
//             name="swap-horizontal"
//             style={[
//               TransactionsStyle.tabIcon,
//               activeTab === 'swap' && TransactionsStyle.activeTabIcon,
//             ]}
//           />
//           <Text
//             style={[
//               TransactionsStyle.tabText,
//               activeTab === 'swap' && TransactionsStyle.activeTabText,
//             ]}>
//             Swap
//           </Text>
//         </TouchableOpacity>
//       </View>

//       {/* Transaction List */}
//       <FlatList
//         data={filteredTransactions}
//         renderItem={renderTransactionItem}
//         keyExtractor={item => item.id}
//         contentContainerStyle={TransactionsStyle.listContainer}
//         ListEmptyComponent={
//           <View style={TransactionsStyle.emptyContainer}>
//             <MaterialCommunityIcons
//               name="file-document-outline"
//               style={TransactionsStyle.emptyIcon}
//             />
//             <Text style={TransactionsStyle.emptyText}>
//               No transactions found
//             </Text>
//           </View>
//         }
//       />
//     </View>
//   );
// };

// export default Transactions;

/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////

import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import TransactionsStyles from './TransactionsStyle';

// Dummy data for transactions
const transactions = [
  {
    id: 1,
    category: 'Groceries',
    amount: -45.2,
    date: 'Today, 10:30 AM',
    type: 'expense',
  },
  {
    id: 2,
    category: 'Salary',
    amount: 2500.0,
    date: 'Yesterday, 9:00 AM',
    type: 'income',
  },
  {
    id: 3,
    category: 'Restaurant',
    amount: -32.5,
    date: 'Yesterday, 7:45 PM',
    type: 'expense',
  },
  {
    id: 4,
    category: 'Freelance',
    amount: 120.0,
    date: 'Mar 15, 2:30 PM',
    type: 'income',
  },
  {
    id: 5,
    category: 'Shopping',
    amount: -89.99,
    date: 'Mar 14, 4:15 PM',
    type: 'expense',
  },
  {
    id: 6,
    category: 'Investment',
    amount: 150.0,
    date: 'Mar 12, 11:20 AM',
    type: 'income',
  },
];

// Dummy data for chart
const chartData = [
  {day: 'Mon', amount: 120},
  {day: 'Tue', amount: 200},
  {day: 'Wed', amount: 80},
  {day: 'Thu', amount: 160},
  {day: 'Fri', amount: 240},
  {day: 'Sat', amount: 100},
  {day: 'Sun', amount: 180},
];

const Transactions = () => {
  // Calculate total balance
  const totalBalance = transactions.reduce(
    (sum, transaction) => sum + transaction.amount,
    0,
  );

  // Find max value for chart scaling
  const maxChartValue = Math.max(...chartData.map(item => item.amount));

  return (
    <View style={TransactionsStyles.container}>
      {/* Header */}
      <View style={TransactionsStyles.header}>
        <Text style={TransactionsStyles.headerText}>Transactions</Text>
        <TouchableOpacity style={TransactionsStyles.filterButton}>
          <Text style={TransactionsStyles.filterText}>Filter</Text>
        </TouchableOpacity>
      </View>

      {/* Balance Card */}
      <View style={TransactionsStyles.balanceCard}>
        <Text style={TransactionsStyles.balanceTitle}>Total Balance</Text>
        <Text style={TransactionsStyles.balanceAmount}>
          ${totalBalance.toFixed(2)}
        </Text>
        <Text style={TransactionsStyles.balanceInfo}>
          +2.5% from last month
        </Text>
      </View>

      {/* Weekly Chart */}
      <View style={TransactionsStyles.chartContainer}>
        <Text style={TransactionsStyles.chartTitle}>Weekly Spending</Text>
        <View style={TransactionsStyles.chart}>
          {chartData.map((item, index) => (
            <View key={index} style={{alignItems: 'center'}}>
              <View
                style={[
                  TransactionsStyles.chartBar,
                  {height: (item.amount / maxChartValue) * 100},
                ]}
              />
              <Text style={TransactionsStyles.chartLabel}>{item.day}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Recent Transactions Section */}
      <View style={TransactionsStyles.sectionHeader}>
        <Text style={TransactionsStyles.sectionTitle}>Recent Transactions</Text>
        <TouchableOpacity>
          <Text style={TransactionsStyles.viewAll}>View All</Text>
        </TouchableOpacity>
      </View>

      {/* Horizontal Scroll Transactions */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={TransactionsStyles.transactionsContainer}>
        {transactions.map(transaction => (
          <View key={transaction.id} style={TransactionsStyles.transactionCard}>
            <View style={TransactionsStyles.transactionTop}>
              <View style={TransactionsStyles.transactionIcon}>
                <Text style={{color: '#FFFFFF', fontWeight: 'bold'}}>
                  {transaction.category.charAt(0)}
                </Text>
              </View>
              <Text
                style={[
                  TransactionsStyles.transactionAmount,
                  transaction.amount > 0
                    ? TransactionsStyles.incomeAmount
                    : TransactionsStyles.expenseAmount,
                ]}>
                {transaction.amount > 0 ? '+' : ''}
                {transaction.amount.toFixed(2)}
              </Text>
            </View>
            <Text style={TransactionsStyles.transactionCategory}>
              {transaction.category}
            </Text>
            <Text style={TransactionsStyles.transactionDate}>
              {transaction.date}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Transactions;


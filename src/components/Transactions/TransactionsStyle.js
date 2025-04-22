// import {StyleSheet} from 'react-native';

// const TransactionsStyle = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#0A0E17',
//     paddingTop: 50,
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//     paddingBottom: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: '#1E293B',
//   },
//   headerTitle: {
//     color: '#FFFFFF',
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
//   closeButton: {
//     padding: 5,
//   },
//   closeIcon: {
//     color: '#64748B',
//     fontSize: 24,
//   },
//   tabsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginVertical: 15,
//     paddingHorizontal: 10,
//   },
//   tab: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 8,
//     paddingHorizontal: 12,
//     borderRadius: 20,
//   },
//   activeTab: {
//     backgroundColor: '#1E293B',
//   },
//   tabText: {
//     color: '#64748B',
//     fontSize: 14,
//     fontWeight: '500',
//     marginLeft: 5,
//   },
//   activeTabText: {
//     color: '#FFFFFF',
//   },
//   tabIcon: {
//     color: '#64748B',
//     fontSize: 18,
//   },
//   activeTabIcon: {
//     color: '#FFFFFF',
//   },
//   listContainer: {
//     paddingHorizontal: 15,
//   },
//   txItem: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingVertical: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: '#1E293B',
//   },
//   txLeft: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   txIconSent: {
//     color: '#EF4444',
//     fontSize: 24,
//     backgroundColor: '#1E293B',
//     padding: 8,
//     borderRadius: 12,
//     marginRight: 12,
//   },
//   txIconReceived: {
//     color: '#10B981',
//     fontSize: 24,
//     backgroundColor: '#1E293B',
//     padding: 8,
//     borderRadius: 12,
//     marginRight: 12,
//   },
//   txIconSwap: {
//     color: '#3B82F6',
//     fontSize: 24,
//     backgroundColor: '#1E293B',
//     padding: 8,
//     borderRadius: 12,
//     marginRight: 12,
//   },
//   txDetails: {
//     flexDirection: 'column',
//   },
//   txType: {
//     color: '#FFFFFF',
//     fontSize: 16,
//     fontWeight: '500',
//     marginBottom: 3,
//   },
//   txDate: {
//     color: '#64748B',
//     fontSize: 13,
//   },
//   txRight: {
//     alignItems: 'flex-end',
//   },
//   txAmount: {
//     fontSize: 16,
//     fontWeight: '600',
//     marginBottom: 3,
//   },
//   txAmountSent: {
//     color: '#EF4444',
//   },
//   txAmountReceived: {
//     color: '#10B981',
//   },
//   txAmountSwap: {
//     color: '#3B82F6',
//   },
//   txStatus: {
//     fontSize: 12,
//     paddingHorizontal: 8,
//     paddingVertical: 2,
//     borderRadius: 10,
//     overflow: 'hidden',
//   },
//   txStatusCompleted: {
//     color: '#10B981',
//     backgroundColor: 'rgba(16, 185, 129, 0.1)',
//   },
//   txStatusPending: {
//     color: '#F59E0B',
//     backgroundColor: 'rgba(245, 158, 11, 0.1)',
//   },
//   emptyContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingVertical: 50,
//   },
//   emptyIcon: {
//     color: '#64748B',
//     fontSize: 50,
//     marginBottom: 15,
//   },
//   emptyText: {
//     color: '#64748B',
//     fontSize: 16,
//   },
// });

// export default TransactionsStyle;


/////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  filterButton: {
    backgroundColor: '#1E1E1E',
    padding: 10,
    borderRadius: 20,
  },
  filterText: {
    color: '#BB86FC',
    fontSize: 14,
  },
  balanceCard: {
    backgroundColor: '#1E1E1E',
    borderRadius: 15,
    padding: 20,
    marginHorizontal: 20,
    marginBottom: 25,
    shadowColor: '#BB86FC',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  balanceTitle: {
    color: '#A0A0A0',
    fontSize: 14,
    marginBottom: 5,
  },
  balanceAmount: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  balanceInfo: {
    color: '#BB86FC',
    fontSize: 12,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  viewAll: {
    color: '#BB86FC',
    fontSize: 14,
  },
  transactionsContainer: {
    height: 220,
    paddingLeft: 20,
  },
  transactionCard: {
    width: 160,
    backgroundColor: '#1E1E1E',
    borderRadius: 15,
    padding: 15,
    marginRight: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  transactionTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  transactionIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#BB86FC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  transactionCategory: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 5,
  },
  transactionDate: {
    color: '#A0A0A0',
    fontSize: 12,
    marginBottom: 10,
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  incomeAmount: {
    color: '#4CAF50',
  },
  expenseAmount: {
    color: '#F44336',
  },
  chartContainer: {
    backgroundColor: '#1E1E1E',
    borderRadius: 15,
    padding: 15,
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 30,
  },
  chartTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  chart: {
    height: 150,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingTop: 20,
  },
  chartBar: {
    width: 30,
    backgroundColor: '#BB86FC',
    borderRadius: 5,
    marginHorizontal: 5,
  },
  chartLabel: {
    color: '#A0A0A0',
    fontSize: 10,
    textAlign: 'center',
    marginTop: 5,
  },
});




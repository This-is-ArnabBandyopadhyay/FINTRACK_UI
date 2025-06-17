import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
const CONTENT_HEIGHT = height - 220; // Space for header and bottom nav

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0F1F', // Deep navy background
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    paddingTop: 2,
    backgroundColor: '#0A0F1F',
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'HelveticaNeue-Bold',
  },
  filterButton: {
    backgroundColor: '#1A2138',
    padding: 10,
    borderRadius: 20,
    paddingHorizontal: 15,
  },
  filterText: {
    color: '#6C7EE1',
    fontSize: 14,
    fontFamily: 'HelveticaNeue-Medium',
  },
  mainScrollView: {
    flex: 1,
  },
  page: {
    width,
    height: CONTENT_HEIGHT,
    paddingHorizontal: 20,
  },
  balanceCard: {
    backgroundColor: '#1A2138',
    borderRadius: 20,
    padding: 25,
    marginBottom: 20,
    shadowColor: '#6C7EE1',
    shadowOffset: {width: 0, height: 6},
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 10,
  },
  balanceTitle: {
    color: '#A0B0F0',
    fontSize: 14,
    marginBottom: 5,
    fontFamily: 'HelveticaNeue-Medium',
  },
  balanceAmount: {
    color: '#FFFFFF',
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 10,
    fontFamily: 'HelveticaNeue-Bold',
  },
  balanceInfo: {
    color: '#6C7EE1',
    fontSize: 12,
    fontFamily: 'HelveticaNeue-Medium',
  },
  visualizationContainer: {
    flex: 1,
    backgroundColor: '#1A2138',
    borderRadius: 20,
    padding: 25,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  visualizationTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 25,
    textAlign: 'center',
    fontFamily: 'HelveticaNeue-Bold',
  },
  barChart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: 180,
    marginBottom: 30,
  },
  bar: {
    width: 28,
    borderRadius: 8,
    marginHorizontal: 4,
  },
  barLabel: {
    color: '#A0B0F0',
    fontSize: 10,
    textAlign: 'center',
    marginTop: 8,
    fontFamily: 'HelveticaNeue-Medium',
  },
  pieChartContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
    marginBottom: 25,
  },
  categoryList: {
    marginTop: 15,
  },
  categoryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  categoryColor: {
    width: 14,
    height: 14,
    borderRadius: 7,
    marginRight: 12,
  },
  categoryText: {
    color: '#FFFFFF',
    fontSize: 14,
    flex: 1,
    fontFamily: 'HelveticaNeue-Medium',
  },
  categoryAmount: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'HelveticaNeue-Bold',
  },
  transactionsContainer: {
    flex: 1,
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#253055',
  },
  transactionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  transactionIcon: {
    width: 42,
    height: 42,
    borderRadius: 21,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  transactionDetails: {
    flex: 1,
  },
  transactionCategory: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'HelveticaNeue-Medium',
    marginBottom: 3,
  },
  transactionDate: {
    color: '#A0B0F0',
    fontSize: 12,
    fontFamily: 'HelveticaNeue-Medium',
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'HelveticaNeue-Bold',
    minWidth: 90,
    textAlign: 'right',
  },
  incomeAmount: {
    color: '#4CD964',
  },
  expenseAmount: {
    color: '#FF5E5E',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statLabel: {
    color: '#A0B0F0',
    fontSize: 12,
    fontFamily: 'HelveticaNeue-Medium',
  },
  statValue: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
    fontFamily: 'HelveticaNeue-Bold',
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 15,
    backgroundColor: '#0A0F1F',
    paddingBottom: 30, // Extra space for bottom nav
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#253055',
    marginHorizontal: 6,
  },
  activeDot: {
    backgroundColor: '#6C7EE1',
  },
  backButton: {
    paddingRight: 15,
  },
  backButtonText: {
    fontSize: 24,
    color: '#FF9900',
  },
});

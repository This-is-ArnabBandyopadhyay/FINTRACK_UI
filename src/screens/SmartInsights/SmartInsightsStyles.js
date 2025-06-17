import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0F1F',
  },
  scrollContainer: {
    padding: 20,
    paddingBottom: 100,
  },
  header: {
    marginBottom: 25,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: 5,
    left: 100, // Adjusted for back button
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#8E9DBB',
    left: 100,
  },
  card: {
    backgroundColor: '#1A2138',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 5,
  },
  chartCard: {
    backgroundColor: '#1A2138',
    borderRadius: 16,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 36,
    fontWeight: '800',
    color: '#6ED47D',
    marginVertical: 5,
  },
  cardSubtitle: {
    fontSize: 16,
    color: '#8E9DBB',
    marginBottom: 5,
  },
  chartTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  trendContainer: {
    backgroundColor: 'rgba(110, 212, 125, 0.15)',
    padding: 8,
    borderRadius: 8,
    alignSelf: 'flex-start',
    marginTop: 10,
  },
  trendText: {
    color: '#6ED47D',
    fontSize: 14,
    fontWeight: '600',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 15,
  },
  categoriesContainer: {
    marginTop: 15,
  },
  categoryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: 'rgba(26, 33, 56, 0.7)',
    borderRadius: 10,
  },
  categoryBullet: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 12,
  },
  insightItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#1A2138',
    borderRadius: 10,
  },
  insightBullet: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#6ED47D',
    marginRight: 12,
  },
  categoryText: {
    fontSize: 15,
    color: '#E0E0E0',
  },
  insightText: {
    fontSize: 15,
    color: '#E0E0E0',
    lineHeight: 22,
    flex: 1,
  },
  chartWidth: width - 70,
  chartConfig: {
    backgroundColor: '#1A2138',
    backgroundGradientFrom: '#1A2138',
    backgroundGradientTo: '#1A2138',
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: '4',
      strokeWidth: '2',
      stroke: '#6ED47D',
    },
  },
  chartStyle: {
    borderRadius: 16,
    marginVertical: 8,
  },
  // Add these new styles
  comparisonContainer: {
    backgroundColor: '#1A2138',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    marginTop: 10,
  },
  monthLabelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  monthLabel: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  currentMonthDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#6ED47D',
    marginRight: 8,
  },
  lastMonthDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: 'rgba(110, 212, 125, 0.6)',
    marginRight: 8,
  },
  monthLabelText: {
    color: '#E0E0E0',
    fontSize: 14,
    fontWeight: '600',
  },
  comparisonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  categoryLabel: {
    width: 80,
    color: '#8E9DBB',
    fontSize: 14,
  },
  barContainer: {
    flex: 1,
    height: 30,
    marginHorizontal: 10,
    justifyContent: 'center',
  },
  barBackground: {
    position: 'absolute',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 6,
  },
  currentMonthBar: {
    position: 'absolute',
    height: '60%',
    top: 0,
    borderRadius: 6,
    justifyContent: 'center',
    paddingLeft: 8,
  },
  lastMonthBar: {
    position: 'absolute',
    height: '60%',
    bottom: 0,
    borderRadius: 6,
    justifyContent: 'center',
    paddingLeft: 8,
  },
  barValue: {
    color: '#0A0F1F',
    fontSize: 10,
    fontWeight: 'bold',
  },
  changeContainer: {
    width: 60,
    alignItems: 'flex-end',
  },
  changeText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  positiveChange: {
    color: '#6ED47D',
  },
  negativeChange: {
    color: '#FF6B6B',
  },
  insightCard: {
    backgroundColor: 'rgba(26, 33, 56, 0.7)',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 10,
    zIndex: 1000,
    backgroundColor: '#1A2138',
    padding: 10,
    borderRadius: 50,
  },
});

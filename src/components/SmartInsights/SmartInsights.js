import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {LineChart, PieChart} from 'react-native-chart-kit';
import {styles} from './SmartInsightsStyles';
import Layout from '../../components/Layout/Layout';
//import BottomNavBar from '../BottomNavBar/BottomNavBar';

const SmartInsights = () => {
  const [currentScreen, setCurrentScreen] = useState('smartInsights');

  // Add this new chart data at the top
  const monthlyComparisonData = {
    labels: ['Food', 'Shopping', 'Travel', 'Bills', 'Entertainment'],
    datasets: [
      {
        data: [1200, 800, 600, 400, 300],
        colors: [
          (opacity = 1) => `rgba(110, 212, 125, ${opacity})`,
          (opacity = 1) => `rgba(78, 205, 196, ${opacity})`,
          (opacity = 1) => `rgba(255, 107, 107, ${opacity})`,
          (opacity = 1) => `rgba(255, 214, 102, ${opacity})`,
          (opacity = 1) => `rgba(158, 134, 255, ${opacity})`,
        ],
      },
      {
        data: [900, 950, 400, 400, 450],
        colors: [
          (opacity = 1) => `rgba(110, 212, 125, ${opacity * 0.6})`,
          (opacity = 1) => `rgba(78, 205, 196, ${opacity * 0.6})`,
          (opacity = 1) => `rgba(255, 107, 107, ${opacity * 0.6})`,
          (opacity = 1) => `rgba(255, 214, 102, ${opacity * 0.6})`,
          (opacity = 1) => `rgba(158, 134, 255, ${opacity * 0.6})`,
        ],
      },
    ],
  };

  // Chart data
  const spendingData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        data: [300, 450, 280, 800, 990, 400, 140],
        color: (opacity = 1) => `rgba(110, 212, 125, ${opacity})`,
        strokeWidth: 2,
      },
    ],
  };

  const categoryData = [
    {
      name: 'Food',
      amount: 45,
      color: '#6ED47D',
      legendFontColor: '#FFF',
      legendFontSize: 14,
    },
    {
      name: 'Travel',
      amount: 25,
      color: '#FFD166',
      legendFontColor: '#FFF',
      legendFontSize: 14,
    },
    {
      name: 'Shopping',
      amount: 15,
      color: '#FF6B6B',
      legendFontColor: '#FFF',
      legendFontSize: 14,
    },
    {
      name: 'Subscriptions',
      amount: 15,
      color: '#4ECDC4',
      legendFontColor: '#FFF',
      legendFontSize: 14,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Layout currentScreen={currentScreen} onTabPress={setCurrentScreen}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Smart Insights</Text>
            <Text style={styles.headerSubtitle}>Your spending at a glance</Text>
          </View>
          {/* Today's Spend Card */}
          <View style={styles.card}>
            <Text style={styles.cardSubtitle}>Today's Spend</Text>
            <Text style={styles.cardTitle}>$1,500</Text>
            <View style={styles.trendContainer}>
              <Text style={styles.trendText}>40% more than usual</Text>
            </View>
          </View>
          {/* Weekly Spending Chart */}
          <View style={styles.chartCard}>
            <Text style={styles.chartTitle}>Weekly Spending</Text>
            <LineChart
              data={spendingData}
              width={styles.chartWidth}
              height={220}
              chartConfig={styles.chartConfig}
              bezier
              style={styles.chartStyle}
            />
          </View>
          {/* Categories */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Spending by Category</Text>
            <View style={styles.chartCard}>
              <PieChart
                data={categoryData}
                width={styles.chartWidth}
                height={180}
                chartConfig={styles.chartConfig}
                accessor="amount"
                backgroundColor="transparent"
                paddingLeft="15"
                absolute
              />
            </View>
            <View style={styles.categoriesContainer}>
              {categoryData.map(category => (
                <TouchableOpacity
                  key={category.name}
                  style={styles.categoryItem}>
                  <View
                    style={[
                      styles.categoryBullet,
                      {backgroundColor: category.color},
                    ]}
                  />
                  <Text style={styles.categoryText}>
                    {category.name}: {category.amount}%
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          // Then update the Monthly Comparison section in the return statement:
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Monthly Spending Comparison</Text>

            <View style={styles.comparisonContainer}>
              <View style={styles.monthLabelContainer}>
                <View style={styles.monthLabel}>
                  <View style={[styles.currentMonthDot]} />
                  <Text style={styles.monthLabelText}>Current Month</Text>
                </View>
                <View style={styles.monthLabel}>
                  <View style={[styles.lastMonthDot]} />
                  <Text style={styles.monthLabelText}>Last Month</Text>
                </View>
              </View>

              {monthlyComparisonData.labels.map((category, index) => {
                const currentValue =
                  monthlyComparisonData.datasets[0].data[index];
                const lastValue = monthlyComparisonData.datasets[1].data[index];
                const change = ((currentValue - lastValue) / lastValue) * 100;

                return (
                  <View key={index} style={styles.comparisonRow}>
                    <Text style={styles.categoryLabel}>{category}</Text>

                    <View style={styles.barContainer}>
                      <View style={[styles.barBackground, {width: '100%'}]} />
                      <View
                        style={[
                          styles.currentMonthBar,
                          {
                            width: `${Math.min(
                              100,
                              (currentValue / 1500) * 100,
                            )}%`,
                            backgroundColor:
                              monthlyComparisonData.datasets[0].colors[index](
                                1,
                              ),
                          },
                        ]}>
                        <Text style={styles.barValue}>${currentValue}</Text>
                      </View>
                      <View
                        style={[
                          styles.lastMonthBar,
                          {
                            width: `${Math.min(
                              100,
                              (lastValue / 1500) * 100,
                            )}%`,
                            backgroundColor:
                              monthlyComparisonData.datasets[1].colors[index](
                                1,
                              ),
                          },
                        ]}>
                        <Text style={styles.barValue}>${lastValue}</Text>
                      </View>
                    </View>

                    <View style={styles.changeContainer}>
                      <Text
                        style={[
                          styles.changeText,
                          change >= 0
                            ? styles.positiveChange
                            : styles.negativeChange,
                        ]}>
                        {change >= 0 ? '↑' : '↓'} {Math.abs(Math.round(change))}
                        %
                      </Text>
                    </View>
                  </View>
                );
              })}
            </View>

            <View style={styles.insightsContainer}>
              {[
                'Food spending increased by 33% due to more dining out',
                'Shopping expenses decreased by 15% as you stayed within budget',
                'Travel costs rose by 50% with summer vacation plans',
                'Bills remained consistent with last month',
              ].map((insight, index) => (
                <View key={index} style={styles.insightItem}>
                  <View style={styles.insightBullet} />
                  <Text style={styles.insightText}>{insight}</Text>
                </View>
              ))}
            </View>
          </View>
        </ScrollView>

        {/* Bottom Navigation */}
        {/* <View>
        <BottomNavBar currentScreen={currentScreen} onTabPress={onTabPress} />
      </View> */}
      </Layout>
    </SafeAreaView>
  );
};

export default SmartInsights;

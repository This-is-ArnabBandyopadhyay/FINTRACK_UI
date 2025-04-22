// // App.js
// import React from 'react';
// import Dashboard from './src/screens/Dashboard';

// const App = () => {
//   return <Dashboard />;
// };

// export default App;

///////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////

// import React from 'react';
// import {StatusBar,SafeAreaView} from 'react-native';
// //import Dashboard from './src/screens/Dashboard';
// import SmartInsights from './src/components/SmartInsights/SmartInsights';

// const App = () => {
//   return (
//     // <View style={styles.container}>
//     //   <Dashboard />
//     // </View>/
//     <>
//       <StatusBar barStyle="light-content" backgroundColor="#121212" />
//       <SafeAreaView style={{flex: 1, backgroundColor: '#121212'}}>
//         <SmartInsights />
//       </SafeAreaView>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

// export default App;

/////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import Transactions from './src/components/Transactions/Transactions';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Transactions />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
});

export default App;

// import {StyleSheet} from 'react-native';

// export default StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     height: 70, // Fixed height
//     width: '100%', // Full width
//     backgroundColor: '#333333',
//     borderTopWidth: StyleSheet.hairlineWidth,
//     borderTopColor: '#e0e0e0',
//     // Shadow styles (keep existing)
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: -2},
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   tabButton: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingVertical: 8,
//     flex: 1,
//   },
//   iconContainer: {
//     position: 'relative',
//   },
//   icon: {
//     color: 'white',
//   },
//   activeIcon: {
//     color: 'lime',
//   },
//   label: {
//     fontSize: 12,
//     marginTop: 4,
//     color: 'white',
//   },
//   activeLabel: {
//     color: 'lime',
//     fontWeight: '600',
//   },
//   badge: {
//     position: 'absolute',
//     right: -8,
//     top: -4,
//     backgroundColor: '#ff3b30',
//     borderRadius: 100,
//     width: 18,
//     height: 18,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   badgeText: {
//     color: 'white',
//     fontSize: 10,
//     fontWeight: 'bold',
//   },
// });

///////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 80,
    width: '100%',
    //backgroundColor: '#FFFFFF',
    backgroundColor: '#333333',
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
    paddingHorizontal: 16,
  },
  tabButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    width: 60,
  },
  centerButton: {
    marginTop: -20,
  },
  iconContainer: {
    position: 'relative',
  },
  icon: {
    //color: '#888888',
    color: 'white',
  },
  centerIcon: {
    color: '#4CAF50',
  },
  activeIcon: {
    //color: '#000000',
    color: 'lime',
  },
  label: {
    fontSize: 10,
    marginTop: 4,
    //color: '#888888',
    color: 'white',
    fontWeight: '500',
  },
  activeLabel: {
    //color: '#000000',
    color: 'lime',
    fontWeight: '600',
  },
  badge: {
    position: 'absolute',
    right: -6,
    top: -4,
    backgroundColor: '#FF3B30',
    borderRadius: 9,
    width: 18,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
  transactionsOverlay: {
    position: 'absolute',
    bottom: 60, // Height of your navbar
    left: 0,
    right: 0,
    top: 0,
    backgroundColor: '#0A0E17', // Match your dark theme
    zIndex: 100,
  },
});



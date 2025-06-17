// src/components/Sidebar/SidebarStyles.js
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  sidebarContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 300,
    height: '100%',
    backgroundColor: '#0f0f0f',
    zIndex: 100,
    borderRightWidth: 1,
    borderRightColor: '#333',
    padding: 20,
  },
  sidebarHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  sidebarTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 60,
  },
  closeButton: {
    backgroundColor: '#333',
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 20,
    lineHeight: 20,
  },
  menuItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#222',
  },
  menuText: {
    color: '#fff',
    fontSize: 18,
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
  footerText: {
    color: '#555',
    fontSize: 14,
  },
  // bottomButtonContainer: {
  //   position: 'absolute',
  //   bottom: 70,
  //   left: 0,
  //   right: 0,
  //   padding: 20,
  //   backgroundColor: '#0f0f0f', // Match your sidebar background
  // },
  // gradientButton: {
  //   padding: 15,
  //   borderRadius: 8,
  //   width: 175,
  //   marginLeft: 40,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   elevation: 3,
  //   shadowColor: '#000',
  //   shadowOffset: {width: 0, height: 2},
  //   shadowOpacity: 0.3,
  //   shadowRadius: 3,
  // },
  // gradientButtonText: {
  //   color: 'white',
  //   fontSize: 16,
  //   fontWeight: 'bold',
  // },
});

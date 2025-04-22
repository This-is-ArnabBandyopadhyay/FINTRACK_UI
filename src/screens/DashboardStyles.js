// src/screens/DashboardStyles.js
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#121212',
  },
  mainContainer: {
    flex: 1,
    position: 'relative', // Needed for absolute positioning of navbar
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, // Equivalent to position: absolute with all directions set to 0
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 99,
  },
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  scrollContent: {
    paddingBottom: 50, // Extra padding to account for navbar height
  },
  header: {
    padding: 24,
    paddingTop: 25,
    paddingBottom: 30, // Added more bottom padding
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    marginBottom: 20,
    elevation: 8,
    position: 'relative',
  },
  // menuButton: {
  //   position: 'absolute',
  //   top: 50,
  //   left: 20,
  //   zIndex: 1,
  // },
  headerText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginTop: 10, // Added margin to account for menu button
  },
  subHeaderText: {
    fontSize: 16,
    color: '#bbdefb',
    textAlign: 'center',
    marginTop: 4,
  },
  cardsContainer: {
    paddingHorizontal: 16,
    paddingBottom: 30, // Increased padding
  },
  card: {
    backgroundColor: '#1f1f1f',
    padding: 20,
    borderRadius: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: {width: 0, height: 5},
    elevation: 8,
  },
  label: {
    fontSize: 18,
    color: 'rgba(255,255,255,0.9)',
    fontWeight: '600',
    marginBottom: 10,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  value: {
    fontSize: 28,
    color: '#ffffff',
    fontWeight: 'bold',
    marginBottom: 15,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  info: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.8)',
    marginLeft: 8,
  },
  button: {
    marginTop: 14,
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 16,
  },
  warningButton: {
    backgroundColor: 'rgba(32, 70, 220, 0.29)',
  },
  // bottomNavContainer: {
  //   position: 'absolute',
  //   bottom: 0,
  //   left: 0,
  //   right: 0,
  //   backgroundColor: '#1f1f1f',
  //   borderTopWidth: 1,
  //   borderTopColor: 'rgba(255,255,255,0.1)',
  //   zIndex: 100,
  //   paddingVertical: 1,
  //   paddingHorizontal: 16,
  //   shadowColor: '#000',
  //   shadowOffset: {width: 0, height: -5},
  //   shadowOpacity: 0.3,
  //   shadowRadius: 10,
  //   elevation: 10,
  // },
});

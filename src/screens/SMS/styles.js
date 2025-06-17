import {StyleSheet} from 'react-native';

export const colors = {
  primary: '#0084ff',
  backgroundDark: '#121212',
  backgroundLight: '#1e1e1e',
  textPrimary: '#ffffff',
  textSecondary: '#bbbbbb',
  incomingBubble: '#2d2d2d',
  outgoingBubble: '#0084ff',
  unreadIndicator: '#0084ff',
  divider: '#333333',
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundDark,
  },
  header: {
    backgroundColor: colors.backgroundLight,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 4,
    borderBottomColor: colors.divider,
    borderBottomWidth: 1,
    justifyContent: 'space-between',
  },
  headerTitle: {
    position: 'absolute',
    left: 0,
    right: 0,
    textAlign: 'center',
    zIndex: -1,
    color: colors.textPrimary,
    fontSize: 20,
    fontWeight: 'bold',
    //marginLeft: 16,
    marginRight: 170,
  },
  listContainer: {
    flex: 1,
  },
  listContent: {
    paddingBottom: 16,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    color: colors.textSecondary,
    fontSize: 16,
  },
  fab: {
    position: 'absolute',
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 32,
    right: 24,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  fabIcon: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  gradientButton: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginLeft:10,
    borderRadius: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
    // elevation: 3,
    // shadowColor: '#000',
    // shadowOffset: {width: 0, height: 2},
    // shadowOpacity: 0.3,
    // shadowRadius: 3,
  },
  gradientButtonText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export const inboxItemStyles = StyleSheet.create({
  container: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.divider,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  avatarText: {
    color: colors.textPrimary,
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
  },
  topLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  name: {
    color: colors.textPrimary,
    fontSize: 16,
    fontWeight: 'bold',
  },
  unreadName: {
    color: colors.unreadIndicator,
  },
  time: {
    color: colors.textSecondary,
    fontSize: 12,
  },
  preview: {
    color: colors.textSecondary,
    fontSize: 14,
  },
  unreadPreview: {
    color: colors.textPrimary,
    fontWeight: 'bold',
  },
  unreadIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.unreadIndicator,
    marginLeft: 8,
  },
});

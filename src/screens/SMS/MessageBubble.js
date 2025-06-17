import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from './styles';

const MessageBubble = ({message, isIncoming, time}) => {
  return (
    <View
      style={[
        styles.container,
        isIncoming ? styles.incomingContainer : styles.outgoingContainer,
      ]}>
      <View
        style={[
          styles.bubble,
          isIncoming ? styles.incomingBubble : styles.outgoingBubble,
        ]}>
        <Text style={isIncoming ? styles.incomingText : styles.outgoingText}>
          {message}
        </Text>
        <Text style={isIncoming ? styles.incomingTime : styles.outgoingTime}>
          {time}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 4,
    flexDirection: 'row',
  },
  incomingContainer: {
    justifyContent: 'flex-start',
  },
  outgoingContainer: {
    justifyContent: 'flex-end',
  },
  bubble: {
    maxWidth: '80%',
    padding: 12,
    borderRadius: 16,
  },
  incomingBubble: {
    backgroundColor: colors.incomingBubble,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  outgoingBubble: {
    backgroundColor: colors.outgoingBubble,
    borderBottomRightRadius: 4,
  },
  incomingText: {
    color: colors.textPrimary,
    fontSize: 16,
  },
  outgoingText: {
    color: 'white',
    fontSize: 16,
  },
  incomingTime: {
    color: colors.textSecondary,
    fontSize: 10,
    textAlign: 'right',
    marginTop: 4,
  },
  outgoingTime: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 10,
    textAlign: 'right',
    marginTop: 4,
  },
});

export default MessageBubble;

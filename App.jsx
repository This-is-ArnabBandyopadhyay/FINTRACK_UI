
// App.js
// import React, { useState } from 'react';
// import { View, StatusBar } from 'react-native';
// import InboxScreen from './src/screens/SMS/InboxScreen';
// import ConversationScreen from './src/screens/SMS/ConversationScreen';

// export default function App() {
//   const [currentScreen, setCurrentScreen] = useState('inbox');
//   const [selectedThread, setSelectedThread] = useState({
//     id: '',
//     sender: '',
//     lastMessage: '',
//     time: '',
//   });

//   const openThread = (thread) => {
//     if (thread && thread.id) {
//       setSelectedThread(thread);
//       setCurrentScreen('conversation');
//     }
//   };

//   const goBack = () => {
//     setCurrentScreen('inbox');
//     setSelectedThread({
//       id: '',
//       sender: '',
//       lastMessage: '',
//       time: '',
//     });
//   };

//   return (
//     <View style={{ flex: 1 }}>
//       <StatusBar barStyle="light-content" />
//       {currentScreen === 'inbox' ? (
//         <InboxScreen onOpenThread={openThread} />
//       ) : (
//         <ConversationScreen thread={selectedThread} onBack={goBack} />
//       )}
//     </View>
//   );
// }

////////////////////
/////////////////////////////////
//////////////////////////////////////
///////////////////////////////////////////////

import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import InboxScreen from './src/screens/SMS/InboxScreen';
import {colors} from './src/screens/SMS/styles';

const App = () => {
  // State to manage which screen is currently visible
  const [currentScreen, setCurrentScreen] = useState('inbox');
  const [currentConversation, setCurrentConversation] = useState(null);

  // Function to handle navigation
  const navigateTo = (screen, conversation = null) => {
    setCurrentScreen(screen);
    if (conversation) {
      setCurrentConversation(conversation);
    }
  };

  // Function to go back to inbox
  const goBackToInbox = () => {
    setCurrentScreen('inbox');
    setCurrentConversation(null);
  };

  return (
    <View style={styles.container}>
      {currentScreen === 'inbox' && (
        <InboxScreen
          onConversationPress={conversation =>
            navigateTo('conversation', conversation)
          }
          onComposePress={() => navigateTo('compose')}
        />
      )}

      {currentScreen === 'conversation' && currentConversation && (
        <ConversationScreen
          conversation={currentConversation}
          onBack={goBackToInbox}
        />
      )}

      {currentScreen === 'compose' && (
        <ComposeScreen
          onSend={(recipient, message) => {
            // Handle sending the message
            console.log('Sending to:', recipient, 'Message:', message);
            goBackToInbox();
          }}
          onCancel={goBackToInbox}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundDark,
  },
});

export default App;

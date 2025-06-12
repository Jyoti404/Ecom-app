import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

const ChatbotScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <WebView
        source={{
          uri: "https://cdn.botpress.cloud/webchat/v3.0/shareable.html?configUrl=https://files.bpcontent.cloud/2025/06/12/13/20250612134535-G4NZ6RUJ.json",
        }}
        style={styles.container}
      />
    </SafeAreaView>
  );
};

export default ChatbotScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

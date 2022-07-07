import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import {WebView} from 'react-native-webview';

const WebviewDemo = ()=>{
  return (
    <WebView source={{uri: "https://hackernews.com"}}/>
  )
}

const App = () => {
  return (
    <View style={{flex: 1}}>
      <Text style={{height: 200}}>Hello World </Text>
      <WebviewDemo />
      <Text style={{height: 200}}>Other Text</Text>
    </View>
  );
};

export default App;

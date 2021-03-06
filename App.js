import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
} from 'react-native';
import {WebView} from 'react-native-webview';

// const WebviewDemo = ()=>{
//   return (
//     <WebView source={{uri: "https://hackernews.com"}} style={{marginTop: 20}} containerStyle={{padding: 10}} />
//   )
// }

const WebviewDemo = ()=>{

  const [currentProgress, setCurrentProgress] = useState(0);

  const onLoad = ()=>{
    console.log("onLoad done");
  }

  const onLoadStart = ()=>{
    console.log("onLoadStart done");
  }

  const onLoadProgress=(syntheticEvent)=>{
    const {nativeEvent} = syntheticEvent;
    setCurrentProgress(nativeEvent.progress);
  }
  return (
    <>
    <WebView source={{uri: "https://hackernews.com"}} onLoadStart={onLoadStart} onLoad={onLoad} 
    onLoadProgress={onLoadProgress}
    />
    <Text style={{color: 'green', textAlign: 'center', fontSize: 20}}>Webview progress {currentProgress}</Text>
    </>
  )
}

// const WebviewDemo = ()=>{
//   const webRef = useRef();  
//   const run = `
//     document.getElementById('h2_element').innerHTML = 'World';
//   `;

//   useEffect(()=>{
//     setTimeout(()=>{
//      webRef.current.injectJavaScript(run);
//     },5000);
//   },[]);

//   const customHtml = `<body style="display:flex; flex-direction: column; justify-content: center; align-items:center;background-color: black;color: white">
//   <h1 style="font-size: 100px; padding: 50px; text-align: center">This is simple html</h1>
//   <h2 style="display: block; font-size:80px; padding: 50px; 
//           text-align: center;" id="h2_element">
//             This text will be changed later!
//           </h2>
//         <script>
//           setTimeout(function() {
//             window.ReactNativeWebView.postMessage('from Webview');
//           }, 2000)
//         </script>
//   </body>
//   `;

//   return (
//     <WebView ref={webRef} source={{html: customHtml}} onMessage={(event)=>{
//       console.log(event.nativeEvent.data);
//     }}/>
//   )
// }

const App = () => {
  return (
    <View style={{flex: 1}}>
      <Text style={{height: 200, borderWidth: 1}}>Hello World </Text>
      <WebviewDemo />
      <Text style={{height: 200, borderWidth: 1}}>Other Text</Text>
    </View>
  );
};

export default App;

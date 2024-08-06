import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import HomeScreen from './src/screens/Home';
import Router from './src/navigation/Router';


function App(): React.JSX.Element {
  return (
    <>
      <StatusBar />
      <Router/>

    </>
  );
}

export default App;

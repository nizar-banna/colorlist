import React , {Component} from 'react';
import {AppRegistry, Alert ,Text} from 'react-native';
import ColorList from './components/ColorList'
import ColorInfo from './components/ColorInfo'
 export default class App extends React.Component {
  render() {
     return (
      <ColorInfo backgroundColor ="black"
      onSelect={ () => Alert.alert('Screen touched')} 
      />
      )
  }
   
   }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

AppRegistry.registerComponent('colorlist', ()=> App)
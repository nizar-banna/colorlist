import React, { Component } from 'react'
import {AppRegistry, Alert} from 'react-native'

import ColorList from './components/ColorList'


export default class App extends React.Component {
  render(){
    return(
      <ColorList onColorSelected= {color => Alert.alert(color)}/>
      )
  }
 }

AppRegistry.registerComponent('colorlist', () => App)

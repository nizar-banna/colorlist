import React, { Component } from 'react';
import {AppRegistry,StyleSheet, ListView ,Text,AsyncStorage} from 'react-native'
import ColorButton from './components/ColorButton'
import ColorForm from './components/ColorForm'

export default class App extends React.Component {
  constructor(){
    super()
      this.ds = new ListView.DataSource({
        rowHasChanged: (r1,r2) => r1 !== r2
      })
        const avilableColors = ['green','white','pink']

      this.state = {
        backgroundColor:'green',
        avilableColors,
        dataSource: this.ds.cloneWithRows(avilableColors)

      }
        this.changeColor =  this.changeColor.bind(this)
        this.newColor = this.newColor.bind(this)
       }
   componentDidMount(){
    AsyncStorage.getItem(
      '@ColorListStore:colors',
      (err,data) => {
        if (err) {
          console.log("err loading colors",err)
        }else{
          const avilableColors = JSON.parse(data)
          this.setState({
            avilableColors,
            dataSource :this.ds.cloneWithRows(avilableColors)
          })
        }
      }

      )
        
   }    

   saveColors(colors){
    AsyncStorage.setItem(
      '@ColorListStore:colors',
      JSON.stringify(colors)
      )
   }    

   changeColor(backgroundColor){
          this.setState ({backgroundColor})
        }

    newColor(color){
      const avilableColors=[
        ...this.state.avilableColors,
        color
      ]
      this.setState({
        avilableColors,
        dataSource:this.ds.cloneWithRows(avilableColors)

     })
      this.saveColors(avilableColors)
    }    


  render() {
    const { backgroundColor , dataSource } = this.state
    return (
     <ListView style={[styles.container,{ backgroundColor }]}
        dataSource={dataSource}
        renderRow={(color) => (
            <ColorButton backgroundColor = {color}
            onSelect={this.changeColor}/>
          )}
      renderHeader={()=> (
        <ColorForm onNewColor={this.newColor}/>
      )}>
    </ListView>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  header:{
    fontSize:30,
    fontWeight:'bold',
    textAlign:'center',
    paddingTop:30
  }
})

AppRegistry.registerComponent('colorlist', () => App)

import React, { Component } from 'react';
import {StyleSheet, ListView ,Text,AsyncStorage} from 'react-native'
import PropTypes from 'prop-types'
import ColorButton from './ColorButton'
import ColorForm from './ColorForm'

export default class ColorList extends React.Component {
  constructor(){
    super()
      this.ds = new ListView.DataSource({
        rowHasChanged: (r1,r2) => r1 !== r2
      })
        const avilableColors = []

      this.state = {
        avilableColors,
        dataSource: this.ds.cloneWithRows(avilableColors)

      }
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
            onSelect={this.props.onColorSelected}/>
          )}
      renderHeader={()=> (
        <ColorForm onNewColor={this.newColor}/>
      )}>
    </ListView>
    )
  }
}

ColorList.defaultProps = {
  onColorSelected : f=>f
}

ColorList.propTypes= {
  onColorSelected :PropTypes.func
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  header:{
    fontSize:30,
    fontWeight:'bold',
    textAlign:'center',
    paddingTop:30
  }
})


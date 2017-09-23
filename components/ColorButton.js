import React from'react'
import {StyleSheet, Text, View ,TouchableHighlight} from 'react-native'

const ColorButton = ({ backgroundColor , onSelect=f=>f })=> (

	<TouchableHighlight style={styles.button}
        onPress={() => onSelect(backgroundColor)}
        underLayColor='orange'>

          <View style={styles.row}>
            <View style={[styles.sample, {backgroundColor}]} />
              <Text style={styles.text}>{backgroundColor}</Text>
          </View>
      </TouchableHighlight>

      )
const styles = StyleSheet.create({
  row:{
   flexDirection:'row',
   alignItems:'center',

  },
  button:{
   alignSelf:'stretch',
   borderRadius:10,
   borderWidth:2,
   backgroundColor:'rgba(255,255,255,0.8)',
   margin:10,
   padding:10

  },
  sample:{
   width:20,
   height:20,
   borderRadius:10,
   backgroundColor:'white',
   margin:5

  },
   text:{
    margin:5,
    fontSize:30
  }
})

export default ColorButton

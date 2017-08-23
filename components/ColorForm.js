import React ,{ Component } from 'react'
import {
	StyleSheet,
	TextInput,
	View,
	Text

	} from 'react-native'

export default class ColorForm extends Component{
	constructor(){
		super()
		this.state={
			txtColor:''
		}
		this.submit = this.submit.bind(this)

		}
		submit(){
			this.props.onNewColor(this.state.txtColor.toLowerCase())
			this.setState({txtColor:''})
		}  
	
	render(){
		return(
			<View style={styles.container}>
				<TextInput style={styles.txtInput}
					placeholder="enter a color..."
					onChangeText={(txtColor)=>this.setState({txtColor})}
					value= {this.state.txtColor }

				/>
				<Text style={styles.button}
					onPress={this.submit}
					>Add</Text>
			</View>
			)
	}
}

ColorForm.propTypes= {
	onNewColor: React.PropTypes.func.isRequired
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		flexDirection:'row',
		justifyContent:'flex-start',
		backgroundColor:'lightgrey',
		height:80,
		paddingTop:20
	},
	txtInput:{
		flex:1,
		borderWidth:2,
		borderRadius:5,
		margin:5,
		paddingTop:5,
		backgroundColor:'snow',
		fontSize:30
	},
	button:{
		fontSize:30,
		backgroundColor:'darkblue',
		margin:5,
		padding:5,
		justifyContent:'center',
		alignItems:'center',
		color:'white'
	}
})

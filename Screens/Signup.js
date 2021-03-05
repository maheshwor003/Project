
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator, Image} from 'react-native';
import firebase from '../Database/firebase';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';

import { TouchableOpacity } from 'react-native-gesture-handler';




export default class Signup extends Component {
  
  
  constructor() {
    super();
    this.state = { 
      displayName: '',
      email: '', 
      password: '',
      isLoading: false
    }
  }
  

  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  registerUser = () => {
    if(this.state.email === '' && this.state.password === '') {
      Alert.alert('Enter details to signup!')
    } else {
      this.setState({
        isLoading: true,
      })
      firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((res) => {
        res.user.updateProfile({
          displayName: this.state.displayName
        })
        console.log('User registered successfully!')
        this.setState({
          isLoading: false,
          displayName: '',
          email: '', 
          password: ''
        })
        this.props.navigation.navigate('Login')
      })
      .catch(error => this.setState({ errorMessage: error.message }))      
    }
  }

  

  render() {
    if(this.state.isLoading){
      return(
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E"/>
        </View>
      )
      
    }    
    return (
   
        
      <View style={styles.container}>    
      
      <Text style={styles.text}> Sign Up Screen</Text>
      <Image
        source={{
          uri: 'https://i0.wp.com/www.rabinsxp.com/blog/wp-content/uploads/2016/12/AboutNepal.US-Logo-without-text.png' }}
    
        style={styles.logo}
      />
                           
      <FormInput
  value={this.state.displayName}
  onChangeText={(val) => this.updateInputVal(val, 'displayName')}
  placeholderText="Full Name" 

  
  autoCapitalize="none"
  autoCorrect={false}
  ></FormInput>              
                        
     
<FormInput 
 value={this.state.email}
 onChangeText={(val) => this.updateInputVal(val, 'email')}
  placeholderText="Email" 
  iconType="user"
   keyboardType="email-address"
  autoCapitalize="none"
  autoCorrect={false}
  ></FormInput>  
  
  
<FormInput 

  placeholderText="Password" 
  value={this.state.password}
  onChangeText={(val) => this.updateInputVal(val, 'password')}
  maxLength={15}
  secureTextEntry={true}


  ></FormInput>

      
        
<FormInput 

  placeholderText="Retype Password" 
  iconType="lock"
  secureTextEntry={true}


  ></FormInput>
 
          <FormButton
  buttonTitle="Sign Up"
  onPress={() => this.registerUser()}
/>
<Text style={styles.color_textPrivate}> Read alla twhe terms and Condition before sign in</Text>

       
<TouchableOpacity style={styles.forgetButton}  
onPress={()=> this.props.navigation.navigate('Login')}>
<Text style={styles.navButtonText}> Have an account!Click Here!!</Text>
</TouchableOpacity>
                    
   
        </View>
      
       
     
    );
  }
}

const styles = StyleSheet.create({
  container: {
  
    backgroundColor: '#f9fafd',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    height: 200,
    width: 200,
    resizeMode: 'cover',
    borderRadius:20,
    borderColor:'#ba55d3',
    borderWidth:2

  },
  text: {

    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 15,
    fontSize:3
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
   
  
  },
  color_textPrivate: {
    fontSize: 13,
    fontWeight: '400',
    margin:20,
   
    color: 'grey',
  }
});



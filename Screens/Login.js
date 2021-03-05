import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator, Image,StatusBar } from 'react-native';
import firebase from '../Database/firebase';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';
import { TouchableOpacity } from 'react-native-gesture-handler';
export default class Login extends Component {
  
  constructor() {
    super();
    this.state = { 
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

  userLogin = () => {
    if(this.state.email === '' && this.state.password === '') {
      Alert.alert('Enter details to signin!')
    } else {
      this.setState({
        isLoading: true,
      })
      firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((res) => {
        console.log(res)
        console.log('User logged-in successfully!')
        this.setState({
          isLoading: false,
          email: '', 
          password: ''
        })
        this.props.navigation.navigate('Home')
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
       <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#f4eceb" translucent={true}></StatusBar>
      <Text style={styles.text}>Visit Nepal Login Screen</Text>
      <Image
        source={{
          uri: 'https://travelinnepaltreks.com/wp-content/uploads/2019/06/Visit-Nepal-2020.jpg' }}
    
        style={styles.logo}
      />
     <FormInput 
  
 
    placeholderText="Email" 
  
    keyboardType ="email-address"
    autoCapitalize="none"
    autoCorrect={false}
    value={this.state.email}
    onChangeText={(val) => this.updateInputVal(val, 'email')}
    ></FormInput>
       
    <FormInput 

    placeholderText="Password" 

    secureTextEntry={true}
    value={this.state.password}
    onChangeText={(val) => this.updateInputVal(val, 'password')}
    maxLength={15}
 
    ></FormInput>
      <FormButton
    buttonTitle="Login" 
    onPress={() => this.userLogin()}
  />
  <TouchableOpacity style={styles.forgetButton} onPress={()=>{}}> 

<Text style={styles.navButtonText}> Forgot Password? </Text>
</TouchableOpacity> 
 
<TouchableOpacity style={styles.forgetButton}  
 onPress={() => this.props.navigation.navigate('Signup')}>
<Text style={styles.navButtonText}>  Don't have account? Click here to signup!!!</Text>
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
    height: 300,
    width: 300,
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
  
  
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    marginBottom:10,
    marginTop:10,
  
  },
});



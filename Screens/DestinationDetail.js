

import React, {Component} from 'react';  
import {Platform, StyleSheet, Text, View,Button,Image,ScrollView,TouchableOpacity} from 'react-native';  
import Swiper from 'react-native-swiper/src';  
 
export default class Detail extends Component {  
  render() {  
    const params = this.props.navigation.state.params
    return (  
      <View>
            <Text style={{fontSize:24, fontWeight:'bold',textAlign:'center'}} >{params.destination}</Text>
     
        <ScrollView style={{marginTop:5, elevation:6}}  showsHorizontalScrollIndicator={false} >
             <View style={styles.sliderContainer}>
          <Swiper autoplay ={true}  height={200} activeDotColor='#808080'  >
         <View style={styles.slide}>
            <Image 
           source={{
            uri:params.image1 }}
           resizeMode='cover'
           style={styles.sliderImage}
            />
           </View>

           <View style={styles.slide}>
            <Image 
          source={{
            uri: params.image2 }}
       
           resizeMode='cover'
           style={styles.sliderImage}
            />
           </View>

           <View style={styles.slide}>
            <Image 
           source={{uri:params.image3}}
           resizeMode='cover'
           style={styles.sliderImage}
            />
           </View>

         </Swiper>
         </View>  
                 
         <View style={{marginLeft:20}}>
     <Text style={{fontSize:25, fontWeight:'bold',textAlign:'left'}} >About</Text>
     <View
  style={{
    borderBottomColor: 'black',
    borderBottomWidth: 1,
 marginRight:20
  }}>
    
</View>
<View style={{marginRight:5}}>
<Text style={styles.cardTitle} >Weather:{params.weather} </Text>
<Text style={styles.cardTitle} >Best Time:{params.besttime} </Text>
<Text style={styles.cardTitle} >Distance:{params.distance} </Text>
<Text style={styles.cardTitle} >Stay:{params.stay} </Text>

<View style={styles.cont}>
              <View style={styles.buttonContainer}>
              <TouchableOpacity>  
                    <View style={styles.button}>  
                        <Text style={styles.buttonText}>Food and Restaurants</Text>  
                    </View>  
                </TouchableOpacity>  
              </View>
              <View style={styles.buttonContainer}>
              <TouchableOpacity>  
                    <View style={styles.button}>  
                        <Text style={styles.buttonText}>Hotels and Accomodation</Text>  
                    </View>  
                </TouchableOpacity>  
              </View>
          
            </View>
            <View style={styles.cont}>
              <View style={styles.buttonContainer}>
              <TouchableOpacity>  
                    <View style={styles.button}>  
                        <Text style={styles.buttonText}>Maps</Text>  
                    </View>  
                </TouchableOpacity>  
              </View>
              <View style={styles.buttonContainer}>
              <TouchableOpacity>  
                    <View style={styles.button}>  
                        <Text style={styles.buttonText}>How to reach there</Text>  
                    </View>  
                </TouchableOpacity>  
              </View>
          
            </View>
  <Text style={styles.cardDetails} >{params.detail1}  </Text>
             
            <Text style={styles.cardDetails} >{params.detail2}</Text>
                       
             </View>  
     </View>
                 </ScrollView>
      </View>  
    );  
  }  
}  

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cont: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:8,
},

button: {  
  marginBottom: 10,  
  width: 160,
  height:60,  
  alignItems: 'center',  
  backgroundColor: '#000000',
  borderRadius:10,
  borderColor: '#808080', 
  borderWidth:2,
},  
buttonText: {  
  margin:15,
  color: 'white',  
  fontSize: 15  
}  ,
buttonContainer: {
    marginLeft:8,
    flex:1,
    marginRight:20,
   
    
   
},

slide: {
  flex: 1,
  justifyContent: 'center',
  backgroundColor: 'transparent',
  borderRadius: 8,
},
btnContainerStyle: {
  backgroundColor: '#3F51B5',
  paddingVertical: 8,
 
  borderRadius: 5
},
btnTextStyle: {
  color: '#ffffff',
  fontSize: 16,
  textTransform: 'uppercase',
  textAlign: 'center',
  fontFamily: 'Quicksand-Medium'
},
sliderImage: {
  height: '100%',
  width: '100%',
  alignSelf: 'center',
  borderRadius: 8,
  
},
sliderContainer: {
  height: 200,
  width: '90%',
  marginBottom: 10,
  justifyContent: 'center',
  alignSelf: 'center',
  borderRadius: 8,


},
cardTitle:{
  fontSize: 20,

 
  
},

cardDetails: {
  fontSize: 18,
  color: '#808080',
  textAlign:"left",
  height:400,
  
  alignSelf: 'center',
},

});
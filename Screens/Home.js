
import React, {Component} from 'react';  
import { View, Text, StyleSheet, FlatList, Image, TouchableNativeFeedback,TouchableOpacity,ScrollView} from 'react-native';
import data from '../Database/db';
import Swiper from 'react-native-swiper/src';
 
export default class AllEvents extends Component {  
  state ={
    data: data,
    bgColor:['#70a1ff','#7bed9f','#2ed573','#1e90ff','#ffa502','#ff6b81']
}
  render() {  
    return ( 

      <View style={styles.container}> 
       
      <View style={styles.sliderContainer}>
          <Swiper autoplay horizontal={false}  height={200} activeDotColor='#821fe0'  >
         <View style={styles.slide}>
            <Image 
           source={{
            uri: 'https://www.planetware.com/wpimages/2019/12/nepal-in-pictures-beautiful-places-to-photograph-annapurna-range.jpg' }}
           resizeMode='cover'
           style={styles.sliderImage}
            />
           </View>

           <View style={styles.slide}>
            <Image 
          source={{
            uri: 'https://cdn.kimkim.com/files/a/content_articles/featured_photos/95553f94d93aea6a42ea8ee16315830ac41fcd7a/big-742b52a5e89568dd813531fc63897836.jpg' }}
       
           resizeMode='cover'
           style={styles.sliderImage}
            />
           </View>

           <View style={styles.slide}>
            <Image 
           source={{uri:'https://cdn.kimkim.com/files/a/content_articles/featured_photos/050a89ea730f913b48cf7dea23719688bc3652fe/big-891ee83ca306656a3c388f949db9e72d.jpg'}}
           resizeMode='cover'
           style={styles.sliderImage}
            />
           </View>

         </Swiper>
         </View>
         
  
         <View style={[styles.categoryContainer, {marginTop:10}]}>
       
       <TouchableOpacity style={styles.categoryBtn} onPress={() => {this.props.navigation.navigate('Nature')}}>
       <View style={styles.categoryIcon}>
       <Image source={{uri:'https://w7.pngwing.com/pngs/889/101/png-transparent-computer-icons-natural-environment-nature-natural-resource-coral-collection-leaf-hand-logo.png'}}
                resizeMode='contain'
                style={{width:40,height:30}}>
       </Image>
       </View>
       <Text style={styles.categoryBtnTxt}>Nature</Text>
       </TouchableOpacity>
     
       <TouchableOpacity style={styles.categoryBtn} onPress={() => {this.props.navigation.navigate('Religious')}}>
       <View style={styles.categoryIcon}>
       <Image source={{uri:'https://img.lovepik.com/element/40051/3446.png_860.png'}}
                resizeMode='contain'
                style={{width:40,height:50}}>
       </Image> 
       </View>
       <Text style={styles.categoryBtnTxt}>Religious</Text>
       </TouchableOpacity>

       <TouchableOpacity style={styles.categoryBtn} onPress={() => {this.props.navigation.navigate('Adventure')}}>
       <View style={styles.categoryIcon}>
       <Image source={{uri:'https://sacredexplorations.in/wp-content/uploads/2019/11/trekking-png-2.png'}}
                resizeMode='contain'
                style={{width:30,height:30}}>
       </Image>
       </View>
       <Text style={styles.categoryBtnTxt}>Adventure</Text>
       </TouchableOpacity>
  </View>
  <View style={styles.sliderplace}>
  <Text
          style={{
            alignSelf: 'center',
            fontSize: 18,
            fontWeight: 'bold',
            color: '#333',
          }}>
          Recently Viewed
        </Text>
        <FlatList   style={{width:'100%'}}
                               data={this.state.data}
                               keyExtractor={(item,index) => index.toString()} 
                               showsVerticalScrollIndicator={false}
                               renderItem= {({item}) => {
                                   return (
                                                
<TouchableNativeFeedback onPress={() => this.props.navigation.navigate('Detail', {...item})} >
  
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
            
              source={{uri:item.image1}} resizeMode='cover'
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>{item.destination}</Text>
          
            <Text style={styles.cardDetails}>
            {item.venue}
            </Text>
          </View>
        </View>
        </TouchableNativeFeedback>
             
                                   )
                                  

                               }}
                                />
                </View>

                               
      </View>  
  
    );  
  }  
}  

  
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sliderContainer: {
    height: 200,
    width: '90%',
    marginTop: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
  },
  sliderplace: {
    height: 310,
    width: '90%',
    marginTop: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
  },
  wrapper: {},

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
  },
  sliderImage: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
  },
  categoryContainer: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginTop: 25,
    marginBottom: 10,
  },
  categoryBtn: {
    flex: 1,
    width: '30%',
    marginHorizontal: 0,
    alignSelf: 'center',
  },
  categoryIcon: {
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 70,
    height: 70,
    backgroundColor: '#fdeae7' /* '#FF6347' */,
    borderRadius: 50,
  },
  categoryBtnTxt: {
    alignSelf: 'center',
    marginTop: 5,
    color: '#de4f35',
  },
  cardsWrapper: {
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
  },
  card: {
    height: 75,
    marginVertical: 10,
    flexDirection: 'row',
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  cardImgWrapper: {
    flex: 1,
  },
  cardImg: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
  cardInfo: {
    flex: 2,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: '#fff',
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  cardDetails: {
    fontSize: 12,
    color: '#444',
  },
});

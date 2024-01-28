import React from 'react';
import {View, StyleSheet} from 'react-native';
import Carousel from 'react-native-snap-carousel';

import img_1 from '../assets/voitures/1.jpg'
import img_2 from '../assets/voitures/2.jpg'
import img_3 from '../assets/voitures/3.jpg'
import img_4 from '../assets/voitures/4.jpg'
import img_5 from '../assets/voitures/5.jpg'

const Carousel = () => {


    const data = [
        { src: img_1, img: 'Bugatti Veyron' },
        { src: img_2, img: 'Porsche 918 Spyder' },
        { src: img_3, img: 'Lamborghini Aventador' },
        { src: img_4, img: 'Ferrari F12berlinetta' },
        { src: img_5, img: 'McLaren 650S Coupe' },
    ];

    const renderItem = ({ item }) => (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', maxHeight:300, marginTop:20}}>
            <Image source={item.src} style={{flex:1, justifyContent:'center', width:"100%",marginVertical:0, paddingVertical:0}} resizeMode='center'/>
            <Text style={{fontSize:20}}>{item.img}</Text>
        </View>
    );


    return (
        <View>
             <Carousel
                data={data}
                renderItem={renderItem}
                sliderWidth={width}
                itemWidth={width-40}
                layout="default"
                loop
            />
        </View>
    );
}

const styles = StyleSheet.create({})

export default Carousel;

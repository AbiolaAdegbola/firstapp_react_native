import React from 'react';
import { View, StyleSheet, Text, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import img_1 from '../assets/voitures/1.jpg'
import img_2 from '../assets/voitures/2.jpg'
import img_3 from '../assets/voitures/3.jpg'
import img_4 from '../assets/voitures/4.jpg'
import img_5 from '../assets/voitures/5.jpg'
import Card from '../composants/Card';

const Home = ({ navigation }) => {
    const voitures = [
        {star:4, img: img_1, description:' Prix de ce véhicule de luxe : 2 millions d’euros.' ,title: 'Bugatti Veyron' ,info:'Considérée comme la voiture la plus chère au monde, la Bugatti Veyron est une voiture sportive exceptionnelle qui peut passer de 0 à 100 km/h en seulement 2,5 secondes et dont la vitesse maximale est de 417,6 km/h. '},
        {star:5, img: img_2, description:'Prix de la voiture : 775 000 euros.' ,title: 'Porsche 918 Spyder' ,info:'La Porsche 918 Spyder est une voiture de sport hybride, dévoilée en septembre 2013 et produite à seulement 918 exemplaires. Sa vitesse maximale est de 345 km/h et le bolide peut atteindre 100 km/h en 2,6 secondes.'},
        {star:3, img: img_3, description:'Prix du bolide : à partir de 210 000 euros.' ,title: 'Lamborghini Aventador' ,info:'Sortie de l’usine à la fin de l’année 2013, la Lamborghini Gallardo est une des voitures de sport les plus produites avec 14 022 unités conçues. Cette belle voiture peut atteindre la vitesse de 320 km/h.'},
        {star:2, img: img_4, description:'Prix du bolide : 271 786 euros.' ,title: 'Ferrari F12berlinetta' ,info:'Dévoilée le 29 février 2012, la F12berlinetta est une voiture de sport qui remplace la Ferrari 599 GTB Fiorano. Sa vitesse maximale est de 340 km/h et elle peut atteindre 100 km/h en 3,1 secondes'},
        {star:3, img: img_5, description:' Prix du véhicule : 250 000 euros.' ,title: 'McLaren 650S Coupe' ,info:'Avec une vitesse maximale de 333 km/h et une accélération de 0 à 100 km/h en seulement 2,9 secondes, la McLaren 650S Coupe est un bolide exceptionnel. La couleur ne vous laissera pas de marbre !'},
    ];


    const { width, height } = Dimensions.get('window');


    return (
        <ScrollView style={{ flex: 1 }}>
            <View style={{flex:1, justifyContent:"center", marginTop:40, marginBottom:30}}>
                <Text style={{fontSize:18,fontWeight:700, textAlign:"center"}}>Top 5 des plus belles voitures de sport</Text>
            </View>
            {
                voitures.map((data, index) => {
                    return (
                        <TouchableOpacity key={index} style={{ flex: 1, justifyContent: 'center' }} onPress={() =>navigation.navigate('carInfo', {info:data})}>
                            <Card title={data.title} img={data.img} description={data.description} star={data.star} />
                        </TouchableOpacity>
                    )
                })
            }

        </ScrollView>
    );
}

const styles = StyleSheet.create({})

export default Home;

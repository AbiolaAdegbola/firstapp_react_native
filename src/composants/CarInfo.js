import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text, ScrollView } from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const CarInfo = ({ route, navigation }) => {
    const { info } = route.params
    return (
        <ScrollView>

            <TouchableOpacity style={{zIndex:999}}>
                <FontAwesome6 name="arrow-left" style={{ fontSize: 22, fontWeight: "bold", margin: 20 }} onPress={() => navigation.goBack()} />
            </TouchableOpacity>

            <View>
                <Image source={info.img} style={{ width: "100%", height: 400,marginTop:-60 }} />

                <View style={{ flexDirection: 'row', alignItems: "center" }}>
                        <FontAwesome name='star' style={{ fontSize: 18, color: "orange" }} />
                        <FontAwesome name='star' style={{ fontSize: 18, color: "orange" }} />
                        <FontAwesome name={info.star >= 3 ? "star" : "star-o"} style={{ fontSize: 18, color: "orange" }} />
                        <FontAwesome name={info.star >= 4 ? "star" : "star-o"} style={{ fontSize: 18, color: "orange" }} />
                        <FontAwesome name={info.star >= 5 ? "star" : "star-o"} style={{ fontSize: 18, color: "orange" }} />
                    </View>

                <Text style={{ fontSize: 22, fontWeight: 700, textAlign: "center", marginTop: 20, marginBottom: 20 }}> {info.title}</Text>
                <Text style={{ fontSize: 18, fontWeight: 300, marginBottom: 20 }}> {info.description} </Text>
                <Text style={{ textAlign: "justify", marginHorizontal: 5 }}> {info.info} </Text>
            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({})

export default CarInfo;

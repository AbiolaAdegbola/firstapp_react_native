import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import FontAwesome6Icon from 'react-native-vector-icons/FontAwesome6';

const CarInfo = ({route, navigation}) => {
    const {info} = route.params
    console.log(info)
    return (
        <View>

            <TouchableOpacity>
                <FontAwesome6Icon name="arrow-left" style={{fontsize:22, fontWeight:"bold", margin:20}}/>
            </TouchableOpacity>
            
        </View>
    );
}

const styles = StyleSheet.create({})

export default CarInfo;

import React from 'react';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome';
import { View, Text, Image, StyleSheet } from 'react-native';

const Card = ({ img, title, description,star }) => {

    return (
        <View style={styles.card} >
            <Image
                source={img}
                style={styles.cardImage}
            />
            <View style={styles.cardContent}>
                <View style={{flexDirection: "row", justifyContent:"space-between"}}>
                    <Text style={styles.cardTitle}>{title}</Text>
                    <View style={{ flexDirection: 'row', alignItems:"center" }}>
                        <FontAwesome6 name='star' style={{fontSize:18, color:"orange"}}/>
                        <FontAwesome6 name='star' style={{fontSize:18, color:"orange"}} />
                        <FontAwesome6 name={star >= 3 ? "star" : "star-o"} style={{fontSize:18, color:"orange"}} />
                        <FontAwesome6 name={star >= 4 ? "star" : "star-o"} style={{fontSize:18, color:"orange"}} />
                        <FontAwesome6 name={star >= 5 ? "star" : "star-o"} style={{fontSize:18,color:"orange"}} />
                    </View>
                </View>
                <Text style={styles.cardDescription}>{description}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        borderRadius: 8,
        backgroundColor: '#fff',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 10,
        marginVertical: 10,
    },
    cardImage: {
        width: '100%',
        height: 200,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    cardContent: {
        padding: 15,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    cardDescription: {
        marginTop: 10,
        color: '#555',
    },
});

export default Card;
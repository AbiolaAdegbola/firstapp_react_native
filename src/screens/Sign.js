import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

const Sign = ({ navigation }) => {



    return (
        <View style={styles.contenair}>

            <Text style={{ fontSize: 40, color: 'orange', marginBottom: 30 }}>S'inscrire</Text>

            <View style={styles.contenairInput}>
                <FontAwesome6 name='user' style={{ fontSize: 20, color: "orange", paddingHorizontal: 10 }} />
                <TextInput placeholder='Nom' style={styles.input} />
            </View>

            <View style={styles.contenairInput}>
                <FontAwesome6 name='user' style={{ fontSize: 20, color: "orange", paddingHorizontal: 10 }} />
                <TextInput placeholder='Prénom' style={styles.input} />
            </View>

            <View style={styles.contenairInput}>
                <FontAwesome6 name='message' style={{ fontSize: 20, color: "orange", paddingHorizontal: 10 }} />
                <TextInput placeholder='E-mail' style={styles.input} />
            </View>

            <View style={styles.contenairInput}>
                <FontAwesome6 name='phone' style={{ fontSize: 20, color: "orange", paddingHorizontal: 10 }} />
                <TextInput placeholder='Numéro de Téléphone' style={styles.input} />
            </View>

            <View style={styles.contenairInput}>
                <FontAwesome6 name='lock' style={{ fontSize: 20, color: "orange", paddingHorizontal: 10 }} />
                <TextInput placeholder='Password' style={styles.input} secureTextEntry />
            </View>

            <TouchableOpacity style={{ marginTop: 10 }}>
                <Text style={{ fontSize: 20, backgroundColor: "orange", padding: 10, width: 200, textAlign: "center", fontWeight: "700", color: "white", borderRadius: 5 }}>Valider</Text>
            </TouchableOpacity>

            <View style={{ flexDirection: "row", marginTop: 30 }}>
                <Text>Vous avez déjà un compte ? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('connexion')}><Text style={{ color: "blue", marginLeft: 5 }} >connexion</Text></TouchableOpacity>
            </View>

            <Text style={{ marginTop: 20, fontWeight: 100 }}>-----------------------------------------------------------</Text>
            <View style={{ flexDirection: "row", marginTop: 20 }}>
                <TouchableOpacity><FontAwesome6 name='facebook' style={{ color: "#0165E1", fontSize: 30, margin: 20 }} /></TouchableOpacity>
                <TouchableOpacity><FontAwesome6 name='google' style={{ color: "orange", fontSize: 30, margin: 20 }} /></TouchableOpacity>
                <TouchableOpacity><FontAwesome6 name='twitter' style={{ color: "#1DA1F2", fontSize: 30, margin: 20 }} /></TouchableOpacity>
                <TouchableOpacity><FontAwesome6 name='linkedin' style={{ color: "#0077B5", fontSize: 30, margin: 20 }} /></TouchableOpacity>
            </View>


        </View>
    );
}

export default Sign;

const styles = StyleSheet.create({
    contenair: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center"
    },
    contenairInput: {
        flexDirection: 'row',
        alignItems: "center",
        marginBottom: 40
    },
    input: {
        flex: 1,
        paddingHorizontal: 10,
        fontSize: 18,
        borderBottomWidth: 1,
        marginRight: 20
    }
})
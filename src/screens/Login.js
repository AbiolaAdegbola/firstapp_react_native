import React from 'react';
import SvgImage from '../assets/svg/connexion.svg';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SvgUri } from 'react-native-svg'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { useForm, Controller } from 'react-hook-form';

const Login = ({ navigation }) => {
  const { control, handleSubmit, formState } = useForm();

  const onSubmit = (data) => {
    console.log('Form Data:', data);
    navigation.navigate('Home')
    // You can perform any other actions with the form data here
  };

  return (
    <View style={styles.contenair}>
      <SvgUri width="200" height="200" source={SvgImage} />
      <View>
        <Text style={styles.titre}>Connexion</Text>
      </View>

      <Controller
        control={control}
        render={({ field }) => (
          <View style={styles.contenairInput}>
            <FontAwesome6 name={'user'} solid style={{ fontSize: 20, color: "orange", paddingHorizontal: 10 }} />
            <TextInput placeholder='Email' style={styles.input}
              value={field.value}
              onChangeText={(text) => field.onChange(text)}
              keyboardType="email-address"
            />
          </View>
        )}
        name="Email"
        rules={{ required: 'Email is required' }}
      />

      <Controller
        control={control}
        render={({ field }) => (
          <View style={styles.contenairInput}>
            <FontAwesome6 name={'lock'} solid style={{ fontSize: 20, color: "orange", paddingHorizontal: 10 }} />
            <TextInput placeholder='Password' style={styles.input} secureTextEntry
              value={field.value}
              onChangeText={(text) => field.onChange(text)}
            />
          </View>
        )}
        name="Mot de passe"
        rules={{ required: 'Mot de passe is required' }}
      />

      <TouchableOpacity style={{ marginTop: 30 }} onPress={handleSubmit(onSubmit)}>
        <Text style={{ fontSize: 20, backgroundColor: "orange", padding: 10, width: 200, textAlign: "center", fontWeight: "700", color: "white", borderRadius: 5 }}>Valider</Text>
      </TouchableOpacity>

      <View style={{ flexDirection: "row", marginTop: 40 }}>
        <Text>Créez un compte ?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('inscription')}><Text style={{ color: "blue", marginLeft: 5 }} >s'inscrire</Text></TouchableOpacity>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  contenair: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titre: {
    fontSize: 40,
    fontWeight: "400",
    color: "orange",
    marginBottom: 30
  },
  contenairInput: {
    flexDirection: 'row',
    alignItems: "center",
    marginBottom: 30
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    fontSize: 18,
    borderBottomWidth: 1,
    marginRight: 20
  }
});

export default Login;

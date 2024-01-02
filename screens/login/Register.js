import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Register = () => {
  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    if (username && password && confirmPassword && password === confirmPassword) {
      // You can perform registration logic here
      alert(`Registered with Username: ${username} and Password: ${password}`);
      // Navigate to the login screen or any other screen as needed
      navigation.navigate('Login');
    } else {
      alert('Please enter valid information and ensure passwords match.');
    }
  };
  const Login = () => {
    // Navigate to the "Register" screen
    navigation.navigate('Login');
  };

  return (
    <View style={styles.home}>
      <Text style={styles.title}>Register</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={(text) => setUsername(text)}
        value={username}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry={true}
      />

      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        onChangeText={(text) => setConfirmPassword(text)}
        value={confirmPassword}
        secureTextEntry={true}
      />

      <TouchableOpacity style={styles.button} onPress={Login}>
        <Text style={styles.buttonText}>Đăng kí</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: '#d9f3c5',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: 300,
    height: 50,
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#EEEEEE',
    borderWidth: 1.5,
    borderColor: '#000000',
    borderRadius: 15,
  },
  button: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 20,
    width: 300,
    height: 50,
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Register;

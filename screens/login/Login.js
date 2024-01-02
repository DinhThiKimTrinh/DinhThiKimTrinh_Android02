import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome, AntDesign, Entypo } from 'react-native-vector-icons';

const Login = () => {
  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username && password) {
      // Bạn có thể thực hiện xác thực ở đây (gửi thông tin đăng nhập đến máy chủ, v.v.)
      alert(`Login với Tên người dùng: ${username} và Mật khẩu: ${password}`);
      // Điều hướng đúng
    } else {
      alert('Vui lòng nhập cả tên người dùng và mật khẩu.');
    }
  };

  const handleForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };
  const handleRegister = () => {
    // Navigate to the "Register" screen
    navigation.navigate('Register');
  };

  return (
    <View style={styles.home}>
      <Text style={styles.title}>My Account</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={(text) => setUsername(text)}
        value={username}
      />
    <View style={styles.passwordContainer}>
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry={true}
      />
  </View>
      <TouchableOpacity style={styles.forgotPassword} onPress={handleForgotPassword}>
        <Text style={styles.forgotPasswordText}>Quên mật khẩu</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TrangChu')}>
        <Text style={styles.buttonText}>Đăng nhập</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button1} onPress={handleRegister}>
        <Text style={styles.buttonText}>Đăng ký</Text>
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
  forgotPassword: {
    width: 150,
    left: 100,
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
    bottom: -10,
  },
  button1: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 20,
    width: 300,
    height: 50,
    bottom: -20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bottomRightIcons: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-around',
    bottom: 100,
    right: 10,
    zIndex: 1,
  },
  socialIcon: {
    padding: 10,
    borderRadius: 50,
    backgroundColor: '#fff',
  },
});

export default Login;

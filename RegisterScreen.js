import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';

export default function RegisterScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const isValidEmail = (email) => {
        const regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
        return regex.test(email);
    };
    const handleRegister = async () => {
        if (!isValidEmail(email)) {
            setError('Email phải có định dạng @gmail.com');
            return;
          }
      
          if (name.trim() === '' || password.trim() === '') {
            setError('Tên và mật khẩu không được để trống');
            return;
          }
        try {
            const response = await fetch('https://65042ff8c8869921ae24a8f8.mockapi.io/demo1/api/v1/User', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    name,
                    password,
                }),
            });

            if (response.ok) {
                setSuccessMessage('Đăng ký thành công! Đang chuyển hướng...');
                setError('');
                setTimeout(() => {
                    navigation.replace('LoginScreen');
                }, 2000);
            } else {
                setError('Đăng ký thất bại. Vui lòng thử lại.');
                setSuccessMessage('');
            }
        } catch (error) {
            console.error(error);
            setError('Đã xảy ra lỗi khi đăng ký.');
            setSuccessMessage('');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Register</Text>

            <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#aaa"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Name"
                placeholderTextColor="#aaa"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#aaa"
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
            />

            {error ? <Text style={styles.errorText}>{error}</Text> : null}
            {successMessage ? <Text style={styles.successText}>{successMessage}</Text> : null}

            <Pressable style={styles.registerButton} onPress={handleRegister}>
                <Text style={styles.buttonText}>Register</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#1a1a1a',
    },
    title: {
        color: 'white',
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        padding: 12,
        marginVertical: 10,
        backgroundColor: '#333',
        color: 'white',
        borderRadius: 8,
    },
    registerButton: {
        marginTop: 20,
        backgroundColor: '#2196F3',
        width: '100%',
        padding: 15,
        alignItems: 'center',
        borderRadius: 8,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    errorText: {
        color: 'red',
        marginTop: 10,
    },
    successText: {
        color: 'green',
        marginTop: 10,
    },
});

import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ActivityIndicator,
    TouchableOpacity,
    TextInput,
    Modal,
    Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ProfileScreen({ navigation }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleLogout = async () => {
        await AsyncStorage.removeItem('userId');
        navigation.replace('LoginScreen');
    };

    const handleChangePassword = async () => {
        if (newPassword !== confirmPassword) {
            Alert.alert('Error', 'Mật khẩu không khớp.');
            return;
        }

        try {
            const response = await fetch(
                `https://65042ff8c8869921ae24a8f8.mockapi.io/demo1/api/v1/User/${user.id}`,
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ ...user, password: newPassword }),
                }
            );

            if (response.ok) {
                Alert.alert('Success', 'Đổi mật khẩu thành công!');
                setIsModalVisible(false);
                await AsyncStorage.removeItem('userId');
                navigation.replace('LoginScreen');
            } else {
                Alert.alert('Error', 'Đổi mật khẩu thất bại. Vui lòng thử lại.');
            }
        } catch (error) {
            console.error('Lỗi khi đổi mật khẩu:', error);
            Alert.alert('Error', 'Đã xảy ra lỗi khi đổi mật khẩu.');
        }
    };

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const userId = await AsyncStorage.getItem('userId');
                console.log(userId)
                if (!userId) {
                    navigation.replace('Login');
                    return;
                }

                const response = await fetch(
                    `https://65042ff8c8869921ae24a8f8.mockapi.io/demo1/api/v1/User/${userId}`
                );
                const data = await response.json();
                setUser(data);
            } catch (error) {
                console.error('Lỗi khi lấy thông tin user:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchUserProfile();
    }, []);

    if (loading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#4CAF50" />
            </View>
        );
    }

    if (!user) {
        return (
            <View style={styles.container}>
                <Text style={styles.errorText}>Không thể tải thông tin người dùng</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Profile</Text>
            <Text style={styles.infoText}>Name: {user.name}</Text>
            <Text style={styles.infoText}>Email: {user.email}</Text>

            <TouchableOpacity
                style={styles.changePasswordButton}
                onPress={() => setIsModalVisible(true)}
            >
                <Text style={styles.buttonText}>Change Password</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>

            {/* Modal for Change Password */}
            <Modal
                visible={isModalVisible}
                transparent={true}
                animationType="slide"
                onRequestClose={() => setIsModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Change Password</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="New Password"
                            placeholderTextColor="#aaa"
                            secureTextEntry={true}
                            value={newPassword}
                            onChangeText={setNewPassword}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Confirm Password"
                            placeholderTextColor="#aaa"
                            secureTextEntry={true}
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                        />
                        <View style={styles.modalButtons}>
                            <TouchableOpacity
                                style={styles.saveButton}
                                onPress={handleChangePassword}
                            >
                                <Text style={styles.buttonText}>Save</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.cancelButton}
                                onPress={() => setIsModalVisible(false)}
                            >
                                <Text style={styles.buttonText}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
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
    infoText: {
        color: 'white',
        fontSize: 18,
        marginBottom: 10,
    },
    logoutButton: {
        marginTop: 20,
        backgroundColor: '#f44336',
        padding: 15,
        alignItems: 'center',
        borderRadius: 8,
    },
    changePasswordButton: {
        marginTop: 20,
        backgroundColor: '#2196F3',
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
        fontSize: 18,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
    modalContent: {
        backgroundColor: '#1a1a1a',
        padding: 20,
        borderRadius: 8,
        width: '80%',
        alignItems: 'center',
    },
    modalTitle: {
        color: 'white',
        fontSize: 24,
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
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    saveButton: {
        flex: 1,
        backgroundColor: '#4CAF50',
        padding: 15,
        alignItems: 'center',
        borderRadius: 8,
        marginRight: 5,
    },
    cancelButton: {
        flex: 1,
        backgroundColor: '#f44336',
        padding: 15,
        alignItems: 'center',
        borderRadius: 8,
        marginLeft: 5,
    },
});

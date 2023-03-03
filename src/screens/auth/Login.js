import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const Login = () => {
    const navigation = useNavigation();
    return (
        <View
            style={[
                styles.container,
                {
                    // Try setting `flexDirection` to `"row"`.
                    flexDirection: 'column',
                },
            ]}>
            <View style={[
                styles.headers,
                {
                    // Try setting `flexDirection` to `"colunm"`.
                    flexDirection: 'row',
                },
            ]}>
                <View style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#343542', borderRadius: 79, margin: 28, maxWidth: 50, height: 50
                }}>
                    <Image style={styles.Logo} source={require('../../assets/icons/Logo.png')} />
                    <View style={styles.dot} />
                </View>
                <View style={[styles.titles, { flexDirection: 'column' }]}>
                    <Text style={{
                        flex: 1, paddingTop: 24, color: 'white', fontFamily: 'Outfit',
                        fontStyle: 'normal',
                        fontSize: 24,
                        lineHeight: 20,
                        fontWeight: '900'
                    }}>UpNow</Text>
                    <Text style={{
                        flex: 1, color: '#2D8CFF', fontFamily: 'Outfit',
                        marginBottom: 24,
                        fontStyle: 'normal',
                        fontSize: 14,
                        lineHeight: 18,
                        fontWeight: '400'
                    }}>Digital Hypnotherapy</Text>
                </View>
            </View>
            <View style={styles.borders} />
            <View style={{ flex: 5, alignItems: 'center' }}>
                <Text style={{
                    alignSelf: 'flex-start',
                    marginLeft: '15%',
                    paddingTop: 20,
                    paddingBottom: 10,
                    color: 'white',
                    fontFamily: 'Outfit',
                    fontStyle: 'normal',
                    fontSize: 24,
                    lineHeight: 20,
                    fontWeight: '900'
                }}>Log In</Text>
                <View style={styles.input}>
                    <Entypo style={styles.icons} name="mail" size={18} color="black" />
                    <TextInput style={styles.texts} placeholder="Email" />
                </View>
                <View style={styles.input}>
                    <FontAwesome style={styles.icons} name="lock" size={20} color="black" />
                    <TextInput style={styles.texts} placeholder="Password" />
                </View>

                <Text style={{
                    color: 'white', marginTop: 10, alignSelf: 'flex-end',
                    marginRight: '10%',
                }}>Forgot Password?</Text>
                <TouchableOpacity style={styles.btnLogin}
                    onPress={() => navigation.navigate('HomeDrawer')}>
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: '800', paddingTop: 5, }}>Log in</Text>
                </TouchableOpacity>

                <View style={{ flexDirection: 'row', marginTop: 15 }}><Text style={{ color: 'white' }}>Don’t have an account? </Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Register')}>
                        <Text style={{ fontWeight: 'bold', color: '#FF5889' }}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{ color: 'white', margin: 30 }}>Or  Log in with</Text>
                <TouchableOpacity style={styles.btnFacebook}>
                    <FontAwesome5 style={styles.iconBtn} name="facebook" size={24} color="black" />
                    <Text style={{ color: 'white', fontSize: 16, fontWeight: '500', marginLeft: '18%' }}>Log in with Facebook</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnApple}>
                    <FontAwesome5 style={styles.iconBtn} name="apple" size={24} color="black" />
                    <Text style={{ color: 'white', fontSize: 16, fontWeight: '500', marginLeft: '18%' }}>Log in with Apple</Text>
                </TouchableOpacity>
            </View>

        </View>

    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2D3748CC',
        flex: 1,
    },
    Logo: {
        width: 34,
        height: 34,
    },
    dot: {
        position: 'absolute',
        height: 8,
        width: 8,
        borderRadius: 5,
        backgroundColor: '#60AADA',
    },
    headers: {
        flex: 1,
    },
    borders: {
        height: 1,
        width: '100%',
        borderBottomWidth: 5,
        borderBottomColor: '#2D8CFF',
        backgroundColor: '#2D8CFF',
    },
    titles: {
        flex: 4,
        marginTop: 12,
    },
    input: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'white',
        padding: 15,
        marginVertical: 10,
        borderRadius: 24,
        height: 50,
        paddingVertical: 0,
        width: 327,
        backgroundColor: '#828187',
    },
    icons: {
        marginTop: 15,
        marginLeft: 5,
        color: '#A4BCC1',
    },
    texts: {
        marginLeft: 10,
    },
    btnLogin: {
        alignItems: 'center',
        marginTop: 24,
        padding: 10,
        height: 56,
        width: '90%',
        borderRadius: 30,
        backgroundColor: '#FF9B9C',
    },
    btnFacebook: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        height: 56,
        width: '90%',
        borderRadius: 30,
        backgroundColor: '#3F60B2',
    },
    btnApple: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        padding: 10,
        height: 56,
        width: '90%',
        borderRadius: 30,
        backgroundColor: '#131416',
    },
    iconBtn: {
        color: 'white',
        marginLeft: 10,
    }
});
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Header = ({ title, onMenuPress }) => {
    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={onMenuPress} style={styles.menuButton}>
                <Text style={styles.menuIcon}>☰</Text>
            </TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
            <Image
                source={require('../../assets/images/munipuno.png')} // Ruta de la imagen
                style={styles.logo}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#0088cc',
        padding: 16,
        paddingTop: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
    },
    menuButton: {
        padding: 10,
    },
    menuIcon: {
        fontSize: 24,
        color: '#fff',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
    logo: {
        width: 40,
        height: 40,
    },
});

export default Header;
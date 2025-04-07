import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const LocationButton = ({ onPress }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>📍 Compartir ubicación</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        height: 40,
        backgroundColor: '#b3d9ff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        marginBottom: 15,
    },
    buttonText: {
        fontSize: 16,
        color: 'black',
    },
});

export default LocationButton;
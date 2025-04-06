import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const CardButton = ({ title, description, image, onPress }) => {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <Image source={{ uri: image }} style={styles.cardImage} />
            <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>{title}</Text>
                <Text style={styles.cardDescription}>{description}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 12,
        marginBottom: 16,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    cardImage: {
        width: 100,
        height: 100,
        borderTopLeftRadius: 12,
        borderBottomLeftRadius: 12,
    },
    cardContent: {
        flex: 1,
        padding: 16,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    cardDescription: {
        fontSize: 14,
        color: '#666',
        marginTop: 8,
    },
});

export default CardButton;
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

const Home = () => {
    const menuOptions = ['Opción 1', 'Opción 2', 'Opción 3'];
    const cards = [
        { id: '1', title: 'Carta 1', description: 'Descripción de la carta 1' },
        { id: '2', title: 'Carta 2', description: 'Descripción de la carta 2' },
        { id: '3', title: 'Carta 3', description: 'Descripción de la carta 3' },
    ];

    const renderCard = ({ item }: { item: { id: string; title: string; description: string } }) => (
        <View style={styles.card}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardDescription}>{item.description}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.menuButton}>
                    <Text>😎</Text>
                    <View style={styles.menuDropdown}>
                        {menuOptions.map((option, index) => (
                            <Text key={index} style={styles.menuOption}>
                                {option}
                            </Text>
                        ))}
                    </View>
                </TouchableOpacity>
                <Image
                    source={{ uri: 'https://via.placeholder.com/50' }}
                    style={styles.headerImage}
                />
            </View>
            <FlatList
                data={cards}
                renderItem={renderCard}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.content}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#f8f8f8',
    },
    menuButton: {
        position: 'relative',
    },
    menuDropdown: {
        position: 'absolute',
        top: 30,
        left: 0,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        padding: 8,
        zIndex: 1,
    },
    menuOption: {
        paddingVertical: 4,
        paddingHorizontal: 8,
    },
    headerImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    content: {
        padding: 16,
    },
    card: {
        backgroundColor: '#f0f0f0',
        padding: 16,
        borderRadius: 8,
        marginBottom: 16,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    cardDescription: {
        fontSize: 14,
        color: '#666',
    },
});

export default Home;


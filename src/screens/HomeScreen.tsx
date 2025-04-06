import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, TextInput } from 'react-native';


const Home:React.FC = ({navigation}) => {
    const [menuVisible, setMenuVisible] = useState(false);
    const menuOptions = ['Opción 1', 'Opción 2', 'Opción 3'];
    const cards = [
        { id: '1', title: 'Puno Seguro', description: 'Elige\nDescribe\nReporta', image: 'https://via.placeholder.com/150' },
        { id: '2', title: 'Encuentra tu micro', description: 'Elige\nDescribe\nReporta', image: 'https://via.placeholder.com/150' },
        { id: '3', title: 'Descubre Puno', description: 'Elige\nDescribe\nReporta', image: 'https://via.placeholder.com/150' },
        { id: '4', title: 'Mesa de partes', description: 'Elige\nDescribe\nReporta', image: 'https://via.placeholder.com/150' },
    ];

    const renderCard = ({ item }: { item: { id: string; title: string; description: string; image: string } }) => (
        <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.cardImage} />
            <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.cardDescription}>{item.description}</Text>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => setMenuVisible(!menuVisible)}>
                    <Text style={styles.menuButtonText}>Menú</Text>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Inicio</Text>
                <View style={styles.profilePlaceholder} />
            </View>

            {/* Dropdown Menu */}
            {menuVisible && (
                <View style={styles.menuDropdown}>
                    {menuOptions.map((option, index) => (
                        <Text key={index} style={styles.menuOption}>
                            {option}
                        </Text>
                    ))}
                </View>
            )}

            {/* Search Bar */}
            <View style={styles.searchBar}>
                <TextInput placeholder="Buscar" style={styles.searchInput} />
            </View>

            {/* Card List */}
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
        backgroundColor: '#f5f5f5',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#0088cc',
        padding: 16,
        paddingTop: 40,
    },
    headerTitle: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    profilePlaceholder: {
        width: 40,
        height: 40,
        backgroundColor: '#fff',
        borderRadius: 20,
    },
    menuButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    menuDropdown: {
        position: 'absolute',
        top: 80,
        left: 16,
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    menuOption: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#333',
    },
    searchBar: {
        backgroundColor: '#fff',
        margin: 16,
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    searchInput: {
        fontSize: 16,
    },
    content: {
        paddingHorizontal: 16,
    },
    card: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 8,
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

export default Home;

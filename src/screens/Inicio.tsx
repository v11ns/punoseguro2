import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import Header from '../components/inicio/Header';
import CardButton from '../components/inicio/CardButton';
import { useNavigation } from '@react-navigation/native';

const Inicio = () => {
    const cards = [
        {
            id: '1',
            title: 'Puno Seguro',
            description: 'Elige\nDescribe\nReporta',
            image: 'https://via.placeholder.com/150',
            screen: 'PunoSeguro',
        },
        {
            id: '2',
            title: 'Encuentra tu micro',
            description: 'Elige\nDescribe\nReporta',
            image: 'https://via.placeholder.com/150',
            screen: 'EncuentraMicro',
        },
        {
            id: '3',
            title: 'Descubre Puno',
            description: 'Elige\nDescribe\nReporta',
            image: 'https://via.placeholder.com/150',
            screen: 'DescubrePuno',
        },
        {
            id: '4',
            title: 'Mesa de partes',
            description: 'Elige\nDescribe\nReporta',
            image: 'https://via.placeholder.com/150',
            screen: 'MesaPartes',
        },
    ];

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Header 
                onMenuPress={() => navigation.navigate('Menu')}
            />
            <FlatList
                data={cards}
                renderItem={({ item }) => (
                    <CardButton
                        title={item.title}
                        description={item.description}
                        image={item.image}
                        onPress={() => navigation.navigate(item.screen)}
                    />
                )}
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
    content: {
        paddingHorizontal: 16,
        paddingTop: 16,
    },
});

export default Inicio;
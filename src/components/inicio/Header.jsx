import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';

const Header = ({ onMenuPress, onSearch }) => {
    return (
        <View style={styles.header}>
            {/* Primera fila: Menú, Título e Ícono */}
            <View style={styles.topRow}>
                <TouchableOpacity onPress={onMenuPress} style={styles.menuButton}>
                    <Text style={styles.menuButtonText}>Menú</Text>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Inicio</Text>
                <Image
                    source={require('../../assets/images/munipuno.png')} // Ruta de la imagen
                    style={styles.icon}
                />
            </View>

            {/* Segunda fila: Barra de búsqueda */}
            <View >
                <TextInput
                    placeholder="Buscar..."
                    placeholderTextColor="#000" // Color más claro para el placeholder
                    style={styles.searchBar}
                    onChangeText={onSearch}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#0088cc',
        padding: 16,
        paddingTop: 50,
        borderBottomLeftRadius: 45, // Bordes redondeados en la esquina inferior izquierda
        borderBottomRightRadius: 45, // Bordes redondeados en la esquina inferior derecha
    },
    topRow: {
        flexDirection: 'row', // Alinea los elementos horizontalmente
        alignItems: 'center', // Alinea los elementos verticalmente
        justifyContent: 'space-between', // Distribuye los elementos horizontalmente
        marginBottom: 16, // Espaciado entre la primera fila y el buscador
    },
    menuButton: {
        marginRight: 8,
    },
    menuButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    headerTitle: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        flex: 1, // Ocupa el espacio restante para centrar el título
    },
    icon: {
        width: 30,
        height: 30,
    },
    searchBar: {
        backgroundColor: '#fff',
        borderRadius: 25, // Bordes redondeados
        paddingVertical: 15,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2, // Sombra para Android
        width: '80%', // Reduce el ancho del buscador
        alignSelf: 'center', // Centra el buscador horizontalmente
        color: '#000',
        placeholderTextColor: '#000',
        paddingHorizontal: 8,
    },
    searchInput: {
        fontSize: 16,
        flex: 1, // Ocupa el espacio restante dentro del buscador
        color: '#000',
        placeholderTextColor: '#000', // Color del texto del placeholder
        paddingVertical: 4, // Agrega espacio interno vertical
        paddingHorizontal: 8, // Agrega espacio interno horizontal
    },
});

export default Header;
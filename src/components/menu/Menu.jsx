import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, BackHandler } from 'react-native';

const Menu = ({ onClose, onNavigate }) => {
    return (
        <View style={styles.container}>
            {/* Encabezado del menú */}
            <View style={styles.header}>
                <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                    <Text style={styles.closeButtonText}>✕</Text>
                </TouchableOpacity>
                <Image
                    source={require('../../assets/images/munipuno.png')} // Ruta de la imagen
                    style={styles.headerImage}
                />
            </View>

            {/* Opciones del menú */}
            <View style={styles.menuOptions}>
                <TouchableOpacity onPress={() => onNavigate('Usuario')} style={styles.menuItem}>
                    <Text style={styles.menuItemText}>👤 Usuario</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onNavigate('Notificaciones')} style={styles.menuItem}>
                    <Text style={styles.menuItemText}>🔔 Notificaciones</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onNavigate('PunoSeguro')} style={styles.menuItem}>
                    <Text style={styles.menuItemText}>🌐 Puno seguro</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onNavigate('Directorio')} style={styles.menuItem}>
                    <Text style={styles.menuItemText}>❤️ Directorio telefónico</Text>
                </TouchableOpacity>
            </View>

            {/* Botón de salir */}
            <TouchableOpacity
                onPress={() => BackHandler.exitApp()} // Salir de la aplicación
                style={styles.logoutButton}
            >
                <Text style={styles.logoutButtonText}>⤶ Salir</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        backgroundColor: '#0088cc',
        padding: 16,
        alignItems: 'center',
    },
    closeButton: {
        position: 'absolute',
        top: 16,
        left: 16,
    },
    closeButtonText: {
        fontSize: 18,
        color: '#fff',
    },
    headerImage: {
        width: '100%',
        height: 150,
        resizeMode: 'cover',
    },
    menuOptions: {
        marginTop: 16,
    },
    menuItem: {
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    menuItemText: {
        fontSize: 16,
        color: '#333',
    },
    logoutButton: {
        marginTop: 'auto',
        padding: 16,
        borderTopWidth: 1,
        borderTopColor: '#ddd',
    },
    logoutButtonText: {
        fontSize: 16,
        color: '#333',
        textAlign: 'center',
    },
});

export default Menu;
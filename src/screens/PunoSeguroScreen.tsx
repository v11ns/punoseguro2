import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const PunoSeguro:React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (field: string, value: string) => {
        setFormData({ ...formData, [field]: value });
    };

    const handleSubmit = () => {
        console.log('Form Data:', formData);
        // Aquí puedes manejar el envío del formulario
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Formulario Puno Seguro</Text>
            <TextInput
                style={styles.input}
                placeholder="Nombre"
                value={formData.name}
                onChangeText={(text) => handleChange('name', text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Correo Electrónico"
                value={formData.email}
                onChangeText={(text) => handleChange('email', text)}
                keyboardType="email-address"
            />
            <TextInput
                style={styles.textArea}
                placeholder="Mensaje"
                value={formData.message}
                onChangeText={(text) => handleChange('message', text)}
                multiline
            />
            <Button title="Enviar" onPress={handleSubmit} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 15,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
    },
    textArea: {
        height: 100,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 15,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        textAlignVertical: 'top',
    },
});

export default PunoSeguro;


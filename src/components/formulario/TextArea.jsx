import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const TextArea = ({ label, value, onChangeText, placeholder }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                style={styles.textArea}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                multiline
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 15,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    textArea: {
        height: 100,
        borderColor: '#0088cc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        textAlignVertical: 'top',
    },
});

export default TextArea;
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const UploadButton = () => {
    const [imageUri, setImageUri] = useState(null);

    const handleSelectImage = () => {
        launchImageLibrary(
            {
                mediaType: 'photo',
                quality: 1,
            },
            (response) => {
                if (response.didCancel) {
                    console.log('El usuario canceló la selección de imagen.');
                } else if (response.errorMessage) {
                    console.error('Error:', response.errorMessage);
                } else {
                    const uri = response.assets[0].uri;
                    setImageUri(uri);
                }
            }
        );
    };

    const handleTakePhoto = () => {
        launchCamera(
            {
                mediaType: 'photo',
                quality: 1,
            },
            (response) => {
                if (response.didCancel) {
                    console.log('El usuario canceló la captura de imagen.');
                } else if (response.errorMessage) {
                    console.error('Error:', response.errorMessage);
                } else {
                    const uri = response.assets[0].uri;
                    setImageUri(uri);
                }
            }
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Cargar foto o video</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={handleSelectImage}>
                    <Text style={styles.buttonText}>Seleccionar de galería</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleTakePhoto}>
                    <Text style={styles.buttonText}>Tomar foto</Text>
                </TouchableOpacity>
            </View>
            {imageUri && (
                <Image source={{ uri: imageUri }} style={styles.imagePreview} />
            )}
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
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#0088cc',
        padding: 10,
        marginHorizontal: 5,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 14,
        color: '#333',
    },
    imagePreview: {
        marginTop: 10,
        width: '100%',
        height: 200,
        borderRadius: 5,
    },
});

export default UploadButton;
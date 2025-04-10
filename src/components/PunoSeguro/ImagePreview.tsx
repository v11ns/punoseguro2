import React from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';

// Definir los tipos de las props
type ImagePreviewProps = {
    images: string[]; // Lista de imágenes (URIs)
    onRemoveImage: (index: number) => void; // Función para eliminar una imagen
};

const ImagePreview: React.FC<ImagePreviewProps> = ({ images, onRemoveImage }) => {
    return (
        <View style={styles.container}>
            {images.map((image, index) => (
                <View key={index} style={styles.imageContainer}>
                    <Image source={{ uri: image }} style={styles.image} />
                    <TouchableOpacity
                        style={styles.removeButton}
                        onPress={() => onRemoveImage(index)} // Llamar a la función con el índice
                    >
                        <Text style={styles.removeButtonText}>✕</Text>
                    </TouchableOpacity>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom: 16,
    },
    imageContainer: {
        position: 'relative',
        marginRight: 8,
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 8,
    },
    removeButton: {
        position: 'absolute',
        top: -5,
        right: -5,
        backgroundColor: '#ff0000',
        borderRadius: 12,
        width: 24,
        height: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    removeButtonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
    },
});

export default ImagePreview;
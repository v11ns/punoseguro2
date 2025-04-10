import React, { useMemo, useRef } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';

type BottomSheetProps = {
    images: string[]; // Lista de imágenes
    onRemoveImage: (index: number) => void; // Función para eliminar imágenes
    onSubmit: () => void; // Función para enviar el formulario
};

const BottomSheetComponent: React.FC<BottomSheetProps> = ({ images, onRemoveImage, onSubmit }) => {
    const bottomSheetRef = useRef<BottomSheet>(null);

    // Define los puntos de anclaje del BottomSheet
    const snapPoints = useMemo(() => ['25%', '50%', '90%'], []);

    return (
        <BottomSheet ref={bottomSheetRef} index={1} snapPoints={snapPoints}>
            <View style={styles.content}>
                <Text style={styles.title}>FORMULARIO PUNO SEGURO</Text>

                {/* Vista previa de imágenes */}
                <View style={styles.imageContainer}>
                    {images.map((image, index) => (
                        <View key={index} style={styles.imageWrapper}>
                            <Image source={{ uri: image }} style={styles.image} />
                            <TouchableOpacity
                                style={styles.removeButton}
                                onPress={() => onRemoveImage(index)} // Llamar a la función para eliminar la imagen
                            >
                                <Text style={styles.removeButtonText}>✕</Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>

                {/* Botón de envío */}
                <TouchableOpacity style={styles.submitButton} onPress={onSubmit}>
                    <Text style={styles.submitButtonText}>ENVIAR</Text>
                </TouchableOpacity>
            </View>
        </BottomSheet>
    );
};

const styles = StyleSheet.create({
    content: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 16,
    },
    imageContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 16,
    },
    imageWrapper: {
        position: 'relative',
        marginRight: 8,
        marginBottom: 8,
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
    submitButton: {
        backgroundColor: '#0088cc',
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
    },
    submitButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default BottomSheetComponent;
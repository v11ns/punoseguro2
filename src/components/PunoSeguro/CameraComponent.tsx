import React, { useCallback, useEffect, useRef, useMemo,useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Alert } from 'react-native';
import { Camera, useCameraDevice } from 'react-native-vision-camera';
import BottomSheetComponent from './BottomSheetComponent';
import {BottomSheetModal, BottomSheetView, BottomSheetModalProvider } from '@gorhom/bottom-sheet';

const CameraComponent = () => {
    const bottonSheetRef = useRef<BottomSheetModal>(null);
    const [hasPermission, setHasPermission] = useState(false);
    const [adImg, setAdImg] = useState(false); // Estado para verificar si la cámara está lista
    const [photoUris, setPhotoUris] = useState<string[]>([]); // Lista de imágenes capturadas
    const camera = useRef<Camera>(null);
    const device = useCameraDevice('back');

    useEffect(() => {
        const requestCameraPermission = async () => {
            const status = await Camera.requestCameraPermission();
            if (status) {
                setHasPermission(true);
            } else {
                Alert.alert('Permiso denegado', 'Se necesita acceso a la cámara para usar esta función.');
            }
        };

        requestCameraPermission();
    }, []);
    const handlePrensentModalPress = useCallback(() => {
      
            bottonSheetRef.current?.present();
    },[]);
    const takePhoto = async () => {
        if (camera.current) {
            try {
                const photo = await camera.current.takePhoto({
                });
                setPhotoUris([...photoUris, photo.path]); // Agregar la nueva foto al estado
                setAdImg(true); // Cambiar el estado a verdadero para indicar que la cámara está lista
            } catch (error) {
                console.error('Error al capturar la foto:', error);
            }
        }
    };
    const snapPoints = useMemo(() => ['25%', '50%', '90%'], []);

    const handleRemoveImage = (index: number) => {
        // Eliminar la imagen seleccionada del estado
        setPhotoUris((prevUris) => prevUris.filter((_, i) => i !== index));
    };

    const handleSubmit = () => {
        console.log('Formulario enviado con las imágenes:', photoUris);
    };

    if (!device) {
        return <Text style={styles.loadingText}>Cargando cámara...</Text>;
    }

    if (!hasPermission) {
        return <Text style={styles.permissionText}>No se tiene permiso para usar la cámara.</Text>;
    }

    return (
        <View style={styles.container}>
            <Camera
                style={StyleSheet.absoluteFill}
                ref={camera}
                device={device}
                isActive={true}
                photo={true}
            />
            <TouchableOpacity style={styles.captureButton} onPress={takePhoto}>
                <Text style={styles.captureButtonText}>📸</Text>
            </TouchableOpacity>
              {
                adImg && (    
            <TouchableOpacity style={styles.captureButton} onPress={handlePrensentModalPress}>
                <Text style={styles.captureButtonText}>Next</Text>
            </TouchableOpacity>
                )
              }
              <BottomSheetModalProvider>
              <BottomSheetModal ref={bottonSheetRef} index={1} snapPoints={snapPoints}>
            <BottomSheetView style={styles.content}>
                <Text style={styles.title}>FORMULARIO PUNO SEGURO</Text>

                {/* Vista previa de imágenes */}
                <View style={styles.imageContainer}>
                    
                            <TouchableOpacity
                                style={styles.removeButton}
                                onPress={() => handleRemoveImage(1)} // Llamar a la función para eliminar la imagen
                            >
                                <Text style={styles.removeButtonText}>✕</Text>
                            </TouchableOpacity>
                    
                </View>

                {/* Botón de envío */}
                <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                    <Text style={styles.submitButtonText}>ENVIAR</Text>
                </TouchableOpacity>
                </BottomSheetView>
        </BottomSheetModal>
        </BottomSheetModalProvider>
   
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    loadingText: {
        flex: 1,
        color: '#fff',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 18,
    },
    permissionText: {
        flex: 1,
        color: '#fff',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 18,
    },
    captureButton: {
        position: 'absolute',
        bottom: 30,
        alignSelf: 'center',
        backgroundColor: '#fff',
        borderRadius: 50,
        width: 70,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
    },
    captureButtonText: {
        fontSize: 24,
    },
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

export default CameraComponent;
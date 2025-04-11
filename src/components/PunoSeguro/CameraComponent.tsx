import React, { useRef, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Camera, useCameraDevice, useCameraPermission } from 'react-native-vision-camera';

const CameraScreen = () => {
  const device = useCameraDevice('back');
  const cameraRef = useRef<Camera>(null);
  const [hasPermission, setHasPermission] = useState(false);

  // 📌 Verificar y solicitar permisos de cámara
  useEffect(() => {
    const checkPermission = async () => {
      const status = await Camera.getCameraPermissionStatus();
      if (status) {
        const newStatus = await Camera.requestCameraPermission();
        setHasPermission(newStatus);
      } else {
        setHasPermission(true);
      }
    };
    checkPermission();
  }, []);
  const takePhoto1 = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePhoto();
      console.log('📸 Foto tomada:', photo);
    }
  };

  if (!device){return <Text>No se encontró la cámara</Text>;}
  if (!hasPermission) {return <Text>Permiso de cámara denegado</Text>};

  return (
    <View style={styles.container}>
      <Camera
        ref={cameraRef}
        style={styles.camera}
        device={device}
        isActive={true}
        photo={true} // Habilita la captura de fotos
      />
      <TouchableOpacity onPress={takePhoto1} style={styles.button}>
        <Text style={styles.buttonText}>Tomar Foto</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  camera: { width: '100%', height: '80%' },
  button: {
    position: 'absolute',
    bottom: 30,
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 10,
  },
  buttonText: { color: 'white', fontSize: 16 },
});

export default CameraScreen;

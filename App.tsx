import React, { useState, useEffect } from 'react';
import { View, Text,Image, StyleSheet, ActivityIndicator, Animated } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';  // Importar este componente
import Navigation from './src/navigation/Navigation';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const fadeAnim = new Animated.Value(0); // Animación de opacidad

  useEffect(() => {
    // Iniciar la animación de opacidad
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();

    // Simular un tiempo de carga
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <View style={styles.container}>
      <Image
          source={require('./src/assets/images/munipuno.png')} // Ruta de la imagen
          style={styles.icon}
      />
        <Animated.View style={[styles.logoContainer, { opacity: fadeAnim }]}>
          <Text style={styles.logoText}>Municipalidad de Puno</Text>
          <ActivityIndicator size="large" color="#ffffff" />
        </Animated.View>
      </View>
    );
  }

  // Renderiza la navegación principal después de la carga
  return (
        <GestureHandlerRootView style={{ flex: 1 }}>
          <Navigation/>
        </GestureHandlerRootView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0088cc',
  },
  logoContainer: {
    alignItems: 'center',
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 20,
  },
  icon: {
    width:100,
    height: 130,
    marginBottom: 20,
}
});

export default App;


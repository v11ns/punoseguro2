import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Animated } from 'react-native';

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
        <Animated.View style={[styles.logoContainer, { opacity: fadeAnim }]}>
          <Text style={styles.logoText}>Puno Seguro</Text>
          <ActivityIndicator size="large" color="#ffffff" />
        </Animated.View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>¡Bienvenido a la aplicación!</Text>
    </View>
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
  mainText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
  },
});

export default App;0
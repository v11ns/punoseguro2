import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, SafeAreaViewComponent } from 'react-native';
import CameraScreen from '../components/PunoSeguro/CameraComponent';

const PunoSeguro:React.FC = () => {

    return (
        <SafeAreaViewComponent >
            <CameraScreen />
        </SafeAreaViewComponent>
    );
};



export default PunoSeguro;


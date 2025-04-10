import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Header from '../components/formulario/Header';
import Dropdown from '../components/formulario/Dropdown';
import TextArea from '../components/formulario/TextArea';
import SubmitButton from '../components/formulario/SubmitButton';
import LocationButton from '../components/formulario/LocationButton';
import UploadButton from '../components/formulario/UploadButton';
import CameraComponent from '../components/PunoSeguro/CameraComponent';

const PunoSeguro: React.FC = () => {
    

    return (
        <View style={styles.screen}>
           <CameraComponent/>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    container: {
        flexGrow: 1,
        padding: 20,
    },
});

export default PunoSeguro;
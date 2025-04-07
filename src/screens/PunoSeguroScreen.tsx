import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Header from '../components/formulario/Header';
import Dropdown from '../components/formulario/Dropdown';
import TextArea from '../components/formulario/TextArea';
import SubmitButton from '../components/formulario/SubmitButton';
import LocationButton from '../components/formulario/LocationButton';
import UploadButton from '../components/formulario/UploadButton';

const PunoSeguro: React.FC = () => {
    const [incidentType, setIncidentType] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = () => {
        console.log('Tipo de incidente:', incidentType);
        console.log('Descripción:', description);
        // Aquí puedes manejar el envío del formulario
    };

    return (
        <View style={styles.screen}>
            <Header title="Puno Seguro" onMenuPress={() => console.log('Abrir menú')} />
            <ScrollView contentContainerStyle={styles.container}>
                <Dropdown
                    label="Incidente*"
                    value={incidentType}
                    setValue={setIncidentType}
                    items={[
                        { label: 'Limpieza Pública', value: 'limpieza' },
                        { label: 'Accidente de tránsito', value: 'accidente' },
                        { label: 'Transporte Urbano', value: 'transporte' },
                        { label: 'Semáforos Inoperativos', value: 'semaforos' },
                        { label: 'Parques y Jardines', value: 'parques' },
                        { label: 'Iluminación Pública', value: 'iluminacion' },
                    ]}
                />
                <TextArea
                    label="Descripción"
                    value={description}
                    onChangeText={setDescription}
                    placeholder="Describe lo que viste, qué pasó, cómo ocurrió, dónde..."
                />
                <UploadButton />
                <LocationButton onPress={() => console.log('Compartir ubicación')} />
                <SubmitButton onPress={handleSubmit} />
            </ScrollView>
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
import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

interface EmergencyContact {
    id: string;
    name: string;
    phone: string;
}

const emergencyContacts: EmergencyContact[] = [
    { id: '1', name: 'Police', phone: '8080 8080 808' },
    { id: '2', name: 'Fire Department', phone: '9090 9090 909' },
    { id: '3', name: 'Ambulance', phone: '7070 7070 707' },
];

const EmergencyScreen: React.FC = () => {
    const renderContactCard = ({ item }: { item: EmergencyContact }) => (
        <TouchableOpacity style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.phone}>{item.phone}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Emergency Contacts</Text>
            <FlatList
                data={emergencyContacts}
                renderItem={renderContactCard}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.list}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
        textAlign: 'center',
    },
    list: {
        paddingBottom: 20,
    },
    card: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        padding: 20,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    phone: {
        fontSize: 16,
        color: '#555',
        marginTop: 5,
    },
});

export default EmergencyScreen;
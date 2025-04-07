import React, { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { View, Text, StyleSheet } from 'react-native';

const Dropdown = ({ label, items, value, setValue }) => {
    const [open, setOpen] = useState(false);

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                style={styles.dropdown}
                dropDownContainerStyle={styles.dropdownContainer}
                placeholder="¿Qué ocurrió?"
                placeholderStyle={styles.placeholder}
                textStyle={styles.text}
                arrowIconStyle={styles.arrowIcon}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 15,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#333',
    },
    dropdown: {
        borderColor: '#0088cc',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: '#fff',
    },
    dropdownContainer: {
        borderColor: '#0088cc',
    },
    placeholder: {
        color: '#999',
        fontSize: 14,
    },
    text: {
        fontSize: 14,
        color: '#333',
    },
    arrowIcon: {
        tintColor: '#0088cc',
    },
});

export default Dropdown;
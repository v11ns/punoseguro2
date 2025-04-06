import React from 'react';
import { View, StyleSheet } from 'react-native';
import Menu from '../components/menu/Menu';

const MenuScreen = ({ navigation }) => {
    const handleNavigate = (screen) => {
        navigation.navigate(screen);
    };

    return (
        <View style={styles.container}>
            <Menu onClose={() => navigation.goBack()} onNavigate={handleNavigate} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default MenuScreen;
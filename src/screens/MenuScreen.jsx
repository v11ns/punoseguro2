import React from 'react';
import { View, StyleSheet } from 'react-native';
import Menu from '../components/menu/Menu';

const MenuScreen = ({ navigation }) => {
    
    return (
        <View style={styles.container}>
            <Menu 
                onClose={() => navigation.goBack()}
                onPress={() => navigation.navigate('Menu')}
                onNavigate={(screen) => navigation.navigate(screen)} 
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default MenuScreen;
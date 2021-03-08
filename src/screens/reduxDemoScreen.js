import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Home from '../components/home';

export default ReduxDemoScreen = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.fontStyle}>Redux Demo</Text>          
            <Home/>
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
    },
    fontStyle:{
        fontSize:25,
        fontWeight:'400'
    }
});
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HomeContainer from '../containers/homeContainer';

export default ReduxDemoScreen = () => {
    return(
        <View style={styles.container}>          
            <HomeContainer/>
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    fontStyle:{
        fontSize:25,
        fontWeight:'400'
    }
});
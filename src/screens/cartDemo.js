import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import HomeContainer from '../containers/homeContainer';
import HeaderContainer from '../containers/headerContainer';

export default CartDemo = (props) => {
    return (
        <View style={styles.container}>
            <HeaderContainer />
            <HomeContainer />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    fontStyle: {
        fontSize: 25,
        fontWeight: '400'
    }
});
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';



export default ReduxDemoScreen = (props) => {
    return(
        <View style={styles.container}>    
            <Button
                title="CartDemo"
                onPress={() => props.navigation.navigate('CartDemo')}
            />
            <Button
                title="INC/DEC Demo"
                onPress={() => props.navigation.navigate('IncDecDemo')}
            />
            <Button
                title="Api Demo"
                onPress={() => props.navigation.navigate('ApiDemo')}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
    }
});
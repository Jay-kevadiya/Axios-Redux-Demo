import React, { useRef } from 'react';
import { View, Text, StyleSheet, Alert, Button, Animated } from 'react-native';



export default Operations = () => {

    const createAlert = () => {
        Alert.alert(
            "Alert Title",
            "My Alert Msg",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log('Cancel Pressed')
                },
                {
                    text: "Ok",
                    onPress: () => console.log("Ok Pressed")
                }
            ]
        )
    };

    const fadeAnim = useRef(new Animated.Value(0)).current;

    const fadeIn = () => {
        Animated.timing(fadeAnim, {
            toValue: true,
            duration: 500,
        }).start();
    };

    const fadeOut = () => {
        Animated.timing(fadeAnim, {
            toValue: false,
            duration: 500
        }).start();
    }

    return (
        <View style={{ flex: 1 }}>
            <Text style={{ alignSelf: 'center', fontSize: 20 }}>Operations</Text>


            <View>
                <Text style={{ alignSelf: 'center', fontSize: 20, marginTop: 20 }}>Animation</Text>
                <Button
                    title="2Alert"
                    onPress={() => createAlert()}
                />
            </View>

            <View>
                <Text style={{ alignSelf: 'center', fontSize: 20, marginTop: 20 }}>Animated</Text>
                <Animated.View style={{ opacity: fadeAnim, backgroundColor: 'pink' }}>

                    <Text>Fade View</Text>

                </Animated.View>

                <Button title="fadeIn" onPress={() => fadeIn()} />
                <Button title="fadeout" onPress={() => fadeOut()} />
            </View>

        </View>
    )
};
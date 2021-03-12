import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import {Increment, Decrement, Reset} from '../services/actions/actions';
import {useSelector, useDispatch} from 'react-redux';


export default IncDecDemo = () => {

    const counter = useSelector(state => state.IncDec);
    const dispatch = useDispatch();
    return(
        <View>
            <Button
                title="+"
                onPress={()=> dispatch(Increment())}
            />
                 <Text style={{textAlign:'center'}}>{counter < 0 ? 0: counter}</Text>
            <Button
                title="-"
                onPress={()=> dispatch(Decrement())}
            />
           
        </View>
    )
};
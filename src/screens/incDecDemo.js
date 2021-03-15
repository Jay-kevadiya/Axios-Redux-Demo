import React,{useEffect} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import {Increment, Decrement, Reset} from '../services/actions/actions';
import {useSelector, useDispatch} from 'react-redux';

export default IncDecDemo = (props) => {

    const counter = useSelector(state => state.IncDec);
    const dispatch = useDispatch();

    useEffect(() => {
       Inc();
       Dec();
    },[])

    const Inc = () => {
        return(
            dispatch(Increment())
        )
    }   

    const Dec = () => {
        return(
            dispatch(Decrement())
        )   
    }   
    return(
        <View>
            <Button
                title="+"
                onPress={()=> Inc()}
            />
                 <Text style={{textAlign:'center'}}>{counter < 0 ? 0: counter}</Text>
            <Button
                title="-"
                onPress={()=> Dec()}
            />
           
        </View>
    )
};
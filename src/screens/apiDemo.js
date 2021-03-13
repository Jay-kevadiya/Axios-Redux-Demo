import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { ApiData } from '../services/actions/actions';
import { useSelector, useDispatch } from 'react-redux';

export default ApiDemo = () => {

    const [data, setData] = useState([]);

    const value = useSelector(state => state.ApiCall);
    const movie = value.movieData.movies;

    const renderMovies = ({item}) => {
        return(
                <View style={{backgroundColor:'pink', marginVertical:20, alignItems:'center'}}>
                    <Text> ID : {item.id}</Text>
                    <Text>TITLE : {item.title}</Text>
                    <Text>YEAR : {item.releaseYear}</Text>
                </View>
        )
    };



    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(ApiData())
        setData(movie);

    }, [])
    return (
        <View style={styles.container}>
            <Text>Api Demo</Text>
            <Text>{value.movieData.title}</Text>
            {/* {data.map((item, index) => {
                return (
                    <Text key={index}>{item.id} --- {item.title}</Text>
                )
            })} */}

            <FlatList
                data={data}
                keyExtractor={item => item.id}
                renderItem={renderMovies}
            />

            <Text>{value.movieData.description}</Text>

        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:20
    }
});
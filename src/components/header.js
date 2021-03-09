import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


export default Header = (props) => {
    return(
        <View style={styles.container}>
            <View style={styles.headerWrapper} >
                <Text style={styles.font}>Redux Demo</Text>
                
                <TouchableOpacity>
                 <Icon style={{position:'relative'}} name="cart-outline" size={50} />
                
                <View style={styles.adtocart}>
                    <Text style={styles.addtocartno}>{props.data.length}</Text>
                </View>

                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal:20
    },
    headerWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop:20
    },
    font: {
        fontSize: 20
    },
    adtocart:{
        position:'absolute', 
        left:40,
        top:-5,
        backgroundColor:'#009db0', 
        height:30,
        width:30,
        borderRadius:20,
        alignItems: 'center',
        
    },
    addtocartno:{
        fontSize:20, 
        color:'white'
        
    },
});



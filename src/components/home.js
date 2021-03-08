import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default Home = (props) => {
    return (
        <View style={styles.container}>

            <View style={styles.headerWrapper} >
                <Text style={styles.font}>Redux Demo</Text>
                <TouchableOpacity>
                    <Icon name="cart-outline" size={50} />
                </TouchableOpacity>
            </View>

            <View style={styles.contentWrapper}>
                <View style={styles.leftWrap}>
                    <Image style={styles.img} source={{ uri: 'https://images.macrumors.com/t/M6OOZi1LBirkudS4HQ3yibhQqgY=/800x0/filters:quality(90)/article-new/2017/09/iphonexdesign.jpg?lossy' }} />
                </View>

                <View style={styles.rightWrap}>
                    <View style={styles.topView}>
                        <Text style={styles.phoneText}>I-PhonePrice:</Text>
                        <Text style={styles.phoneText}>$1000.00</Text>
                    </View>
                    <View style={styles.bottomView}>
                        <View style={styles.backColor}>
                            <TouchableOpacity>
                                <Text style={{ color: '#fff' }}>Add to Cart</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
            </View>

        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10
    },
    font: {
        fontSize: 20
    },
    contentWrapper: {
        paddingVertical: 20,

        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    leftWrap: {
    },
    img: {
        height: 200,
        width: 100
    },
    rightWrap: {


    },
    topView: {
        alignItems: 'center',
        paddingVertical: 20
    },
    bottomView: {

    },
    phoneText: {
        fontSize: 15,
        fontWeight: '400',
    },
    backColor: {
        backgroundColor: '#009db0',
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        padding: 10


    }
});
import React from 'react';
import {Text, View, StyleSheet, Button  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import AxiosDemoScreen from './src/screens/axiosDemoScreen';
import ReduxDemoScreen from './src/screens/reduxDemoScreen';
import CartDemo from './src/screens/cartDemo';
import IncDecDemo from './src/screens/incDecDemo';
import ApiDemo from './src/screens/apiDemo';
import Operations from './src/screens/operations';




const HomeScreen = (props) => {
  return (
      <View>
          <Button 
            title="Axios Demo" 
            onPress={() => props.navigation.navigate('AxiosDemoScreen')}
          />
          <Button 
            title="Redux Demo" 
            onPress={() => props.navigation.navigate('ReduxDemoScreen')}
          />
      </View>
  );
};

const Stack = createStackNavigator();

export default App = () => {
  return(
    <NavigationContainer>
        <Stack.Navigator>
              <Stack.Screen name="HomeScreen" component={HomeScreen} />
              <Stack.Screen name="AxiosDemoScreen" component={AxiosDemoScreen} />
              <Stack.Screen name="ReduxDemoScreen" component={ReduxDemoScreen} />
              <Stack.Screen name="CartDemo" component={CartDemo} />
              <Stack.Screen name="IncDecDemo" component={IncDecDemo}/>
              <Stack.Screen name="ApiDemo" component={ApiDemo}/>
              <Stack.Screen name="Operations" component={Operations}/>

        </Stack.Navigator>
    </NavigationContainer>
  )
};



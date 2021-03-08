import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, FlatList, ScrollView } from 'react-native';
import Axios from 'axios';

export default AxiosDemoScreen = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        getApi()
    }, []);

    const getApi = () => {
        Axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.data)
            .then((json) => {
                setData(json);
                // setTitle(json.title);
                // setDesc(json.description);

            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }

    return (
        <View style={{ flex: 1, padding: 24 }}>
            <View>
                <ScrollView>
                    {loading ? <ActivityIndicator color="red" /> :


                        data.map((item, index) => {
                            return (
                                <View style={styles.mainContainer} key={index}>
                                    <View style={styles.mainWrapper}>
                                        <Text style={styles.textStyle}>{item.address.suite}</Text>
                                        <Text style={styles.textStyle}>{item.address.suite}</Text>

                                    </View>
                                </View>
                            )
                        })
                    }
                </ScrollView>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    mainContainer: {
      paddingHorizontal: 20
    },
    mainWrapper: {
      backgroundColor: 'pink',
      marginVertical: 10
    },
    textStyle: {
      fontSize: 20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });


// export default App = () => {

//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [title, setTitle] = useState([]);
//   const [desc, setDesc] = useState([]);

//   useEffect(() => {
//     getApi()
//   }, []);

//   const getApi = () => {
//     Axios.get('https://reactnative.dev/movies.json')
//       .then((response) => response.data)
//       .then((json) => {
//         setData(json.movies);
//         setTitle(json.title);
//         setDesc(json.description);

//       })
//       .catch((error) => console.error(error))
//       .finally(() => setLoading(false));
//   }

//   return (
//     <View style={{ flex: 1, padding: 24 }}>

//       <Text>{title}</Text>

//       <View>
//         {loading ? <ActivityIndicator /> :
//           <FlatList
//             data={data}
//             keyExtractor={(item, index) => 'key' + index}
//             renderItem={({ item }) => {
//               console.log("item", item)
//               return (
//                 <Text style={{ flex: 1, fontSize: 15 }}>{item.title}, {item.releaseYear}</Text>
//               )
//             }}
//           />
//         }
//       </View>
//       <Text style={{ fontSize: 20 }}>{desc}</Text>
//     </View>
//   );
// };

// export default App = () => {

//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);


//   useEffect(() => {
//     getApi()
//   }, []);

//   const getApi = () => {
//     Axios.get('https://jsonplaceholder.typicode.com/todos')
//       .then((response) => response.data)
//       .then((json) => {
//         setData(json);
//         // setTitle(json.title);
//         // setDesc(json.description);

//       })
//       .catch((error) => console.error(error))
//       .finally(() => setLoading(false));
//   }

//   return (
//     <View style={{ flex: 1, padding: 24 }}>
//       <View>
//         <ScrollView>
//           {loading ? <ActivityIndicator /> :


//             data.map((item, index) => {
//               return (
//                 <View style={styles.mainContainer} key={index}>
//                   <View style={styles.mainWrapper}>
//                     <Text style={styles.textStyle}>{item.id} {item.title}</Text>

//                   </View>
//                 </View>
//               )
//             })
//           }
//         </ScrollView>
//       </View>
//     </View>
//   );
// };
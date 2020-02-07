// import React, { useContext } from 'react';
// import { View, Text, StyleSheet, FlatList, Button,TouchableOpacity } from 'react-native';
// import { Context } from '../context/BlogContext';
// import { Feather } from '@expo/vector-icons';

// const IndexScreen = () => {
//     const { state, addBlogPost, deleteBlogPost} = useContext(Context);

//     return (
//         <View>
//             <Button
//                 title="Add Post"
//                 onPress={addBlogPost}
//             />
//             <FlatList
//                 data={state}
//                 keyExtractor={(blogPosts) => blogPosts.title}
//                 renderItem={({ item }) => {
//                     return <View style={styles.row} >
//                         <Text style={styles.title} >{item.title} - {item.id}</Text>
//                         <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
//                             <Feather style={styles.iconStyle} name="trash"/>
//                         </TouchableOpacity>

//                     </View>
//                 }}
//             />
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     row: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         paddingVertical: 20 ,
//         paddingHorizontal: 10 ,
//         borderTopWidth: 1 ,
//         borderColor: 'gray'
//     },
//     title: {
//         fontSize: 18
//     },
//     iconStyle: {
//         fontSize: 22
//     }
// });

// export default IndexScreen;
import React, { useContext } from 'react';
 
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import BlogContext from '../context/BlogContext';




const IndexScreen = () => {

    const { data, addBlogPost } = useContext(BlogContext);
    return (
        <View>
            <Text> Index Screen </Text>
            <Button title="Add Blog" onPress={addBlogPost} />
            <FlatList
                data={data}
                keyExtractor={data => data.title}
                renderItem={({ item }) => {
                    return <Text> {item.title}</Text>;
                }}

            />


        </View>
    );
};

const styles = StyleSheet.create({


})
export default IndexScreen;

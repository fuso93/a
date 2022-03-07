import React, {useState} from 'react';
import {View, Text, Button, ScrollView } from "react-native";
import axios from "axios";

const Home = () => {

    const [posts, setPosts] = useState([]);


    const getPosts = async () => {

        try {
            const {data, status} = await axios.get("https://jsonplaceholder.typicode.com/posts")
            console.log("*********",status)
            setPosts(data)

        } catch (err){
            alert(err.response.data.message)
        }
    }
    return (
        <View>
            <Text>HOME</Text>
            <Button
                onPress={() => getPosts()}
                title={"데이터 가져오기"}
                color={"purple"}
            />
           <ScrollView>
               {posts.map(post => (
                   <View style={{margin: 10, marginBottom:20}}>
                   <Text> {post.title} </Text>
                   <Text> {post.body} </Text>
                   </View>
               ))}
           </ScrollView>
        </View>
    );
};

export default Home;
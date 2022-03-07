import React, { useState, useEffect } from 'react';
import {View, Text, Button, ScrollView, ActivityIndicator } from "react-native";
import axios from "axios";

const Home = () => {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true)

    const getPosts = async () => {

        try {
            const {data, status} = await axios.get("https://jsonplaceholder.typicode.com/posts")
            console.log("*********",status)


            setTimeout(() => {
                setLoading(false)
            }, 5000)
            setPosts(data)

        } catch (err){
            alert(err.response.data.message)
            setLoading(false)
        }

    }


    const clearPosts = () => {
        setPosts([])
    }
    useEffect(() => {
        getPosts()
    }, [])

    return (
        <View style={{flex:1, justifyContent:"center", alignItems:"center" }}>
            {/*<Text>HOME</Text>*/}
            {/*<View style={{flexDirection: "row"}}>*/}
            {/*   <Button*/}
            {/*        onPress={() => getPosts()}*/}
            {/*        title={"데이터 가져오기"}*/}
            {/*        color={"purple"}*/}
            {/*    />*/}
            {/*    <Button*/}
            {/*        onPress={() => clearPosts()}*/}
            {/*        title = {"데이터 비우기"}*/}
            {/*        color = {"Gray"}*/}
            {/*    />*/}
            {/*</View>*/}

            {loading
                ? <ActivityIndicator size="large" color="#00ff00" />
                : (
                    <ScrollView>
                        {posts.map(post => (
                            <View key={post.id} style={{margin: 10, marginBottom:20}}>
                                <Text> {post.title} </Text>
                                <Text> {post.body} </Text>
                            </View>
                        ))}
                    </ScrollView>
                )
            }
        </View>
    );
};

export default Home;
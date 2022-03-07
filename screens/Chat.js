import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, Image, ActivityIndicator} from "react-native";
import axios from 'axios';




const Chat = () => {

    //1. data담는 그릇  설정
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)


    //3. 데이터 네트워킹 함수(데이터 불러오는 url접속 및 데이터 파싱)
    const getMovies = async () => {
        try{
           const {data, status} = await axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=8597e491ed6e80f0de12e349eb60ea6e&language=en-US&page=1")

            setTimeout(() => {
                setLoading(false)
            },5000)
            setMovies(data.results)

        } catch(err){
            alert(err.response.data.message)
            setLoading(false)
        }
    }

    //2. 데이터 불러오는 자동함수
    useEffect(() => {
        getMovies()
    }, [])

// 4. 배열데이터를 한번에 뿌려준다.(UI)
    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>

            {loading
                ? <ActivityIndicator size="large" color="purple" />
                : (
                    <ScrollView>
                        {movies.map(movie => (
                            <View style={{margin:10, }}>
                                <Text style={{ fontSize:18, fontWeight:'600'}}>
                                    {movie.title}
                                </Text>
                                <Text style={{fontSize:12}}>{movie.release_date}</Text>
                                <Image
                                    style={{width:200, height:200}}
                                    source={{uri:"https://image.tmdb.org/t/p/w500"+movie.poster_path}}
                                />

                            </View>
                        ))}
                    </ScrollView>
                )


            }




        </View>
    );
};

export default Chat;
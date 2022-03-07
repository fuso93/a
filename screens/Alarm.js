import React, {useEffect, useState} from 'react';
import {View, Text, Image} from "react-native";
import axios from 'axios';

const Alarm = () => {

    const [movie,setMovie] = useState({})

    const getMovie = async() => {
        try{
            const {data, status} = await axios.get("https://api.themoviedb.org/3/movie/414906?api_key=8597e491ed6e80f0de12e349eb60ea6e&language=en-US")
            setMovie(data)
        } catch(err){
            alert(err.response.data.message)
        }
    }

    useEffect(() => {
        getMovie()
    },[])
    return (
        <View style={{ flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text style={{fontSize:20, fontWeight:'800' }}>
                {movie.title}
            </Text>
            <Text style={{fontSize:10, margin:20 }}>
                {movie.overview}
            </Text>
            <View style={{flexDirection:'row', marginBottom:20}}>
            {movie.genres.map(genre => (
                <Text>{genre.name}, </Text>
            ))}
            </View>
            <Image
                style={{width:200, height:200}}
                source={{uri:"https://image.tmdb.org/t/p/w500"+movie.poster_path}}
            />
        </View>
    );
};

export default Alarm;
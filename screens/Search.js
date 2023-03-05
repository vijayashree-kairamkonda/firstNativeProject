import React ,{useState} from 'react';
import axios from 'axios';
import Header from "./Header"
import { View,Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const Search = () => {

    const[city,setCity] = useState("");
    const[cities,setCities] = useState([]);

    const fetchCities =(text)=>{
    setCity(text)
     console.log(axios.get("https://restcountries.com/v3.1/all"))
    // return response
    // fetch("https://restcountries.com/v3.1/all").then(res=>res.json()).then(data=>setCities(data))
   
    }


  

  return (
   <View>
    <Header/>
   <TextInput
   label="city name"
   theme={{colors:{primary : "#00aaff"}}}
    value={city}
    onChangeText={(text)=>fetchCities(text)}
   />
   <Button 
   icon="content-save" 
   theme={{colors:{primary : "#00aaff"}}}
style={{margin:20}}
   mode="contained"
    onPress={() => console.log('Pressed')}>
   <Text style={{color:"white"}}>Save changes </Text> 
  </Button>
   </View>
  );
};

export default Search;
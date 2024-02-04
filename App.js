import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, ActivityIndicator, StyleSheet} from 'react-native';
import axios from 'axios';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    //memangil axios
    axios.get('https://2083-36-73-35-94.ngrok-free.app/api/quizzes', {
      headers: {'ngrok-skip-browser-warning': 'true'}
    })
    .then((response) =>{
      setQuizzes(response.data.data);
      setLoading(false);
      console.log(response.data.data);
    })
    .catch((error)=>{
      console.log(error);
      setLoading(false);
    })
  }
  )

  const renderItem = ( {item} ) => {
    return (
      <View style={styles.item}>
      <Text style={styles.teks2}>Quiz: {item.quiz}</Text>
      <Text style={styles.teks3}>A: {item.a}</Text>
      <Text style={styles.teks3}>B: {item.b}</Text>
      <Text style={styles.teks3}>C: {item.c}</Text>
      <Text style={styles.teks3}>D: {item.d}</Text>
    </View>
    )}

    return(
      <View style={styles.container}>
      <Text style={styles.title}>Quizku</Text>
      {loading ? (
        //tampilan Loading ketika data dimuat
        <ActivityIndicator size="Large" color="white" />
      ):(
        <FlatList
        data={quizzes}
        renderItem={renderItem}
        keyExtractor={(item)=> item.id.toString()}
        />
    )}
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    alignItems:'center',
    backgroundColor: '#910A',
    flex: 1,
    justifyContent: 'center',
  },
  item:{
    paddingVertical: 4,
    margin: 5,
    backgroundColor: '#FF6868',
    borderRadius: 5,
  },
  title: {
    fontsize: 24,
    fontweight:'bold',
    textAlign:'center',
    color:'white',
    marginTop: 35,
    marginBottom: 10,
  },
  teks2:{
    fontSize: 18,
    fontweight:'bold',
    textAlign:'left',
    color:'black',
    paddingTop: -8,
    margin: 10,
  },
  teks3:{
    backgroundColor: 'white',
    borderRadius: 5,
    marginTop: -5,
    padding: 5,
    fontsize: 18,
    margin: 10,
  },
})

export default App;
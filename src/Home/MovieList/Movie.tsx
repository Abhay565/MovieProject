import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MovieList from './MovieList';
import Header from '../Header/Header';
import { SafeAreaView } from 'react-native-safe-area-context';

const Movie = () => {
  return ( <View style={{display:"flex"}}>
  <SafeAreaView >
  <Header/>
    <ScrollView style={{backgroundColor:"#808080"}}>
      <MovieList/>
    </ScrollView>
    </SafeAreaView >
    </View>
  )
}

export default Movie;


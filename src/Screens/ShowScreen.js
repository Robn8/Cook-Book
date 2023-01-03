import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Context } from '../Context/RecipeContext';

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);

  const recipePost = state.find(
    (recipePost) => recipePost.id === navigation.getParam('id')
  );

  return (
    <View>
      <Text>{recipePost.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ShowScreen;

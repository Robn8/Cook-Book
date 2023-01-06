import React, { useContext, useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { Context } from '../Context/RecipeContext';

const CreateScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [ing, setIng] = useState('');  

  return (
    <View>
      <Text style={styles.label}>Recipe Name</Text>
      <TextInput
        style={styles.input}
        value={title} 
        onChangeText={(text) => setTitle(text)} 
      />
      <Text style={styles.label}>Ingredients needed</Text>
      <TextInput
        style={styles.input}
        value={ing}
        onChangeText={(text) => setIng(text)}
      />
      <Button 
        title="Add New Recipe!"
      />
    </View>
  );
};

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        padding: 5,
        margin: 5
    },
    label: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5
    }
});

export default CreateScreen;
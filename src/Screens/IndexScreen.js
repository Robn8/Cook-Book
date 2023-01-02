import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import { Context } from '../Context/RecipeContext';

const IndexScreen = () => {
    const { state, addRecipePost } = useContext(Context);

    return (
        <View>
            <Text>Index Screen</Text>
            <Button title="Add Recipe" onPress={addRecipePost} />
            <FlatList 
                data={state}
                keyExtractor={(recipePost) => recipePost.title}
                renderItem={({ item }) => {
                    return <Text>{item.title}</Text>
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default IndexScreen;
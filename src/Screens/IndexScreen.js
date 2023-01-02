import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context } from '../Context/RecipeContext';
import { Feather } from '@expo/vector-icons';

const IndexScreen = () => {
    const { state, addRecipePost, deleteRecipePost } = useContext(Context);

    return (
        <View>
            <Button title="Add Recipe" onPress={addRecipePost} />
            <FlatList 
                data={state}
                keyExtractor={(recipePost) => recipePost.title}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.row}>
                            <Text style={styles.title}>{item.title} - {item.id}</Text>
                            <TouchableOpacity onPress={() => deleteRecipePost(item.id)}>
                                <Feather name="trash" style={styles.icon} />
                            </TouchableOpacity>
                        </View>   
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderColor: 'gray'
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 24
    }
});

export default IndexScreen;
import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RecipeContext from '../Context/RecipeContext';

const IndexScreen = () => {
    const value = useContext(RecipeContext);

    return (
        <View>
            <Text>Index Screen</Text>
            <Text>{value}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default IndexScreen;
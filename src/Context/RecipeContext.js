import React, { useReducer } from 'react';

const RecipeContext = React.createContext();

const recipeReducer = (state, action) => {
    switch (action.type) {
        case 'add_recipe': 
            return [...state, { title: `Blog Post #${state.length + 1}` }];
        default: 
            return state;
    }
};

export const RecipeProvider = ({ children }) => {
    const [recipePosts, dispatch] = useReducer(recipeReducer, []);

    const addRecipePost = () => {
        dispatch({ type: 'add_recipe' });
    };

    return (
        <RecipeContext.Provider value={{ data: recipePosts, addRecipePost }}>
            {children}
        </RecipeContext.Provider>
    );
};

export default RecipeContext;
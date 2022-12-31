import React from 'react';

const RecipeContext = React.createContext();

export const RecipeProvider = ({ children }) => {
    return <RecipeContext.Provider value={5}>{children}</RecipeContext.Provider>
};

export default RecipeContext;
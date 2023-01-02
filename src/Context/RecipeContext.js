import createDataContext from './createDataContext';

const recipeReducer = (state, action) => {
    switch (action.type) {
        case 'add_recipe': 
            return [...state, { title: `Blog Post #${state.length + 1}` }];
        default: 
            return state;
    }
};

const addRecipePost = (dispatch) => {
    return () => {
        dispatch({ type: 'add_recipe' });
    };    
};

export const { Context, Provider } = createDataContext(
    recipeReducer,
    { addRecipePost },
    []
);
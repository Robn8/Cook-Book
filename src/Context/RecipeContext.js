import createDataContext from './createDataContext';

const recipeReducer = (state, action) => {
    switch (action.type) {
        case 'delete_recipe':
            return state.filter(recipePost => recipePost.id !== action.payload);
        case 'add_recipe': 
            return [
                ...state,
                {
                    id: Math.floor(Math.random() *99999),
                    title: `Recipe #${state.length + 1}`
                }
            ];
        default: 
            return state;
    }
};

const addRecipePost = (dispatch) => {
    return () => {
        dispatch({ type: 'add_recipe' });
    };    
};

const deleteRecipePost = (dispatch) => {
    return (id) => {
        dispatch({ type: 'delete_recipe', payload: id })
    };
}

export const { Context, Provider } = createDataContext(
    recipeReducer,
    { addRecipePost, deleteRecipePost },
    []
);
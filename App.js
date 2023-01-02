import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './src/Screens/IndexScreen';
import { Provider } from './src/Context/RecipeContext';

const navigator = createStackNavigator({
  Index: IndexScreen
}, 
{
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: 'Recipes'
    }
  }
);

const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};
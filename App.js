import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider } from './src/Context/RecipeContext';
import IndexScreen from './src/Screens/IndexScreen';
import ShowScreen from './src/Screens/ShowScreen';
import CreateScreen from './src/Screens/CreateScreen';

const navigator = createStackNavigator({
  Index: IndexScreen,
  Show: ShowScreen,
  Create: CreateScreen,
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

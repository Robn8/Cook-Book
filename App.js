import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider } from './src/Context/RecipeContext';
import IndexScreen from './src/Screens/IndexScreen';
import ShowScreen from './src/Screens/ShowScreen';

const navigator = createStackNavigator({
  Index: IndexScreen,
  Show: ShowScreen,
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

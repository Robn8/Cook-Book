import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './src/Screens/IndexScreen';

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

export default createAppContainer(navigator);
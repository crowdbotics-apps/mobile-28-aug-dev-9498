import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen110362Navigator from '../features/BlankScreen110362/navigator';
import BlankScreen110360Navigator from '../features/BlankScreen110360/navigator';
import BlankScreen010353Navigator from '../features/BlankScreen010353/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen110362: { screen: BlankScreen110362Navigator },
BlankScreen110360: { screen: BlankScreen110360Navigator },
BlankScreen010353: { screen: BlankScreen010353Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;

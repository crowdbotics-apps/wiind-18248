import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList4768518Navigator from '../features/ArticleList4768518/navigator';
import BlankScreen4868517Navigator from '../features/BlankScreen4868517/navigator';
import ArticleList68500Navigator from '../features/ArticleList68500/navigator';
import ArticleList68499Navigator from '../features/ArticleList68499/navigator';
import ArticleList68498Navigator from '../features/ArticleList68498/navigator';
import ArticleList68481Navigator from '../features/ArticleList68481/navigator';
import ArticleList68480Navigator from '../features/ArticleList68480/navigator';
import ArticleList68479Navigator from '../features/ArticleList68479/navigator';
import SignUp2768478Navigator from '../features/SignUp2768478/navigator';
import SignUp2868477Navigator from '../features/SignUp2868477/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
ArticleList4768518: { screen: ArticleList4768518Navigator },
BlankScreen4868517: { screen: BlankScreen4868517Navigator },
ArticleList68500: { screen: ArticleList68500Navigator },
ArticleList68499: { screen: ArticleList68499Navigator },
ArticleList68498: { screen: ArticleList68498Navigator },
ArticleList68481: { screen: ArticleList68481Navigator },
ArticleList68480: { screen: ArticleList68480Navigator },
ArticleList68479: { screen: ArticleList68479Navigator },
SignUp2768478: { screen: SignUp2768478Navigator },
SignUp2868477: { screen: SignUp2868477Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;

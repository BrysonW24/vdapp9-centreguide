import { NavigatorScreenParams } from '@react-navigation/native';

export type RootStackParamList = {
  Main: NavigatorScreenParams<BottomTabParamList>;
  Directory: undefined;
  StoreDetails: {
    id: string;
    name: string;
    floor: string;
    category?: string;
    distance?: string;
  };
  Notifications: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Map: undefined;
  Offers: undefined;
  Planner: undefined;
  Settings: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

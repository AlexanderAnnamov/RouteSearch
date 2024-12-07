import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootParams = {
  Main: undefined;
  'route-card': { id: string };
};

type NavigationProps = NativeStackNavigationProp<RootParams>;

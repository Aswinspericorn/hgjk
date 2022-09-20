import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {VoiceAccessScreen} from '../screens/HomeScreens/VoiceAccessScreen';
// import CameraAccessScreen from '../screens/CameraAccessScreen';
// import MapNavigationScreen from '../screens/MapNavigationScreen';
// import VoiceAccessScreen from '../screens/VoiceAccessScreen';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Voice" component={VoiceAccessScreen} />
    </Stack.Navigator>
  );
};
export default StackNavigation;

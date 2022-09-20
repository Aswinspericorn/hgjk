import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './StackNavigation';
import AuthNavigation from './AuthNavigation';

const Route = () => {
  const IsLoggedIn=false
  return (
    <>
      <NavigationContainer>
        {IsLoggedIn ? <StackNavigation /> : <AuthNavigation />}
      </NavigationContainer>
    </>
  );
};
export default Route;

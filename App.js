import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Hoa from "./components/Hoa";
import ListLoaiHoa from "./components/Listhoa";
import Loaihoa from "./components/Loaihoa";
import Capnhatloaihoa from "./components/Capnhatloaihoa";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HoaType">
        <Stack.Screen name="Loại Hoa" component={ListLoaiHoa}></Stack.Screen>
        <Stack.Screen name="Hoa" component={Hoa}></Stack.Screen>
        <Stack.Screen
          name="Capnhatloaihoa"
          component={Capnhatloaihoa}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

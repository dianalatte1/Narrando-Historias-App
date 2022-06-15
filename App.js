import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feed from "./screens/Feed";
import CreateStory from "./screens/CreateStory";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Feed" component={Feed} />
        <Tab.Screen name="Crear Historia" component={CreateStory} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import spacing from "./src/config/spacing";
import colors from "./src/config/colors";
import HomeScreen from "./src/screens/HomeScreen";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";


const App = () => {
  return (
    <View
      style={{
        paddingHorizontal: spacing * 2,
        flex: 1,
        backgroundColor: colors.backgound,
      }}
    >
      <HomeScreen/>
      <StatusBar style="dark" />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
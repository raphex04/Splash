import { StatusBar } from "expo-status-bar";
import { StyleSheet,  Text,  View} from "react-native";
import { styles } from "../css/style";

export default function App(){
    return(
    <View style={styles.container}>
        <text>Open up App.js to start working on your app</text>
        <StatusBar style="auto"/>
    </View>
    );
}
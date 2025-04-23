import React from "react";
import { View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { LinearGradient } from "expo-linear-gradient";
import HomeScreen from "./screens/HomeScreen";
import DenunciaScreen from "./screens/DenunciaScreen";
import AdocaoScreen from "./screens/AdocaoScreen";
import PerfilScreen from "./screens/PerfilScreen";
import DevScreen from "./screens/DevScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.appContainer}>
      <LinearGradient
        colors={["#f5f5f5", "#e8f5e9"]}
        style={styles.gradientBackground}
      >
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: styles.header,
              headerTintColor: "#fff",
              headerTitleStyle: styles.headerTitle,
              headerBackground: () => (
                <LinearGradient
                  colors={["#3A7D44", "#4CC9F0"]}
                  style={StyleSheet.absoluteFill}
                />
              ),
            }}
          >
            <Stack.Screen
              name="DevScreen"
              component={DevScreen}
              options={{ title: "Desenvolvedores" }}
            />
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ title: "Início" }}
            />
            <Stack.Screen
              name="Denuncia"
              component={DenunciaScreen}
              options={{ title: "Fazer Denúncia" }}
            />
            <Stack.Screen
              name="Educacao"
              component={AdocaoScreen}
              options={{ title: "Área de adoção" }}
            />
            <Stack.Screen
              name="Perfil"
              component={PerfilScreen}
              options={{ title: "Meu Perfil" }}
            />
            <Stack.Screen
              name="Dev"
              component={DevScreen}
              options={{ title: "Desenvolvedores" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  gradientBackground: {
    flex: 1,
  },
  header: {
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
  },
  headerTitle: {
    fontWeight: "bold",
    fontSize: 18,
  },
});

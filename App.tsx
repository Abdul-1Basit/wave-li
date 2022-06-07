import React from "react";
import { View, SafeAreaView, ScrollView, LogBox } from "react-native";
import Search from "./src/Screens/Search";
import { NavigationContainer } from "@react-navigation/native";
import Explore from "./src/Screens/Explore";
import Chat from "./src/Screens/Chat";
import Profile from "./src/Screens/Profile";
import Temporary from "./src/Screens/Temporary";
import { FontAwesome5 } from "@expo/vector-icons";
const { MaterialIcons, Ionicons } = require("@expo/vector-icons");

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
LogBox.ignoreAllLogs(true);
export function SearchScreen() {
	return (
		<SafeAreaView
			style={{
				height: "100%",
				padding: 20,
			}}
		>
			<ScrollView>
				<View style={{ flex: 1 }}></View>
			</ScrollView>
		</SafeAreaView>
	);
}

export default function App() {
	return (
		<NavigationContainer>
			<Tab.Navigator
				initialRouteName="Search"
				screenOptions={{
					tabBarStyle: {
						borderTopWidth: 2,
						borderTopColor: "#818282",
						paddingBottom: 10,
						paddingTop: 10,
					},
					tabBarIconStyle: {
						width: 20,
						height: 75,
					},
				}}
			>
				<Tab.Screen
					name="Explore"
					component={Explore}
					options={{
						header: () => null,
						tabBarIcon: () => (
							<MaterialIcons name="explore" size={27} color="black" />
						),

						tabBarActiveTintColor: "#f0f0f0",

						tabBarShowLabel: false,
					}}
				/>
				<Tab.Screen
					name="Search"
					component={Search}
					options={{
						header: () => null,
						tabBarIcon: () => (
							<FontAwesome5 name="search" size={24} color="black" />
						),
						tabBarShowLabel: false,
					}}
				/>

				<Tab.Screen
					name="Temporary"
					component={Temporary}
					options={{
						header: () => null,
						tabBarIcon: () => (
							<MaterialIcons name="library-add" size={26} color="black" />
						),
						tabBarShowLabel: false,
					}}
				/>
				<Tab.Screen
					name="Chat"
					component={Chat}
					options={{
						header: () => null,
						tabBarIcon: () => (
							<Ionicons
								name="ios-chatbox-ellipses-outline"
								size={26}
								color="black"
							/>
						),
						tabBarShowLabel: false,
					}}
				/>
				<Tab.Screen
					name="Profile"
					component={Profile}
					options={{
						header: () => null,
						tabBarIcon: () => (
							<Ionicons name="md-person-outline" size={24} color="black" />
						),
						tabBarShowLabel: false,
					}}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
}

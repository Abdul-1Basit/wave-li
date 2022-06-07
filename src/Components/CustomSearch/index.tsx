import React, { FC } from "react";
import { View, Text, TextInput } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import SearchProps from "./interfaces";

const CustomSearch: FC<SearchProps> = ({ inputString, changeInput }) => {
	return (
		<View style={styles.searchContainer}>
			<FontAwesome5 name="search" size={24} color="black" />
			<TextInput
				style={styles.textStyle}
				placeholder="Search"
				value={inputString}
				onChangeText={(e) => {
					changeInput(e);
					//console.log(e);
				}}
			/>
		</View>
	);
};
export default CustomSearch;
const styles = {
	searchContainer: {
		borderRadius: 4,
		borderWidth: 2,
		borderColor: "#f3f2f3",
		//flex:1,
		alignItems: "center" as "center",
		justifyContent: "flex-start" as "flex-start",
		flexDirection: "row" as "row",
		padding: 10,
	},
	textStyle: {
		fontSize: 16.5,
		fontWeight: "500" as "500",
		paddingLeft: 10,
		color: "#4b4b4b",
		width: "100%",
		letterSpacing: 0.5,
	},
};

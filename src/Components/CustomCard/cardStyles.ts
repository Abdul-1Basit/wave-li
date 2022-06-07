import { StyleSheet,Dimensions} from "react-native";
const screenWidth=Dimensions.get('screen').width
export const styles = StyleSheet.create({
	cardStyle: {
		flex: 1,
		alignItems: "flex-start",
		flexDirection: "column",
	},
	container: { paddingBottom: 10 },
	centeralize: { alignItems: "center", justifyContent: "center", flex: 1 },
	cardImageStyle: {
		height: 200,
		width: "100%",
		maxWidth: screenWidth,
		borderRadius: 8,
		marginVertical: 10,
	},
	addressStyling: {
		alignItems: "center",
		justifyContent: "flex-start",
		flexDirection: "row",
	},
	cardDescription: {
		paddingVertical: 5,
	},
	attendeeStyle: { paddingVertical: 10 },
	buttonStyling: {
		flexDirection: "row",
		alignItems: "flex-start",
		paddingVertical: 10,
	},
});
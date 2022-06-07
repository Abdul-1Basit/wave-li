import React, { FC } from "react";
import { Text, TouchableOpacity } from "react-native";
import customButtonProps from "./interfaces";

const CustomButton: FC<customButtonProps> = ({ buttonType, buttonValue }) => {
	return (
		<TouchableOpacity
			style={[
				buttonType === "primary"
					? styles.primaryBackground
					: styles.secondaryBackground,
				{ paddingHorizontal: 20, paddingVertical: 10 },
			]}
		>
			<Text
				style={
					buttonType === "primary" ? styles.primaryText : styles.secondaryText
				}
			>
				{buttonValue}
			</Text>
		</TouchableOpacity>
	);
};
export default CustomButton;
const styles = {
	primaryBackground: {
		backgroundColor: "#386641",
		borderRadius: 12,
	},
	primaryText: {
		fontSize: 14,
		fontWeight: "500" as "500",
		color: "#f2e8cf", //"#f8f5f0",
	},
	secondaryBackground: {
		backgroundColor: "#fefefe",
		borderRadius: 12,
		borderWidth: 1,
		borderColor: "#386641",
	},
	secondaryText: {
		fontSize: 14,
		fontWeight: "500" as "500",
		color: "#386641",
	},
};

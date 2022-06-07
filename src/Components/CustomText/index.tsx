import React, { FC } from "react";
import { Text } from "react-native";
import CustomTextProps from "./interfaces";
const CustomText: FC<CustomTextProps> = ({
	textType,
	textValue,
	fontWeight = false,
	color = "#4b4b48",
}) => {
	const returnFontSize = () => {
		let fSize = 13;
		switch (textType) {
			case "md":
				fSize = 15;
				break;
			case "lg":
				fSize = 17;
				break;
			default:
				fSize = 13;
				break;
		}
		return fSize;
	};

	return (
		<Text
			style={{
				fontSize: returnFontSize(),
				fontWeight: fontWeight ? "bold" : "normal",
				color: color,
			}}
		>
			{textValue}
		</Text>
	);
};
export default CustomText;

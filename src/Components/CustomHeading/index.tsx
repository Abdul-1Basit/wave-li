import React, { FC } from "react";
import { Text } from "react-native";
import CustomHeadingProps from "./interfaces";

const CustomHeading: FC<CustomHeadingProps> = ({
	headingType,
	headingValue,
	headingWeight,
	textDecorationLine = false,
}) => {
	const returnFontSize = () => {
		let fSize: number = 16;
		switch (headingType) {
			case "md":
				fSize = 18;
				break;
			case "lg":
				fSize = 20;
				break;
			default:
				fSize = 16;
				break;
		}
		return fSize;
	};

	return (
		<Text
			style={{
				fontSize: returnFontSize(),
				fontWeight: headingWeight === "bold" ? "bold" : "normal",
				textDecorationLine: textDecorationLine ? "underline" : "none",
				letterSpacing: 0.5,
			}}
		>
			{headingValue}
		</Text>
	);
};
export default CustomHeading;

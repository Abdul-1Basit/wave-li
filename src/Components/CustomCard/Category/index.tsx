import React, { FC } from "react";
import { View, Image } from "react-native";
import styles from "./styles";
import CustomHeading from "../../CustomHeading";
import CategoryProps from "./interface";
import { Categories } from "../../Constants";
const Category: FC<CategoryProps> = ({ type = "hot" }) => {
	return (
		<View style={styles.cardStyle}>
			<View style={styles.centeringCardBanner}>
				<Image
					source={Categories.find((item) => item.categoryType === type)?.icon}
					style={{ width: 30, height: 25 }}
				/>
				<CustomHeading
					headingType={"lg"}
					headingValue={
						Categories.find((item) => item.categoryType === type)?.Name ?? ""
					}
					headingWeight={"bold"}
				/>
			</View>
		</View>
	);
};
export default Category;

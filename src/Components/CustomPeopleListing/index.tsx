import React, { FC } from "react";
import { View } from "react-native";
import FacePile from "react-native-face-pile";
import CustomText from "../CustomText";
import CustomPeopleListingProps from "./interface";
const CustomPeopleListing: FC<CustomPeopleListingProps> = ({
	list = [],
	type,
}) => {
	const returnFaceArray = (
		listt:
			| {
					first_name: string;
					picture: string;
			  }[]
			| undefined
	) => {
		let temporaryArray = [];
		if (listt) {
			for (let i = 0; i < listt.length && i < 3; i++) {
				temporaryArray.push({
					id: i,
					imageUrl: listt[i].picture,
				});
			}
		}
		return temporaryArray;
	};
	if (list) {
		return (
			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "flex-start",
				}}
			>
				<View style={{ marginRight: 10 }}>
					<FacePile
						circleSize={20}
						numFaces={3}
						circleStyle={{ borderWidth: 0 }}
						faces={returnFaceArray(list)}
					/>
				</View>
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						marginLeft: 20,
					}}
				>
					{list?.map((item, index) => {
						if (index < 2) {
							return (
								<CustomText
									key={index}
									textType="sm"
									textValue={item.first_name + ", " ?? ""}
								/>
							);
						} else if (index === 2) {
							return (
								<CustomText
									key={index}
									textType="sm"
									textValue={item.first_name ?? ""}
								/>
							);
						} else {
							return;
						}
					})}
					{list.length > 3 ? (
						<View
							style={{
								flexDirection: "row",
								alignItems: "center",
								justifyContent: "flex-start",
							}}
						>
							<CustomText textType="sm" textValue={" and "} />

							<CustomText
								textType="sm"
								textValue={(list ? list.length - 3 : 0).toString()}
								fontWeight={true}
							/>
							<CustomText textType="sm" textValue={" others"} />
						</View>
					) : (
						<View></View>
					)}
					{list.length > 1 ? (
						<CustomText
							textType="sm"
							textValue={
								type === "attending" ? " are attending." : " are interested."
							}
						/>
					) : list.length === 1 ? (
						<CustomText
							textType="sm"
							textValue={
								type === "attending" ? " is attending." : " is interested."
							}
						/>
					) : (
						<View></View>
					)}
				</View>
			</View>
		);
	}
	return <View></View>;
};
export default CustomPeopleListing;

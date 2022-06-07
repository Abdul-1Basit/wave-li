import React from "react";
import { FC } from "react";
import { View, Image } from "react-native";
import CustomButton from "../CustomButton";
import CustomHeading from "../CustomHeading";
import CustomText from "../CustomText";
import CardContents from "./interfaces";
import CustomPeopleListing from "../CustomPeopleListing";
import Category from "./Category";
import { styles } from "./cardStyles";
import { dayNames } from "../Constants";

const moment = require("moment");

const CustomCard: FC<CardContents> = ({
	arrayOfImages,
	day,
	startTime,
	endTime,
	location,
	heading,
	content,
	options,
	category,
	interestedPeople,
	attentingPeople,
}) => {
	return moment(startTime ?? endTime).isAfter(new Date()) ? (
		<View style={styles.container}>
			{/* <View style={styles.centeralize}>
				<Category type={category ?? ""} />
			</View> */}
			<View style={styles.cardStyle}>
				{arrayOfImages?.map((item, index) => (
					<Image source={{ uri: item }} style={styles.cardImageStyle} />
				))}
				<View style={styles.addressStyling}>
					<CustomText
						textType="sm"
						textValue={
							(moment(day).day() === new Date().getDay() &&
							moment(day).isSame(new Date())
								? "TODAY"
								: dayNames[
										moment(day).day() - 1 < 0
											? moment(day).day() - 1 + 7
											: moment(day).day() - 1
								  ]) ?? ""
						}
						color={
							moment(day).day() === new Date().getDay() &&
							moment(day).isSame(new Date())
								? "#6a994e"
								: "#4b4b48"
						}
					/>
					<CustomText textType="sm" textValue={" • "} />
					<CustomText
						textType="sm"
						textValue={moment(startTime).format("LT") ?? ""}
					/>
					<CustomText textType="sm" textValue={startTime ? " - " : ""} />
					<CustomText
						textType="sm"
						textValue={moment(endTime).format("LT") ?? ""}
					/>
					<CustomText textType="sm" textValue={" • "} />
					<CustomText textType="sm" textValue={location ?? ""} />
				</View>
				<View
					style={{
						paddingVertical: 5,
					}}
				>
					<CustomHeading
						headingType={"md"}
						headingValue={heading ?? ""}
						headingWeight={"bold"}
					/>
				</View>
				<View style={styles.cardDescription}>
					<CustomText textType="sm" textValue={content ?? ""} />
				</View>
				<View style={styles.attendeeStyle}>
					<CustomPeopleListing list={attentingPeople ?? []} type="attending" />
					<CustomPeopleListing
						list={interestedPeople ?? []}
						type="interested"
					/>
				</View>
				<View style={styles.buttonStyling}>
					<CustomButton buttonType="primary" buttonValue="ATTEND" />
					<View style={{ width: 10 }}></View>
					<CustomButton buttonType="secondary" buttonValue="I'M INTERESTED" />
				</View>
			</View>
		</View>
	) : (
		<View></View>
	);
};
export default CustomCard;

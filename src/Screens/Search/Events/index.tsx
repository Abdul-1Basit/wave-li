import React, { FC } from "react";
import { View, Text } from "react-native";
//import "core-js/actual/array/group-by";
import CustomCard from "../../../Components/CustomCard";
import Category from "../../../Components/CustomCard/Category";
import EventProps from "./interface";
import CustomText from "../../../Components/CustomText";
const moment = require("moment");
const Events: FC<EventProps> = ({ searchTerm, eventsList }) => {
	const sortByCategory = //React.useMemo(() => {
		(list: any) => {
			let hot: any[] = [];
			let fy: any[] = [];
			let soon: any[] = [];
			let na: any[] = [];
			list.forEach((item: any) => {
				if (item.category === "hot") {
					hot.push(item);
				} else if (item.category === "fy") {
					fy.push(item);
				} else if (item.category === "soon") {
					soon.push(item);
				} else if (item.category === "na") {
					na.push(item);
				}
			});
			return { fy, hot, na, soon };
		};
	const sortByDate = (list: any) => {
		let newSortedArray: any = list
			.slice()
			.sort((a: any, b: any) => moment(a.start_time).isBefore(b.start_time));
		newSortedArray = newSortedArray
			.filter((item: any) => item.title === searchTerm)
			.map((item: any) => item);
		return newSortedArray;
	};

	if (!searchTerm) {
		let { fy, hot, na, soon } = sortByCategory(eventsList);
		return (
			<View>
				{fy.length > 0 ? (
					<View>
						<View
							style={{
								alignItems: "center",
								justifyContent: "center",
								flex: 1,
							}}
						>
							<Category type={"fy"} />
						</View>
						{fy?.map((item, index) => {
							return (
								<CustomCard
									key={index}
									category={item.category}
									arrayOfImages={[item.picture]}
									day={item.start_timestamp ?? item.end_timestamp}
									startTime={item.start_timestamp ?? ""}
									endTime={item.end_timestamp}
									location={item.location}
									heading={item.title}
									content={item.description ?? ""}
									interestedPeople={item.interested}
									attentingPeople={item.attending}
								/>
							);
						})}
					</View>
				) : (
					<View></View>
				)}
				{hot.length > 0 ? (
					<View>
						<View
							style={{
								alignItems: "center",
								justifyContent: "center",
								flex: 1,
								paddingTop: 20,
							}}
						>
							<Category type={"hot"} />
						</View>
						{hot?.map((item, index) => {
							return (
								<CustomCard
									key={index}
									category={item.category}
									arrayOfImages={[item.picture]}
									day={item.start_timestamp ?? item.end_timestamp}
									startTime={item.start_timestamp ?? ""}
									endTime={item.end_timestamp}
									location={item.location}
									heading={item.title}
									content={item.description ?? ""}
									interestedPeople={item.interested}
									attentingPeople={item.attending}
								/>
							);
						})}
					</View>
				) : (
					<View></View>
				)}
				{na.length > 0 ? (
					<View>
						<View
							style={{
								alignItems: "center",
								justifyContent: "center",
								flex: 1,
								paddingTop: 20,
							}}
						>
							<Category type={"na"} />
						</View>
						{na?.map((item, index) => {
							return (
								<CustomCard
									key={index}
									category={item.category}
									arrayOfImages={[item.picture]}
									day={item.start_timestamp ?? item.end_timestamp}
									startTime={item.start_timestamp ?? ""}
									endTime={item.end_timestamp}
									location={item.location}
									heading={item.title}
									content={item.description ?? ""}
									interestedPeople={item.interested}
									attentingPeople={item.attending}
								/>
							);
						})}
					</View>
				) : (
					<View></View>
				)}
				{soon.length > 0 ? (
					<View>
						<View
							style={{
								alignItems: "center",
								justifyContent: "center",
								flex: 1,
								paddingTop: 20,
							}}
						>
							<Category type={"soon"} />
						</View>
						{soon?.map((item, index) => {
							return (
								<CustomCard
									key={index}
									category={item.category}
									arrayOfImages={[item.picture]}
									day={item.start_timestamp ?? item.end_timestamp}
									startTime={item.start_timestamp ?? ""}
									endTime={item.end_timestamp}
									location={item.location}
									heading={item.title}
									content={item.description ?? ""}
									interestedPeople={item.interested}
									attentingPeople={item.attending}
								/>
							);
						})}
					</View>
				) : (
					<View></View>
				)}
			</View>
		);
	}
	return (
		<View>
			{eventsList.filter((item: any) => item.title === searchTerm).length >
			0 ? (
				sortByDate(eventsList).map((item: any, index: any) => {
					return (
						<CustomCard
							key={index}
							category={item.category}
							arrayOfImages={[item.picture]}
							day={item.start_timestamp ?? item.end_timestamp}
							startTime={item.start_timestamp ?? ""}
							endTime={item.end_timestamp}
							location={item.location}
							heading={item.title}
							content={item.description ?? ""}
							interestedPeople={item.interested}
							attentingPeople={item.attending}
						/>
					);
				})
			) : (
				<View style={{ paddingVertical: 20 }}>
					<CustomText
						textType="lg"
						textValue="No events match you search."
						color="#BC4749"
					/>
				</View>
			)}
		</View>
	);
};
export default Events;

import React, { FC } from "react";
import { View, TouchableOpacity, ScrollView, SafeAreaView } from "react-native";
import styles from "./styles";
import CustomHeading from "../../Components/CustomHeading";
import CustomSearch from "../../Components/CustomSearch";
import { endpoints } from "../../Helpers/dbConfig";
import { apiGetRequest } from "../../Helpers/axiosRequests";
import Events from "./Events";

const Search: FC<{}> = ({}) => {
	const optionsArray = ["Events", "People", "Groups"];
	const [activeItem, setActiveItem] = React.useState(0);
	const [dataArray, setDataArray] = React.useState<any>([]);
	const [inputValue, setInputValue] = React.useState("");
	React.useEffect(() => {
		async function getData() {
			let result = await apiGetRequest(endpoints.events);
			setDataArray(result.data);
		}
		getData();
	}, []);

	return (
		<SafeAreaView
			style={{
				height: "100%",
				paddingTop: 20,
				paddingRight: 20,
				paddingLeft: 20,
				backgroundColor: "#fff",
			}}
		>
			<ScrollView>
				<View style={{ flex: 1 }}>
					<View style={{ backgroundColor: "#fff", height: "100%" }}>
						<View style={styles.topTextStyle}>
							<CustomHeading
								headingType={"lg"}
								headingValue={"Find Something"}
								headingWeight={"bold"}
							/>
						</View>

						<CustomSearch
							inputString={inputValue}
							changeInput={setInputValue}
						/>
						<View style={styles.optionStyle}>
							{optionsArray.map((item: string, index: number) => {
								return activeItem === index ? (
									<TouchableOpacity
										onPress={() => {
											setActiveItem(index);
										}}
									>
										<CustomHeading
											key={index}
											headingType={"lg"}
											headingValue={item}
											headingWeight={"bold"}
											textDecorationLine={true}
										/>
									</TouchableOpacity>
								) : (
									<TouchableOpacity
										onPress={() => {
											setActiveItem(index);
										}}
									>
										<CustomHeading
											key={index}
											headingType={"lg"}
											headingValue={item}
											headingWeight={"normal"}
										/>
									</TouchableOpacity>
								);
							})}
						</View>
						{activeItem === 0 ? (
							<Events searchTerm={inputValue} eventsList={dataArray} />
						) : (
							<View></View>
						)}
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Search;

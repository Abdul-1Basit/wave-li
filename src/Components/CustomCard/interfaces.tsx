interface CardContents {
	arrayOfImages?: string[];
	day?: string;
	startTime?: string;
	endTime?: string;
	location?: string;
	heading?: string;
	content?: string;
	category?: string;
	options?: string[];
	interestedPeople?: {
		first_name: string;
		picture: string;
	}[];
	attentingPeople?: {
		first_name: string;
		picture: string;
	}[];
}
export default CardContents;

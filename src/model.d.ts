export interface IForm {
	value: string;
	color: string;
	text: string;
	icon: IIcon;
	format: "PNG" | "SVG" | "JPG" | "PDF";
}

export type IIcon =
	| "tobitlogo"
	| "spaceinvader"
	| "pacmanghost"
	| "bubble1"
	| "bubble2"
	| "exclamationmark1"
	| "exclamationmark2"
	| "heart"
	| "location1"
	| "location2"
	| "pencil"
	| "pricetag"
	| "questionmark1"
	| "questionmark2"
	| "smiley1"
	| "smiley2"
	| "switch"
	| "thumbsup"
	| "thumbsdown";

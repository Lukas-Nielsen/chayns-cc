import { Radio, Group, Image } from "@mantine/core";
import { IIcon } from "./model";

const data: { value: IIcon }[] = [
	{ value: "tobitlogo" },
	{ value: "spaceinvader" },
	{ value: "pacmanghost" },
	{ value: "bubble1" },
	{ value: "bubble2" },
	{ value: "exclamationmark1" },
	{ value: "exclamationmark2" },
	{ value: "heart" },
	{ value: "location1" },
	{ value: "location2" },
	{ value: "pencil" },
	{ value: "pricetag" },
	{ value: "questionmark1" },
	{ value: "questionmark2" },
	{ value: "smiley1" },
	{ value: "smiley2" },
	{ value: "switch" },
	{ value: "thumbsup" },
	{ value: "thumbsdown" },
];

export const Icon = (props: {
	value: IIcon;
	onChange: (e: IIcon) => void;
	label?: React.ReactNode;
	description?: React.ReactNode;
	color?: string;
}) => {
	const cards = data.map((item) => (
		<Radio.Card
			radius="md"
			value={item.value}
			key={item.value}
			w="fit-content"
			withBorder={false}
			bg={props.value === item.value ? props.color : undefined}
		>
			<Image src={`/icons/${item.value}.svg`} w="3rem" h="3rem" alt={item.value} />
		</Radio.Card>
	));

	return (
		<>
			<Radio.Group
				value={props.value}
				onChange={(e) => props.onChange(e as unknown as IIcon)}
				label={props.label}
				description={props.description}
			>
				<Group pt="md" gap="xs" flex="wrap">
					{cards}
				</Group>
			</Radio.Group>
		</>
	);
};

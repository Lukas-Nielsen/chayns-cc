import { useForm } from "@mantine/form";
import { IForm } from "./model";
import { Center, ColorInput, Image, SegmentedControl, Stack, TextInput, Title } from "@mantine/core";
import { Icon } from "./Icons";

function App() {
	const form = useForm<IForm>({
		initialValues: {
			value: "https://chayns.cc",
			color: "#005eb8",
			format: "PNG",
			icon: "tobitlogo",
			text: "unbekannt",
		},
		mode: "controlled",
		validateInputOnChange: true,
	});

	const params = new URLSearchParams({
		value: form.getValues().value,
		color: form.getValues().color,
		icon: form.getValues().icon,
		text: form.getValues().text,
	});

	return (
		<>
			<Center>
				<Stack gap="lg">
					<Title order={1}>Generieren des typischen Chayns Calling Codes</Title>
					<form>
						<Stack w="50rem" maw="95vw">
							<TextInput
								key={form.key("value")}
								{...form.getInputProps("value")}
								label="Inhalt"
								description="Inhalt für den Calling Code, Text oder URL"
							/>
							<ColorInput
								key={form.key("color")}
								{...form.getInputProps("color")}
								label="Farbe des Rings"
								description=""
							/>
							<TextInput
								key={form.key("text")}
								{...form.getInputProps("text")}
								label="Beschriftung"
								description="Beschriftung für den Ring"
							/>
							<Icon
								key={form.key("icon")}
								value={form.getInputProps("icon").value}
								onChange={form.getInputProps("icon").onChange}
								label="Spot Label"
								description="Label für das Innere des QR-Codes"
								color={form.getValues().color}
							/>
							<SegmentedControl
								key={form.key("format")}
								data={["PNG", "SVG", "JPG"]}
								{...form.getInputProps("format")}
							/>
						</Stack>
					</form>
					<Center>
						<Image
							src={`https://cube.tobit.cloud/qr-code-generator/v1.0/${form.getValues().format}/?${params.toString()}`}
							alt="Calling Code"
							w="25rem"
							maw="75vw"
						/>
					</Center>
				</Stack>
			</Center>
		</>
	);
}

export default App;

import { View, TextInput, Alert, StyleSheet, Text } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import InstructionText from "../components/InstructionText";
import { useState } from "react";
import Title from "../components/Title";
import Card from "../components/Card";

function StartGameScreen({ onSubmit }) {
	const [enteredNumber, setEnteredNumber] = useState("");
	function Buttons() {
		return (
			<View style={styles.buttonsContainer}>
				<View style={styles.buttonContainer}>
					<PrimaryButton
						disabled={enteredNumber === ""}
						onPress={resetInputHandler}>
						Reset
					</PrimaryButton>
				</View>
				<View style={styles.buttonContainer}>
					<PrimaryButton
						disabled={enteredNumber === ""}
						onPress={confirmInputHandler}>
						Confirm
					</PrimaryButton>
				</View>
			</View>
		);
	}
	function numberInputHandler(text) {
		setEnteredNumber(text);
	}
	function resetInputHandler() {
		setEnteredNumber("");
	}
	function confirmInputHandler() {
		if (enteredNumber == "") {
			return;
		}
		const choosenNumber = parseInt(enteredNumber);
		if (isNaN(choosenNumber) || choosenNumber < 1 || choosenNumber > 99) {
			Alert.alert("Invalid Number", "Should be between 1 and 99", [
				{
					text: "Okay",
					style: "destructive",
					onPress: { resetInputHandler },
				},
			]);
			return;
		}
		onSubmit(choosenNumber);
	}
	return (
		<View style={styles.rootContainer}>
			<Title>Guess My Number</Title>
			<Card style={styles.inputContainer}>
				<InstructionText>Enter a number</InstructionText>
				<TextInput
					style={styles.numberInput}
					maxLength={2}
					keyboardType="number-pad"
					autoCapitalize="none"
					autoCorrect={false}
					value={enteredNumber}
					onChangeText={numberInputHandler}
				/>
				<Buttons />
			</Card>
		</View>
	);
}

export default StartGameScreen;
const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
		marginTop: 100,
		alignItems: "center",
	},
	numberInput: {
		height: 50,
		width: 50,
		fontSize: 32,
		borderBottomColor: "#ddb52f",
		borderBottomWidth: 2,
		color: "#ddb52f",
		marginVertical: 8,
		fontWeight: "bold",
		textAlign: "center",
	},
	buttonsContainer: {
		flexDirection: "row",
	},
	buttonContainer: { flex: 1 },
});

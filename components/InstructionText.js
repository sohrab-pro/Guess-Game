import { View, Text, StyleSheet } from "react-native";

const InstructionText = ({ children, style }) => {
	return <Text style={[styles.instructionText, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
	instructionText: {
		fontFamily: "open-sans",
		color: "#ddb52f",
		fontSize: 24,
	},
});

export default InstructionText;

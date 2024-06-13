import { View, Text, StyleSheet } from "react-native";

const NumberContainer = ({ children }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.numberText}>{children}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		borderWidth: 4,
		borderColor: "#ddb52f",
		padding: 24,
		margin: 24,
		borderRadius: 8,
		alignItems: "center",
		justifyContent: "center",
	},
	numberText: {
		color: "#ddb52f",
		fontSize: 36,
		fontFamily: "open-sans-bold",
	},
});

export default NumberContainer;

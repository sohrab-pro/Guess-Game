import { View, Text, StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
function GuessLogItem({ roundNumber, guess }) {
	<>
		<Text>#{roundNumber}</Text>
		<Text>Opponent's Guess: {guess}</Text>
	</>;
}

export default GuessLogItem;

const styles = StyleSheet.create({
    listItem: {
        borderColor: Colors.primary800,
        borderWidth: 1,
        borderRadius: 40,
        padding: 12,
        marginVertical: 8,
        backgroundColor: Colors.accent500
    }
})

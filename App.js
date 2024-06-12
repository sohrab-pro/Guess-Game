import {
	StyleSheet,
	ImageBackground,
	SafeAreaView,
	Button,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./screens/StartGameScreen";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
	const [userNum, setUserNum] = useState();
	const [gameOver, setGameOver] = useState(true);

	function pickedNumHandler(num) {
		setUserNum(num);
		setGameOver(false);
	}

	function gameOverHandler() {
		setGameOver(true);
	}
	let screen = <StartGameScreen onSubmit={pickedNumHandler} />;
	if (userNum) {
		screen = (
			<GameScreen userNumber={userNum} onGameOver={gameOverHandler} />
		);
	}

	if (gameOver && userNum) {
		screen = <GameOverScreen />;
	}
	return (
		<LinearGradient
			colors={["#4e0329", "#ddb52f"]}
			style={styles.rootScreen}>
			<ImageBackground
				style={styles.rootScreen}
				source={require("./assets/images/background.png")}
				resizeMode="cover"
				imageStyle={styles.backgroundImage}>
				<SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
			</ImageBackground>
		</LinearGradient>
	);
}

const styles = StyleSheet.create({
	rootScreen: {
		flex: 1,
	},
	backgroundImage: {
		opacity: 0.15,
	},
});

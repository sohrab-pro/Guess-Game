import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./screens/StartGameScreen";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
	const [userNum, setUserNum] = useState();
	const [gameOver, setGameOver] = useState(true);
	const [guessRounds, setGuessRounds] = useState(0);

	const [fontsLoaded] = useFonts({
		"open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
		"open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	}

	function pickedNumHandler(num) {
		setUserNum(num);
		setGameOver(false);
	}

	function gameOverHandler(numberOfRounds) {
		setGameOver(true);
		setGuessRounds(numberOfRounds);
	}

	function startNewGameHandler() {
		setUserNum(null);
		setGuessRounds(0);
	}
	let screen = <StartGameScreen onSubmit={pickedNumHandler} />;
	if (userNum) {
		screen = (
			<GameScreen userNumber={userNum} onGameOver={gameOverHandler} />
		);
	}

	if (gameOver && userNum) {
		screen = (
			<GameOverScreen
				userNumber={userNum}
				roundsNumber={guessRounds}
				onStartNewGame={startNewGameHandler}
			/>
		);
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

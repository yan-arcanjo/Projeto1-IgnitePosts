// JSX = Javascript + XML
import { Header } from "./components/Header";
import styles from "./App.module.css";

function App() {
	return (
		<div>
			<Header />

			<div className={styles.wrapper}>
				<aside></aside>
				<main></main>
			</div>
		</div>
	);
}

export default App;

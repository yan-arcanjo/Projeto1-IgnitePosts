// JSX = Javascript + XML
import { Header } from "./components/Header";
import styles from "./App.module.css";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

function App() {
	return (
		<div>
			<Header />

			<div className={styles.wrapper}>
				<Sidebar />
				<main>
					<Post
						author="Yan"
						content="Hello worldfsjdkjfjsdfjsdhjdfjsdknfdsnfjksnfushgnurhgurngmvnjsfdngpsghurpghru jfhguwihgurwurtg jjsngjfowuthgfgnus hgjsgturghsrghushg"
					/>
					<Post
						author="Lucas"
						content="Olá mundo gdfuighusihtughsurfi uhgusogfusohgfus fjgpurhgufbvjds shgjspghruwpghwupghutwhg sgnjfsnbupngfjbns ghfsjpghu"
					/>
				</main>
			</div>
		</div>
	);
}

export default App;

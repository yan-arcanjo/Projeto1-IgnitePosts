// JSX = Javascript + XML
import { Header } from "./components/Header";
import styles from "./App.module.css";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

// author: {avatar_url: "", name: "", role: ""}
// publishedAt: Date
// Content: String

const posts = [
	{
		id: 1,
		author: {
			avatarUrl: "https://github.com/yan-arcanjo.png",
			name: "Yan Arcanjo",
			role: "Web Developer",
		},
		content: <p>oi</p>,
	},
];

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

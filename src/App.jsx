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
		content: [
			{
				type: "paragraph",
				content: "Fala galeraa 👋",
			},
			{
				type: "paragraph",
				content:
					"Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
			},
			{
				type: "link",
				content: "jane.design/doctorcare",
			},
		],
		publishedAt: new Date("2023-04-20 20:00:00"),
	},
	{
		id: 2,
		author: {
			avatarUrl: "https://github.com/maykbrito.png",
			name: "Eduarda Arcanjo",
			role: "UX Developer",
		},
		content: [
			{
				type: "paragraph",
				content: "Fala galeraa 👋",
			},
			{
				type: "paragraph",
				content:
					"Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
			},
			{
				type: "link",
				content: "jane.design/doctorcare",
			},
		],
		publishedAt: new Date("2023-04-21 10:00:00"),
	},
];

function App() {
	return (
		<div>
			<Header />

			<div className={styles.wrapper}>
				<Sidebar />
				<main>
					{posts.map((post) => {
						return (
							<Post
								key={post.id}
								author={post.author}
								content={post.content}
								publishedAt={post.publishedAt}
							/>
						);
					})}
				</main>
			</div>
		</div>
	);
}

export default App;

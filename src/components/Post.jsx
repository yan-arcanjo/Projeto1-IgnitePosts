import styles from "./Post.module.css";

export const Post = (props) => {
	return (
		<article className={styles.post}>
			<header>
				<div className={styles.author}>
					<img
						className={styles.avatar}
						src="https://github.com/yan-arcanjo.png"
						alt="profile picture"
					/>
					<div className={styles.authorInfo}>
						<strong>Yan Arcanjo</strong>
						<span>Web Developer</span>
					</div>
				</div>

				<time title="11 de maio às 08:13" dateTime="2022-05-11 08:13:30">
					Públicado há 1h
				</time>
			</header>

			<div className={styles.content}>
				<p>Fala galeraa 👋</p>
				<p>
					Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
					no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
				</p>
				<p>
					👉 <a href="#">jane.design/doctorcare</a>{" "}
				</p>
				<p>
					<a href="#">#novoprojeto</a> <a href="#">#nlw</a>{" "}
					<a href="#">#rocketseat</a>
				</p>
			</div>

			<form className={styles.commentForm}>
				<strong>Deixe seu feedback</strong>
				<textarea placeholder="Deixe um comentário" />

				<footer>
					<button type="submit">Publicar</button>
				</footer>
			</form>
		</article>
	);
};

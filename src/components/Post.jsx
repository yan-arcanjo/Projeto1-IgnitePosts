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
		</article>
	);
};

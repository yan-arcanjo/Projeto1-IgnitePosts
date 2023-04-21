import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

export const Comment = () => {
	return (
		<div className={styles.comment}>
			<Avatar hasBorder={false} imageUrl="https://github.com/yan-arcanjo.png" />

			<div className={styles.commentBox}>
				<div className={styles.commentContent}>
					<header>
						<div className={styles.authorAndTime}>
							<strong>Yan Arcanjo</strong>
							<time title="11 de maio às 08:13" dateTime="2022-05-11 08:13:30">
								Públicado há 1h
							</time>
						</div>

						<button title="Deletar comentário">
							<Trash size={24} />
						</button>
					</header>
					<p>Muito bom Devon, parabéns!! 👏👏</p>
				</div>

				<footer>
					<button>
						<ThumbsUp />
						Aplaudir <span>20</span>
					</button>
				</footer>
			</div>
		</div>
	);
};

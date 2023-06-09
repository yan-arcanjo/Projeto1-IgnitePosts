import styles from "./Post.module.css";
import { Comment } from "./Comment";
import { Avatar } from "./Avatar";
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { useState } from "react";

// author: {avatar_url: "", name: "", role: ""}
// publishedAt: Date
// Content: String

export const Post = ({
	author,
	publishedAt,
	content,
	turnOnModal,
	deleteComment,
}) => {
	const [comments, setComments] = useState([]);
	const [newComment, setNewComment] = useState("");

	const handleCreateNewComment = (e) => {
		e.preventDefault();
		setComments([...comments, newComment]);
		setNewComment("");
	};

	const setNewCommentText = (e) => {
		event.target.setCustomValidity("");
		setNewComment(e.target.value);
	};

	const handleDeleteComment = (comment) => {
		turnOnModal(true);
		deleteComment(comments, setComments, comment);
	};

	const handleNewCommentInvalid = () => {
		event.target.setCustomValidity("Esse campo é obrigatório.");
	};

	const publishedDateFormatted = format(
		publishedAt,
		"d 'de' LLLL 'às' HH:mm'h'",
		{
			locale: ptBR,
		}
	);

	const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
		locale: ptBR,
		addSuffix: true,
	});

	return (
		<>
			<article className={styles.post}>
				<header>
					<div className={styles.author}>
						<Avatar imageUrl={author.avatarUrl} />
						<div className={styles.authorInfo}>
							<strong>{author.name}</strong>
							<span>{author.role}</span>
						</div>
					</div>

					<time
						title={publishedDateFormatted}
						dateTime={publishedAt.toISOString()}>
						{publishedDateRelativeToNow}
					</time>
				</header>

				<div className={styles.content}>
					{content.map((line) => {
						if (line.type === "paragraph") {
							return <p key={line.content}>{line.content}</p>;
						} else if (line.type === "link") {
							return (
								<p key={line.content}>
									<a href="#">{line.content}</a>
								</p>
							);
						}
					})}
				</div>

				<form onSubmit={handleCreateNewComment} className={styles.commentForm}>
					<strong>Deixe seu feedback</strong>
					<textarea
						required
						onInvalid={handleNewCommentInvalid}
						name="comment"
						placeholder="Deixe um comentário"
						onChange={setNewCommentText}
						value={newComment}
					/>

					<footer>
						<button disabled={newComment.length === 0} type="submit">
							Publicar
						</button>
					</footer>
				</form>

				<div className={styles.commentList}>
					{comments.map((comment) => {
						return (
							<Comment
								key={comment}
								content={comment}
								OnDeleteComment={handleDeleteComment}
							/>
						);
					})}
				</div>
			</article>
		</>
	);
};

import styles from "./Modal.module.css";

export const Modal = ({ setModal, deleteComment }) => {
	return (
		<div className={styles.modalReset}>
			<div className={styles.modalContent}>
				<h3>Excluir comentário</h3>
				<h4>Você tem certeza que gostaria de excluir este comentário?</h4>
				<div className={styles.modalBtn}>
					<button
						onClick={() => {
							setModal(false);
						}}
						className={styles.btnCancel}>
						Cancelar
					</button>
					<button
						onClick={() => {
							deleteComment.setComments(
								deleteComment.comments.filter((c) => c != deleteComment.comment)
							);
							setModal(false);
						}}
						className={styles.btnConfirm}>
						Sim, excluir
					</button>
				</div>
			</div>
		</div>
	);
};

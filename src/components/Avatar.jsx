import styles from "./Avatar.module.css";

export const Avatar = ({ imageUrl, hasBorder = true }) => {
	return (
		<img
			className={hasBorder ? styles.avatar : styles.avatarWithoutBorder}
			src={imageUrl}
			alt="profile picture"
		/>
	);
};

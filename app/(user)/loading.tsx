import React from "react";
import styles from './LoadingAnimation.module.css';

export default function Loading() {
	return (
		// <div className="h-screen grid place-content-center text-6xl">
		// 	loading...
		// </div>

		<div className={styles.spinnerContainer}>
		<div className={styles.spinner}></div>
		<div className={styles.loader}>
		<p>Loading...</p>
		<div className={styles.words}>
			<span className={styles.word}>posts</span>
			<span className={styles.word}>images</span>
			<span className={styles.word}>followers</span>
			<span className={styles.word}>hashtags</span>
			<span className={styles.word}>posts</span>
		</div>
		</div>
		</div>
	);
}

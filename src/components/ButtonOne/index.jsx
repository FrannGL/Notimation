import styles from "./buttonOne.module.scss";

export default function ButtonOne() {
	return (
		<>
			<button className={styles.btn}>
				<a href="#">Chatear con agente</a>
			</button>
		</>
	);
}

import styles from "./buttonThree.module.scss";

export default function ButtonThree(props) {
	return (
		<>
			<button type="submit" className={styles.btn}>
				<a href="#">{props.texto}</a>
			</button>
		</>
	);
}

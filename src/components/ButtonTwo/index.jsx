import styles from "./buttonTwo.module.scss";

export default function ButtonTwo(props) {
	return (
		<>
			<button className={styles.btn}>
				<a href="#">{props.texto}</a>
			</button>
		</>
	);
}

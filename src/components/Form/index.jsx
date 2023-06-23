import ButtonThree from "../ButtonThree";
import styles from "./form.module.scss";
export default function Form() {
	return (
		<>
			<form className={styles.form}>
				<div className={styles.formControl}>
					<label htmlFor="nombre-completo" className={styles.formLabel}>
						Nombre Completo
					</label>
					<input
						type="text"
						className={styles.formInput}
						id="nombre-completo"
						name="nombre-completo"
						required
					/>
				</div>
				<div className={styles.formControl}>
					<label htmlFor="telefono" className={styles.formLabel}>
						Teléfono
					</label>
					<input
						type="tel"
						className={styles.formInput}
						id="telefono"
						name="telefono"
						required
					/>
				</div>
				<div className={styles.formControl}>
					<label htmlFor="correo-electronico" className={styles.formLabel}>
						Correo Electrónico
					</label>
					<input
						type="email"
						className={styles.formInput}
						id="correo-electronico"
						name="correo-electronico"
						required
					/>
				</div>
				<div className={styles.formControl}>
					<ButtonThree texto="Solicita una prueba gratuita" />
				</div>
			</form>
		</>
	);
}

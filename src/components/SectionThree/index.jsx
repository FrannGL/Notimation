import Image from "next/image";
import styles from "./section-three.module.scss";
import fondo2 from "../../../public/assets/Group 24(4).png";
import Form from "../Form";
export default function SectionThree() {
	return (
		<>
			<section className={styles.container}>
				<div className={styles.imageContainer}>
					<Image src={fondo2} alt="logo" />
				</div>
				<div className={styles.infoContainer}>
					<h3 className={styles.title}>
						Completa el formulario y solicita una prueba gratuita. <br />
						Potencia tu comunicación con <span>Notimation</span>
					</h3>
					<Form />
				</div>
			</section>
		</>
	);
}

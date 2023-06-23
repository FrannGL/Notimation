import Image from "next/image";
import fondo from "../../../public/assets/Group 22.png";
import button from "../../../public/assets/btn.png";
import img24 from "../../../public/assets/image 24 (Traced).png";
import img25 from "../../../public/assets/image 25 (Traced).png";
import img26 from "../../../public/assets/image 26 (Traced).png";
import img27 from "../../../public/assets/image 27 (Traced).png";
import img28 from "../../../public/assets/image 28 (Traced).png";
import img30 from "../../../public/assets/image 30 (Traced).png";
import ButtonThree from "../ButtonThree";
import styles from "./section-two.module.scss";

export default function SectionTwo() {
	return (
		<>
			<section className={styles.container}>
				<div className={styles.imageContainer}>
					<Image src={fondo} alt="logo" />
				</div>
				<div className={styles.infoContainer}>
					<Image src={button} alt="logo" className={styles.imageNew} />
					<h2 className={styles.title}>power campaigns</h2>
					<div className={styles.cardContainer}>
						<div className={styles.cardItem}>
							<Image src={img25} alt="preview-img" />
							<p>Preview</p>
						</div>
						<div className={styles.cardItem}>
							<Image src={img26} alt="landing-page-img" />
							<p>Landing Page</p>
						</div>
						<div className={styles.cardItem}>
							<Image src={img24} alt="notificaciones-push-img" />
							<p>Notificaciones Push</p>
						</div>
						<div className={styles.cardItem}>
							<Image src={img30} alt="diseño-personalizado-img" />
							<p>Diseño Personalizado</p>
						</div>
						<div className={styles.cardItem}>
							<Image src={img27} alt="estadisticas-img" />
							<p>Estadísticas</p>
						</div>
						<div className={styles.cardItem}>
							<Image src={img28} alt="actualizaciones-img" />
							<p>Actualizaciones</p>
						</div>
					</div>
					<ButtonThree />
					<p>Más Información →</p>
				</div>
			</section>
		</>
	);
}

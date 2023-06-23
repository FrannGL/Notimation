import ButtonTwo from "../ButtonTwo";
import styles from "./section-one.module.scss";
import Image from "next/image";
import banner from "../../../public/assets/Banner Img.png";

export default function SectionOne() {
	return (
		<>
			<section className={styles.container}>
				<div className={styles.boxLeftContainer}>
					<div className={styles.boxLeftItem}>
						<h1 className={styles.title}>
							conocé todo el poder de{" "}
							<span className={styles.span}>un mensaje</span>
						</h1>
						<p className={styles.paragraph}>
							Aumentá la eficiencia y mejora la experiencia de tus clientes con
							Notimation.
						</p>
						<ButtonTwo />
					</div>
				</div>
				<div className={styles.boxRightContainer}>
					<Image src={banner} alt="banner" width={600} />
				</div>
			</section>
		</>
	);
}

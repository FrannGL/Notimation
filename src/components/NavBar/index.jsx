import Image from "next/image";
import logo from "../../../public/assets/logo.png";
import ButtonOne from "../ButtonOne";
import styles from "./navbar.module.scss";

export default function NavBar() {
	return (
		<>
			<header className={styles.header}>
				<Image src={logo} alt="logo" />
				<nav className={styles.nav}>
					<ul className={styles.listContainer}>
						<li className={styles.listItem}>Power Campaings</li>
						<li className={styles.listItem}>Agents</li>
						<li className={styles.listItem}>Pricing</li>
						<li className={styles.listItem}>Sobre Nosotros</li>
						<ButtonOne />
					</ul>
				</nav>
			</header>
		</>
	);
}

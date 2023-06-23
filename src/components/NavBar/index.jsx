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
						<li className={styles.listItem}>
							<a href="$">Power Campaings</a>
						</li>
						<li className={styles.listItem}>
							<a href="#">Agents</a>
						</li>
						<li className={styles.listItem}>
							<a href="#">Pricing</a>
						</li>
						<li className={styles.listItem}>
							<a href="#">Sobre Nosotros</a>
						</li>
						<ButtonOne />
					</ul>
				</nav>
			</header>
		</>
	);
}

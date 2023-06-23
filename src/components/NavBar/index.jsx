import styles from "./navbar.module.scss";
import logo from "../../../public/assets/logo.png";

export default function NavBar() {
	return (
		<>
			<header className={styles.header}>
				<img src={logo} alt="logo" />
				<nav className={styles.nav}>
					<ul className={styles.listContainer}>
						<li className={styles.listItem}>Power Campaings</li>
						<li className={styles.listItem}>Agents</li>
						<li className={styles.listItem}>Pricing</li>
						<li className={styles.listItem}>Sobre Nosotros</li>
					</ul>
				</nav>
			</header>
		</>
	);
}

import { NavLink } from "react-router";
import styles from './Navigation.module.css'
export const Navigation = () => {
    return (
        <nav className={styles.navbar}>
            <NavLink to="generate" className={styles.navbarBrand}>
                Генерировать QR
            </NavLink>
            <NavLink to="scan" className={styles.navbarBrand}>
                Сканировать QR
            </NavLink >
            <NavLink to="scanHistory" className={styles.navbarBrand}>
                История Сканирования
            </NavLink>
            <NavLink to="generateHistory" className={styles.navbarBrand}>
                История Генерирования
            </NavLink>
        </nav>
    )
}
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './navbar.module.css';


export default function NavBar() {
    
    const pathname = usePathname();

    return (
        <>
            <div className={styles["navbar-container"]}>
                <div className={styles["navbar-container-l"]}>
                    {pathname !== '/' && (
                        <Link href="/" className={styles["navbar-link"]}>home</Link>
                    )}
                </div>
                <div className={styles["navbar-container-r"]}>
                    <Link href="/#about" className={styles["navbar-link"]}>about</Link>
                    <Link href="/#projects" className={styles["navbar-link"]}>projects</Link>
                    <Link href="/artwork" className={styles["navbar-link"]}>artwork</Link>
                    <a href="/files/resume.pdf" target="_blank" className={styles["navbar-link"]}>resume</a>
                </div>
            </div>
        </>
    );
}
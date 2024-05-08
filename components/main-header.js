"use client";
import Link from "next/link"
import Logo from "@/assets/logo.png";
import styles from "@/components/main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
import { usePathname } from "next/navigation";
const MainHeaderPage = () => {
	const path=usePathname();
  return (
    <>
	<MainHeaderBackground></MainHeaderBackground>
	<header className={styles.header}>
      <Link className={styles.logo} href="/">
            <Image src={Logo} alt="A plate and food on it" priority />
            NextLevel Food
      </Link>
      <nav className={styles.nav}>
        <ul >
            <li>
                <Link href="/meals" className={path.startsWith("/meals")?styles.active:undefined}>Browse Meals</Link>
            </li>
            <li>
                <Link href="/community" className={path.startsWith("/community")?styles.active:undefined}>Foodies Community</Link>
            </li>
        </ul>
      </nav>
    </header>
    </>
  )
}

export default MainHeaderPage

import React, {useRef} from "react"
import {AboutYou} from "./components/AboutYou/AboutYou"
import {Cooperation} from "./components/Cooperation/Cooperation"
import {Partners} from "./components/Partners/Partners"
import {Advantages} from "./components/Advantages/Advantages"
import {AboutUs} from "./components/AboutUs/AboutUs"
import {Login} from "./components/login/Login"
import styles from "../../component/Header/Header.module.sass"
import icon from "../../images/icon.svg"
import cn from "classnames"
import {NavLink} from "react-router-dom"
import {Header} from "../../component/Header/Header"
import {Footer} from "../../component/Footer/Footer"


export const Main = () => {
	const aboutYouRef = useRef(null)
	const cooperationRef = useRef(null)
	const advantagesRef = useRef(null)
	const partnersRef = useRef(null)
	const loginRef = useRef(null)

	const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
		if (ref.current) {
			window.scrollTo({
				top: ref.current.offsetTop,
				behavior: "smooth",
			})
		}
	}


	return (
		<div className={styles.body}>
			<header className={cn(styles.header, styles.white)}>
				<div className={styles.header__icon}>
					<div>
						<img src={icon}/>
					</div>
					<div className={styles.header__icon__text}>RentRoom</div>
				</div>
				<div className={styles.but}>
					<button className={styles.button} onClick={() => scrollToRef(aboutYouRef)}>O нас</button>
					<button className={styles.button} onClick={() => scrollToRef(cooperationRef)}>Сотрудничество
					</button>
					<button className={styles.button} onClick={() => scrollToRef(advantagesRef)}>Преимущества</button>
					<button className={styles.button} onClick={() => scrollToRef(partnersRef)}>Партнеры</button>
					<button className={styles.button} onClick={() => scrollToRef(loginRef)}>Войти</button>

				</div>

			</header>
			<div ref={aboutYouRef}>
				<AboutYou/>
			</div>
			<br/>
			<br/>
			<br/>
			<br/>
			<div>
				<AboutUs/>
			</div>
			<div ref={cooperationRef}>
				<Cooperation/>
			</div>
			<div ref={advantagesRef}>
				<Advantages/>
			</div>
			<div ref={partnersRef}>
				<Partners/>
			</div>
			<div ref={loginRef}>
				<Login/>
			</div>
			<Footer/>
		</div>
	)
}
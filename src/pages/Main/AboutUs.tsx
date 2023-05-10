import React from "react"
import styles from "./main.module.sass"
import girl_in_work from "../../images/girl_in_work.png"

export const AboutUs = () => {
	return (
		<div className={styles.main__first}>
			<div className={styles.main__first__block}>
				<div className={styles.main__first__block__one}>Делаем ваш бизнес проще</div>
				<div className={styles.main__first__block__second}>Cервис автоматизации аренды для крупных
                    предпринимателей и частных лиц
				</div>
				<div className={styles.main__first__block__button}>
					<button className={styles.main__first__block__button__but}>Начать работу</button>
				</div>
			</div>

			<div>
				<img className={styles.main__first__img} alt={"girl_in_work"} src={girl_in_work}/>
			</div>
		</div>
	)
}
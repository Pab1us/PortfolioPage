"use client";
import styles from "./aboutMe.module.scss"

export default function AboutMe() {
    const AboutMeText = () => {
        return (
            <div style={{ margin: '10px', lineHeight: '1.5' }}>
                <p style={{ marginBottom: '15px' }}>
                    Всем привет! Закончил бакалавриат и магистратуру по направлению информационные системы и технологии.
                    Участвовал во внутренних хакатонах компании. Сейчас работаю в рекламном агентстве в команде выдачи и отрисовки рекламы:
                </p>

                <ul style={{ marginLeft: '10px', paddingLeft: '10px' }}>
                    <li style={{ marginBottom: '10px' }}>
                        - За время работы принял участие в разработке и рефакторинге рекламных движков, которые отвечают за отрисовку всех типов рекламы (Слайдер, Видео реклама и т.д.).
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                        - В процессе работы был задействован в масштабной переработке отстрела пикселей, по которым учитываются действия пользователя в момент просмотра банера, что напрямую повлияло на выручку от рекламы в положительную сторону.
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                        - Также занимался рефакторингом легаси-кода и фиксом багов, что также положительно повлияло на выручку.
                    </li>
                </ul>
            </div>
        );
    };

    return (
        <section>
            <div className={styles.aboutMe} >
                <div className={styles.aboutMeTitleBlock}>
                    <img className={styles.aboutMeIconTitle}src={"/icons/aboutMe.png"}/>
                    <p className={styles.aboutMeTitle}>О себе</p>
                </div>
                <div className={styles.aboutMeText}><AboutMeText /></div>
            </div>
        </section>
    );
}

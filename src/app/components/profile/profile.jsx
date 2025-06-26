"use client";
import styles from "./profile.module.scss"

export default function Profile() {
    const tagItems = ['React', 'JavaScript', 'HTML', 'CSS', 'Git', "SQL", "TypeScript"];

    return (
        <section>
            <div className={styles.profile} >
                <div className={styles.topImg}/>
                <div className={styles.profileContent}>
                    <div className={styles.profileAvatar} />
                    <div className={styles.profileWrap}>
                        <p className={styles.profileTitle}>Артем Крылов</p>
                        <p className={styles.profileDesc}>Frontend-разработчик</p>
                        <div className={styles.profileLocation}>
                            <img src={"/icons/location.png"} className={styles.profileLocationIcon}/>
                            <p className={styles.profileLocationText}>Ярославль</p>
                        </div>
                        <div className={styles.profileTags}>
                            {tagItems.map((item, index) => (
                                <p
                                    key={index}
                                    className={styles.tagItem}
                                >
                                    {item}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

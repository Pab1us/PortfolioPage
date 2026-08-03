"use client";
import styles from "./contacts.module.scss"

export default function Contacts() {
    const contactsItems= [
        {
            name: "+79108218751",
            icon: "/icons/phone.png"
        },
        {
            name: "nick44ru2015@yandex.ru",
            icon: "/icons/email.png"
        },
        {
            name: "@Pab1us",
            icon: "/icons/telegram.png"
        },
        {
            name: "https://github.com/Pab1us",
            icon: "/icons/github.png"
        }
    ]

    return (
        <section>
            <div className={styles.contacts} >
                <div className={styles.aboutMeTitleBlock}>
                    <img className={styles.aboutMeIconTitle}src={"/icons/contacts.png"}/>
                    <p className={styles.aboutMeTitle}>Контакты</p>
                </div>
                <div className={styles.contactsList}>
                    {contactsItems.map((item, index) => (
                        <div key={index} className={styles.contactItem}>
                            <img className={styles.aboutMeIconTitle} src={item.icon}/>
                            <div>{item.name}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

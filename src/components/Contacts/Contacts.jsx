"use client";
import styles from "./Contacts.module.scss"

export default function Contacts() {
    const contactsItems= [
        {
            name: "+79108218751",
            href: "tel:+79108218751",
            icon: "/icons/phone.png"
        },
        {
            name: "nick44ru2015@yandex.ru",
            href: "mailto:nick44ru2015@yandex.ru",
            icon: "/icons/email.png"
        },
        {
            name: "@Pab1us",
            href: "https://t.me/Pab1us",
            icon: "/icons/telegram.png"
        },
        {
            name: "https://github.com/Pab1us",
            href: "https://github.com/Pab1us",
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
                        <a
                            key={index}
                            className={styles.contactItem}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img className={styles.aboutMeIconTitle} src={item.icon}/>
                            <div>{item.name}</div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

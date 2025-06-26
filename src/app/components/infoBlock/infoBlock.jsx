"use client";
import styles from "./infoBlock.module.scss"
import {Fragment} from "react";

export default function InfoBlock() {
    const work_1 = {
        icon: "/icons/vk.png",
        title: "Frontend-разработчик",
        text: "ВК"
    }
    const workItems = [
        {
            icon: "/icons/vk.png",
            title: "Frontend - разработчик",
            text: "ВК"
        },
        {
            icon: "/icons/tensor.png",
            title: "Программист - технолог",
            text: "Тензор"
        },
        {
            icon: "/icons/diasoft.png",
            title: "Инженер - программист",
            text: "Diasoft"
        }
    ];
    const studyItems = [
        {
            level: "Магистр",
            name: "Ярославский государственный технический университет",
            type: "Информационные системы (магистр информационных систем)",
            age: "2020"
        },
        {
            level: "Бакалавр",
            name: "Ярославский государственный технический университет",
            type: "Информационные системы (бакалавр информационных систем)",
            age: "2018"
        }
    ];

    return (
        <section className={styles.infoSection}>
            <div className={styles.infoBlock} >
                <div className={styles.infoTitleBlock}>
                    <img className={styles.infoIconTitle}src={"/icons/work.png"}/>
                    <p className={styles.infoTitle}>Опыт Работы: 6 лет 11 месяцев</p>
                </div>
                <div className={styles.infoWorkList}>
                    {workItems.map((item, index) => (
                    <div key={index} className={styles.workItem}>
                        <img className={styles.infoIconWork} src={item.icon}/>
                        <div className={styles.workWrap}>
                            <p>{item.title}</p>
                            <p className={styles.itemText}>{item.text}</p>
                        </div>
                    </div>
                ))}
                </div>
            </div>
            <div className={styles.infoBlock} >
                <div className={styles.infoTitleBlock}>
                    <img className={styles.infoIconTitle}src={"/icons/education.png"}/>
                    <p className={styles.infoTitle}>Образование</p>
                </div>
                <div className={styles.infoStudyList}>
                    {studyItems.map((item, index) => (
                        <div key={index} className={styles.workItem}>
                            <p className={styles.studyLevel}>Степень: {item.level}</p>
                            <div className={styles.workWrap}>
                                <p>{item.name}</p>
                                <p className={styles.itemText}>{item.age}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

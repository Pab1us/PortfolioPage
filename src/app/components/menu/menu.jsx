"use client";
import {Fragment, useState, useRef} from "react";
import styles from "./menu.module.scss"
export default function Menu({onValueChange}) {
    let [activeItem, setActiveItem] = useState(0);
    const menuRef = useRef(null);

    const menuItems= [
        {
            name: "О себе",
            icon: "/icons/aboutMe.png"
        },
        {
            name: "Опыт",
            icon: "/icons/education.png"
        },
        {
            name: "Проекты",
            icon: "/icons/portfolio.png"
        },
        {
            name: "Контакты",
            icon: "/icons/contacts.png"
        }
    ]


    return (
        <menu>
            <div className={styles.menu} ref={menuRef}>
                {menuItems.map((item, index) => (
                    <div key={index} className= {activeItem === index ? styles.active : styles.item} onClick={()=> {
                        onValueChange(index);
                        setActiveItem(index);
                    }}>
                        <img className={styles.menuIcons} src={item.icon}/>
                        <p>{item.name}</p>
                    </div>
                ))}
            </div>
        </menu>
    );
}

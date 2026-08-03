"use client";
import styles from "./header.module.scss"
import ToggleSwitch from "@/app/components/toggleSwich/toggleSwich";
import {useEffect, useState} from "react";
export default function Header() {

    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        document.documentElement.style.setProperty(
            '--background-header',
            darkMode ? '#222222' : '#ffffff'
        );
        document.documentElement.style.setProperty(
            '--background-color',
            darkMode ? '#141414' : '#edeef0'
        );
        document.documentElement.style.setProperty(
            '--primary-color',
            darkMode ? '#ffffff' : '#000'
        );
        document.documentElement.style.setProperty(
            '--secondary-color',
            darkMode ? '#ADADADFF' : '#646363'
        );
        document.documentElement.style.setProperty(
            '--border-color',
            darkMode ? '#383838' : '#e1e1e1'
        );
        document.documentElement.style.setProperty(
            '--background-block',
            darkMode ? '#222222' : '#ffffff'
        );

        return () => {
            // Функция очистки (опционально)
        };
    }, [darkMode]);
  return (
    <header>
        <div className={styles.menu}>
            <div className={styles.logoContainer}>
                <img className={styles.logo} src={"/icons/logo.png"}/>
                <p className={styles.logoTitle}>ВКоннекте</p>
            </div>
            <div className={styles.toggle}>
                <img className={styles.iconToggle} src={"/icons/light.png"}/>
                <ToggleSwitch
                    initialValue={false}
                    onToggle={(state) => setDarkMode(state)}
                />
                <img className={styles.iconToggle} src={"/icons/moon.png"}/>
            </div>
        </div>
    </header>
  );
}

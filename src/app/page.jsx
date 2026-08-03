"use client";
import {useState} from "react";
import Header from "@/components/Header/Header";
import styles from "./page.module.scss"
import Profile from "@/components/Profile/Profile";
import InfoBlock from "@/components/InfoBlock/InfoBlock";
import AboutMe from "@/components/AboutMe/AboutMe";
import Portfolio from "@/components/Portfolio/Portfolio";
import Menu from "@/components/Menu/Menu";
import Contacts from "@/components/Contacts/Contacts";
export default function Main() {

    const [value, setValue] = useState(0)
    const components = [
        <AboutMe key={0}/>,
        <InfoBlock key={1}/>,
        <Portfolio key={2}/>,
        <Contacts  key={3}/>
    ];
    const handleValueChange = (value) => {
        setValue(value);
    };

    const element = components.splice(value, 1)[0];
    components.unshift(element);

  return (
      <section className={styles.mainPage}>
        <Header />
          <div className={styles.mainContent}>
              <div className={styles.contentMenu}>
                <Menu onValueChange={handleValueChange} />
              </div>
              <div className={styles.contentBlock}>
                  <Profile />
                  {components}
              </div>
          </div>
      </section>
  );
}

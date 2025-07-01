"use client";
import {useState} from "react";
import Header from "@/app/components/header/header";
import styles from "./page.module.scss"
import Profile from "@/app/components/profile/profile";
import InfoBlock from "@/app/components/infoBlock/infoBlock";
import AboutMe from "@/app/components/aboutMe/aboutMe";
import Portfolio from "@/app/components/portfolio/portfolio";
import Menu from "@/app/components/menu/menu";
import Contacts from "@/app/components/contacts/contacts";
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
                  {/*<AboutMe />*/}
                  {/*<InfoBlock />*/}
                  {/*<Portfolio />*/}
              </div>
          </div>
      </section>
  );
}

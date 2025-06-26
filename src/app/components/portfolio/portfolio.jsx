"use client";
import styles from "./portfolio.module.scss"
import Slider from "@/app/components/slider/slider";

export default function Portfolio() {
    const slides = [
        {
            image: '/images/eliton.png',
            title: 'Элитон',
            text: 'Сайт для медицинского центра',
            link: 'https://www.eliton44.ru/'
        },
        {
            image: '/images/404.png',
            title: 'KingMovie',
            text: 'Сервис по просмотру фильмов(В РАЗРАБОТКЕ)',
            link: '/'
        },
        {
            image: '/images/404.png',
            title: 'KingMusic',
            text: 'Сервис по прослушивания музыки(В РАЗРАБОТКЕ)',
            link: '/'
        },
        {
            image: '/images/404.png',
            title: 'Четвёртый проект',
            text: 'Описание четвёртого проекта (В РАЗРАБОТКЕ)',
            link: '/'
        }

    ];

    return (
        <section>
            <div className={styles.portfolio} >
                <div className={styles.portfolioTitleBlock}>
                    <img className={styles.portfolioIconTitle}src={"/icons/portfolio.png"}/>
                    <p className={styles.portfolioTitle}>Мои Проекты</p>
                </div>
                <div className={styles.slideList}>
                    {slides.map((slide, index) => (
                        <a
                            key={index}
                            className={styles.slide}
                            href={slide.link}
                            target="_blank"
                        >
                            <img className={styles.slideImg} src={slide.image}/>
                            <div className={styles.slideContent}>
                                <div className={styles.slideTitle}>{slide.title}</div>
                                <div className={styles.slideText}>{slide.text}</div>
                                <button className={styles.slideButton}>Перейти</button>
                            </div>
                        </a>
                    ))}
                </div>
                {/*<Slider slides={slides} autoPlay={true} interval={5000}/>*/}
            </div>
        </section>
    );
}

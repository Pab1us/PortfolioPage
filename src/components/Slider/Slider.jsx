"use client";
import {Fragment, useState, useEffect} from "react";
import styles from "./slider.module.scss"
import {event} from "next/dist/build/output/log";
export default function Slider({ slides, autoPlay = true, interval = 3000 }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    // Автопрокрутка
    useEffect(() => {
        if (!autoPlay) return;

        const timer = setInterval(() => {
            goToNext();
        }, interval);

        return () => clearInterval(timer);
    }, [currentIndex, autoPlay, interval]);

    const goToNext = () => {

        if (isTransitioning || currentIndex === slides.length - 1) return;
        setIsTransitioning(true);
        setCurrentIndex(prev => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const goToPrev = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex(prev => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const goToSlide = (index) => {
        if (isTransitioning || index === currentIndex) return;
        setIsTransitioning(true);
        setCurrentIndex(index);
    };

    const handleTransitionEnd = () => {
        setIsTransitioning(false);
    };

  return (
    <section>
        <div className={styles.slider}>
            <div
                className={styles.sliderTrack}
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                    transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none'
                }}
                onTransitionEnd={handleTransitionEnd}
            >
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={styles.slide}

                    >
                        <img className={styles.slideImg} src={slide.image}/>
                    </div>
                ))}
            </div>
            <button className={`${styles.sliderButton} ${styles.prev}`} onClick={goToPrev}>&#10094;</button>
            <button className={`${styles.sliderButton} ${styles.next}`} onClick={goToNext}>&#10095;</button>
        </div>
    </section>
  );
}

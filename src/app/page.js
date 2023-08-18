'use client'
import { useRef, useEffect } from 'react';
import styles from './page.module.css'
import ProjButton from '@/components/project-button';

export default function Home() {

  const container = useRef(null);
  const stickyMask = useRef(null);

  const initialMaskSize = .6;
  const targetMaskSize = 32;
  const easing = 0.15;
  let easedScrollProgress = 0;

  useEffect( () => {
    requestAnimationFrame(animate)
  }, [])

  const animate = () => {
    const maskSizeProgress = targetMaskSize * getScrollProgress();
    stickyMask.current.style.webkitMaskSize = (initialMaskSize + maskSizeProgress) * 100 + "%";
    requestAnimationFrame(animate)
  }

  const getScrollProgress = () => {
    const scrollProgress = stickyMask.current.offsetTop / (container.current.getBoundingClientRect().height - window.innerHeight)
    const delta = scrollProgress - easedScrollProgress;
    easedScrollProgress += delta * easing;
    return easedScrollProgress
  }

  return (
    <main className={styles.main}>
      <div ref={container} className={styles.container}>
        <div ref={stickyMask} className={styles.stickyMask}>
          <img src="/medias/pexels-codioful-(formerly-gradienta)-7135121.jpg">
          </img>
        </div>
      </div>
      <div className={styles.text}>
      <h1>Hi, my name is <span className={styles.magic}>Amani Bobo</span> and this is my Digital Portfolio for my Scientific Research Class. In this portfolio I will share a project that I was proud of working on last year which was related to my AP CSP course.</h1>
      <h1>When Im not in school and I have some free time, I love to do things like code, play basketball, run, and hangout with my friends occasionally.</h1>
      </div>
      <ProjButton className={styles.button}/>
    </main>
  )
}
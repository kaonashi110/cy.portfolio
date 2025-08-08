'use client'
import React, { useState, useEffect } from 'react';
import styles from "./Header.module.scss";

function throttle(fn: () => void, wait: number) {
  let lastTime = 0;
  return () => {
    const now = Date.now();
    if (now - lastTime >= wait) {
      fn();
      lastTime = now;
    }
  };
}

export const Header = () => {
  // コンテンツに入ったら表示
  const [isShow, setIsShow] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const content = document.getElementById("content");
      if (!content) return;
      const contentTop = content.getBoundingClientRect().top + window.scrollY;
      const scrollY = window.scrollY;

      setIsShow(scrollY >= contentTop);
    };

    const throttledOnScroll = throttle(onScroll, 200); // 200msに1回だけ実行

    window.addEventListener("scroll", throttledOnScroll);
    onScroll(); // 初回実行

    return () => {
      window.removeEventListener("scroll", throttledOnScroll);
    };
  }, []);
  
  return (
    <>
      <header id="header" className={`${styles.header} ${isShow ? 'is-show' : ''}`}>
        <div className={styles.header__inner}>
          <div className={`${styles.container} wrapper`}>
            <a className={styles.header__logo} href="./">
              <figure><img src="./logo.svg" alt="logo" /></figure>
            </a>
            <nav className={styles.header__nav}>
              <ul>
                <li><a href="#about" className={styles.flowLink}>about</a></li>
                <li><a href="#skill" className={styles.flowLink}>skill</a></li>
                <li><a href="#works" className={styles.flowLink}>works</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  )
}

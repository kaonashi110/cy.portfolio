'use client'
import React, { useEffect, useState } from 'react'
import styles from "./Footer.module.scss"

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

export const Footer = () => {
  // スクロールトップ処理
  useEffect(() => {
    const pageTop = document.getElementById("pageTop");
    if (pageTop) {
      pageTop.addEventListener("click", (e) => {
        e.preventDefault();
        if (typeof window !== "undefined") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      });
    }
  }, []);
  
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

    const throttledOnScroll = throttle(onScroll, 200);

    window.addEventListener("scroll", throttledOnScroll);
    onScroll();

    return () => {
      window.removeEventListener("scroll", throttledOnScroll);
    };
  }, []);

  return (
    <>
      <footer className={styles.footer}>
        <div className="wrapper">
          <div className={styles.footer__top}><a id="pageTop" href="" className={isShow ? 'is-show' : ''}><span></span></a></div>
          <p className={styles.footer__copy}>&copy; Chisaki Yamamoto</p>
        </div>
      </footer>
    </>
  )
}
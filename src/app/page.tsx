'use client'
import styles from "./styles/Home.module.scss"
import ScrollDown from "./components/ScrollDown";
import WorkModal from "./components/WorkModal";
import React, { useEffect, useRef, useState } from 'react';

export default function Home() {

  const skills = [
    { id: 1, icon: "/home/skill_01.svg", alt: "HTML/CSS", text: "Web制作", delay: "0s", extraClass: "" },
    { id: 2, icon: "/home/skill_02.svg", alt: "デザイン", text: "プログラミング", delay: "0.3s", extraClass: styles.list_itemItem02 },
    { id: 3, icon: "/home/skill_03.svg", alt: "撮影", text: "撮影", delay: "0.6s", extraClass: styles.list_itemItem03 },
  ];

  const skillDetails = [
    {
      category: "Front-End",
      items: [
        { name: "HTML／CSS", years: 4, unit: "Years" },
        { name: "Sass", years: 2, unit: "Years" },
        { name: "JavaScript", years: 2, unit: "Years" },
        { name: "React", years: 6, unit: "Month" },
        { name: "Next.js", years: 6, unit: "Month" },
        { name: "TypeScript", years: 6, unit: "Month" },
      ],
    },
    {
      category: "CMS",
      items: [
        { name: "WordPress", years: 2, unit: "Years" },
      ],
    },
    {
      category: "Tools",
      items: [
        { name: "Git／GitHub", years: 2, unit: "Years" },
        { name: "VSCode", years: 4, unit: "Years" },
        { name: "Adobe Illustrator", years: 2, unit: "Years" },
        { name: "Adobe Photoshop", years: 2, unit: "Years" },
        { name: "Adobe XD", years: 1, unit: "Year" },
        { name: "Figma", years: 6, unit: "Month" },
      ],
    },
  ];

  const works = [
    {
      href: "https://kaonashi110.github.io/portfolio/",
      imgSrc: "/home/works_01.png",
      caption: "ポートフォリオ",
      title: "ポートフォリオサイト",
      styleClass: styles.web,
      category: "Webサイト",
      period: "2週間",
      use: "Next.js／TypeScript／SCSS",
      link: "https://cyportfolio2025.netlify.app/",
      linkMock: "",
      linkSlide: "",
    },
    {
      href: "",
      imgSrc: "/home/works_02.png",
      caption: "MY Panel",
      title: "MY Panel",
      styleClass: styles.app,
      category: "Webアプリ",
      period: "1ヶ月（制作中）",
      use: "Next.js／TypeScript／SCSS",
      link: "",
      linkMock: "https://www.figma.com/design/LsYDfFYFiVgVscd64yGH0Z/MYPanel_webapp_2025.08?node-id=0-1&t=pOPmASZbvMsOrV7u-1",
      linkSlide: "https://www.figma.com/proto/aj2N3E9axqmP89E0MasuKV/Slide_MYPanel_webapp_2025.08?t=pOPmASZbvMsOrV7u-0&scaling=contain&content-scaling=fixed&page-id=0%3A1&node-id=5-3"
    },
  ];

  // モーダル
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const openModal = (index: number) => {
    setActiveIndex(index);
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
    setActiveIndex(null);
  };

  // ポップアップアニメーション
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".js-text-popup");

    elements.forEach((el) => {
      const text = el.textContent || "";
      el.textContent = "";

      const html = text.split("").map((char, i) => {
        const delay = ((i + 12) * 0.18).toFixed(2);
        return `<span><span style="animation-delay:${delay}s">${char}</span></span>`;
      });

      el.innerHTML = html.join("");
    });
  }, []);

  // タイピングアニメーション
  useEffect(() => {
    const el = document.getElementById("a");
    if (!el) return;

    const text = el.textContent || "";
    el.textContent = "";
    let count = 0;

    const typing = () => {
      if (count <= text.length) {
        el.textContent = text.substring(0, count);
        count++;
        setTimeout(typing, 60);
      }
    };

    typing();
  }, []);

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.hero__container}>
          <h1 className={`${styles.hero__title} js-text-popup anim-text-popup`}>Chisaki&apos;s&nbsp;Portfolio</h1>
          <p id="a" className={styles.hero__lead}>Front-End Developer</p>
        </div>
      </section>

      <article id="content" className={styles.content}>
        <ScrollDown />
        
        <section id="about" className={styles.about}>
          <div className="inner animated wow fadeIn">
            <div className="wrapper">
              <h2 className="titleType01 wow fadeInUp">
                <span className="en animated wow fadeIn">about</span>
                <span className="ja">私について</span>
              </h2>
              <figure className={`{ ${styles.deco} ${styles.deco_01} deco`}><img src="/home/deco_01.svg" alt="" /></figure>
              <figure className={`{ ${styles.deco} ${styles.deco_02} deco`}><img src="/home/deco_02.svg" alt="" /></figure>
              <figure className={`${styles.icon} icon`}><img
                  src="/home/deco_icon_01.svg" alt="" /></figure>
              <div className={styles.about__container}>
                <figure className={styles.about__image}><img src="/home/about_01.png" alt="私について" /></figure>
                <div className={styles.about__info}>
                  <p className={styles.info_title}>Chisaki Yamamoto</p>
                  <p className={styles.info_lead}>
                    大阪生まれ兵庫育ち。<br /><br />
                    ショップ店員からWeb業界へ転職。<br />
                    Web制作会社で2年間マークアップエンジニアを経験し、<br />よりフロントエンドのスキルを磨くために勉強中です。<br /><br />
                    バグがないコードを書けることはもちろんですが<br />
                    “<span className="em">ユーザビリティの高いデザイン</span>”<br />
                    “<span className="em">ちょっとワクワクする仕掛け</span>”<br />
                    の提案もできるエンジニアになりたいと思っています。<br /><br />
                    特技は料理、趣味は音楽とアニメとゲームとお酒を飲むことです。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- // .about --> */}

        <section id="skill" className={styles.skill}>
          <div className={`${styles.inner} animated wow fadeIn`}>
            <h2 className="titleType01 wow fadeInUp">
              <span className="en animated wow fadeIn">skill</span>
              <span className="ja">できること</span>
            </h2>
            <div className={styles.skill__container}>
              <div className="wrapper">
                <ul className={styles.skill__list}>
                  {skills.map(({ id, icon, alt, text, delay, extraClass }) => (
                    <li
                      key={id}
                      className={`${styles.list_item} ${extraClass} animated wow fadeInUp`}
                      data-wow-delay={delay}
                    >
                      <figure className={styles.list_icon}>
                        <img src={icon} alt={alt} />
                      </figure>
                      <p className={styles.list_lead}>{text}</p>
                    </li>
                  ))}
                </ul>
                <figure className={`${styles.deco} ${styles.deco_01} deco`}><img src="/home/deco_04.svg" alt="" /></figure>
                <figure className={`${styles.deco} ${styles.deco_02} deco`}><img src="/home/deco_05.svg" alt="" /></figure>
                <figure className={`${styles.icon} icon`}>
                  <img src="/home/deco_icon_02.svg" alt="" />
                </figure>
              </div>
            </div>
            <div className={styles.skill__detail}>
              <div className={`${styles.wrapper} wrapper`}>
                {skillDetails.map((skillCategory, idx) => (
                  <div className={styles.detail_item} key={idx}>
                    <p className={styles.detail_title}>{skillCategory.category}</p>
                    <ul className={styles.detail_list}>
                      {skillCategory.items.map((item, i) => (
                        <li key={i}>
                          <p className={styles.title}>{item.name}</p>
                          <div
                            className={`${styles.period} ${item.unit === "Years" || item.unit === "Year" ? styles.years : ""}`}
                          >
                            <span className={styles.num}>{item.years}</span>
                            <span className={styles.days}>{item.unit}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* <!-- // .skill --> */}

        <section id="works" className={styles.works}>
          <div className="inner animated wow fadeIn">
            <div className="wrapper">
              <h2 className="titleType01 wow fadeInUp">
                <span className="en animated wow fadeIn">works</span>
                <span className="ja">制作したもの</span>
              </h2>
              <div className={styles.works__slider}>
                <div className={styles.swipeWrapper}>
                  {works.map((work, idx) => (
                    <div
                      key={idx}
                      className={`${styles.swiperSlide} ${work.styleClass} boxShadow`}
                    >
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          openModal(idx);
                        }}
                      >
                        <div className={styles.image}>
                          <figure>
                            <img src={work.imgSrc} alt={work.caption} />
                          </figure>
                        </div>
                        <p className={`${styles.caption} boxShadow`}>{work.caption}</p>
                      </a>
                    </div>
                  ))}
                  <WorkModal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    work={activeIndex !== null ? works[activeIndex] : null}
                  />
                </div>
              </div>
              <figure className={`${styles.deco} ${styles.deco_01} deco`}><img src="/home/deco_06.svg" alt="" /></figure>
              <figure className={`${styles.deco} ${styles.deco_02} deco`}><img src="/home/deco_07.svg" alt="" /></figure>
              <figure className={`${styles.deco} ${styles.deco_03} deco`}><img src="/home/deco_08.svg" alt="" /></figure>
              <figure className={`${styles.icon} icon`}><img
                  src="/home/deco_icon_03.svg" alt="" /></figure>
            </div>
          </div>
        </section>
        {/* <!-- // .works --> */}
      </article>
    </>
  );
}

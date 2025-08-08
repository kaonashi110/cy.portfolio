'use client'
import React from 'react';
import Modal from 'react-modal';
import "./WorkModalLib.scss";
import styles from "./WorkModal.module.scss"

const WorkModal = ({ 
  isOpen,
  onRequestClose,
  work,
}) => {
  if (!work) return null; // workがないときは何も表示しない

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Work Modal"
      ariaHideApp={false} // 本番環境ではrootに設定推奨
    >
      <button onClick={onRequestClose}><span></span></button>
      <div className={styles.container}>
        <h2 className={styles.title}>{work.caption}</h2>
        <figure className={styles.image}><img src={work.imgSrc} alt={work.alt} /></figure>
        <div className={styles.detail}>
          <p className={styles.category}>{work.category}</p>
          <dl className={styles.text}>
            <dt>制作期間</dt><dd>{work.period}</dd>
            <dt>使用言語</dt><dd>{work.use}</dd>
            {work.link && (
              <>
                <dt>作品リンク</dt>
                <dd><a href={work.link} target="_blank" rel="noopener noreferrer">{work.link}</a></dd>
              </>
            )}
          </dl>
        </div>
      </div>
    </Modal>
  );
};

export default WorkModal;
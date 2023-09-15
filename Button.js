import React from 'react';
import styles from './Button.module.css'; // Import css modules stylesheet as styles
import './another-stylesheet.css'; // Import regular stylesheet

export function Button(){
    return <button className={styles.error}>Error Button</button>;
}

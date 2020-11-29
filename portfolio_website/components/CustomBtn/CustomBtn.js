import React from 'react'
import styles from './CustomBtn.module.css'

export default function CustomBtn(props) {
    return (
        <div>
            <a href="#" className={styles.customBtn}>{props.content}</a>
        </div>
    )
}

import React from 'react'
import './CustomBtn.css'

export default function CustomBtn(props) {
    return (
        <div>
            <a href="#" className="custom-btn">{props.content}</a>
        </div>
    )
}

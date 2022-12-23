import React, { useState } from 'react'
import style from './DashStructure.module.css'
import {RxCaretRight} from 'react-icons/rx'

const DashStructure4 = () => {

    const [clicked, setClicked] = useState(false)

    return (
        <div className={style.main_container}>
            <div className={style.left_container}>
                <div className={style.title}>Reports
                    <div className={style.expand_button}>
                    <span onClick={()=> setClicked(!clicked)}><RxCaretRight/></span>    
                </div>
                </div>
                <div className={style.content}></div>
            </div>
            <div className={style.right_container}>
                <form className={style.form}>
                    <div className={style.label_input_container}>
                        <label className={style.label}>Title:</label>
                        <input
                            className={style.input}
                            type='text'
                            name='Title'
                        />
                    </div>
                    <div className={style.label_input_container}>
                        <label className={style.label}>Reporting for:</label>
                        <input
                            style={{width: "60%"}}
                            className={style.input}
                            type='text'
                            name='Report'
                        />
                    </div>
                    <div className={style.lable_input_time_container}>
                        <label className={style.label}>Start Timeline:</label>
                        <input
                            style={{width: "60%"}}
                            className={style.input_time}
                            type='time'
                            name='time'
                            step='1'
                        />
                        <label className={style.label}>End Timeline:</label>
                        <input
                            style={{width: "60%"}}
                            className={style.input_time}
                            type='time'
                            name='time'
                            step='1'
                        />
                    </div>
                    <div style={{display: 'flex', gap: "20px"}}>
                    <label className={style.label}>Description</label>
                        <textarea className={style.textarea} ></textarea>
                    </div>
                    <input
                        className={style.submit}
                    type='submit'/>
                </form>
            </div>
        </div>
    )
}

export default DashStructure4


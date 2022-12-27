import React from 'react'
import style from'./DashCreator.module.css'
import { data, data2, data3, Data4 } from '../../../Data/CreatorData'
import { AiFillEye, AiFillCaretDown } from 'react-icons/ai'
import { useState } from 'react'
import CreatorMore from './CreatorMore/CreatorMore'


const DashCreator = () => {

    const [look, setLook] = useState(false)

    const handleClick = () => {
        setLook(!look)
    }

    return (
        <>
            {look ? <CreatorMore setLook={setLook} /> : 
                (<div>
                    <div className={style.first_main_container}>
                        <div className={style.first_main_container_heading}>Creator Details</div>
                        <input
                            className={style.first_main_container_search_bar}
                            placeholder='Search'
                        ></input>
                        <div className={style.first_main_container_filter}>
                            <div className={style.rectangle1}>20</div>

                            <div className={style.rectangle2}><AiFillCaretDown /></div>
                        </div>
                    </div>

                    <div className={style.second_main_container}>
                        <table className={style.first_table}>
                            <thead className={style.first_table_heading}>
                                <tr >
                                    <th className={style.serial_no}>
                                        S no.
                                    </th>
                                    <th className={style.workbase_name}>
                                        Workbase Name
                                    </th>
                                </tr>
                            </thead>
                            <tbody >
                                {
                                    data.map((item) => (
                                        <tr key={item.id}>
                                            <td style={{ fontWeight: "700", color: "#7E7F83" }}>{item.id}</td>
                                            <td style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                                                <div className={style.first_table_image}>
                                                    <img
                                                        src='https://cdn.pixabay.com/photo/2021/12/09/22/17/table-setting-6859276_960_720.jpg'
                                                    />
                                                </div>
                                                <div className={style.first_table_content_container}>
                                                    <div className={style.first_table_td_channel}>
                                                        {item.channel}
                                                    </div>
                                                    <div>
                                                        {item.categories}
                                                    </div>
                                                    <div className={style.first_table_td_supporters}>
                                                        {item.supporters}
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                            {/* </table> */}
                        </table>
                        <table className={style.second_table}>
                            {/* <table > */}
                            <thead className={style.second_table_heading}>
                                <tr>
                                    {data2.map((item) => (
                                        <th style={{ minWidth: "80px" }} key={item.id}>
                                            {item.tableHead}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {data3.map((item) => (
                                    <tr>
                                        <td style={{}}>
                                            <div
                                                className={style.second_table_td_status}
                                                style={{}}>

                                                {item.status}
                                            </div>
                                        </td>
                                        <td>
                                            <div style={{ fontWeight: "700" }}>G:<span style={{ color: "#A06CD5" }}>{item.G}</span></div>
                                            <div style={{ fontWeight: "700" }}>V:<span style={{ color: "#A06CD5" }}>{item.V}</span></div>
                                            <div style={{ fontWeight: "700" }}>L:<span style={{ color: "#A06CD5" }}>{item.L}</span></div>
                                        </td>
                                        <td>{item.strikeStatus}</td>
                                        <td>{item.TotalViews}</td>
                                        <td>{item.TotalLikes}</td>
                                        <td>{item.EngagementRate}</td>
                                        <td>{item.Questionnaire}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <table className={style.third_table}>
                            <thead className={style.third_table_heading}>
                                <tr>
                                    <th>Take a Look</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Data4.map((item) => (
                                    <tr key={item.id}>
                                        <td >
                                            <span className={item.Status === 'Active' ? style.third_table_td_active : style.third_table_td_review}>
                                                {item.Status}
                                            </span>
                                            <span onClick={handleClick} className={style.third_table_td_icon}>
                                                <AiFillEye />
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>

                        </table>
                    </div>
                </div>)}
            </>
    )
}

export default DashCreator

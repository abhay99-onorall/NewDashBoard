import React, { useState } from "react";
import style from "./MoreDetails.module.css";
import { heading, MoreDetailsDataContent, heading2 } from "./MoreDetailsData";
import { AiFillLike, AiFillEye, AiFillCaretDown } from "react-icons/ai";
import { FaCommentAlt } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io";
import { RiEditBoxLine } from 'react-icons/ri'
// import VideoComponent from "./VideoComponent";
// import GroupSkillComponent from "./GroupSkill/GroupSkillComponent";
import { data1, data2 } from './DashData'
import './DashStructure2.css'

const MoreDetails = () => {
    const [clicked, setClicked] = useState(false);
    const [id, setId] = useState();
    const handleClick = (id) => {
        setId(id);
        setClicked(true);
    };

    console.log(heading2);

    return (
        <>
            <div className='main_container'>
                <div className='upper_container'>
                    <div className='left_container'>
                        <div className='left_container_profile'>
                            <img
                                src='https://cdn.pixabay.com/photo/2021/12/09/22/17/table-setting-6859276_960_720.jpg'
                            />
                        </div>
                        <div className='div_container' >
                            {data1.map((item) => (
                                <>
                                    <div className='channel_name'>{item.channel}</div>
                                    <div style={{ display: 'flex', gap: "5px" }}>
                                        {item.category.map(items => (
                                            <div className='channel_category'>{items}</div>
                                        ))}
                                    </div>
                                    <div className='channel_supporters'>
                                        {item.supporters}
                                    </div>
                                    <div>{item.creatorid}</div>
                                    <div>{item.businessmail}</div>
                                    <div>{item.joined}</div>
                                </>
                            ))}
                        </div>
                    </div>
                    <div className='right_container'>
                        <div className='div_container' >
                            {data2.map((item) => (
                                <>
                                    <div className='channel_name'>{item.user}</div>
                                    <div style={{ display: 'flex', gap: "5px" }}>
                                        {item.interest.map(items => (
                                            <div className='channel_category'>{items}</div>
                                        ))}
                                    </div>
                                    <div className='channel_supporters'>
                                        {item.mobileno}
                                    </div>
                                    <div>{item.mail}</div>
                                    <div>{item.userid}</div>
                                    <div>{item.joined}</div>
                                </>
                            ))}
                        </div>
                        <div className='right_container_profile'>
                            <img
                                src='https://cdn.pixabay.com/photo/2021/12/09/22/17/table-setting-6859276_960_720.jpg'
                            />
                        </div>
                    </div>
                </div>
                <div className='border'></div>
                <div className='lower_container'>

                </div>
            </div>
            <div className={style.middle_container}>
                <div
                    onClick={() => handleClick(1)}
                    className={
                        id === 1 && clicked
                            ? style.filter_buttons_active
                            : style.filter_buttons
                    }
                >
                    Videos
                </div>
                <div
                    onClick={() => handleClick(2)}
                    className={
                        id === 2 && clicked
                            ? style.filter_buttons_active
                            : style.filter_buttons
                    }
                >
                    GroupSkill
                </div>
                <div
                    onClick={() => handleClick(3)}
                    className={
                        id === 3 && clicked
                            ? style.filter_buttons_active
                            : style.filter_buttons
                    }
                >
                    About
                </div>
            </div>
            <table className={style.table_container}>
                <thead className={style.table_head}>
                    <tr>
                        {heading.map((item) => (
                            <th key={item.id}>{item.heading}</th>
                        ))}
                    </tr>
                </thead>
                <tbody className={style.table_body}>
                    {heading2.map((items) => {
                        return (
                            <tr>
                                <td className={style.content} key={items.id}>
                                    {/* {id === 1 && <VideoComponent item={items.Videos}/>} */}
                                    {/* {id === 2 && 
                        <GroupSkillComponent/>
                    } */}
                                    {items.Videos.map((item) => (
                                        <>

                                            <div className={style.VideoDetails_container}>
                                                <div className={style.videoThumbnail_container}>
                                                    <img src={item.url} alt="not found" />
                                                </div>
                                                <div className={style.like_view_discussion_container}>
                                                    <div className={style.like}>
                                                        <span style={{ fontSize: "20px" }}>
                                                            <AiFillLike />
                                                        </span>
                                                        {item.likes}
                                                    </div>
                                                    <div className={style.view}>
                                                        <span style={{ fontSize: "20px" }}>
                                                            <AiFillEye />
                                                        </span>
                                                        {item.views}
                                                    </div>
                                                    <div className={style.discussion}>
                                                        <span style={{ fontSize: "20px" }}>
                                                            <FaCommentAlt />
                                                        </span>
                                                        {item.discussions}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={style.title_date_container}>
                                                <div>{item.title}</div>
                                                <div>{item.publishedon}</div>
                                            </div>
                                        </>
                                    ))}
                                </td>
                                <td className={style.td} key={items.id}>{items?.ER}</td>
                                <td className={style.td} key={items.id}>{items?.Report}</td>
                                <td className={style.td} key={items.id}>
                                    <span className={style.status_span}>
                                        {items?.Status}
                                    </span>

                                </td>
                                <td style={{ textTransform: "capitalize", color: "#12659C", fontWeight: "700" }} className={style.td} key={items.id}>{items?.Verified}</td>
                                <td className={style.td} key={items.id}>
                                    <div className={style.tags_container}>
                                        {items.Tags.map(item => (
                                            <div className={style.tags}>{item}</div>
                                        ))}
                                    </div>
                                </td>
                                <td className={style.td_about} key={items.id}>
                                    <span className={style.review_icon}><AiFillEye /></span>
                                    <span className={style.review_option}><RiEditBoxLine /></span>
                                    <span className={style.review_status}>
                                        <span className={style.status_span}>{items.Status}</span>
                                        <span className={style.caret_down}>
                                            <AiFillCaretDown />
                                        </span>
                                    </span>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
};

export default MoreDetails;



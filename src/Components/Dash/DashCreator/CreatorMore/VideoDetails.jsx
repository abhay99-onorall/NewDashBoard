import React from 'react'
import style from './DashStructure3.module.css'
import { heading2 } from '../DashStructure2/MoreDetailsData'
import { IoMdDownload} from 'react-icons/io'
const DashStructure3 = () => {
    return (
        <div className={style.main_div}>
            {heading2.map((item) => (
                <>
                    {item.Videos.map((items) => (
                        <div className={style.left_container}>
                            <div className={style.video_thumbnail_container}>
                                <img
                                    src={items.url}
                                    alt='not found'
                                />
                            </div>
                            <div className={style.title_container}>
                                Title
                                <div>{items.title}</div>
                                <div>{items.publishedon}</div>
                            </div>

                            <div className={style.description_container}>
                                Description
                                <div>{items.description}</div></div>
                        </div>
                    ))}

                    <div className={style.right_container}>
                        <div className={style.title}>Tags</div>
                        <div className={style.tags_container}>
                            {item.Tags.map(tag => (
                                <div className={style.tag}>{tag}</div>
                            ))}
                        </div>
                        <div className={style.title}>Resources</div>
                        <div className={style.Resources_container}>
                            {item.Videos.map(resource => (<>
                                <div >{resource.resourcetime.map(time => (
                                    <div className={style.timeStamp}>{time}</div>
                                ))}</div>
                                <div>{resource.resourcetime.map(time => (
                                    <div className={style.middle_div} style={{marginLeft: "5px", marginRight: "5px"}}>-&gt;</div>
                                ))}</div>
                                <div>{resource.resoucefile.map(file => (
                                    <>
                                        <div className={style.file}>{file}</div>
                                    </>))}</div>
                            </>))}
                        </div>
                            <div className={style.title}>Float Support</div>
                        <div className={style.floatsupport_container}>
                            {item.Videos.map(item =>
                            (
                                <div>{item.floatsupport.map(fsup => (
                                    <div className={style.timeStamp}>{fsup}</div>
                                ))}</div>
                                ))}
                        </div>
                        <div className={style.icon_container}></div>
                        <div className={style.status_container}></div>
                    </div>
                </>
            ))}

        </div>
    )
}

export default DashStructure3
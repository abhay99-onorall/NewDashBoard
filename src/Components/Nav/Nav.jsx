import React from 'react'
import style from "./Nav.module.css"
import { RiDashboardFill } from 'react-icons/ri';
import {FaUserEdit,FaUsers} from 'react-icons/fa'
import { GoReport } from 'react-icons/go'
import {MdReport} from 'react-icons/md'
import {TbBulb} from 'react-icons/tb'
import { useState } from 'react';
const Nav = ({
	setSelected
}) => {
	const [clicked, setClicked] = useState(false)
 	const [id, setId] = useState(1)
	const handleClick = (id) => {
		setId(id)
		setClicked(!clicked)
		setSelected(id)
	}
	console.log(clicked, id)

  return (
	<div className={style.main}>
		  <div className={style.site_icon_container}>
			  <div>
				  <img src='/CretSkill_icon.png'
				  alt='not found'/>
			  </div>
	  </div>
	  <div onClick={()=>handleClick(1)} className={id === 1 ?style.icon_active : style.icon}><RiDashboardFill/></div>
	  <div onClick={()=>handleClick(2)} className={id === 2 ?style.icon_active : style.icon}><FaUserEdit/></div>
	  <div onClick={()=>handleClick(3)} className={id === 3 ?style.icon_active : style.icon}><FaUsers/></div>
	  <div onClick={()=>handleClick(4)} className={id === 4 ?style.icon_active : style.icon}><MdReport/></div>
	  <div onClick={()=>handleClick(5)} className={id === 5 ?style.icon_active : style.icon}><TbBulb/></div>
	</div>
  )
}
export default Nav

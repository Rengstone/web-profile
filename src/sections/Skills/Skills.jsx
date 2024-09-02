// import React from 'react'
import style from './SkillStyle.module.css'
import SkillList from '../../common/SkillList'

import checkMarkLight from '../../assets/svg/check-mark.svg'
import checkMarkDark from '../../assets/svg/check-mark-dark.svg'
import { useTheme } from '../../common/ThemeContext'

function Skills() {

  const { theme, toggleTheme } = useTheme()
  const checkMark = theme === 'light' ? checkMarkLight : checkMarkDark
  return (
    <section id='skills' className={style.container}>
        <h1 className='sectionTitle'>Skills</h1>
        <div className={style.skillList}>
            <SkillList src={checkMark} skill='HTML'/>
            <SkillList src={checkMark} skill='CSS'/>
            <SkillList src={checkMark} skill='Javascript'/>
            <SkillList src={checkMark} skill='Python'/>
            <SkillList src={checkMark} skill='SQL'/>
        </div>
        <hr />
        <div className={style.skillList}>
            <SkillList src={checkMark} skill='React'/>
            <SkillList src={checkMark} skill='Vite'/>
            <SkillList src={checkMark} skill='Next'/>
            <SkillList src={checkMark} skill='Flask'/>
            <SkillList src={checkMark} skill='Bootstrap'/>
        </div>
        <hr />
    </section>
  )
}

export default Skills

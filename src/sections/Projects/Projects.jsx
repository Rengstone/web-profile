import React from 'react'
import style from './ProjectsStyle.module.css'
import ProjectCard from '../../common/ProjectCard'

import web from '../../assets/img/project-1.jpg'
import analyst from '../../assets/img/project-2.jpg'
import android from '../../assets/img/project-3.jpg'

function Projects() {
  return (
    <section id='proects' className={style.container}>
      <h1 className='sectionTitle'>My Projects</h1>
      <div className={style.projectsContainer}>
        <ProjectCard src={web} link='https://linkedin.com' h3='Website' p='Website Pencatatan Kerja karyawan'/>
        <ProjectCard src={analyst} link='https://linkedin.com' h3='Analytic' p='Monitoring Mesin ATM'/>
        <ProjectCard src={android} link='https://linkedin.com' h3='Android APP' p='E-Commerce app'/>
      </div>
    </section>
  )
}

export default Projects

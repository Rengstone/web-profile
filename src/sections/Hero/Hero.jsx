import style from './HeroStyle.module.css'
import heroImg from '../../assets/img/pict-jalin-1.jpeg'

import moon from '../../assets/svg/moon.svg'
import sun from '../../assets/svg/sun.svg'

import facebookLight from '../../assets/svg/facebookLight.svg'
import facebookDark from '../../assets/svg/facebookDark.svg'

import githubLight from '../../assets/svg/githubLight.svg'
import githubDark from '../../assets/svg/githubDark.svg'

import instagramLight from '../../assets/svg/instagramLight.svg'
import instagramDark from '../../assets/svg/instagramDark.svg'

import linkedinLight from '../../assets/svg/linkedinLight.svg'
import linkedinDark from '../../assets/svg/linkedinDark.svg'

import CV from '../../assets/cv/CV Moch. Dira Issyari.pdf'
import { useTheme } from '../../common/ThemeContext'

import { TypeAnimation } from 'react-type-animation'

function Hero() {
  
    const { theme, toggleTheme } = useTheme()
    const themeIcon = theme === 'light' ? moon : sun
    const facebookIcon = theme === 'light' ? facebookLight : facebookDark
    const githubIcon = theme === 'light' ? githubLight : githubDark
    const instagramIcon = theme === 'light' ? instagramLight : instagramDark
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark

  return (
    <section id='hero' className={style.container} >
      <div className={style.colorModeContainer}>
        <img src={heroImg} alt="Moch. Dira Issyari" className={style.hero} />
        <img src={themeIcon} alt="Theme Icon" className={style.colorMode} onClick={ toggleTheme } />
      </div>
      <div className={style.info} >
        <h1>Moch. Dira Issyari</h1>
        <h2>
          <TypeAnimation
            sequence={[
              'Frontend  Developer',
              2000,
              'Web Developer',
              2000,
              'Data Analyst',
              2000,
            ]}
            // wrapper="span"
            speed={50}
            style={{ fontSize: '20px', display: 'inline-block' }}
            repeat={Infinity}
          />
        </h2>
        <span>
            <a href="https://facebook.com/" target='_blank'>
                <img src={facebookIcon} alt="Facebook Icon" />
            </a>
            <a href="https://github.com/" target='_blank'>
                <img src={githubIcon} alt="Github Icon" />
            </a>
            <a href="https://instagram.com/" target='_blank'>
                <img src={instagramIcon} alt="Instagram Icon" />
            </a>
            <a href="https://linkedin.com/" target='_blank'>
                <img src={linkedinIcon} alt="Linkedin Icon" />
            </a>
        </span>
        <p className={style.description}>
          Hello! My name is Moch. Dira Issyari. Welcome to my portfolio, where I showcase user-friendly websites built with React and data insights from SQL and Python.
        </p>
        <a href={CV} download >
            <button className='hover'>
                Resume
            </button>
        </a>
      </div>
    </section>
  )
}

export default Hero

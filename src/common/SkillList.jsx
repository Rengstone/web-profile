import React from 'react'

function SkillList({src, skill}) {
  return (
    <span>
        <img src={src} alt="Check Mark Logo" />
        <p>{skill}</p>
    </span>
  )
}

export default SkillList

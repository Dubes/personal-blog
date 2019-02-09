import React from 'react'
import { rhythm } from '../utils/typography'
import bioImage from '../assets/kdu_bio.png'

const ShortBio = () => (
  <>
    <div style={{ display: `flex` }}>
      <img src={bioImage} alt='Kapil Dube'
      style={{ 
        marginRight: rhythm(1 / 2),
        borderRadius: '50%'
        }}  />
      <p style={{ maxWidth: 310 }}>
        I am a full stack developer, who loves learning, solving problems &
        playing video games!
      </p>
    </div>
    <p>
      This is my personal blog where I share my thoughts, observations & experiments!
    </p>
  </>
)

export default ShortBio

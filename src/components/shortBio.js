import React from 'react'
import { rhythm } from '../utils/typography'
import bioImage from '../assets/kdu_bio.png'

const ShortBio = () => (
  <>
    <div
      style={{ display: `flex`, alignItems: `center`, marginBottom: rhythm(1) }}
    >
      <img
        src={bioImage}
        alt="Kapil Dube"
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          width: rhythm(2),
          height: rhythm(2),
          borderRadius: '50%',
        }}
      />
      <p style={{ maxWidth: '80vw', marginBottom: 0 }}>
        Full stack developer in Germany. <br />
        I <span role="img" aria-label="Love">
          ❤️
        </span>{' '}
        tech & video games!
      </p>
    </div>
    <p>
      This is my personal blog where I share my thoughts, learnings and
      experiments
    </p>
  </>
)

export default ShortBio

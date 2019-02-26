import React from 'react'
import Layout from '../../components/layout'
import './feedback.css'

const FeedbackPage = () => (
  <Layout>
    <svg
      class="heart-loader"
      viewBox="0 0 90 90"
      version="1.1"
    >
      <g class="heart-loader__group">
        <path
          class="heart-loader__square"
          stroke-width="1"
          fill="none"
          d="M0,30 0,90 60,90 60,30z"
        />
        <path
          class="heart-loader__circle m--left"
          stroke-width="1"
          fill="none"
          d="M60,60 a30,30 0 0,1 -60,0 a30,30 0 0,1 60,0"
        />
        <path
          class="heart-loader__circle m--right"
          stroke-width="1"
          fill="none"
          d="M60,60 a30,30 0 0,1 -60,0 a30,30 0 0,1 60,0"
        />
        <path
          class="heart-loader__heartPath"
          stroke-width="2"
          d="M60,30 a30,30 0 0,1 0,60 L0,90 0,30 a30,30 0 0,1 60,0"
        />

        <path
          class="heart-loader logo__line-1"
          fill="none"
          stroke-width="1"
          d="M10,0 10,90"
        />
        <path
          class="heart-loader logo__line-2"
          fill="none"
          stroke-width="1"
          d="M20,0 20,90"
        />
        <path
          class="heart-loader logo__line-3"
          fill="none"
          stroke-width="1"
          d="M30,0 30,90"
        />
        <path
          class="heart-loader logo__line-4"
          fill="none"
          stroke-width="1"
          d="M40,0 40,90"
        />
        <path
          class="heart-loader logo__line-5"
          fill="none"
          stroke-width="1"
          d="M50,0 50,90"
        />
        <path
          class="heart-loader logo__line-6"
          fill="none"
          stroke-width="1"
          d="M60,0 60,90"
        />
        <path
          class="heart-loader logo__line-5"
          fill="none"
          stroke-width="1"
          d="M70,0 70,90"
        />
        <path
          class="heart-loader logo__line-6"
          fill="none"
          stroke-width="1"
          d="M80,0 80,90"
        />

        <path
          class="heart-loader logo__line-1"
          fill="none"
          stroke-width="1"
          d="M0,10 90,10"
        />
        <path
          class="heart-loader logo__line-2"
          fill="none"
          stroke-width="1"
          d="M0,20 90,20"
        />
        <path
          class="heart-loader logo__line-3"
          fill="none"
          stroke-width="1"
          d="M0,30 90,30"
        />
        <path
          class="heart-loader logo__line-4"
          fill="none"
          stroke-width="1"
          d="M0,40 90,40"
        />
        <path
          class="heart-loader logo__line-5"
          fill="none"
          stroke-width="1"
          d="M0,50 90,50"
        />
        <path
          class="heart-loader logo__line-6"
          fill="none"
          stroke-width="1"
          d="M0,60 90,60"
        />
        <path
          class="heart-loader logo__line-5"
          fill="none"
          stroke-width="1"
          d="M0,70 90,70"
        />
        <path
          class="heart-loader logo__line-6"
          fill="none"
          stroke-width="1"
          d="M0,80 90,80"
        />
      </g>
      <g class="logo__colorGroup">
        <path
          class="heart-loader__stroke"
          fill="none"
          stroke-width="2"
          d="M62,28 55,42 38,40 36,60 20,60 18,82 0,90 -1,91"
        />
      </g>
    </svg>

    <form
      name="contact"
      method="post"
      action="success"
      data-netlify="true"
      data-netlify-honeypot="meow-field"
    >
      <input type="hidden" name="meow-field" />
      <div className="field half first">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
      </div>
      <div className="field half">
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" />
      </div>
      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" rows="6" />
      </div>
      <ul className="actions">
        <li>
          <input type="submit" value="Send Message" className="special" />
        </li>
        <li>
          <input type="reset" value="Clear" />
        </li>
      </ul>
    </form>
  </Layout>
)

export default FeedbackPage

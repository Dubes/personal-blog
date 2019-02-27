import React from 'react'
import Layout from '../../components/layout'
import './brokenHeart.css'

const FeedbackSuccessPage = () => (
  <Layout>
    <svg className="heart-loader" viewBox="0 0 90 90" version="1.1">
      <g className="heart-loader__group">
        <path
          className="heart-loader__square"
          strokeWidth="1"
          fill="none"
          d="M0,30 0,90 60,90 60,30z"
        />
        <path
          className="heart-loader__circle m--left"
          strokeWidth="1"
          fill="none"
          d="M60,60 a30,30 0 0,1 -60,0 a30,30 0 0,1 60,0"
        />
        <path
          className="heart-loader__circle m--right"
          strokeWidth="1"
          fill="none"
          d="M60,60 a30,30 0 0,1 -60,0 a30,30 0 0,1 60,0"
        />
        <path
          className="heart-loader__heartPath"
          strokeWidth="2"
          d="M60,30 a30,30 0 0,1 0,60 L0,90 0,30 a30,30 0 0,1 60,0"
        />

        <path
          className="heart-loader logo__line-1"
          fill="none"
          strokeWidth="1"
          d="M10,0 10,90"
        />
        <path
          className="heart-loader logo__line-2"
          fill="none"
          strokeWidth="1"
          d="M20,0 20,90"
        />
        <path
          className="heart-loader logo__line-3"
          fill="none"
          strokeWidth="1"
          d="M30,0 30,90"
        />
        <path
          className="heart-loader logo__line-4"
          fill="none"
          strokeWidth="1"
          d="M40,0 40,90"
        />
        <path
          className="heart-loader logo__line-5"
          fill="none"
          strokeWidth="1"
          d="M50,0 50,90"
        />
        <path
          className="heart-loader logo__line-6"
          fill="none"
          strokeWidth="1"
          d="M60,0 60,90"
        />
        <path
          className="heart-loader logo__line-5"
          fill="none"
          strokeWidth="1"
          d="M70,0 70,90"
        />
        <path
          className="heart-loader logo__line-6"
          fill="none"
          strokeWidth="1"
          d="M80,0 80,90"
        />

        <path
          className="heart-loader logo__line-1"
          fill="none"
          strokeWidth="1"
          d="M0,10 90,10"
        />
        <path
          className="heart-loader logo__line-2"
          fill="none"
          strokeWidth="1"
          d="M0,20 90,20"
        />
        <path
          className="heart-loader logo__line-3"
          fill="none"
          strokeWidth="1"
          d="M0,30 90,30"
        />
        <path
          className="heart-loader logo__line-4"
          fill="none"
          strokeWidth="1"
          d="M0,40 90,40"
        />
        <path
          className="heart-loader logo__line-5"
          fill="none"
          strokeWidth="1"
          d="M0,50 90,50"
        />
        <path
          className="heart-loader logo__line-6"
          fill="none"
          strokeWidth="1"
          d="M0,60 90,60"
        />
        <path
          className="heart-loader logo__line-5"
          fill="none"
          strokeWidth="1"
          d="M0,70 90,70"
        />
        <path
          className="heart-loader logo__line-6"
          fill="none"
          strokeWidth="1"
          d="M0,80 90,80"
        />
      </g>
      <g className="logo__colorGroup">
        <path
          className="heart-loader__stroke"
          fill="none"
          strokeWidth="2"
          d="M62,28 55,42 38,40 36,60 20,60 18,82 0,90 -1,91"
        />
      </g>
    </svg>
    <h3>Thank you! Vielen Dank! ¡Muchas gracias!</h3>
  </Layout>
)

export default FeedbackSuccessPage

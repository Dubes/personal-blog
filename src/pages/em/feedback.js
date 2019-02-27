import React from 'react'
import Layout from '../../components/layout'
import './feedback.css'

const FeedbackPage = () => (
  <Layout>
    <form
      id="emFeedbackForm"
      name="em-feedback"
      method="post"
      action="/em/success"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="bot-field" />
      <label htmlFor="name">
        <em>from</em>
      </label>
      <input type="text" name="name" id="name" placeholder="optional" />
      <label htmlFor="message">
        <em>feedback</em>
      </label>
      <textarea
        name="message"
        id="message"
        placeholder="feel free to use Google translate if you feel the need to be anonymous"
        rows="3"
        required="true"
      />
      <div className="buttonBar">
        <button className="form-btn" type="submit">
          Send Message
        </button>
        <button className="form-btn-cancel" type="reset">
          Clear
        </button>
      </div>
    </form>
  </Layout>
)

export default FeedbackPage
import React from 'react'

const FooterLinkItem = ({ url, title }) => (
  <li style={{ float: 'left', paddingRight: '1em' }}>
    &#9672; &nbsp;
    <a href={url} target="_blank" rel="noopener noreferrer">
      {title}
    </a>
  </li>
)

const Footer = () => (
  <footer>
    <ul style={{ listStyleType: 'none', padding: '0', margin: '0' }}>
      <FooterLinkItem
        key="twitter"
        title="twitter"
        url="https://twitter.com/kapsii"
      />
      <FooterLinkItem
        key="stackoverflow"
        title="stackoverflow"
        url="https://stackoverflow.com/users/1695393/dubes"
      />
    </ul>
  </footer>
)

export default Footer

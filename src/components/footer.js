import React from 'react'

import { Link } from 'gatsby'

class Footer extends React.Component {
  render() {
    return (
      <div id="footer">
        <div className="inner">
          <ul className="icons">
            <li><Link to="http://github.com/steveworley" className="icon fa-github"><span className="label">Github</span></Link></li>
            <li><Link to="#" className="icon fa-envelope-o"><span className="label">Email</span></Link></li>
          </ul>
          <ul className="copyright">
            <li>&copy; <Link to="https://github.com/codebushi/gatsby-starter-strata">Gatsby Starter Strata</Link></li><li>Design: <Link to="http://html5up.net">HTML5 UP</Link></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Footer
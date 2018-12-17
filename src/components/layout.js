import React from "react"

import Header from './header'

import '../assets/scss/main.scss'

// Import prism for syntax highlighting.
import Prism from 'prismjs'
Prism.highlightAll()

class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div>
        <Header />
        {children}
      </div>
    )
  }
}

export default Template
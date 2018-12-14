import React from "react"

import Header from './Header'

import '../assets/scss/main.scss'

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
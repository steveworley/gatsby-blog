import React from "react"
import { Link } from "gatsby"

export default (props) => {
  const post = props.node
  return (
    <div>
      <Link to={post.fields.slug}>
        <h3>{post.title}</h3>
      </Link>
    </div>
  )
}
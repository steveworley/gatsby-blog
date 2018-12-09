import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../../utils/typography"

export default (props) => {
  const post = props.node
  return (
    <div className="post--listing">
      <Link to={post.fields.slug}>
        <h3 css={css`
          margin: ${rhythm(1/2)} 0 ${rhythm(1 / 4)} 0;
        `}>{ post.frontmatter.title }</h3>
      </Link>
    </div>
  )
}
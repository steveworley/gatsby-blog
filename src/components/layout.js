import React from "react"
import { css } from "@emotion/core"
import { StaticQuery, Link, graphql } from "gatsby"

import { rhythm } from "../utils/typography"

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
}
    render={data => (
      <div
        css={css`
          margin: 0 auto;
          max-width: 840px;
          padding: ${rhythm(2)};
          padding-top: ${rhythm(0.5)};
        `}
      >
        <Link to={`/`}>
          <h3
            css={css`
              margin: ${rhythm(0.5)} 0;
              display: inline-block;
              font-style: normal;
            `}
          >
            {data.site.siteMetadata.title}
          </h3>
        </Link>
        {children}
      </div>
    )}
  />
)
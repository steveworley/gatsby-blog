export const stub = {
  "allNodeBlog": {
    "totalCount": 2,
    "edges": [
      {
        "node": {
          "title": "Youtube z-index fix",
          "nid": 1,
          "id": "6335a8a3-3a41-51d1-889e-55903fba1706",
          "body": {
            "processed": "<p>Flash appearing behind elements is a common problem with a relatively simple fix — simply add wmode=transparent to the object tag and your Flash movie will behave nicely with the CSS z-index property.</p>\n\n<p>But what happens when you embed a YouTube video?</p>\n\n<p>YouTube’s relatively new embedding code utilizes iFrames — this means that we can’t simply add the wmode tag to the flash object. Here is a little trick to make YouTube include videos that respect z-indexing.</p>\n\n<p>Here is our regular embed code.</p>\n\n<pre>\n<code>\n&lt;iframe width=\"420\" height=\"315\" src=\"http://www.youtube.com/embed/C4I84Gy-cPI\" frameborder=\"0\" allowfullscreen&gt;</code></pre>\n\n<p>We can simply add `?wmode=transparent` to the end of YouTube URL. This will tell YouTube to include the video with the wmode set. So you new embed code will look like this;</p>\n\n<pre><code>&lt;iframe width=\"420\" height=\"315\" src=\"http://www.youtube.com/embed/C4I84Gy-cPI?wmode=transparent\" frameborder=\"0\" allowfullscreen&gt;</code></pre>\n"
          },
          "fields": {
            "slug": "youtube-z-index-fix"
          }
        }
      },
      {
        "node": {
          "title": "CSS attribute Selectors",
          "nid": 2,
          "id": "8a83052f-be1e-5d98-9fdc-0f74428022df",
          "body": {
            "processed": "<p>An interesting and somewhat unused feature of CSS is that it allows you to target elements based on the attributes of those elements. You are probably familiar with the more common ones; like type when trying to select different forms of input elements, however you can actually target quite a few other attributes in this way, modern browsers will allow you to select any attribute name however it will only work in `IE7` and `IE8` if a `!DOCTYPE` is specified. You can also use operational selectors (not just equals) similar to jQuery. These operators include:</p>\n\n<ul><li>*= contains</li>\n\t<li>~= contains word</li>\n\t<li>^= starts with</li>\n\t<li>$=ends with</li>\n</ul><p>Unfortunately we cannot do “not equals” (!=) with the attribute selectors in CSS. You can however mix two together to get a pseudo not equals to ie. `[rel=\"this\"][rel=\"this2\"]` and this will only select elements that match both.</p>\n\n<p>I have tried the following in IE7+.</p>\n\n<ul><li>[data-*=\"val\"]</li>\n\t<li>[rel=\"val\"]</li>\n\t<li>[title=\"val\"]</li>\n\t<li>[href=\"val\"]</li>\n\t<li>[aria-*=\"val\"]</li>\n</ul><p>You can even use custom attribute selectors; like `[myattr=\"val\"]`.</p>\n\n<p>For example lets say we wanted to target an iframe that Google AdWords includes for conversion tracking; unfortunately the iframe does not have a class or an ID — no matter we can select it from its name attribute. Take the given iframe</p>\n\n<pre>\n<code>&lt;iframe name=\"google_conversion_tracking\" src=\"...\"&gt;&lt;/iframe&gt;</code></pre>\n\n<p>We can select it in CSS with</p>\n\n<pre>\n<code>\niframe[name=\"google_conversion_tracking\"] {\n   /* your styles */\n}\n</code></pre>\n"
          },
          "fields": {
            "slug": "css-attribute-selectors"
          }
        }
      }
    ]
  }
  }
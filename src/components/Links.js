import React from 'react'

export default function Links(links) {
  return (
    <div>
    <h3>Links</h3>
    <a href={links.github}>{links.github}</a>
    <a href={links.linkedin}>{links.linkedin}</a>
    </div>
  )
}

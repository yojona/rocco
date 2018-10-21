import React from 'react'

export default function Section ({title, to}) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      marginLeft: 4,
      marginRight: 4,
      height: 40
    }}>
      {title}
    </div>
  )
}

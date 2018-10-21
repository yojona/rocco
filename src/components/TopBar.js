import React from 'react'
import Theme from '../Theme'

export default function TopBar ({children}) {
  return (
    <div style={{
      display: 'flex',
      width: '100%',
      height: 40,
      color: Theme.TEXT.LIGHT,
      background: Theme.PRIMARY,
      fontSize: 14
    }}>
      {children}
    </div>
  )
}

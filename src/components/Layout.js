import React from 'react'
import Theme from '../Theme';

export default function Layout ({children}) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      background: Theme.BACKGROUND
    }}>
      {children}
    </div>
  )
}

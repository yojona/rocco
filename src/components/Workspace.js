import React from 'react'
import Theme from '../Theme';

export default function Workspace ({children}) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      height: '100vh',
      background: Theme.BACKGROUND
    }}>
      {children}
    </div>
  )
}

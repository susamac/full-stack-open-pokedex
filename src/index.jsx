import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './styles.css'

/* just adding a comment for testing purposes */
if (typeof window !== 'undefined') {
  ReactDOM.render(<App />, document.getElementById('app'))
}

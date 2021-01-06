import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from 'stores'
import App from './App'
import 'styles/index.scss'
import 'antd/dist/antd.css'
import 'react-circular-progressbar/dist/styles.css'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

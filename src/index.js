import React, { Component } from 'react'
import ReactDom from 'react-dom'
import Main from './Components/Main'
import './Styles/stylesheet.css'
import { BrowserRouter } from 'react-router-dom'
import { createStore } from 'redux'
import rootReducer from './Redux/Reducer'
import { Provider } from 'react-redux'
import App from './Components/App'

const store = createStore(rootReducer);


ReactDom.render(<Provider store={store}><BrowserRouter><App></App></BrowserRouter></Provider>, document.getElementById('root'))

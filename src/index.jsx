import {config} from '@modules/config'
import AppService from '@modules/app.service'
import logo from './icons/logo.png'
import users from './users.json'

import './css/index.css'
import './less/index.less'
import './scss/index.scss'

import $ from 'jquery'
import React from 'react'
import {render} from 'react-dom'
import App from './App.jsx'
import '@modules/ts.module'


console.log('Config key: ', config.key)

const service = new AppService('Hello webpack', logo)

console.log('Show users: ', users)

$('pre').addClass('code').html(service.toString())


render(<App />, document.getElementById('app'))


import('lodash').then( _ => {
    console.log('Lodash', _.random(5, 10, true))
  
})
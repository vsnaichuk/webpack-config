import React from 'react'
import {render} from 'react-dom'
import AppService from '@modules/app.service'
import {config} from '@modules/config'
import '@modules/ts.module'
import App from './App'
import users from './users.json'
import logo from './icons/logo.png'
import './css/index.css'
import './less/index.less'
import './scss/index.scss'
import $ from 'jquery'

console.log('Config key: ', config.key)

const service = new AppService('Hello webpack', logo)

$('pre').addClass('code').html(service.toString())



console.log('Show users: ', users)



render(<App />, document.getElementById('app'))
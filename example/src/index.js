import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
import App from './App'

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faFacebookF)

ReactDOM.render(<App />, document.getElementById('root'))

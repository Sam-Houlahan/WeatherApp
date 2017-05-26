import './setup-dom'
import test from 'ava'
import React from 'react'
import { shallow, mount, render } from 'enzyme'

import App from '../../client/components/App'
import Header from '../../client/components/Header'

App.prototype.componentDidMount = () => {}

test('Shows heading', t => {
  const wrapper = mount(<App />)
  t.is(wrapper.find('.header').exists(), true)
})

test('Shows the title of the app', t => {
  const wrapper = render(<App />)
  t.is(wrapper.find('h1').text(), 'React Weather App')
})

test('Shows search form', t => {
  const wrapper = mount(<App />)
  t.is(wrapper.find('.searchForm').exists(), true)
})

test('Shows results section', t => {
  const wrapper = render(<App />)
  t.is(wrapper.find('.results').exists(), true)
})

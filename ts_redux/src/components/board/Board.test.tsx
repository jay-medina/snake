import { mount } from 'enzyme'
import React from 'react'
import Board from './Board'
import { Provider } from 'react-redux'
import { createTestStore } from '../../common/testhelpers'

describe('<Board />', () => {
  it('renders a 5x5 board', () => {
    const store = createTestStore()

    const component = mount(
      <Provider store={store}>
        <Board />
      </Provider>,
    )
    expect(component.find('Board')).toMatchSnapshot()
  })
})

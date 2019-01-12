import { mount } from 'enzyme'
import React from 'react'
import ScoreBoard from './ScoreBoard'
import { createTestStore, createMockState } from '../../common/testhelpers'
import { Provider } from 'react-redux'

describe('<ScoreBoard /> ', () => {
  it('displays the scoreboard', () => {
    const createStore = createTestStore()
    const store = createStore(createMockState())

    const wrapper = mount(
      <Provider store={store}>
        <ScoreBoard />
      </Provider>,
    )
    expect(wrapper).toMatchSnapshot()
  })
})

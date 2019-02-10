import { mount } from 'enzyme';
import React from 'react';
import ScoreBoard from './ScoreBoard';
import { createTestStore } from '../../common/testhelpers';
import { Provider } from 'react-redux';

describe('<ScoreBoard /> ', () => {
  it('displays the scoreboard', () => {
    const store = createTestStore();

    const wrapper = mount(
      <Provider store={store}>
        <ScoreBoard />
      </Provider>,
    );
    expect(wrapper.find('Scoreboard')).toMatchSnapshot();
    wrapper.unmount();
  });
});

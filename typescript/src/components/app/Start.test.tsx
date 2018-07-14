import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import { Start, StartProps } from './Start';

describe('Start', () => {
  let component: ShallowWrapper<StartProps>;
  let onPlayClick: jest.Mock;

  beforeEach(() => {
    onPlayClick = jest.fn();
    component = shallow(<Start onPlayClick={onPlayClick} />);
  });

  it('displays the component', () => {
    expect(component).toMatchSnapshot();
  });

  describe('when user clicks on the play button', () => {
    beforeEach(() => {
      component.find('PlayButton').simulate('click');
    });

    it('invokes the onPlayClick callback', () => {
      expect(onPlayClick).toHaveBeenCalled();
    });
  });
});

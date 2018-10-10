import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import { PlayButton, PlayButtonProps } from './PlayButton';

describe('<PlayButton />', () => {
  let onClick: jest.Mock;
  let component: ShallowWrapper<PlayButtonProps>;

  beforeEach(() => {
    onClick = jest.fn();
    component = shallow(<PlayButton onClick={onClick} />);
  });

  it('renders the component', () => {
    expect(component).toMatchSnapshot();
  });

  describe('when clicked', () => {
    it('invokes the onClick callback', () => {
      component.find('button').simulate('click');
      expect(onClick).toHaveBeenCalled();
    });
  });
});

import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import { StackList } from './StackList';
import { stacks } from '../data/fixtures';

configure({ adapter: new Adapter() });

const props = { stacks };

describe('StackList', () => {
  const stackList = shallow(<StackList {...props} />);

  it('renders the correct number of links', () => {
    expect(stackList.find('Link').length).toEqual(props.stacks.length);
  });
});

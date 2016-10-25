import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

//use 'describe' to group together similar tests
//Grider likes giving solely the component's name
describe('App', () => {
  let component;

  beforeEach(()=>{
    component = renderComponent(App);
  })
  //useful bc show a linkage between 2 components
  it('shows a comment box' , () => {
    expect(component.find(".comment-box")).to.exist;
  });


});


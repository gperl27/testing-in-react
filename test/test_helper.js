import jsdom from 'jsdom';
import _$ from 'jquery';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import chai, { expect } from 'chai';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../src/reducers';
import chaiJquery from 'chai-jquery';

//set up testing environment to run like a browser in the command line
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
//equal to window.document ===> global in node
global.window = global.document.defaultView;
const $ = _$(global.window);
//ensures our spec runs from the CLI

//build 'renderComponent' helper that should render a given react class
function renderComponent(ComponentClass, props, state) {
  //spin off a copy of our component
  const componentInstance = TestUtils.renderIntoDocument(
    <Provider store={createStore(reducers, state, )}>
      <ComponentClass {...props} />
    </Provider>

  );

  //wrap in jquery so we get access to jquery/chai-jquery
  return $(ReactDOM.findDOMNode(componentInstance)); //produces HTML **MAGIC**
}

//build helper for simulating events
$.fn.simulate = function(eventName, value) {
  if (value) {
    this.val(value);
  }
  //using diff events on the fly for simulation
  TestUtils.Simulate[eventName](this[0]);
}
//to call simulate
// $('div').simulate

//set up chai-jquery
chaiJquery(chai, chai.util, $);

export { renderComponent, expect };
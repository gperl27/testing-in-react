import { expect } from '../test_helper';
import commentReducer from '../../src/reducers/comments';
import { SAVE_COMMENT } from '../../src/actions/types';

describe("Comments Reducer", () => {
  it('handles action with unknown type', () => {
    //whatever the reducer RETURNS -- we are invoking it
    // expect(commentReducer()).to.be.instanceof(Array);
    //to.be.eql is a DEEP COMPARISON
    //undefined and {} still makes it run
    expect(commentReducer(undefined, {})).to.be.eql([]);
  });

  it('SAVE_COMMENT', () => {
    const action = { type: SAVE_COMMENT, payload: 'new comment' };
    expect(commentReducer([], action)).to.eql(['new comment']);
  });
});

import React from 'react';

const App = (props) => (
  <div>
    <h4> Memo List Component </h4>
    There are {props.memos.length} memos.
  </div>
)

export default MemoList;

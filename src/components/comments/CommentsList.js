import React from 'react'
import Comment from './Comment';

const CommentsList = ({data}) => {
  return (
   data.map((test,id)=>(
       <div key={id}>
       <Comment data={test}/>
       {test.replays.length>0&& <div className="pl-5 border border-l-black">
       <CommentsList key={id} data={test.replays}/>
       </div>}
       </div>
    )));
   };

export default CommentsList;
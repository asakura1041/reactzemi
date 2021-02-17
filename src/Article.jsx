import React from 'react';

const Article = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <input type="checkbox" checked={props.isPublished} onClick={() => props.toggle()}/>
    </div>
  )
}

export default Article
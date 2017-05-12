import React from 'react';

function Card(props) {
  return (
    <div className={props[".card-column"] ? props[".card-column"]: "recommend-column clearfix"} >
      <a href={props.href}>
        <div className={props[".card-img"] ? props[".card-img"] : "column-img"}>
          <img src={props.imageUrl} style={{width: "127px", height: "128px"}} />
        </div>
        <div className={props[".card-title"] ? props[".card-title"] : "column-text"}>
          <h1>{props.title}</h1>
          <div className={props[".card-content"] ? props[".card-content"] : "column-detail"}>
            {props.content}
          </div>
        </div>
      </a>
    </div>
  )
}
export default Card;


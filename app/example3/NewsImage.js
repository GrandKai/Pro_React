/**
 * Created by grandkai on 5/14/17.
 */
import React from 'react';
export default function NewsImage(props) {

  return (
    <div className="news-img">
      <a href={props.href} target="_blank">
        <img src={props.imageSrc} style={{width: "245px", height: "158px"}}/>
      </a>
    </div>
  );
}

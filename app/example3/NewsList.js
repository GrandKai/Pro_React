/**
 * Created by zhangyn on 17-5-12.
 */
import React from 'react';

export default function NewsList(props){
  console.log("--------------",props);
  const list = props.list.map(function (item, index, origin) {
    return (
      <li key={item.id} className={(index===0?"first":"")}>
        <a href={item.href} target="_blank">
          <span className="time">05-12</span><span className="cc" title={item.title}>{item.title}</span>
        </a>
      </li>
    );
  });

  return (
    <div className="news-list">
      <ul>{list}</ul>
    </div>
  );
}


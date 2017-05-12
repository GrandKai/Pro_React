/**
 * Created by zhangyn on 17-5-12.
 */
import React from 'react';

export default function NewsList(props){
  const list = props.newsList.map(function (idx,item) {
    console.log(idx, item);
    return (
      <li key={item.id}>
        <a href="http://www.linlongtougu.com/infomation/2659/4/detail.html" target="_blank">
          <span className="time">05-12</span><span className="cc" title="“一带一路”国际合作高峰论坛14日开幕">“一带一路”国际合作高峰论坛14日开幕</span>
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


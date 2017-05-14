/**
 * Created by grandkai on 5/14/17.
 */

import React from 'react';
import NewsDetail from './NewsDetail';

export default function NewsBox(props) {

  console.log(props);
  const box = props.boxs.map(item => {

    console.log(item);
    return <NewsDetail {...item} />
  });
  return (
    <div className="news-box">
      {box}
    </div>
  );
}
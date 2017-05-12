import React from 'react';
import ReactDOM from 'react-dom';
import Card from './example3/Card'
import NewsList from './example3/NewsList'

require('./style/card.css');

const app = document.createElement('div');
document.body.appendChild(app);
const app2 = document.createElement('div');
document.body.appendChild(app2);
let props = {
  href: "http://www.linlongtougu.com/KKplayerVod/index.html",
  imageUrl: "http://resource.1shitou.cn/resource/images/video.png",
  title: "视频点播",
  content: "丰富的视频教学内容，雄厚的讲师队伍。集投资理念与实战方法于一体的视频理财教学网，让您学习赚钱两不误！",

  ".card-column": "recommend-column clearfix",
  ".card-img": "column-img",
  ".card-title": "column-text",
  ".card-content": "column-detail"
};

let newsList = [{id:1, title: "测试", key: 1}, {id:2, title: "测试2",key: 2}];

{/*ReactDOM.render(<Card {...props}/>, app);*/}
ReactDOM.render(<NewsList newsList={ newsList }/>, app2);

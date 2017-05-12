import React from 'react';
import ReactDOM from 'react-dom';
import Card from './example3/Card'

require('./style/card.css');

const app = document.createElement('div');
document.body.appendChild(app);
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

ReactDOM.render(<Card {...props}/>, app);

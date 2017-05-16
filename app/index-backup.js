import React from 'react';
import ReactDOM from 'react-dom';
import Card from './example3/Card';
import NewsList from './example3/NewsList';
import NewsDetail from './example3/NewsDetail';
import NewsBox from './example3/NewsBox';

require('./resources/style/card.css');
require('./resources/style/style.css');

const app = document.createElement('div');
document.body.appendChild(app);
const app2 = document.createElement('div');
document.body.appendChild(app2);
const app3 = document.createElement('div');
document.body.appendChild(app3);
const app4 = document.createElement('div');
document.body.appendChild(app4);
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

let newsList = [
  {id: 1, title: "一带一路”国际合作高峰论坛14日开幕", href: "http://www.linlongtougu.com/infomation/2659/4/detail.html"},
  {id: 2, title: "纸业掀起新一轮涨价潮", time: "05-11", href: "http://www.linlongtougu.com/infomation/2652/4/detail.html"},
  {id: 3, title: "地方布局6000亿大飞机市场", time: "05-10", href: "http://www.linlongtougu.com/infomation/2645/4/detail.html"},
  {
    id: 4,
    title: "47家央企参与1676个“一带一路”项目",
    time: "05-09",
    href: "http://www.linlongtougu.com/infomation/2640/4/detail.html"
  },
  {id: 5, title: "一带一路”将成世界经济主要增长极", time: "05-08", href: "http://www.linlongtougu.com/infomation/2636/4/detail.html"}
];
let image = {href: "http://www.linlongtougu.com/infomation/2659/4/detail.html", imageSrc:"http://resource.1shitou.cn/pic/defaultImg/qTEzVWkVwr.jpg"};
let detail = {list: newsList, image: image, href: "http://www.linlongtougu.com/infomation/4/newsMoreList.html", title: "操盘必读"};
ReactDOM.render(<Card {...props}/>, app);
// ReactDOM.render(<NewsList list={ newsList }/>, app2);
// ReactDOM.render(<NewsDetail detail={detail}/>, app3);

let box = [detail, detail, detail];
ReactDOM.render(<NewsBox boxs={box}/>, app4);

'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Card = require('./example3/Card');

var _Card2 = _interopRequireDefault(_Card);

var _NewsList = require('./example3/NewsList');

var _NewsList2 = _interopRequireDefault(_NewsList);

var _NewsDetail = require('./example3/NewsDetail');

var _NewsDetail2 = _interopRequireDefault(_NewsDetail);

var _NewsBox = require('./example3/NewsBox');

var _NewsBox2 = _interopRequireDefault(_NewsBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('./resources/style/card.css');
require('./resources/style/style.css');

var app = document.createElement('div');
document.body.appendChild(app);
var app2 = document.createElement('div');
document.body.appendChild(app2);
var app3 = document.createElement('div');
document.body.appendChild(app3);
var app4 = document.createElement('div');
document.body.appendChild(app4);
var props = {
  href: "http://www.linlongtougu.com/KKplayerVod/index.html",
  imageUrl: "http://resource.1shitou.cn/resource/images/video.png",
  title: "视频点播",
  content: "丰富的视频教学内容，雄厚的讲师队伍。集投资理念与实战方法于一体的视频理财教学网，让您学习赚钱两不误！",

  ".card-column": "recommend-column clearfix",
  ".card-img": "column-img",
  ".card-title": "column-text",
  ".card-content": "column-detail"
};

var newsList = [{ id: 1, title: "一带一路”国际合作高峰论坛14日开幕", href: "http://www.linlongtougu.com/infomation/2659/4/detail.html" }, { id: 2, title: "纸业掀起新一轮涨价潮", time: "05-11", href: "http://www.linlongtougu.com/infomation/2652/4/detail.html" }, { id: 3, title: "地方布局6000亿大飞机市场", time: "05-10", href: "http://www.linlongtougu.com/infomation/2645/4/detail.html" }, {
  id: 4,
  title: "47家央企参与1676个“一带一路”项目",
  time: "05-09",
  href: "http://www.linlongtougu.com/infomation/2640/4/detail.html"
}, { id: 5, title: "一带一路”将成世界经济主要增长极", time: "05-08", href: "http://www.linlongtougu.com/infomation/2636/4/detail.html" }];
var image = { href: "http://www.linlongtougu.com/infomation/2659/4/detail.html", imageSrc: "http://resource.1shitou.cn/pic/defaultImg/qTEzVWkVwr.jpg" };
var detail = { list: newsList, image: image, href: "http://www.linlongtougu.com/infomation/4/newsMoreList.html", title: "操盘必读" };
_reactDom2.default.render(_react2.default.createElement(_Card2.default, props), app);
// ReactDOM.render(<NewsList list={ newsList }/>, app2);
// ReactDOM.render(<NewsDetail detail={detail}/>, app3);

var box = [detail, detail, detail];
_reactDom2.default.render(_react2.default.createElement(_NewsBox2.default, { boxs: box }), app4);
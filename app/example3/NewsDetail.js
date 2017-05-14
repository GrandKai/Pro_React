/**
 * Created by grandkai on 5/14/17.
 */
import React from 'react';
import NewsList from './NewsList'
import NewsImage from './NewsImage';


export default class NewsDetail extends React.Component {

  render() {
    return (<div className="news-detail">
        <h2><span><a href={this.props.href}>更多&gt;&gt;</a></span><b>{this.props.title}</b>
        </h2>
        <div className="news-div clearfix">
          <NewsImage {...this.props.image}/>
          <NewsList list={this.props.list}/>
        </div>
      </div>
    )
  }
}


import React from 'react';
import ReactDOM from 'react-dom';
import {Card} from 'antd';

const app = document.createElement('div');
document.body.appendChild(app);

ReactDOM.render(
  <Card style={{width: 480}} bodyStyle={{padding: 0}}>
    <div className="custom-image">
      <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>
    </div>
    <div className="custom-card">
      <h3>Europe Street beat</h3>
      <p>www.instagram.com</p>
    </div>
  </Card>
  , app);


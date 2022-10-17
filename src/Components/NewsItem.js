import React, { Component } from 'react'

export class NewsItem extends Component {
  


  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    let varUrl = "https://i-invdn-com.investing.com/news/https://i-invdn-com.investing.com/akapi-images/800x450/c69f0e8f265982f22d776f532160619b_w_800_h_450.jpg"
    return (
      <div >

              <div className="card my-3" style={{width: '18rem'}}>
          <img src={imageUrl==varUrl?"https://images.moneycontrol.com/static-mcnews/2022/10/392141678-770x433.jpg":imageUrl} className="card-img-top" alt="..." />
      <div className="card-body">
            <h5 className="card-title">{ title}</h5>
            <p className="card-text">{ description}</p>
        <a href={newsUrl} target='_blank' className="btn btn-sm btn-primary">Read More!</a>
        </div>
</div>
      </div>
    )
  }
}

export default NewsItem
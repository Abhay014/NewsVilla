import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

  articles = [
    {
      "source": {
        "id": "the-next-web",
        "name": "The Next Web"
      },
      "author": "Thomas Macaulay",
      "title": "Inside Wimbledon's AI-powered plans to engross tennis fans",
      "description": "Wimbledon is a unique event in the British sporting calendar. While fans of soccer, rugby, and cricket follow their teams throughout the year, the country's tennis obsession only emerges ...",
      "url": "http://thenextweb.com/news/inside-wimbledon-ibm-ai-engagement-tennis-fans",
      "urlToImage": "https://img-cdn.tnwcdn.com/image/neural?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2022%2F07%2Ftennisgrid.jpg&signature=89ab5d6707b345bee6c3472f6bceda5d",
      "publishedAt": "2022-07-08T19:34:07Z",
      "content": "Wimbledon is a unique event in the British sporting calendar. While fans of soccer, rugby, and cricket follow their teams throughout the year, the countrys tennis obsession only emerges for a two-wee… [+2880 chars]"
    },
    {
      "source": {
        "id": "bbc-sport",
        "name": "BBC Sport"
      },
      "author": "BBC Sport",
      "title": "Shane Warne memorial - watch & follow updates",
      "description": "Watch live coverage and follow text updates and tributes from the state memorial for Australian cricket legend Shane Warne at the Melbourne Cricket Ground.",
      "url": "http://www.bbc.co.uk/sport/live/cricket/60916236",
      "urlToImage": "https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.22.0/images/bbc-sport-logo.png",
      "publishedAt": "2022-03-30T08:22:26.498888Z",
      "content": "Former England bowler and BBC cricket presenter Isa Guha, who became a colleague of Warne's in the commentary box: \"It has been a strange few weeks - a lot of shock and then we did our own tribute at… [+396 chars]"
    },
    {
      "source": {
        "id": "espn-cric-info",
        "name": "ESPN Cric Info"
      },
      "author": null,
      "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      "publishedAt": "2020-04-27T11:41:47Z",
      "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    },
    {
      "source": {
        "id": "espn-cric-info",
        "name": "ESPN Cric Info"
      },
      "author": null,
      "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      "publishedAt": "2020-03-30T15:26:05Z",
      "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    }
  ]

  constructor() {
    super();
        console.log('hello i am constructor from news component ');
    this.state = {
      articles: this.articles,
      loading : false
    }
  }

  async componentDidMount() {
    
    let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=9263713d36164c55a6e6cd876b73674d"
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles: parsedData.articles})
  } 

  render() {
    
   
    return (
     
        <div className='container my-3'>
        <h2>NewsVilla - Top Headlines</h2>
        
        <div className="row">
          {this.state.articles.map((element) => {
           return  <div  className="col-md-4" key={element.newsUrl}>
            <NewsItem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage}          
          newsUrl={element.url}  />
          </div>
        })}
          
          
        </div>
        
        

        
      </div>
    )
  }
}

export default News
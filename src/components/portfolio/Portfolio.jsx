import React from 'react'
import './portfolio.css'
import Img4 from '../../assets/ohmypet.png'
import Img2 from '../../assets/makeup2.png'
import Img3 from '../../assets/amdd.png'
import Img1 from '../../assets/api.png'
import Img5 from '../../assets/beard.png'
import Img6 from '../../assets/sotrue.png'
import Img7 from '../../assets/1.jpeg'
import Img8 from '../../assets/2.jpeg'
import Img9 from '../../assets/3.jpeg'
import Img10 from '../../assets/4.jpg'
import Img11 from '../../assets/5.jpg'
import Img12 from '../../assets/6.jpg'
const data  = [
  {
    id:1,
    image:Img2,
    title:'Makeup',
    github:'https://github.com/gautam0511/makeup-',
    demo:'https://amazonmakeup.pages.dev/'
  },
  {
    id:2,
    image:Img1,
    title:'Gift Shop Api',
    github:'https://github.com/gautam0511/artifice-11',
    demo:'https://github.com/gautam0511/artifice-11'
  },
  {
    id:3,
    image:Img3,
    title:'AMDD Foods Pvt Ltd',
    github:'#',
    demo:'https://amdd.co.in/'
  },
  {
    id:4,
      image:Img4,
      title:'Ohmypet',
      github:'#',
      demo:'https://www.ohmypet.in/'
  },
  {
    id:5,
      image:Img5,
      title:'Beardhood',
      github:'#',
      demo:'https://www.beardhood.in/'
  },
  {
    id:6,
      image:Img6,
      title:'So True',
      github:'#',
      demo:'https://www.sotrue.in/'
  }
  ,
  {
    id:7,
      image:Img7,
      title:'Social media post',
      github:'#',
      demo:'#'
  }
  ,
  {
    id:8,
      image:Img8,
      title:'Social media post',
      github:'#',
      demo:'#'
  }
  ,
  {
    id:9,
      image:Img9,
      title:'Social media post',
      github:'#',
      demo:'#'
  }
  
  ,
  {
    id:10,
      image:Img10,
      title:'Social media post',
      github:'#',
      demo:'#'
  }
  
  ,
  {
    id:11,
      image:Img11,
      title:'Social media post',
      github:'#',
      demo:'#'
  }
  
  ,
  {
    id:12,
      image:Img12,
      title:'Social media post',
      github:'#',
      demo:'#'
  }
]
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My React Work</h5>
      <h2>Portfolio</h2>
      

      <div className='container portfolio__container'>
        {
          data.map(({id,image,title,github,demo})=>{
              return(
                <article className='portfolio__item'>
                  <div className='portfolio__item-image'>
                    <img src={image}></img>
                  </div>
                  <h3>{title}</h3>
                 
                  <div className='portfolio__item-cv'>
                    <a href={github} className="btn">Github</a>
                    <a href={demo} className="btn btn-primary">Live Demo</a>
                  </div>
                </article>
              )

          })
        }
      </div>
    </section>
  )
}

export default Portfolio
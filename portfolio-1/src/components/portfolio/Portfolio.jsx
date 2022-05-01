import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Crypto Currency Dashboard & Financial Visualisation',
    github: 'https://github.com',
    demo: 'https://youtube.com'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Charts Templates and Infographics in Figma',
    github: 'https://github.com',
    demo: 'https://youtube.com'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Figma Dashboard UI kit for Data Design web apps',
    github: 'https://github.com',
    demo: 'https://youtube.com'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Maintaining tasks and Tracking progress',
    github: 'https://github.com',
    demo: 'https://youtube.com'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Charts templates & infographics in Figma',
    github: 'https://github.com',
    demo: 'https://youtube.com'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Crypto Currency Dashboard & Financial Visualisation',
    github: 'https://github.com',
    demo: 'https://youtube.com'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return(
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} rel="noreferrer" className='btn' target='_blank'>GitHub</a>
                  <a href={demo} rel="noreferrer" className='btn btn-primary' target='_blank'>Live Demo</a>
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
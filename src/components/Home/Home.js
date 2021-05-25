import React from 'react'
import { Carousel } from '3d-react-carousal'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import hands from '../../assets/hands.png'
import design from '../../assets/design.png'
import natural from '../../assets/natural.png'
import production from '../../assets/production.png'
import literie from '../../assets/literie.jpg'
import decoration from '../../assets/decoration.jpg'
import '../../theme/style/home.css'

const Home = (props) => {
    let slides = [
        <img src="https://picsum.photos/800/300/?random" alt="1" />,
        <img src="https://picsum.photos/800/301/?random" alt="2" />,
        <img src="https://picsum.photos/800/302/?random" alt="3" />,
        <img src="https://picsum.photos/800/303/?random" alt="4" />,
        <img src="https://picsum.photos/800/304/?random" alt="5" />];
    return (
        <>
            <div className='carousel'>
                <Carousel slides={slides} autoplay={true} interval={3000} />
            </div>
            <div className='values'>
                <div className='subtitle'><h1>Nos Valeurs</h1></div>
                <div className='icons'>
                    <div className='textblock'>
                        <div><img src={hands} /></div>
                        <h2>Fait main</h2>
                        <p>Tous nos produits sont entièrement réalisés à la main par nos artisans experts.</p>
                    </div>
                    <div className='textblock'>
                        <div><img src={production} /></div>
                        <h2>Production responsable</h2>
                        <p>Nous concevons nos créations dans un atelier familial, en collaboration et soutien total avec l’artisanat local.</p>
                    </div>
                    <div className='textblock'>
                        <div><img src={natural} /></div>
                        <h2>Matière naturelle</h2>
                        <p>Notre credo est d’offrir un environnement sain à partir de matériaux naturels et sans produits chimiques.</p>
                    </div>
                    <div className='textblock'>
                        <div><img src={design} /></div>
                        <h2>Design esthétique</h2>
                        <p>Nous pensons nos créations dans une démarche d’embellir à la fois la chambre de bébé et la maison.</p>
                    </div>
                </div>
            </div>
            <div className='products'>
                <div className='subtitle'>
                    <h1>Nos Produits</h1>
                </div>
                <div className='productcards'>
                    <div className='card'>
                        <div className='literie'>
                            <img src={literie} className='p-img' />
                        </div>
                        <h2 className='prod-class'>Literie</h2>
                    </div>
                    <div className='card'>
                        <div className='decoration'>
                            <img src={decoration} className='p-img' />
                        </div>
                        <h2 className='prod-class'>Décoration</h2>
                    </div>
                </div>
            </div>
            <div className='engagements'>
                <div className='eng-container'>
                    <h1 className='eng-subtitle'>
                        Nos engagements
                </h1>
                    <h1 className='quotes'>"</h1>
                    <p className='eng-description'>
                        Alwan est née d’une volonté de proposer des trésors cachés de l’artisanat du rotin tunisien.
                        Pour soutenir ce dernier, nous nous sommes engagés à vous proposer de belles créations faites à la main, réalisées intégralement en matières naturelles et pensées pour sublimer tous les intérieurs.
                        L’éthique est au cœur de notre démarche, nous travaillons avec un atelier familial en collaboration responsable.
                </p>
                    <p className='eng-des-bold'>
                        Notre ambition : faire perdurer le savoir-faire tunisien en vous proposant ses merveilles.
                </p>
                    <h1 className='quotes'>"</h1>
                </div>
            </div>
        </>
    )
}

export default Home
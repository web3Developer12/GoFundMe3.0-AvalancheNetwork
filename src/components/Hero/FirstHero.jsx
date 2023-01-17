import './FirstHero.css'
import sun from '../../assets/sun.svg'

export default function FirstHero(){
    return <div className='FirstHero'>
        <p data-aos="fade-up">Your home<br/>for help</p>
        <button className='d' data-aos="fade-up" data-aos-duration="1000">
            <img src={sun} width={22}/>
            Start a GoFundMe
        </button>
    </div>
}
import './FirstHero.css'
import sun from '../../assets/sun.svg'

export default function FirstHero(){
    return <div className='FirstHero'>
        <p>Your home<br/>for help</p>
        <button className='d'>
            <img src={sun} width={22}/>
            Start a GoFundMe
        </button>
    </div>
}
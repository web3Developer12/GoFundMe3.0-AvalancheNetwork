import logo from '../assets/logo.svg'
import search from '../assets/search.svg'
import avalanche from '../assets/avalanche-avax-logo.svg'
import './Navbar.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function NavBar(){

    const [scrollYValue,setScrollYValue] = useState(0)
    const scrollController= ()=>{
        setScrollYValue(window.scrollY)
    }
    window.addEventListener('scroll',scrollController)
    const navigate = useNavigate()

    return <div className={scrollYValue > 0 ? 'navBar-2':'navBar'}>

        <div className='horizontal'>
            
            <div className='search' onClick={()=>{
                navigate('/search')
            }}>
                <img src={search} width={15}/>
                <p>Search</p>
            </div>
            
            <p>For charities</p>
            <div className='horizontal2'>
            <img src={avalanche} width="22"/>
            <span>
                Connect to Avalanche
            </span>
            </div>

        </div>
        <img src={logo} onClick={()=>{
                navigate('/')
            }}/>

        <div className='horizontal'>
            <p>How it works?</p>
            <p>Connect wallet</p>
            <button className={scrollYValue > 0 ? 'goActive':'go'}>Start a GoFundMe</button>
        </div>
    </div>
}
import logo from '../assets/logo.svg'
import search from '../assets/search.svg'
import menu from '../assets/menu.png'
import avalanche from '../assets/avalanche-avax-logo.svg'
import './Navbar.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'

import { useEffect } from 'react'
import { ethers } from 'ethers'
import { addAvalancheNetwork } from '../../network/chain'

export default function NavBar(){

    const [scrollYValue,setScrollYValue] = useState(0)
    const [user,setUser] =useState('')
    const scrollController= ()=>{
        setScrollYValue(window.scrollY)
    }
    window.addEventListener('scroll',scrollController)
    const navigate = useNavigate()
    async function getAuthorizedAccount(){
        try{
            const{ethereum} = window;
            if(ethereum){
                const users     = await ethereum.request({
                    method:"eth_accounts"
                })
                if(users.length > 0){
                    setUser(users[0])
                }
            }
            
        }catch(error){
            console.log(error.message)
        }
    }
    async function requestWallet(){
        try{
            const {ethereum}  = window;
            if(ethereum){
                const provider    = await new ethers.providers.Web3Provider(ethereum)
                const { chainId } = await provider.getNetwork()
                if(chainId != 43113){
                    const res= await addAvalancheNetwork()
                    if(res == true){
                        const users     = await ethereum.request({
                            method:"eth_requestAccounts"
                        })
                        if(users.length > 0){
                            setUser(users[0])
                            toast.success(`${
                                users[0].substring(0,4)
                                +"..."+ users[0].slice(-4)
                            } connected`, {
                                style: {
                                border: '1px solid #02a95c',
                                padding: '16px',
                                color: '#02a95c',
                                fontFamily:"NunitoRegular"
                                },
                                iconTheme: {
                                primary: '#02a95c',
                                secondary: 'white',
                                },
                            });
                        }
                    }
                }else{
                    const users     = await ethereum.request({
                        method:"eth_requestAccounts"
                    })
                    if(users.length > 0){
                        setUser(users[0])
                        toast.success(`${
                            users[0].substring(0,4)
                            +"..."+ users[0].slice(-4)
                        } connected`, {
                            style: {
                            border: '1px solid #02a95c',
                            padding: '16px',
                            color: '#02a95c',
                            fontFamily:"NunitoRegular"
                            },
                            iconTheme: {
                            primary: '#02a95c',
                            secondary: 'white',
                            },
                        });
                    }
                }
                
            }
            
        }catch(error){
            console.log(error.message)
        }
    }
    

    useEffect(()=>{
        getAuthorizedAccount()
    },[])

    return <div className={scrollYValue > 0 ? 'navBar-2':'navBar'}>

        
        <div className='horizontal'>
            
            <div className='search' onClick={()=>{
                navigate('/search')
            }}>
                <img src={search} width={15}/>
                <span>Search</span>
            </div>
            
            <p>For charities</p>
            <div className='horizontal2' onClick={()=>{
                var link = "https://testnet.snowtrace.io/address/0xA3e2B8205A8eA192c7a74CF29864Be9779641478";
                var target = "_blank";
                window.open(link, target);
            }}>
            <img src={avalanche} width="22"/>
            <span>
                Deployed at 0xbd....3ffBD
            </span>
            </div>

        </div>

        <img src={logo} onClick={()=>{
                navigate('/')
        }}/>

        <div className='horizontal' style={{justifyContent:"flex-end",paddingInlineEnd:"1%"}}>
            <p>How it works?</p>
            <p onClick={()=>{
                if(user == ''){
                    requestWallet()
                }
                
            }}>{user == ''?"Connect wallet":user.substring(0,4)+"...."+ user.slice(-4)}</p>
            <button onClick={()=>{
                navigate('/create')
            }} className={scrollYValue > 0 ? 'goActive':'go'}>Start a GoFundMe</button>
        </div>
        <div className='mobsGroup'>
            <div className='mob'>
        
                <div className='search' onClick={()=>{
                    if(window.ethereum != true){

                        toast.error("Install Metamask", {
                            style: {
                            border: '1px solid #eb4d4b',
                            padding: '16px',
                            color: '#eb4d4b',
                            fontFamily:"NunitoRegular"
                            },
                            iconTheme: {
                            primary: '#eb4d4b',
                            secondary: 'white',
                            },
                        });

                    }else{
                        navigate('/search')
                    }
                }}>
                    <img src={search} width={15}/>
                    <span>Search</span>
                </div>
            </div>
            <div className='mob'>
                <img src={menu} width={28} className="menu"/>
            </div>
        </div>
    </div>
}
import './Search.css'
import search from '/src/assets/search.svg'
import filter from '/src/assets/filter.png'
import poster from '/src/assets/gh.png'
import { useNavigate } from 'react-router-dom'
import {ethers} from 'ethers';
import ABI from '../artifacts/contracts/GoFundMe.sol/GoFundMe.json'
import { useEffect } from 'react'
import { useState } from 'react'
import { Oval } from 'react-loader-spinner'
import Skeleton from 'react-loading-skeleton'
import { useSpring, animated } from '@react-spring/web'

export default function Search(){

    const navigate       = useNavigate()
    const [dataLoading,setDataLoading] = useState(true)
    const [data,setData] = useState([])
    
    const fetchCampaign  = async()=>{
        const {ethereum} = window;
        if(ethereum){
            const provider = await new ethers.providers.JsonRpcProvider(
                "https://smart-proportionate-firefly.avalanche-testnet.discover.quiknode.pro/e50e4c28fa84cc37478458351791557262f126f8/ext/bc/C/rpc"
            );
            const contract = new ethers.Contract(
                '0xA3e2B8205A8eA192c7a74CF29864Be9779641478',ABI.abi,provider
            )
            let cleaned    = []
            const data     = await contract.fetch()
            for(let campaign of data){
                const model = {
                    beneficiary:campaign.beneficiary,
                    startDate  :campaign.startDate.toString(),
                    endDate    :campaign.endDate,
                    goal       :Number(campaign.goal),
                    category   :campaign.category,
                    title      :campaign.title,
                    description:campaign.description,
                    storageCid :campaign.storageCid
                }
                cleaned.push(model)
            }
            setDataLoading(false)
            setData(cleaned)
        }
    }
    const launchCampaign = async()=>{
        const {ethereum}= window;
        if(ethereum){
            const provider = await new ethers.providers.Web3Provider(ethereum)
            const signer   = provider.getSigner()
            const contract = new ethers.Contract(
                '0xA3e2B8205A8eA192c7a74CF29864Be9779641478',ABI.abi,signer
            )
            const inject   = await contract.launch(
                1,2,88,"Technology","Help the Avalanche Network Nodes","**UPDATE : This fundraiser was initially established to support a toy drive for Damar’s community, sponsored by the Chasing M’s Foundation. However, it has received renewed support in light of Damar’s current battle and we can’t thank all of you enough. Your generosity and compassion mean the world to us.","ipfs url"
            )
            console.log(inject)
        }
    } 

    const loaderSpring = useSpring({
        from  : { opacity: 0 },
        to    : { opacity: 1 },
    })
    
    
    useEffect(()=>{
        fetchCampaign()
    },[])

    return <div className="Search">

        <div className='SearchBarArea'>
            <div className='SearchBar'>
                <img src={search} width={16}/>
                <div className='search-body'>
                    <input type="text" placeholder="Search Fundraisers"/>
                    <div className='filter'>
                        <p onClick={()=>{
                            launchCampaign()
                        }}>Filter</p>
                        <img src={filter} width={17}/>
                    </div>
                </div>
            </div>
        </div>

        <div className='searchResults'>
            {
                dataLoading && <div className='loadingData'>
                    <div >
                        <Oval
                            height="70"
                            width="70"
                            color="#4fa94d"
                            secondaryColor= '#4fa94d'
                            radius='17.5'
                            ariaLabel="mutating-dots-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                            strokeWidth={.7}
                        />
                    </div>
                </div>
            }
            {   dataLoading == false &&
                data.map((el,index)=>{
                    return <div className='campaignBody' key={index} onClick={()=>{
                        navigate('/details',{state:el})
                    }}>
                
                    <div className='campaignImage'>
                        <img src={poster} />
                    </div>
                    <div className='campaignDetails'>
                        
                        <div>
                            <p>{el.title}</p>
                            <p>by {el.beneficiary.substring(0,4)+"..."+el.beneficiary.slice(-4)}</p>
                        </div>
    
                        <div className='bottom'>
                            <div className='loader'>
                                <div className='loader-value'>1</div>
                            </div>
                            <p><span className='bold'>{el*23}$ </span>raised</p>
                        </div>
                    </div>
                </div>
                })
            }
            
        </div>
    </div>
}
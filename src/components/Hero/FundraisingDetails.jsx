import './FundraisingDetails.css'
import gh from '/src/assets/gh.png'
import user from '/src/assets/user-regular.svg'
import protection from '/src/assets/shield-halved-solid.svg'
import { useLocation } from 'react-router-dom'
import { ethers } from 'ethers'
import ABI from '../../artifacts/contracts/GoFundMe.sol/GoFundMe.json'
export default function FundraisingDetails(){

    const {state} = useLocation()

    const donate = async()=>{

        const {ethereum}= window;

        if(ethereum){
            const provider = await new ethers.providers.Web3Provider(ethereum)
            const signer   = provider.getSigner()
            
            const contract = new ethers.Contract(
                '0xA3e2B8205A8eA192c7a74CF29864Be9779641478',ABI.abi,signer
            )
            await contract.contribute("Talie",{value: ethers.utils.parseEther("0.001"),})
        }
    } 
    return <div className="FundraisingDetails">
        <div id ="spacer"></div>
        
        <div className='fundraisingDetailsGrid'>
            <p className='fundraisingBodyTitle'>{state.title}</p>

            <div className='row-fundraising'>

            <div className='fundraisingImage' ></div>

            <div className='raisingBoard'>
                <div className='raising'>
                    <p><span className='countAvax'>$155</span> AVAX raised of {state.goal} goal</p>
                    <div className='loader'>
                         <div className='loader-value'>1</div>
                    </div>
                    <p>3 Donations</p>
                    <button className='donate' onClick={()=>{
                        donate()
                    }}>Donate Now</button>
                    <div className='input-donation'>
                        <p><span className='dollar'>$</span><br/>AVAX</p>
                        <div className='inputDecimal'>
                        <input type="text" autoFocus/>
 
                        </div>
                    </div>
                </div>
                
            </div>
            </div>
            <div className='fundraisingOrganizer'>
                    <div className='avatar'>
                        <img src={user} width={16}/>
                    </div>
                    <p>{state.beneficiary.substring(0,4)+"..."+state.beneficiary.slice(-4)} is organizing this fundraiser.</p>
            </div>
            <div className='fundraisingDescription'>
                {state.description}
            </div>
            <div className='fundraisingCreationDate'>
                Created {state.startDate}
            </div>
        </div>

    </div>
}
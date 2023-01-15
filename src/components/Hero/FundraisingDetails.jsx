import './FundraisingDetails.css'
import gh from '/src/assets/gh.png'
import user from '/src/assets/user-regular.svg'
import protection from '/src/assets/shield-halved-solid.svg'

export default function FundraisingDetails(){
    return <div className="FundraisingDetails">
        <div id ="spacer"></div>
        
        <div className='fundraisingDetailsGrid'>
            <div className='fundraisingBody'>
                <p className='fundraisingBodyTitle'>Help the Avax Token on Avalanche</p>
                <div className='fundraisingImage'></div>

                <div className='fundraisingOrganizer'>
                    <div className='avatar'>
                        <img src={user} width={16}/>
                    </div>
                    <p>Lorean Morales is organizing this fundraiser.</p>
                </div>
                <div className='fundraisingDescription'>
                **UPDATE : This fundraiser was initially established to support a toy drive for Damar’s community, sponsored by the Chasing M’s Foundation. However, it has received renewed support in light of Damar’s current battle and we can’t thank all of you enough. Your generosity and compassion mean the world to us.

                </div>

                <div className='fundraisingCreationDate'>
                    Created November 27, 2022
                </div>
                
            </div>
            <div className='raisingBoard'>
                <div className='raising'>
                    <p><span className='countAvax'>$155</span> AVAX raised of $3,600 goal</p>
                    <div className='loader'>
                         <div className='loader-value'>1</div>
                    </div>
                    <p>3 Donations</p>
                    <button className='donate'>Donate Now</button>
                    <div className='input-donation'>
                        <p><span className='dollar'>$</span><br/>AVAX</p>
                        <div className='inputDecimal'>
                        <input type="text"/>
                        <p>.00</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>

    </div>
}
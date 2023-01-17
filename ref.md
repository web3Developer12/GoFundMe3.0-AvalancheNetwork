  <div className='fundraisingBody'>
                <p className='fundraisingBodyTitle'>{state.title}</p>
                <div className='fundraisingImage'></div>

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
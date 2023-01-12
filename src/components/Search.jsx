import './Search.css'
import search from '/src/assets/search.svg'
import filter from '/src/assets/filter.png'
import poster from '/src/assets/gh.png'

export default function Search(){
    return <div className="Search">

        <div className='SearchBarArea'>
            <div className='SearchBar'>
                <img src={search} width={16}/>
                <div className='search-body'>
                    <input type="text" placeholder="Search Fundraisers"/>
                    <div className='filter'>
                        <p>Filter</p>
                        <img src={filter} width={17}/>
                    </div>
                </div>
            </div>
        </div>

        <div className='searchResults'>
            {
                [1,2,3,4,5,6,7,8].map((el,index)=>{
                    return <div className='campaignBody' key={index}>
                
                    <div className='campaignImage'>
                        <img src={poster} />
                    </div>
                    <div className='campaignDetails'>
                        
                        <div>
                            <p>Help the Avax Token</p>
                            <p>by 0xff7....023d</p>
                        </div>
    
                        <div className='bottom'>
                            <div className='loader'>
                                <div className='loader-value'>1</div>
                            </div>
                            <p><span className='bold'>456$ </span>raised</p>
                        </div>
                    </div>
                </div>
                })
            }
            
        </div>
    </div>
}
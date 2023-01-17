import './Create.css'
import logo from '/src/assets/logo2.svg'
import { useState } from 'react'
import chevronLeft from "/src/assets/chevron-left-solid.svg"
import { Navigate, useNavigate } from 'react-router-dom'
import storeFiles from '../ipfs/storage'
import { MutatingDots, Oval } from 'react-loader-spinner'

export default function Create(){

    const[category,_] = useState([
        "Animals","Business","Community","Creative","Education","Emergencies",
        "Environnment","Events","Faith","Family","Funeral & Memorial","Medical",
        "Monthly Bills","Newlyweds","Other","Sports","Travel","Volunter","Whishes"
    ])

    const [selected,setSelected]   = useState('')
    const [index,setIndex]         = useState(0)
    const [file,setFile]           = useState(undefined)
    const navigate                 = useNavigate()
    const [uploading,setUploading] = useState(false)

    function validateImage(file){

        var reader = new FileReader();

        //Read the contents of Image File.
        reader.readAsDataURL(file);
        reader.onload = function (e) {

        //Initiate the JavaScript Image object.
        var image = new Image();

        //Set the Base64 string return from FileReader as source.
        image.src = e.target.result;

        //Validate the File Height and Width.
        image.onload = function () {

            var height = this.height;
            var width = this.width;

            console.log(width)
            console.log(height)

            if( width < 1366 || height < 900){
                console.log('Image minimum not require minimum');
            }else {
                console.log('Image valid');
                setFile(file)
            }

        };
        };
    }

    

    return <div className="fundraising-create">

        <div className="side-content">
            <div className='sc-spacer'></div>

            <div className='sc-body'>
                <img src={logo} onClick={()=>{
                    navigate('/')
                }}/>
                <div className='scb-text'>
                    <p className='regular sc-1'>
                        {
                            index == 0 && "Let's begin your"+"\n"+"fundraising journey"
                        }

                        {
                            index == -1 && "Tell us a bit more about"+"\n"+"your fundraiser"
                        }
                        
                        {
                            index == 1 && "How much would you"+"\n"+"like to raise?"
                        }

                        {   
                            index == 2 && "Provide fundraising"+"\n"+"information!"
                        }
                        {   
                            index == 3 && "Provide fundraising"+"\n"+"information!"
                        }
                        
                        {   
                            index == 4 && "Provide fundraising"+"\n"+"information!"
                        }
                        
                    </p>
                    <p className='regular sc-2'>
                        {
                            index == 0 && "We're here to guide you every step of the way."
                        }

                        {
                            index == -1 && "This information helps us get to know you and your fundraising needs."
                        }
                        
                        {
                            index == 1 && "It's completely expected to need funds beyond your starting goal. You can always change your goal as you go."
                        }

                        {
                            index == 2 && "It's time to provide your fundraising information for high impact."
                        }

                        {
                            index == 3 && "It's time to provide your fundraising information for high impact."
                        }
                        
                        {
                            index == 4 && "It's time to provide your fundraising information for high impact."
                        }
                        
                    </p>
                </div>
            </div>
        </div>

        <div className='side-content-secondary'>
            <div className='sc-spacer'></div>

            {
                index == 0 &&  <div className='side-content-secondary-txt'>
                <p className='regular sc-s-1'>What best describes why you're fundraising ?</p>
                <div className='sc-s-options'>
                    {
                        category.map((_category,index)=>{
                            return <button onClick={()=>{
                                setSelected(_category)
                            }}  key={index} className={
                                selected == _category ? "sc-options-selected regular" : "sc-options regular"
                            }>
                                {_category}
                            </button>
                        })
                    }
                </div>
            </div>
            }
            {
                index == 1 &&  <div className='side-content-secondary-txt'>
                <p className='regular sc-s-1'>What is your starting goal ?</p>
                    <div className='input-donation2'>
                            <p><span className='dollar'>$</span><br/>AVAX</p>
                            <div className='inputDecimal'>
                            <input type="text" minLength={13} min={13}/>
                            <p>.00</p>
                            </div>
                    </div>
                    <p className='regular sc-c-min'>Only can be raised at least 9,999,999,999,999 AVAX</p>
                </div>
            }

            {
                index == 2 &&  <div className='side-content-secondary-txt'>
                <p className='regular sc-s-1'>Provide your title for high impact !</p>
                    <div className='input-donation3'>
                            <input type="text" placeholder='' autoFocus/>
                    </div>
                </div>
            }

            {
                index == 3 &&  <div className='side-content-secondary-txt'>
                <p className='regular sc-s-1'>Provide your description for high impact !</p>
                    <div className='input-donation4'>
                            <textarea type="text" autoFocus/>
                    </div>
                </div>
            }
            {
                index == 4 &&  <div className='side-content-secondary-txt'>
                <p className='regular sc-s-1'>Provide your image for high impact !</p>
                    <div className='input-donation5'>
                            <button className='upload' onClick={()=>{
                                if(file != undefined){
                                    storeFiles([file],setUploading)
                                }
                            }}>
                                {
                                    uploading == false ? "Upload" : <Oval
                                    height="50"
                                    width="50"
                                    color="#4fa94d"
                                    secondaryColor= '#4fa94d'
                                    radius='12.5'
                                    ariaLabel="mutating-dots-loading"
                                    wrapperStyle={{}}
                                    wrapperClass=""
                                    visible={true}
                                    strokeWidth={5}
                                />
                                }
                                
                            </button>

                            <input type="file" autoFocus onChange={(e)=>{
                                validateImage(e.target.files[0],setUploading)
                            }}/>
                    </div>
                </div>
            }
           
           
            <div className='sc-s-continue'>
                {
                    index >= 1 && <button onClick={()=>{
                        setIndex(index -1)
                    }} className='sc-s-previous'>
                    <img src={chevronLeft} width={12}/>
                </button>
                }
                {
                    index == 0 && <div></div>
                }
                
                <button onClick={()=>{
                    setIndex(index+1)
                }}className='sc-s-continue-btn extraBold'>Continue</button>
            </div>
        </div>
    </div>
}
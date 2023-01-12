import './SecondHero.css'

export default function SecondHero(){
    return <div className="SecondHero">
        
        <p>What to expect</p>
        <p>Fundraising on GoFundMe<br/>takes just a few minutes</p>

        <div className="cardHeroGroup">
            <div className="cardHero">
                <div className="cardCounter">1</div>
                <div className="cardHeroBottom">
                    <p>Start with the basics</p>
                    <p>Kick things off with your name and location.</p>
                </div>
            </div>
            <div className="cardHero">
                <div className="cardCounter">1</div>
                <div className="cardHeroBottom">
                    <p>Tell your story</p>
                    <p>We'll guide you with tips along the way.</p>
                </div>
            </div>
            <div className="cardHero">
                <div className="cardCounter">1</div>
                <div className="cardHeroBottom">
                    <p>Share with friends and family</p>
                    <p>People out there want to help you.</p>
                </div>
            </div>

        </div>
    </div>
}
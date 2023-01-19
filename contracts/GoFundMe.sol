//SPDX-License-Identifier: MIT

pragma solidity ^0.8.17;

contract GoFundMe{

    struct campaign_funds {
        address raiser;
        uint256 amount;
        uint256 timestamp;
    }

    struct campaign {
        address beneficiary;
        uint256 startDate;
        uint256 endDate;
        uint256 goal;
        string  category;
        string  title;
        string  description;
        string  web3storage;
        uint256 fundsRegister;
        campaign_funds[] funds;
    }

    mapping    (string => campaign) campaigns;

    string[]   title_ledger;
    address    immutable owner;

    campaign  _pointer_campaign;

    constructor(){
        owner = msg.sender;
    }

    function exist(string calldata _key) internal view returns(bool){
        return campaigns[_key].startDate > 0 ? true:false;
    }

    function launch(
        uint256 _goal,string calldata _category,string calldata _title,string calldata _description,string calldata _cid
    ) external returns(bool){

        require(exist(_title) == false,"campaign already exist");
        
        _pointer_campaign.beneficiary = msg.sender;
        _pointer_campaign.startDate   = block.number;
        _pointer_campaign.endDate     = block.number;
        _pointer_campaign.goal        = _goal;
        _pointer_campaign.category    = _category;
        _pointer_campaign.title       = _title;
        _pointer_campaign.description = _description;
        _pointer_campaign.web3storage = _cid;

        campaigns[_title] = _pointer_campaign;
        title_ledger.push(_title);

        return true;
    }

    function contribute(string calldata _title) external payable{

        require(exist(_title) == true,"campaign don't exist");
        require(msg.value > 0,"amount must be greater than 0");
        require(
            (msg.value / (10 ** 18)) > campaigns[_title].goal == false,
            "amount exceed the campaign goal"
        );

        campaign_funds memory donation =  campaign_funds(
            msg.sender,msg.value,block.number
        );
        campaigns[_title].fundsRegister +=1;
        campaigns[_title].funds.push(donation);
    }

    function claim(string calldata _title) external payable{

        require(exist(_title) == true,"campaign don't exist");
        require(campaigns[_title].beneficiary == msg.sender,"you are not the beneficiary");
        require(
            campaigns[_title].fundsRegister == campaigns[_title].goal,
            "the goal is not yet achieved"
        );
        uint256 _totalRaised = campaigns[_title].fundsRegister;
        delete campaigns[_title].funds;
        payable(campaigns[_title].beneficiary).transfer(_totalRaised);

    }

    function getKeys() external view returns(string[] memory){
        return title_ledger;
    }

    function fetchData(string calldata _key) external view returns(campaign memory){
        return campaigns[_key];
    }

    receive() external payable{

    }
}

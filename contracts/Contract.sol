// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract Voting {
    address public admin;
    uint256[11] public votes;

    constructor() {
        admin = msg.sender;
        represents.push(
            Representatives(0, 0x5B38da6A701C568545dCFCb03fCB875f56BeDDc3)
        );
        represents.push(
            Representatives(1, 0x5b38DA6a701c568545DCFCb03fcB875F56BEdDC1)
        );
        represents.push(
            Representatives(3, 0x4b38da6A701c568545dcfCb03FCb875F56bEDdC3)
        );
        represents.push(
            Representatives(4, 0x4b38da6A201c568545dcFcb03fCB875f56bEddC3)
        );
        represents.push(
            Representatives(5, 0x4b38Da6a701d568545dcfCb03FCB875f56bEDDC3)
        );
        represents.push(
            Representatives(6, 0x4B38DA6A701c568545dcFcB03fcB875D56BedDC3)
        );
        represents.push(
            Representatives(7, 0x3B38da6a701c568545DCfCB03Fcb875F56BedDC3)
        );
        represents.push(
            Representatives(8, 0x4b38da6A701c568545dcfCb03FCb875F56bEDdC3)
        );
        represents.push(
            Representatives(9, 0x4B38DA6a701c566545dCFCb03fcB875f56BEDdC3)
        );
        represents.push(
            Representatives(10, 0x4b38dA6a701c568545DcFcb13FcB875f56bEddC3)
        );
        for (uint256 i = 0; i < votes.length; i++) {
            votes[i] = 0;
        }
    }

    event MessageSent(string message);

    struct PersonalDetails {
        string name;
        string dob;
        string place;
        address wallet;
        string password;
    }

    struct Representatives {
        uint256 index;
        address represent;
    }

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admins can access this");
        _;
    }

    PersonalDetails[] details;

    Representatives[] represents;

    mapping(address => address[]) votersOfUniqueRepresentative;

    mapping(address => bool) checkIfVoted;

    mapping(address => bool) loggedIn;

    function register(
        string memory name,
        string memory dob,
        string memory place,
        string memory password
    ) external returns(bool)  {
        uint256 c = 0;
        for (uint256 i = 0; i < details.length; i++) {
            if (details[i].wallet == msg.sender) {
                break;
            } else {
                c++;
            }
        }
        require(c==details.length, "You are already registerd");
        details.push(
            PersonalDetails(name, dob, place, msg.sender, password)
        );
        checkIfVoted[msg.sender] = false;
        emit MessageSent("You are successfully registered");
        return true;
    }

    function login(
        address wallet,
        string memory password
    ) external  {
        bool checkWallet = false;
        bool checkPassoword = false;
        for (uint256 i = 0; i < details.length; i++) {
            if (details[i].wallet == wallet) {
                checkWallet = true;
            }
            if (
                keccak256(bytes(details[i].password)) ==
                keccak256(bytes(password))
            ) {
                checkPassoword = true;
            }
        }
        require(checkWallet && checkPassoword, "You are not registered");
        loggedIn[wallet] = true;
        emit MessageSent("You are successfully loggedIn");
    }

    function castVote(uint256 index) external  {
        require(loggedIn[msg.sender] == true, "You are not loggedIn");
        require(checkIfVoted[msg.sender] == false, "You have already voted");
        votersOfUniqueRepresentative[represents[index].represent].push(
            msg.sender
        );
        votes[index]++;
        checkIfVoted[msg.sender] = true;
        emit MessageSent("You have successfully voted");
    }

    function showVotes(uint256 index) public view onlyAdmin returns (uint256) {
        return votes[index];
    }

    function winnerAddress() public view onlyAdmin returns (address) {
        uint256 counter = 0;
        address mp;
        for (uint256 i = 0; i < votes.length; i++) {
            if (votes[i] > counter) {
                counter = votes[i];
                mp = represents[i].represent;
            }
        }
        return mp;
    }

    function showVoters(
        uint256 index
    ) public view onlyAdmin returns (address[] memory) {
        return votersOfUniqueRepresentative[represents[index].represent];
    }

    function showRepresentatives() view public returns(address[] memory){
        address[] memory politicians = new address[](represents.length);
        for(uint256 i=0;i<represents.length;i++){
            politicians[i] = represents[i].represent;
        }
        return politicians;
    }

    function logOut() external returns(bool){
        loggedIn[msg.sender] = false;
        return true;

    }
}

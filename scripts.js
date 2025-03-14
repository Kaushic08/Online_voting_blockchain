const web3= new Web3(window.ethereum)
var account;
const CONTRACT_ADDR="0xd9145CCE52D386f254917e481eB44e9943F39138"
const CONTRACT_ABI=[
	
	[
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "to",
					"type": "address"
				}
			],
			"name": "delegate",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "voter",
					"type": "address"
				}
			],
			"name": "giveRightToVote",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "string[]",
					"name": "proposalNames",
					"type": "string[]"
				}
			],
			"stateMutability": "nonpayable",
			"type": "constructor"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "proposal",
					"type": "uint256"
				}
			],
			"name": "vote",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "chairperson",
			"outputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"name": "proposals",
			"outputs": [
				{
					"internalType": "string",
					"name": "name",
					"type": "string"
				},
				{
					"internalType": "uint256",
					"name": "voteCount",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"name": "voters",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "weight",
					"type": "uint256"
				},
				{
					"internalType": "bool",
					"name": "voted",
					"type": "bool"
				},
				{
					"internalType": "address",
					"name": "delegate",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "vote",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "winnerName",
			"outputs": [
				{
					"internalType": "string",
					"name": "winnerName_",
					"type": "string"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "winningProposal",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "winningProposal_",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		}
	]	]
const contract=new web3.eth.Contract(CONTRACT_ABI,CONTRACT_ADDR)
document.addEventListener("DOMContentLoaded",function(){
    if(window.ethereum){
        window.ethereum.request({method:"eth_requestAccounts"}).then((accounts) =>{
        account=accounts[0];
        console.log(account);
		  })
}

    else{
        console.log("Please install metamask");
    }
    contract.methods.candidateCount().call().then((e)=>{
        for(var i=1;i<=e;i++){
            contract.methods.candidates(i).call().then((f)=>{
            console.log(f)
                document.getElementById(f.id).innerHTML = f.name;
				document.getElementById("candidate"+f.id).innerHTML=f.voteCount;
				
            })

		}})})

	function vote(){
		var candidateId=document.getElementById("candidate").value;

	const transaction={
		from:account,
		to:CONTRACT_ADDR,
		data:contract.methods.vote(candidateId).encodeABI(),
		gas:320000
}}



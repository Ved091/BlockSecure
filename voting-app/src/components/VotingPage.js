import React, { useState, useEffect } from "react";
import "../styles/VotingPage.css";
import NavVote from "./NavVote";
import { useContract, useContractRead, Web3Button } from "@thirdweb-dev/react";
import contractAddress from "./address";
const VotingPage = () => {
  const { contract } = useContract(contractAddress);
  const [success, setSuccess] = useState(false);
  const contactRead = useContractRead(contract, "showRepresentatives");
  const contractRead = useContractRead(contract, "admin");
  const { data, isLoading, error } = useContractRead(contract, "winnerAddress");
  const winnerAddress = data;
  const admin = contractRead.data;
  const contacts = contactRead.data;
  const showWinner = () => {
    if (success && !isLoading) {
      console.log(winnerAddress);
    }
  };

  const showAdmin = () => {
    console.log(admin);
  };
  return (
    <div>
      <div>
        <NavVote />
      </div>
      <div className="vote_table">
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Candidate</th>
              <th>Address</th>
              <th>Vote</th>
            </tr>
          </thead>
          <tbody>
            {contacts?.length > 0 &&
              contacts.map((rep, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>Rahul</td>
                  <td>{rep}</td>
                  <td>
                    <Web3Button
                      contractAddress={contractAddress}
                      action={async (contract) =>
                        await contract.call("castVote", [i])
                      }
                      onSuccess={() => setSuccess(true)}
                    >
                      Vote
                    </Web3Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <button
        className="bg-red-600 rounded-lg py-3 px-6 mr-20 text-white hover:bg-red-500"
        onClick={showWinner}
      >
        Show Winner
      </button>
      <button
        className="bg-red-600 rounded-lg px-4 py-1 text-white hover:bg-red-500"
        onClick={showAdmin}
      >
        Show Admin
      </button>
    </div>
  );
};

export default VotingPage;


 

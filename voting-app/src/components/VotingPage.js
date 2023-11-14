import React, { useState } from "react";
import { useContract, useContractRead, Web3Button } from "@thirdweb-dev/react";
import contractAddress from "./address";
import NavVote from "./NavVote";

const VotingPage = () => {
  const { contract } = useContract(contractAddress);
  const [success, setSuccess] = useState(false);
  const contactRead = useContractRead(contract, "showRepresentatives");
  const contractRead = useContractRead(contract, "admin");
  const { data: winnerAddress, isLoading, error } = useContractRead(contract, "winnerAddress");
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
    <div className="bg-gray-100 min-h-screen">
      <NavVote />
      <div className="container mx-auto px-4 py-8">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="text-left">S.No</th>
                <th className="text-left">Candidate</th>
                <th className="text-left">Address</th>
                <th className="text-left">Vote</th>
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
                        className="bg-blue-500 text-white py-1 px-2 rounded-md hover:bg-blue-600 cursor-pointer"
                      >
                        Vote
                      </Web3Button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div className="mt-8 flex justify-between">
          <button
            className="bg-red-600 rounded-lg py-3 px-6 text-white hover:bg-red-500"
            onClick={showWinner}
          >
            Show Winner
          </button>
          <button
            className="bg-red-600 rounded-lg px-4 py-2 text-white hover:bg-red-500"
            onClick={showAdmin}
          >
            Show Admin
          </button>
        </div>
      </div>
    </div>
  );
};

export default VotingPage;

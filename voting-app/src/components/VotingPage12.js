import React, { useState ,useEffect} from "react";
import { useContract, useContractRead, Web3Button } from "@thirdweb-dev/react";
import contractAddress from "./address";
import NavVote from "./NavVote";

const VotingPage12 = () => {
  const { contract } = useContract(contractAddress);
  const [success, setSuccess] = useState(false);
  const [showWinnerButton, setShowWinnerButton] = useState(false);
  const contractRead = useContractRead(contract, "admin");
  const { data: winnerAddress, isLoading, error } = useContractRead(contract, "winnerAddress");
  const admin = contractRead.data;

  const showWinner = () => {
    if (success && !isLoading) {
      console.log(winnerAddress);
    }
  };

  const showAdmin = () => {
    console.log(admin);
  };

  const candidates = [
    { name: "Rahul", address: "0xB7c53aa11D982Ee195D59A191eA1D6955D4BeB36", photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy-tA72SKNMPoWryAt_EGqzPsaCeL4Fd-DHA&usqp=CAU" },
    { name: "Neha", address: "0x1eAd39D5595D965AaC9Ee1D295c1D49B7bE65DB3", photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRkKxesYkGaH5XvardJvogGL1OnjN564al-A&usqp=CAU" },
    { name: "Priya", address: "0x1b5D0A1c7D95E1E9E9a5cD32BD6B599A15f4aD9E", photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlZVRnOGHo79zCUyV0DZQXr9IF0kMjeXsXag&usqp=CAU" },
  { name: "Rajan", address: "0x599EDc7A1eD9b365E15a1959A1Db53B1c9D985A0", photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCns8f9PXxKAnY8hZ7AXWRCLV5GG_OKZeBAg&usqp=CAU" },
  { name: "Ananya", address: "0xEaAD5e1D9c0b19D1f3c5675D96529A1e9Bc3BbB6", photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTQ7Yr5uekfJtGQgbdIC4IuLLeyghVpyf-Zw&usqp=CAU" },
  { name: "Arjun", address: "0x955D1A5bD6e1c1AEa97c5ED9Db9BE3D0D952159A", photo: "https://ik.imagekit.io/c7syb8qpjp/players/org/CEE.png/tr:w-284" },
  { name: "Aisha", address: "0x9D965cD5A1bE7D1Ee13AB5cDBB3D9a9a15f4ED01", photo: "https://th.bing.com/th/id/OIP.X7jW0aRXKeJhZSis_j4XRAHaLH?pid=ImgDet&rs=1" },
  { name: "Siddharth", address: "0x5E1A5cD99B1bE9D61a35D7EABb3B0D91D9E25f9", photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-f9bQLKRYvnnBlC2yns3FcMEGA4jIvYK94g&usqp=CAU" },
  { name: "Nisha", address: "0xB31Ee75cD1959D1Ae49aBc7D1D965b9A0f3D2E9A", photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRm7xkoutrWYUNCPkKUcbosUbY0BhraCb0KQhpe9cgjT42w-btxnzppHdL3wb2ocwoXjc&usqp=CAU" },
  { name: "Rahul Khanna", address: "0xA1f5A5D9e7B9cD51E65DB31D9a5cE91D0b29E49", photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_P7uiNhSP5gvmC_ZR-ezukl9ygQpkTF2Csw&usqp=CAU" },
];
useEffect(() => {
    // Set a timer to make the "Show Winner" button visible after 5000 milliseconds (5 seconds)
    const timer = setTimeout(() => {
      setShowWinnerButton(true);
    }, 5000);

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, []); // Empty dependency array ensures useEffect runs once on component mount


  return (
    <div className="bg-gray-100 min-h-screen">
    <NavVote />
    <div className="container mx-auto px-4 py-8 flex">
      <div className="overflow-x-auto w-2/3">
          <table className="min-w-full xl:min-w-[800px]" style={{ borderCollapse: "collapse", border: "1px solid #ddd" }}>
            <thead>
              <tr className="bg-gray-200">
                <th style={tableCellStyle}>S.No</th>
                <th style={tableCellStyle}>Candidate</th>
                <th style={tableCellStyle}>Photo</th>
                <th style={tableCellStyle}>Address</th>
                <th style={tableCellStyle}>Vote</th>
              </tr>
            </thead>
            <tbody>
              {candidates.map((candidate, i) => (
                <tr key={i}>
                  <td style={tableCellStyle}>{i + 1}</td>
                  <td style={tableCellStyle}>{candidate.name}</td>
                  <td style={tableCellStyle}>
                    <img src={candidate.photo} alt={`${candidate.name}'s photo`} style={{ width: "50px", height: "50px", borderRadius: "50%" }} />
                  </td>
                  <td style={tableCellStyle}>{candidate.address}</td>
                  <td style={tableCellStyle}>
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
          {showWinnerButton && (
            <button
              className="bg-red-600 rounded-lg py-3 px-6 text-white hover:bg-red-500"
              onClick={showWinner}
            >
              <div>
            <img
              src="https://www.c-sharpcorner.com/article/the-role-of-blockchain-in-voting-everything-you-should-know/Images/The%20Role%20of%20Blockchain%20in%20Voting%20Everything%20You%20Should%20Know1.gif"
              alt="Blockchain Voting"
              style={{ width: "100%", maxWidth: "400px" }}
            />
          </div>
            </button>
          )}
          <button
            className="bg-red-600 rounded-lg px-4 py-2 text-white hover:bg-red-500"
            onClick={showAdmin}
          >
            {/* Show Admin */}
          </button>
        </div>
      </div>
    </div>
  );
};

const tableCellStyle = {
  border: "1px solid #ddd",
  padding: "8px",
};

export default VotingPage12;
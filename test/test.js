// VotingTest.js

const Voting = artifacts.require("Voting");

contract("Voting", (accounts) => {
  let votingInstance;

  before(async () => {
    votingInstance = await Voting.new({ from: accounts[0] });
  });

  it("should register a new user", async () => {
    const result = await votingInstance.register(
      "John Doe",
      "1990-01-01",
      "Someplace",
      "password",
      { from: accounts[1] }
    );
    assert.equal(result, true, "Registration failed");
  });

  it("should login a registered user", async () => {
    const result = await votingInstance.login(accounts[1], "password", {
      from: accounts[1],
    });
    assert.equal(result, true, "Login failed");
  });

  it("should cast a vote", async () => {
    await votingInstance.register(
      "Voter",
      "1995-05-05",
      "Somewhere",
      "voterpassword",
      { from: accounts[2] }
    );

    await votingInstance.login(accounts[2], "voterpassword", {
      from: accounts[2],
    });

    const result = await votingInstance.castVote(0, { from: accounts[2] });
    assert.equal(result, true, "Vote casting failed");
  });

  it("should show votes for a representative", async () => {
    const votes = await votingInstance.showVotes(0, { from: accounts[0] });
    assert.equal(votes, 1, "Votes retrieval failed");
  });

  it("should show the winner's address", async () => {
    const winnerAddress = await votingInstance.winnerAddress({
      from: accounts[0],
    });
    assert.equal(
      web3.utils.isAddress(winnerAddress),
      true,
      "Winner address retrieval failed"
    );
  });

  it("should show voters for a representative", async () => {
    const voters = await votingInstance.showVoters(0, { from: accounts[0] });
    assert.equal(voters.length, 1, "Voters retrieval failed");
  });

  it("should show representatives", async () => {
    const representatives = await votingInstance.showRepresentatives({
      from: accounts[0],
    });
    assert.equal(representatives.length, 11, "Representatives retrieval failed");
  });

  it("should logout a user", async () => {
    const result = await votingInstance.logOut({ from: accounts[1] });
    assert.equal(result, true, "Logout failed");
  });
});

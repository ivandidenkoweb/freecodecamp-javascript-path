const poll = new Map();

poll.set("Ukraine", new Set(["voiter1", "voiter2", "voiter3"]));
poll.set("Poland", new Set(["voiter1", "voiter2", "voiter3"]));
poll.set("Germany", new Set(["voiter1", "voiter2", "voiter3"]));

const addOption = (option) => {
  if (option === "") {
    return "Option cannot be empty.";
  }
  if (poll.has(option)) {
    return `Option "${option}" already exists.`;
  } else {
    poll.set(option, new Set());
    return `Option "${option}" added to the poll.`;
  }
};

const vote = (option, voterId) => {
  if (!poll.has(option)) {
    return `Option "${option}" does not exist.`;
  } else {
    const voters = poll.get(option);
    if (voters.has(voterId)) {
      return `Voter ${voterId} has already voted for "${option}".`;
    } else {
      voters.add(voterId);
      return `Voter ${voterId} voted for "${option}".`;
    }
  }
};

const displayResults = () => {
  let result = "Poll Results:";

  for (const [option, voters] of poll) {
    result += `\n${option}: ${voters.size} votes`;
  }

  return result;
};

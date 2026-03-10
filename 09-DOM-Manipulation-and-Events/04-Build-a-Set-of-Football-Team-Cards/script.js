const footballTeam = {
  team: "Manchester City",
  year: 2026,
  headCoach: "Pep Guardiola",
  players: [
    {
      name: "Kevin De Bruyne",
      position: "midfielder",
      isCaptain: true,
    },
    {
      name: "Erling Haaland",
      position: "forward",
      isCaptain: false,
    },
    {
      name: "Rúben Dias",
      position: "defender",
      isCaptain: false,
    },
    {
      name: "Ederson",
      position: "goalkeeper",
      isCaptain: false,
    },
  ],
};

let teamElement = document.querySelector("#team");
let yearElement = document.querySelector("#year");
let headCoachElement = document.querySelector("#head-coach");
let playerCards = document.querySelector("#player-cards");

teamElement.innerText = footballTeam.team;
yearElement.innerText = footballTeam.year;
headCoachElement.innerText = footballTeam.headCoach;

function createCards(arr) {
  arr.forEach((player) => {
    let playerCard = document.createElement("div");
    playerCard.setAttribute("class", "player-card");

    let titlePlayer = document.createElement("h2");
    if (player.isCaptain) {
      titlePlayer.innerText = `(Captain) ${player.name}`;
    } else {
      titlePlayer.innerText = player.name;
    }

    let positionPlayer = document.createElement("p");
    positionPlayer.innerText = player.position;

    playerCard.appendChild(titlePlayer);
    playerCard.appendChild(positionPlayer);
    playerCards.appendChild(playerCard);
  });
}

createCards(footballTeam.players);

function updateCards(event) {
  const position = event.target.value;

  playerCards.replaceChildren();

  const filteredPlayers =
    position === "all"
      ? footballTeam.players
      : footballTeam.players.filter((player) => player.position === position);
  createCards(filteredPlayers);
}

let selectPlayers = document.querySelector("#players");

selectPlayers.addEventListener("change", updateCards);

const albertaCities = [
  "Acadia Valley", "Acme", "Airdrie", "Alberta Beach", "Alder Flats",
  "Alix", "Alliance", "Altario", "Andrew", "Anzac",
  "Ardrossan", "Arrowwood", "Ashmont", "Assumption", "Athabasca",
  "Banff", "Barons", "Barrhead", "Bashaw", "Bassano",
  "Bawlf", "Bear Canyon", "Beaumont", "Beaverlodge", "Beiseker",
  "Bentley", "Berwyn", "Big Valley", "Bindloss", "Black Diamond",
  "Blackfalds", "Blackie", "Blue Ridge", "Bon Accord", "Bonanza",
  "Bonnyville", "Bow Island", "Bowden", "Boyle", "Bragg Creek",
  "Breton", "Brocket", "Brooks", "Brownvale", "Bruderheim",
  "Burdett", "Byemoor", "Cadomin", "Calgary", "Calling Lake",
  "Calmar", "Camrose", "Canmore", "Carbon", "Cardston",
  "Carmangay", "Caroline", "Carseland", "Carstairs", "Castor",
  "Cayley", "Cereal", "Cessford", "Champion", "Chauvin",
  "Chestermere", "Chipewyan Lake", "Chipman", "Clairmont", "Claresholm",
  "Clive", "Clyde", "Coaldale", "Coalhurst", "Cochrane",
  "Cold Lake", "Conklin", "Consort", "Coronation", "Coutts",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < albertaCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(albertaCities[i]);
}

module.exports = { batches };

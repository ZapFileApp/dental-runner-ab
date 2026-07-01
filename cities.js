const albertaCities = [
  "Picture Butte", "Pincher Creek", "Plamondon", "Ponoka", "Provost",
  "Radway", "Rainbow Lake", "Ralston", "Raymond", "Red Deer",
  "Redcliff", "Redwater", "Rimbey", "Robb", "Rochester",
  "Rocky Mountain House", "Rockyford", "Rolling Hills", "Rosalind", "Rosebud",
  "Rumsey", "Rycroft", "Ryley", "Sangudo", "Saskatchewan River Crossing",
  "Schuler", "Seba Beach", "Sedgewick", "Seven Persons", "Sexsmith",
  "Sherwood Park", "Sibbald", "Silver Valley", "Slave Lake", "Smith",
  "Smoky Lake", "Spirit River", "Spruce Grove", "Spruce View", "St. Albert",
  "St. Michael", "St. Paul", "Stand Off", "Standard", "Stavely",
  "Stettler", "Stirling", "Stony Plain", "Strathmore", "Strome",
  "Sundre", "Swan Hills", "Sylvan Lake", "Taber", "Thorhild",
  "Thorsby", "Three Hills", "Tilley", "Tofield", "Tomahawk",
  "Torrington", "Trochu", "Trout Lake", "Turner Valley", "Two Hills",
  "Valleyview", "Vauxhall", "Vegreville", "Vermilion", "Veteran",
  "Viking", "Vilna", "Vulcan", "Wabamun", "Wainwright",
  "Walsh", "Wandering River", "Wanham", "Warburg", "Warner",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < albertaCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(albertaCities[i]);
}

module.exports = { batches };

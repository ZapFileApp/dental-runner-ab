const albertaCities = [
  "Warspite", "Waskatenau", "Wembley", "Westlock", "Wetaskiwin",
  "Whitecourt", "Whitelaw", "Widewater", "Wildwood", "Willingdon",
  "Winfield", "Woking", "Worsley", "Wrentham", "Youngstown",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < albertaCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(albertaCities[i]);
}

module.exports = { batches };

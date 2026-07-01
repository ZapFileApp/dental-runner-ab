const albertaCities = [
  "Hobbema", "Holden", "Hughenden", "Hussar", "Hythe",
  "Innisfail", "Innisfree", "Irma", "Iron Springs", "Irricana",
  "Irvine", "Islay", "Jarvie", "Jasper", "Jenner",
  "Joussard", "Kananaskis", "Keephills", "Keg River", "Killam",
  "Kinuso", "Kitscoty", "La Crete", "Lac La Biche", "Lacombe",
  "Lake Louise", "Lamont", "Langdon", "Lavoy", "Leduc",
  "Legal", "Leslieville", "Lethbridge", "Lloydminster", "Lodgepole",
  "Lomond", "Longview", "Lougheed", "Ma-Me-O Beach", "Magrath",
  "Manning", "Mannville", "Manyberries", "Marlboro", "Marwayne",
  "Mayerthorpe", "McLennan", "Meander River", "Medicine Hat", "Milk River",
  "Millet", "Milo", "Minburn", "Mirror", "Morinville",
  "Morley", "Morrin", "Mulhurst", "Mundare", "Myrnam",
  "Namao", "Nampa", "Nanton", "New Dayton", "New Norway",
  "New Sarepta", "Newbrook", "Nisku", "Niton Junction", "Nobleford",
  "Nordegg", "Okotoks", "Olds", "Onoway", "Oyen",
  "Paradise Valley", "Peace River", "Peerless Lake", "Peers", "Penhold",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < albertaCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(albertaCities[i]);
}

module.exports = { batches };

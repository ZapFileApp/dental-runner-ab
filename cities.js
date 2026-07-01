const albertaCities = [
  "Cowley", "Craigmyle", "Cremona", "Crossfield", "Crowsnest Pass",
  "Czar", "Daysland", "DeBolt", "Delburne", "Delia",
  "Derwent", "Devon", "Dewberry", "Didsbury", "Dixonville",
  "Donalda", "Donnelly", "Drayton Valley", "Drumheller", "Duchess",
  "Eaglesham", "East Coulee", "Eckville", "Edgerton", "Edmonton",
  "Edson", "Elk Point", "Elkwater", "Elnora", "Empress",
  "Enchant", "Etzikom", "Evansburg", "Exshaw", "Fairview",
  "Falher", "Faust", "Ferintosh", "Flatbush", "Foremost",
  "Forestburg", "Fort Assiniboine", "Fort Chipewyan", "Fort MacKay", "Fort Macleod",
  "Fort McMurray", "Fort Saskatchewan", "Fort Vermilion", "Fox Creek", "Fox Lake",
  "Gadsby", "Galahad", "Gibbons", "Gift Lake", "Girouxville",
  "Gleichen", "Glendon", "Glenwood", "Grand Centre", "Grande Cache",
  "Grande Prairie", "Granum", "Grassland", "Grassy Lake", "Grimshaw",
  "Grouard", "Hairy Hill", "Halkirk", "Hanna", "Hardisty",
  "Hay Lakes", "Hays", "Heinsburg", "Heisler", "High Level",
  "High Prairie", "High River", "Hilda", "Hines Creek", "Hinton",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < albertaCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(albertaCities[i]);
}

module.exports = { batches };

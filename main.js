const lengthInput = document.getElementById("length");
const speechOutput = document.getElementById("speech");

const start = [
  "Siksi",
  "Kuitenkin",
  "Tämän vuoksi",
  "Tämän takia",
  "Tässä",
  "Lopuksi",
  "Loppupelissä",
  "Sen myötä",
  "Myös",
  "Jospa",
];
const action = [
  "ohjelmointi",
  "opintojen suorittaminen",
  "pelaaminen",
  "katsominen",
  "miettiminen",
  "koodaaminen",
  "tekeminen",
  "ihmettely",
  "opiskelu",
  "lukeminen",
];
const author = [
  "sinä",
  "minä",
  "hän",
  "se",
  "opettaja",
  "työntekijä",
  "toimittaja",
  "äiti",
  "kilpikonna",
  "Pasi",
];
const end = [
  "on järkevä",
  "ei haittaa",
  "on todella tärkeää",
  "ei merkitse mitään",
  "hyödyttää meitä kaikkia",
  "aiheuttaa paljon ongelmia",
  "todellisuudessa on turhaa",
  "on ongelmallista",
  "onkin oikeasti joulupukki",
  "ei ollut puuhöylä",
];

const generateSpeech = () => {
  const speech = [];
  const lengthValue = parseInt(lengthInput.value);

  for (let i = lengthValue; i > 0; i--) {
    const sentence =
      randomElement(start) +
      " " +
      randomElement(action) +
      " " +
      randomElement(author) +
      " " +
      randomElement(end) +
      ".";

    speech.push(sentence);
  }

  speechOutput.innerHTML = speech.join("<br/>");
};

const randomElement = (arr) => {
  const index = Math.floor(Math.random() * 9);
  const item = arr.pop(index);
  arr.unshift(item);
  return item;
};

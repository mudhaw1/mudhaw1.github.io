const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

const storyText = "In a village where :insertx:, it was 94 fahrenheit outside, so they all got into the pool where :inserty:. they were a bit confused , then they realized that :insertz:. the fly on the wall saw the whole thing, but was not surprised. they all piled into the hamster ball, it weighed almost 1600 pounds, then went home to have an intervention";
const insertX = ["the fish grew legs and started walking","everyone was a little weird", "they were all batman"];
const insertY = ["the water turned purple", "the clouds got angry and drowned them all with their showers", "the sun hid from them"];
const insertZ = ["Someone peed in the pool","No one took out the trash last night", "Kevin wouldnt stop yapping"];


function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

randomize.addEventListener('click', result);

function result() {

  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replaceAll(":insertx:", xItem)
        .replace(":inserty:", yItem)
        .replace(":insertz:", zItem);


  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace("the fly on the wall", name)

  }

  if(document.getElementById("uk").checked) {
    const weight = `${Math.round(1600 / 14)} stone`;
    const temperature =  `${Math.round((94-32) * (5/9))} centigrade`;
    newStory = newStory.replace("1600 pounds", weight).replace("94 fahrenheit", temperature);

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}

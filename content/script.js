const data =
  `aardvark| albatross| alligator| alpaca| ant| anteater| antelope| ape| armadillo| baboon| badger| barracuda| bat| bear| bearcat| beaver| bee| beetle| bird| boar| bobcat| buffalo| bull| butterfly| camel| cardinal| cat| chamois| cheetah| chicken| chimpanzee| chinchilla| chough| cobra| cougar| cow| crab| crane| crocodile| crow| deer| dog| dolphin| donkey| dove| dragonfly| duck| eagle| eel| elephant| elephant seal| elk| wapiti| emu| falcon| ferret| finch| fish| flamingo| fox| frog| gazelle| gecko| gerbil| giant panda| giraffe| gnu| goat| goldfinch| goosander| goose| gorilla| grasshopper| grouse| guanaco| guinea pig| gull| hamster| hare| hawk| hedgehog| hermit crab| heron| herring| hippopotamus| horse| hummingbird| hyena| ibex| ibis| iguana| impala| jaguar| jay| jellyfish| kangaroo| kingbird| katinka| kite| koala| komodo dragon| ladybug| lapwing| lark| lemur| leopard| lion| lizard| llama| lobster| loris| louse| lyrebird| mallard| manatee| mandrill| margay| meerkat| mink| mole| mongoose| monkey| moose| moth| mouse| narwhal| newt| nightingale| okapi| opossum| ostrich| otter| ox| owl| oyster| panther| parrot| panda| giant panda| partridge| peacock| peafowl| peccary| pelican| penguin| pheasant| pig| pigeon| platypus| polar bear| pony| parakeet| porcupine| porpoise| prairie dog| pug| quail| rabbit| raccoon| ram| raven| red deer| red panda| rhinoceros| rook| salamander| salmon| sandpiper| sardine| sea lion| seahorse| seal| sea otter| shark| sheep| shrew| skink| skipper| skunk| sloth| snail| spiny anteater| spoonbill| squid| squirrel| starfish| starling| stilt| stingray| swan| tapir| tarsier| thrush| tiger| toad| toucan| turkey| turtle| wallaby| walrus| weasel| whale| wildebeest| wolf| wolverine| wombat| zebra`;

class State {
  constructor() {
    this.animals = data.split("|").map((l) => l.trim());
    this.letter = "-";
  }

  setLetter(index) {
    if (index === 0) {
      this.letter = "-";
    } else {
      this.letter = String.fromCharCode(index + 96);
    }
  }
}

const s = new State();

window.BittyClass = class {
  bittyInit() {
    document.documentElement.style.setProperty(
      "--page-visibility",
      "visible",
    );
  }

  init(_event, el) {
    s.animals.forEach((animal) => {
      const aEl = document.createElement("div");
      aEl.dataset.animal = animal;
      aEl.dataset.receive = "filter";
      aEl.innerHTML = animal;
      el.appendChild(aEl);
    });
  }

  filter(event, el) {
    const letters = el.dataset.animal.split("");
    if (s.letter === "-") {
      el.classList.remove("in");
      el.classList.remove("out");
    } else if (letters.includes(s.letter)) {
      el.classList.add("in");
      el.classList.remove("out");
    } else {
      el.classList.add("out");
      el.classList.remove("in");
    }
  }

  letter(event, el) {
    const index = parseInt(event.target.value, 10);
    s.setLetter(index);
    el.innerHTML = s.letter;
    this.api.forward(event, "filter");
  }
};

// `animals` is just an array. it's not shown becuse
// there are 207 items in it.

class State {
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
  init(_event, el) {
    animals.forEach((animal) => {
      const aEl = document.createElement("div");
      aEl.dataset.animal = animal;
      aEl.dataset.receive = "filter";
      aEl.innerHTML = animal;
      el.appendChild(aEl);
    });
  }

  filter(_event, el) {
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

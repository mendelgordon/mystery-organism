// Random number generator
const rng = (number = 1) => {
  return Math.floor(Math.random() * number);
};

// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[rng(4)];
};

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// Factory function to create new objects to study, with default values so no parameters are needed
const pAequorFactory = (num = rng(1000), dna = mockUpStrand()) => {
  return {
    num,
    dna,
    mutate() {
      let e = rng(15);
      let newBase = returnRandBase();
      while (this.dna[e] === newBase) {
        newBase = returnRandBase();
      }
      this.dna[e] = newBase;
      return this.dna;
    },
    compareDNA(o) {
      let counter = 0;
      for (let i = 0; i < 15; i++) {
        o.dna[i] == this.dna[i] ? (counter += 100) : false;
      }
      const floor = Math.floor(counter / 15);
      console.log(
        `specimen #${this.num} and specimen #${o.num} have ${floor}% DNA in common`
      );
    },
    willLikelySurvive() {
      const counter = this.dna.filter(e => e === 'C' || e === 'G');
      return counter.length >= 9;
    },
    complementStrand() {
      this.dna.forEach()
    }
  };
};

// Fill a storage array with 30 instances of our organism that can survive
const pAequorStorage = [];
while (pAequorStorage.length < 30) {
  const e = pAequorFactory();
  e.willLikelySurvive() ? pAequorStorage.push(e) : false;
}

window.onload = () => document.write(JSON.stringify(pAequorStorage));

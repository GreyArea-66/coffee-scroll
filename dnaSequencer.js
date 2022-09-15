// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// Factory function
const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,

    mutate() {
      //'mutates' DNA strand, selects random base and changes to different base.
      console.log(dna);
      let randIndex = Math.floor(Math.random() * 15);
      let randomBase = dna[randIndex];
      console.log(randomBase);
      let newBase;
      do {
        newBase = returnRandBase();
      } while (newBase == randomBase);
      console.log(newBase);
      dna[randIndex] = newBase;
      return dna;
    },

    compareDNA(altDNA) { // compares original DNA with alternate DNA array- returns percentage in common
      let dnaCount = 0;
      let dnaIndex = 0;

      for (const base of dna) {
        if (base == altDNA.dna[dnaIndex]) {
          dnaCount++;
        }
        dnaIndex++;
      }

      let dnaPer = Math.floor((dnaCount / dna.length) * 100);
      console.log(
        `Specimen #${this.specimenNum} and Specimen #${altDNA.specimenNum} have ${dnaPer}% in common.`
      );
    },

    willLikelySurvive() { // returns true or false based on total % of 'C' or 'G' being 60 or higher
      const baseCG = dna.filter((base) => base == "C" || base == "G");
      return (baseCG.length / dna.length) * 100 >= 60 ? true : false;
    },
  };
};
let testDNA = pAequorFactory(1, mockUpStrand());
let altDNA = pAequorFactory(2, mockUpStrand());
// console.log(testDNA);

// console.log(altDNA);
//testDNA.compareDNA(altDNA);

console.log(testDNA.willLikelySurvive());
let arrayDNA = []
let count = 1
while (count <= 30) {
  arrayDNA.push(pAequorFactory(count, mockUpStrand()))
  count++
}
console.log(arrayDNA)


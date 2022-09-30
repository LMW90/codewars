// convert valid DNA strings into RNA strings

function DNAtoRNA(dna) {
  return dna.split('T').join('U')
}
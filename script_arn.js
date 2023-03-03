function dna(arn) {
  let protein = "";
  let proteinArray = [];
  for (let i = 0; i < arn.length; i += 3) {
    codons = arn.slice(i, i + 3);
    if (
      codons == "UCU" ||
      codons == "UCC" ||
      codons == "UCA" ||
      codons == "UCG" ||
      codons == "AGU" ||
      codons == "AGC"
    ) {
      protein = "Sérine";
      proteinArray.push(protein);
    } else if (
      codons == "CCU" ||
      codons == "CCC" ||
      codons == "CCA" ||
      codons == "CCG"
    ) {
      protein = "Proline";
      proteinArray.push(protein);
    } else if (codons == "UUA" || codons == "UUG") {
      protein = "Leucine";
      proteinArray.push(protein);
    } else if (codons == "UUU" || codons == "UUC") {
      protein = "Phénylalanine";
      proteinArray.push(protein);
    } else if (
      codons == "CGU" ||
      codons == "CGC" ||
      codons == "CGA" ||
      codons == "CGG" ||
      codons == "AGA" ||
      codons == "AGG"
    ) {
      protein = "Arginine";
      proteinArray.push(protein);
    } else if (codons == "UAU" || codons == "UAC") {
      protein = "Tyrosine";
      proteinArray.push(protein);
    }
  }
  console.log(proteinArray);
}

dna("CCGUCGUUGCGCUACAGC");
dna("CCUCGCCGGUACUUCUCG");

CCU 
CGC 
CGG 
UAC 
UUC 
UCG
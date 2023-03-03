
function dna(arn){
  let protein = ""
  let proteinArray = []
  for (let i = 0; i < arn.length; i+=3) {
    codons = arn.slice(i,i+3)
      if(codons = 'UCU' || 'UCC' || 'UCA' || 'UCG' || 'AGU' || 'AGC'){
        protein = "Sérine"
        proteinArray.push(protein)
      }
      if(codons = "CCU" || "CCC" || "CCA" || "CCG"){
        protein = "Proline";
        proteinArray.push(protein);
      }
      if(codons = "UUA" || "UUG"){
        protein = "Leucine";
        proteinArray.push(protein);
      }
      if(codons = "UUU" || "UUG"){
        protein = "Phénylalanine";
        proteinArray.push(protein);
      }
      if(codons = "CGU" || "CGC" || "CGA" || "CGG" || "AGA" || "AGG"){
        protein = "Arginine";
        proteinArray.push(protein);
      }
      if(codons = "UAU" || "UAC"){
        protein = "Tyrosine";
        proteinArray.push(protein);
      }


    }
  }

  // dna("CCUCGCCGGUACUUCUCG")
  // console.log(dna("CCGUCGUUGCGCUACAGC"))
  // console.log(dna("CCUCGCCGGUACUUCUCG")) 

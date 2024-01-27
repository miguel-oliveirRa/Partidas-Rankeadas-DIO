main()

function main() {
  let totWin = 30
  let totDefeat = 10
  
  let pointRanking = calcRanking(totWin, totDefeat)
  let ranking  = resultRaking(pointRanking)

  console.log(`O Herói tem de saldo de ${pointRanking} está no nível de ${ranking}`)
}

function calcRanking(numX, numY){
  return numX - numY
}

function resultRaking(numR) {
  if (numR <= 10){
    return 'Ferro'
  } else if(numR >= 101){
    return 'Imortal'
  } 
  else{
    switch (true) {
      case ((numR > 10) && (numR < 21)):
        return 'Bronze'
        break
        case ((numR > 20) && (numR < 51)):
        return 'Prata'
      break
      case ((numR > 50) && (numR < 81)):
        return 'Ouro'
      break
      case ((numR > 80) && (numR < 91)):
        return 'Diamante'
        break 
      case ((numR > 90) && (numR < 101)):
        return 'Lendário'
      break
    }
  }
}

/* Decidi usar a mesma solução por conta da redundância de código que teria ao usar o if, e acho o switch mais limpo para entendimento do que está acontecendo */
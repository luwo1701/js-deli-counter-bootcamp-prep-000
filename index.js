
var number = 0

function takeANumber(katzDeliLine){
  number += 1
  katzDeliLine.push(number)
  return `Welcome. You are number ${number} in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  }
  
  else {
    //var temp = katzDeliLine[0]
    //katzDeliLine.shift()
    return `Currently serving ${katzDeliLine.shift()}.`
    }
    
}

function currentLine(katzDeliLine){
  var string = "The line is currently: "
  
  if (katzDeliLine.length === 0){
    return "The line is currently empty."
  }
  else {
    var i

    for (i=0;i<katzDeliLine.length-1; i++){
      string = string + `${i+1}. ${katzDeliLine[i]}, `
    }
    
    string = string + `${i+1}. ${katzDeliLine[i]}`
    console.log(string)
    return string
  }
  
}
var arr = [36,37,38]

currentLine(arr)
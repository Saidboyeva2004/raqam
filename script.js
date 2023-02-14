let num1 = prompt('1-son kiriting')
let num2 = prompt('2-son kiriting')
let num3 = prompt('3-son liriting')



if (num1 > num2 && num1 < num3 || num1 < num2 && num1 > num3) {
    alert("o'rta son" +num1)
    if(num1 % 2 == 0){
        alert('juft')
    }
    else if (num1 % 2 == 1) {
        alert("toq")
    }
}  else if(num2 < num1 && num2 > num3 || num2 > num1 && num2 < num3) {
    alert("o'rta son" + num2)
    if(num2 % 2 == 0){
        alert('juft')
    }
    else if (num2 % 2 == 1) {
        alert("toq")
    }
}else if(num3 < num1 && num3 > num2 || num3 > num1 && num3 < num2) {
    alert("o'rta son" + num3)
    if(num3 % 2 == 0){
        alert('juft')
    }
    else  if (num3 % 2 == 1) {
        alert("toq")
    }
}
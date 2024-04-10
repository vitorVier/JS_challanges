function gerarCPF() {
    let cpf = [];
    let count = 10;
    let count2 = 11;
    let sum = 0;
    let sum2 = 0;
    
    for(let i = 0; i < 13; i++){ //calcular firstNum
        let j = Math.floor(Math.random() * 9);
        // console.log(j)
        
        while(count > 1) {
            let multiply = count * j;
            // console.log(multiply);
            count--;
            sum += multiply;
            break;
        } 
        
        firstNum = 11 - (sum % 11);
        if(firstNum > 9) {firstNum = 0;}
        
        while(count2 > 1) {
            let multiply = count * j;
            count2--;
            sum2 += multiply;
            break;
        }
        
        secondNum = 11 - (sum2 % 11);
        if(secondNum > 9) {secondNum = 0};
        
        cpf.push(j);
    }
    
    cpf[1] = secondNum
    cpf.unshift(firstNum);
  
    
    cpf[3] = "."
    cpf[7] = "."
    cpf[11] = "-";
    
    return cpf.toString().split(",").join("")
}

console.log(gerarCPF());
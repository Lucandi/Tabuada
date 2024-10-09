function gerar_Tabuada(){
    var numero = document.getElementById('txtnum');
    var res = document.getElementById('res');
    if (numero.value.length == 0) {
       window.alert("Erro! Informe um número");
    } else {
        num = Number(numero.value); 
        res.innerHTML = ''
        for (let c = 0; c <= 10; c++) {
            resultado = num * c;
            res.innerHTML += `${num} x ${c} = ${resultado} <br>`;
        }
    } 
}

  
   
    

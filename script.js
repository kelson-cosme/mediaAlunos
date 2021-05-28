
const calcular = document.getElementById("calcular");

function media (){
    var nota1 = document.getElementById("n1").value; /*pegar os valores dos inputs*/
    var nota2 = document.getElementById("n2").value;
    var nota3 = document.getElementById("n3").value;
    var nota4 = document.getElementById("n4").value;
    var resultado = document.getElementById("resultado");
   
    const total = parseFloat( nota1) + parseFloat( nota2) + parseFloat(nota3) + parseFloat(nota4);
    const media =  (total / 4).toFixed(1);
    

    if (nota1 !== "" && nota2 !== "" && nota3 !== "" && nota4 !== ""){ //Verificando se os valores dos inputs são diferente de nada

        let classificacao = "";

        if (media < 6){
            classificacao = ("reprovado");
        }else if(media >= 6){
            classificacao = ("aprovado");
        }

        resultado.textContent = "Sua média foi "+media+", então você está "+classificacao;

    }else{
        resultado.textContent = ("Preencha os campos vazios");
    }

}


calcular.addEventListener("click", media);//adicionando o evento de click
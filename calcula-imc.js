var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nitricionista"; 
 
 //seleciona todas as classes paciente no html
var pacientes = document.querySelectorAll(".paciente");

//laço de repetição para calcular o imc de todos os pacientes
for(var i = 0; i < pacientes.length; i++) {
	console.log(pacientes);

//recebe o resultado do for
var paciente = pacientes[i];

//seleciona a classe info-altura na var paciente e coloca na var tdAltura
//depois pega o conteúdo de texto com textContent e armazena na var altura
var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;


//seleciona a classe info-peso na var paciente e coloca na var tdAltura
//depois pega o conteúdo e armazena na var peso
var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

//seleciona a classe info.imc que está em paciente 
// e armazena na var tdImc
var tdImc = paciente.querySelector(".info-imc");

//variáveis globais para validar o peso e a altura com if's
var alturaEhValida = validaAltura(altura);
var pesoEhValido = validaPeso(peso);


if (!pesoEhValido) {
    console.log("Peso inválido!");
    tdPeso.textContent = "Peso inválido!";
    pesoEhValido = false;
	paciente.classList.add("paciente-invalido");
}

if (!alturaEhValida) {
    console.log("Altura inválida!");
    tdAltura.textContent = "Altura inválida!";
    alturaEhValida = false;
    paciente.classList.add("paciente-invalido");
}

if (alturaEhValida && pesoEhValido) {

    var imc = calculaImc(peso, altura);
    tdImc.textContent = imc; //toFixed limita as casas decimais que serão exibidas 
} else {
    tdImc.textContent = "Altura e/ou peso inválidos!"
}

	function validaPeso(peso){
		if(peso > 1 && peso < 500){
			return true;
		}else{
			return false;
			}
	}
	
	function validaAltura(altura){
		if(altura > 1 && altura < 8.00){
			return true;
		}else{
			return false;
		}
	}

} //fim laço repetição

console.log(pacientes[i]); //exibe i no console

//extraindo função de calcular o imc para usar em outros lugares 
//sem necessidade de reescrever a lógica 
	function calculaImc(peso, altura) {
		var imc = 0;
			imc = peso / (altura * altura);
		return imc.toFixed(2);
	}

















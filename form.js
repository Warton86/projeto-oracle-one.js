var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
	event.preventDefault();
//addEventListener é um escutador de eventos para capturar cliques por exemplo
//event.preventDefault previne ações padrões do html
//no caso ele não deixa o html submeter o form e recarregar a página
	
	var form = document.querySelector("#form-adiciona");
	
//função que extrai infomrações do paciente do form
	var paciente = obtemPacienteDoFormulario(form);
//form.var.value está pegando os valores da variavel pelo id da variável
//lá no input do html	
	
	
//document.createElement permite criar tags html pelo js
//no caso criamos uma tr
	
//add paciente na tabela

	var erros = validaPaciente(paciente);

	if(erros.length > 0){
		var mensagemErro = document.querySelector("#mensagem-erro");
		exibeMensagensDeErro(erros);
		
		return;
	}

	adicionaPacienteNaTabela(paciente);	
	
//appendChild coloca um elemento dentro do outro
//no caso tabela dentro de pacienteTr

	form.reset();
	//apagando os campor do formulário após enviar 
	
	var mensagensErro = document.querySelector("#mensagens-erro");
	mensagensErro.innerHTML = "";


console.log(pacienteTr);
});

	function adicionaPacienteNaTabela(paciente) {
		var pacienteTr = montaTr(paciente);
		var tabela = document.querySelector("#tabela-pacientes");
		tabela.appendChild(pacienteTr);
	}






	function exibeMensagensDeErro(erros){
		var ul = document.querySelector("#mensagens-erro");
		
		ul.innerHTML = ""; //manipula o tag html selecionado
		
		erros.forEach(function(erro){
			var li = document.createElement("li");
			li.textContent = erro;
			ul.appendChild(li);
		});
	}


//início pegando valores do paciente com uma função e um objeto
	function obtemPacienteDoFormulario(form) {
	
		var paciente = { //objeto js
			nome: form.nome.value,
			peso: form.peso.value,
			altura: form.altura.value,
			gordura: form.gordura.value,
			imc: calculaImc(form.peso.value, form.altura.value)
		}
		
		return paciente;
	}
//fim pegando valores do paciente


	
//início criando tr
	function montaTr(paciente) {
			var pacienteTr = document.createElement("tr");
			pacienteTr.classList.add("paciente");
			
				pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
				pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
				pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
				pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
				pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));
			
			return pacienteTr;
	}
//fim criando tr



//início criando td
	function montaTd(dado, classe) {
		
		var td = document.createElement("td");
		td.textContent = dado;
		td.classList.add(classe);
	
		return td;
	}
//fim criando td

	function validaPaciente(paciente) {
	
	var erros = [];
	

		if(!validaPeso(paciente.peso)) erros.push("Por favor, insira um peso válido!");
		
		if(!validaAltura(paciente.altura)) erros.push("Por favor, insira uma altura válida!");
		
		if(paciente.nome.length == 0) erros.push("Por favor, insira um valor no campo nome");
		
		if(paciente.peso.length == 0) erros.push("Por favor, insira um valor no campo peso!");
		
		if(paciente.altura.length == 0) erros.push("Por favor, insira um valor no campo altura!");
		
		if(paciente.gordura.length == 0) erros.push("Por favor, insira um valor no campo gordura!");
		
		
		return erros;
		
		
	}


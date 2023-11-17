const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");
const datebirth = document.getElementById("datebirth");
const cpf = document.getElementById("cpf");
/*const genero = document.getElementById("genero");
const origem = document.getElementById("origem");
const tipoendereco = document.getElementById("tipoendereco");*/
const cep = document.getElementById("cep");
const estado = document.getElementById("estado");
const bairro = document.getElementById("bairro");
const rua = document.getElementById("rua");
const numero = document.getElementById("numero");
const cidade = document.getElementById("cidade");
const telefone = document.getElementById("telefone");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function limpa_formulário_cep() {
  //Limpa valores do formulário de cep.
  document.getElementById("rua").value = "";
  document.getElementById("bairro").value = "";
  document.getElementById("cidade").value = "";
  document.getElementById("estado").value = "";
}

function meu_callback(conteudo) {
  if (!("erro" in conteudo)) {
    //Atualiza os campos com os valores.
    document.getElementById("rua").value = conteudo.logradouro;
    document.getElementById("bairro").value = conteudo.bairro;
    document.getElementById("cidade").value = conteudo.localidade;
    document.getElementById("estado").value = conteudo.uf;
  } //end if.
  else {
    //CEP não Encontrado.
    limpa_formulário_cep();
    alert("CEP não encontrado.");
  }
}

function pesquisacep(valor) {
  //Nova variável "cep" somente com dígitos.
  var cep = valor.replace(/\D/g, "");

  //Verifica se campo cep possui valor informado.
  if (cep != "") {
    //Expressão regular para validar o CEP.
    var validacep = /^[0-9]{8}$/;

    //Valida o formato do CEP.
    if (validacep.test(cep)) {
      //Preenche os campos com "..." enquanto consulta webservice.
      document.getElementById("rua").value = "...";
      document.getElementById("bairro").value = "...";
      document.getElementById("cidade").value = "...";
      document.getElementById("estado").value = "...";

      //Cria um elemento javascript.
      var script = document.createElement("script");

      //Sincroniza com o callback.
      script.src =
        "https://viacep.com.br/ws/" + cep + "/json/?callback=meu_callback";

      //Insere script no documento e carrega o conteúdo.
      document.body.appendChild(script);
    } //end if.
    else {
      //cep é inválido.
      limpa_formulário_cep();
      alert("Formato de CEP inválido.");
    }
  } //end if.
  else {
    //cep sem valor, limpa formulário.
    limpa_formulário_cep();
  }
}

function checkInputs() {
  const usernameValue = username.value;
  const emailValue = email.value;
  const passwordValue = password.value;
  const passwordConfirmationValue = passwordConfirmation.value;
  const datebirthValue = datebirth.value;
  const cpfValue = cpf.value;
  /*const generoValue = genero.value;
  const origemValue = origem.value;
  const tipoenderecoValue = tipoendereco.value;*/
  const cepValue = cep.value;
  const estadoValue = estado.value;
  const bairroValue = bairro.value;
  const ruaValue = rua.value;
  const numeroValue = numero.value;
  const cidadeValue = cidade.value;
  const telefoneValue = telefone.value;

  if (usernameValue === "") {
    setErrorFor(username, "O nome é obrigatório.");
  } else {
    setSuccessFor(username);
  }

  if (emailValue === "") {
    setErrorFor(email, "O e-mail é obrigatório.");
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, "Por favor, insira um email válido.");
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === "") {
    setErrorFor(password, "A senha é obrigatória.");
  } else if (passwordValue.length < 7) {
    setErrorFor(password, "A senha precisa ter no mínimo 7 caracteres.");
  } else {
    setSuccessFor(password);
  }

  if (passwordConfirmationValue === "") {
    setErrorFor(passwordConfirmation, "A confirmação de senha é obrigatória.");
  } else if (passwordConfirmationValue !== passwordValue) {
    setErrorFor(passwordConfirmation, "As senhas não conferem.");
  } else {
    setSuccessFor(passwordConfirmation);
  }

  if (datebirthValue === "") {
    setErrorFor(datebirth, "A data de nascimento é obrigatória.");
  } else {
    setSuccessFor(datebirth);
  }

  if (cpfValue === "") {
    setErrorFor(cpf, "O CPF/CNPJ é obrigatório.");
  } else {
    setSuccessFor(cpf);
  }

  /*if (generoValue === "") {
    setErrorFor(genero, "O gênero é obrigatório.");
  } else {
    setSuccessFor(genero);
  }

  if (origemValue === "") {
    setErrorFor(origem, "O nome é obrigatório.");
  } else {
    setSuccessFor(origem);
  }

  if (tipoenderecoValue === "") {
    setErrorFor(tipoendereco, "O nome é obrigatório.");
  } else {
    setSuccessFor(tipoendereco);
  }*/

  if (cepValue === "") {
    setErrorFor(cep, "O nome é obrigatório.");
  } else {
    setSuccessFor(cep);
  }

  if (estadoValue === "") {
    setErrorFor(estado, "O nome é obrigatório.");
  } else {
    setSuccessFor(estado);
  }

  if (bairroValue === "") {
    setErrorFor(bairro, "O nome é obrigatório.");
  } else {
    setSuccessFor(bairro);
  }

  if (ruaValue === "") {
    setErrorFor(rua, "O nome é obrigatório.");
  } else {
    setSuccessFor(rua);
  }

  if (numeroValue === "") {
    setErrorFor(numero, "O nome é obrigatório.");
  } else {
    setSuccessFor(numero);
  }

  if (cidadeValue === "") {
    setErrorFor(cidade, "O nome é obrigatório.");
  } else {
    setSuccessFor(cidade);
  }

  if (telefoneValue === "") {
    setErrorFor(telefone, "O nome é obrigatório.");
  } else {
    setSuccessFor(telefone);
  }

  const formControls = form.querySelectorAll(".form-control");

  const formIsValid = [...formControls].every((formControl) => {
    return formControl.className === "form-control success";
  });

  if (formIsValid) {
    console.log("O formulário está 100% válido!");
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  // Adiciona a mensagem de erro
  small.innerText = message;

  // Adiciona a classe de erro
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;

  // Adicionar a classe de sucesso
  formControl.className = "form-control success";
}

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

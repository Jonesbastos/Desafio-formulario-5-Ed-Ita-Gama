let cep = document.querySelector('#cep');
let rua = document.querySelector('#rua');
let bairro = document.querySelector('#bairro');
let cidade = document.querySelector('#cidade');
let estado = document.querySelector('#estado');


cep.value = '';
//comandos para busca da validação dos numeros do Cep
cep.addEventListener('blur', function(e) {
    let cep = e.target.value;
    let script = document.createElement('script');
    script.src = 'https://viacep.com.br/ws/'+cep+'/json/?callback=popularForm';
    document.body.appendChild(script);
});

//Comandos a onde ele informa se o não foi encontrado e preenchimento se correto
function popularForm(resposta) {

    if("erro" in resposta) {
        alert('CEP não encontrado');
        return;
    }

    rua.value = resposta.logradouro;
    bairro.value = resposta.bairro;
    cidade.value = resposta.localidade;
    estado.value = resposta.uf;

}
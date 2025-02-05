// <========================================> SELETORES =================================================>
const form          = document.querySelector('#multiplication-form');
const numberinput   = document.querySelector('#number');
const multiplicator = document.querySelector('#multiplicador');

// <========================================= FUNÇÕES =================================================>
// ALERTA DE ERRO
const sweetAlert = (descricao) => {
    Swal.fire({
        icon: 'error',
        title: `${descricao}`,
        // text: 'Verifique os campos preenchidos',
        confirmButtonText: 'Fechar'})};
// ALERTA DE SUCESSO
const sweetAlertSucess = (descricao) => {
    Swal.fire({
        icon: 'success',
        title: `${descricao}`,
        // text: 'Verifique os campos preenchidos',
        confirmButtonText: 'Fechar'})
};

// FUNÇÃO DE MULTIPLICAÇÃO
const multiplicar = (number, multiplicador) => {
    for(let x = 1; multiplicador >= x; x++){
        console.log(`${number} x ${x} = ${number*x}`);
    }
}

// <======================================== EVENTOS =================================================>
form.addEventListener('submit', (e) =>{
    e.preventDefault();
    const inputN = + numberinput.value;
    const inputM = + multiplicator.value;

    if(!inputN || !inputM){
        sweetAlert("Campos obrigatórios");
        return;
    } else{
        multiplicar(inputN, inputM);
    }
}
)
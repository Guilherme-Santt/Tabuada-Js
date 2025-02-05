// <========================================> SELETORES =================================================>
const form            = document.querySelector('#multiplication-form');
const numberinput     = document.querySelector('#number');
const multiplicator   = document.querySelector('#multiplicador');
const multioperations = document.querySelector('#multiplcation-operations');

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
    multioperations.innerHTML = "";
    for(let x = 1; multiplicador >= x; x++){
        const result = number*x;
        
        const template = 
        `<div class="row">
            <div class="operation">${number} x ${x} = </div>
            <div class="result"> ${result}</div>
        </div>
        `
        const parser       = new DOMParser()
        const HtmlTemplate = parser.parseFromString(template, "text/html");
        const row          = HtmlTemplate.querySelector(".row");
        multioperations.appendChild(row);


        console.log(`${number} x ${x} = ${result}`);
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
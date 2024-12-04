let trilho = document.getElementById('trilho');
let body = document.querySelector('body');
let header = document.querySelector('header');
let footer = document.querySelector('footer');
let button = document.querySelector('button');
let somos = document.querySelector('.somos');

// Função para ativar o modo escuro
const enableDarkMode = () => {
    trilho.classList.add('dark');
    body.classList.add('dark');
    if (header) header.classList.add('dark');
    if (footer) footer.classList.add('dark');
    if (button) button.classList.add('dark');
    if (somos) somos.classList.add('dark'); 
    localStorage.setItem('darkMode', 'enabled'); 
}

// Função para desativar o modo escuro
const disableDarkMode = () => {
    trilho.classList.remove('dark');
    body.classList.remove('dark');
    if (header) header.classList.remove('dark');
    if (footer) footer.classList.remove('dark');
    if (button) button.classList.remove('dark');
    if (somos) somos.classList.remove('dark'); 
    localStorage.setItem('darkMode', 'disabled'); 
}

// Verifica se o modo escuro ja ta ativo no localStorage
if (localStorage.getItem('darkMode') === 'enabled') {
    enableDarkMode(); 
} else {
    disableDarkMode(); 
}

// Alterna o modo escuro/claro ao clicar no botao de joadson
trilho.addEventListener('click', () => {
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'enabled') {
        disableDarkMode(); 
    } else {
        enableDarkMode(); 
    }
});

//esse e o localstorage. NAO MEXA//

// Aguarda o carregamento completo do DOM
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("consul-agendar");
    const patientNameInput = document.getElementById("textNomeP");
    const doctorNameInput = document.getElementById("textNomeD");
    const birthDateInput = document.getElementById("dtpDataNascimento");
    const descriptionInput = document.getElementById("des_consul");

    // Função para carregar os dados salvos no localStorage
    const loadSavedData = () => {
        const savedData = JSON.parse(localStorage.getItem("appointmentData")) || {};
        if (savedData) {
            patientNameInput.value = savedData.patientName || "";
            doctorNameInput.value = savedData.doctorName || "";
            birthDateInput.value = savedData.birthDate || "";
            descriptionInput.value = savedData.description || "";
        }
    };

    // Função para salvar os dados no localStorage
    const saveDataToLocalStorage = () => {
        const appointmentData = {
            patientName: patientNameInput.value,
            doctorName: doctorNameInput.value,
            birthDate: birthDateInput.value,
            description: descriptionInput.value
        };
        localStorage.setItem("appointmentData", JSON.stringify(appointmentData));
    };

    // Evento de envio do formulário
    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Evita o comportamento padrão do formulário
        saveDataToLocalStorage();
        alert("Consulta agendada com sucesso e dados salvos!");
        form.reset(); // Limpa os campos do formulário após salvar
    });

    // Carregar os dados ao iniciar a página
    loadSavedData();
});

// Lista de médicos da página "Médicos"
document.addEventListener("DOMContentLoaded", () => {
    const medicos = [
        "Dr. Diogo Sossai Pires",
        "Dra. Angelina Ernesto D. Souza",
        "Dra. Emília Colares",
        "Dr. Gabriel Pereira Dantas"
    ];

    // Salva a lista de médicos no localStorage
    localStorage.setItem("medicos", JSON.stringify(medicos));
});

document.addEventListener("DOMContentLoaded", () => {
    const selectNomeD = document.getElementById("selectNomeD");

    // Carrega a lista de médicos do localStorage
    const medicos = JSON.parse(localStorage.getItem("medicos")) || [];

    // Adiciona cada médico como uma opção no dropdown
    medicos.forEach((medico) => {
        const option = document.createElement("option");
        option.value = medico;
        option.textContent = medico;
        selectNomeD.appendChild(option);
    });
});

document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio padrão para processar manualmente
    alert("Formulário enviado com sucesso!");
  });

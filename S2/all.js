// HOME
document.addEventListener("DOMContentLoaded", () => {
    const buttonYes = document.querySelector("#firstButton");
    const dialog = document.querySelector("dialog");

    buttonYes.addEventListener("click", () => {
        dialog.showModal(); // Exibe a dialog como modal
    });

    // Fechar o diálogo ao clicar fora dele
    dialog.addEventListener("click", (event) => {
        if (event.target === dialog) {
            dialog.close();
        }
    });
});


// SURPRISE

const images = document.querySelectorAll('.foto img');
let index = 0;

function changeImage() {
    images[index].classList.remove('active');
    index = (index + 1) % images.length;
    images[index].classList.add('active');
}

setInterval(changeImage, 3000);

function updateTimer() {
    const startDate = new Date("2023-06-01T12:00:00"); // Data de início
    const now = new Date(); // Data atual

    // Cálculo de anos
    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    if (months < 0) {
        years--;
        months += 12;
    }

    // Cálculo de dias
    const daysInMonth = new Date(now.getFullYear(), now.getMonth(), 0).getDate(); // Total de dias no mês atual
    let days = now.getDate() - startDate.getDate();
    if (days < 0) {
        months--;
        days += daysInMonth;
    }

    // Cálculo de horas, minutos e segundos
    let hours = now.getHours() - startDate.getHours();
    if (hours < 0) {
        hours += 24;
    }

    let minutes = now.getMinutes() - startDate.getMinutes();
    if (minutes < 0) {
        minutes += 60;
        hours--;
    }

    let seconds = now.getSeconds() - startDate.getSeconds();
    if (seconds < 0) {
        seconds += 60;
        minutes--;
    }

    // Corrigir mês e dias se necessário
    if (months < 0) {
        months = 11;
        years--;
    }

    document.getElementById("timer").innerHTML = 
        `${years} anos, ${months} meses, ${days} dias, ${hours} horas,<br> ${minutes} minutos, ${seconds} segundos`;
}

setInterval(updateTimer, 1000);
updateTimer(); // Chama imediatamente para evitar espera de 1 segundo

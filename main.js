const form = document.getElementById('timeForm');
const timesList = document.getElementById('timesList');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const nomeInput = document.getElementById('nome');
    const idadeInput = document.getElementById('idade');
    const coresInput = document.getElementById('cores');
    const numTitulosInput = document.getElementById('numTitulos');

    const nome = nomeInput.value;
    const idade = idadeInput.value;
    const cores = coresInput.value;
    const numTitulos = numTitulosInput.value;

    try {
        const response = await fetch('/timesBR', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nome, idade, cores, numTitulos })
        });

        if (!response.ok) {
            throw new Error('Erro ao adicionar time');
        }

    } catch (error) {
        console.error('Erro ao adicionar time:', error);
    }
});
/*
async function fetchTimes() {
    try {
        const response = await fetch('/timesBR');

        if (!response.ok) {
            throw new Error('Erro ao buscar times');
        }

        const times = await response.json();
        console.log(times)

    } catch (error) {
        console.error('Erro ao buscar times:', error);
    }
}

fetchTimes();
*/
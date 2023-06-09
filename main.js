const form = document.getElementById('timeForm')

form.addEventListener('submit', async (event) => {
    event.preventDefault()

    const nomeInput = document.getElementById('nome')
    const idadeInput = document.getElementById('idade')
    const coresInput = document.getElementById('cores')
    const numTitulosInput = document.getElementById('numTitulos')

    const nome = nomeInput.value
    const idade = idadeInput.value
    const cores = coresInput.value
    const numTitulos = numTitulosInput.value

    try {
        const response = await fetch('/timesBR', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nome, idade, cores, numTitulos })
        })
    } catch (error) {
        console.error(error)
    }
});

const listaTimes = document.getElementById('listaTimes')

document.getElementById('btnlistTimes').addEventListener('click', async() => {
    try {
        const response = await fetch('/timesBR')
        const times = await response.json()
        const jsonToStr = JSON.stringify(times, null, 1)
        listaTimes.innerHTML = `<pre>${jsonToStr}</pre>`
    } catch (error) {
        console.error(error)
    }
})

const inputTarefa = document.querySelector('.input-nova-tarefa')
const btnTarefa = document.querySelector('.btn-add-tarefa')
const tarefas = document.querySelector('.tarefas')

const criaLi = () => {
  const li = document.createElement('li')
  return li
}

inputTarefa.addEventListener('keypress', (e) => {
  if (e.keyCode === 13) {
    if (!inputTarefa.value) return
    criaTarefa(inputTarefa.value)
  }
})

const limpaInput = () => {
  inputTarefa.value = ''
  inputTarefa.focus()
}

const criaBotaoApagar = (li) => {
  li.innerText += ' '
  const botaoApagar = document.createElement('button')
  botaoApagar.innerText = 'Apagar'
  botaoApagar.setAttribute('class', 'apagar')
  li.appendChild(botaoApagar)
}

const criaTarefa = (textoInput) => {
  const li = criaLi()
  li.innerText = textoInput
  tarefas.appendChild(li)
  limpaInput()
  criaBotaoApagar(li)
  salvarTarefas()
}

btnTarefa.addEventListener('click', () => {
  if (!inputTarefa.value) return
  criaTarefa(inputTarefa.value)
})

document.addEventListener('click', (e) => {
  const el = e.target

  if (el.classList.contains('apagar')) {
    el.parentElement.remove()
    salvarTarefas()
  }
})

const salvarTarefas = () => {
  const liTarefas = tarefas.querySelectorAll('li')
  const listaDeTarefas = [];

  for (const tarefa of liTarefas) {
    let tarefaTexto = tarefa.innerText
    tarefaTexto = tarefaTexto.replace('Apagar', '').trim()
    listaDeTarefas.push(tarefaTexto)
  }

  const tarefasJSON = JSON.stringify(listaDeTarefas)
  localStorage.setItem('tarefas', tarefasJSON)
}

const adicionarTarefasSalvas = () => {
  const tarefas = localStorage.getItem('tarefas')
  const listaDeTarefas = JSON.parse(tarefas)
  
  for (let tarefas of listaDeTarefas) {
    criaTarefa(tarefas)
  }
}
adicionarTarefasSalvas()

function todoUserInterface() {
  function showTodoItem(newId, newDescription) {
    let listTodo = document.getElementById('listTodo')

    let todoItem = document.createElement('div')
    todoItem.setAttribute('class', 'todoItem')
    todoItem.setAttribute('id', newId)

    let pTag = document.createElement('p')
    pTag.textContent = newDescription

    let setDoneButton = document.createElement('button')
    setDoneButton.textContent = 'Not Done'

    let removeButton = document.createElement('button')
    removeButton.textContent = 'remove'

    todoItem.appendChild(pTag)
    todoItem.appendChild(setDoneButton)
    todoItem.appendChild(removeButton)

    listTodo.appendChild(todoItem)
  }
  function showNumberOfDone(numberOfDone) {
    let done = document.getElementById('done')
    done.textContent = 'Number of Done:' + numberOfDone
  }
  function showNumberOfNotDone(numberOfNotDone) {
    let notdone = document.getElementById('notDone')
    notdone.textContent = 'Number of Not Done:' + numberOfNotDone
  }
  return { showTodoItem, showNumberOfDone, showNumberOfNotDone }
}
// module.exports = todoUserInterface
export  { todoUserInterface }

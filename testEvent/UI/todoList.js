function todoUserInterface() {
  // const todosDiv = document.getElementById('todos')

  function showTodoItem(newId, newDescription) {
    const listTodoDiv = document.getElementById('listTodo')
    //create new <div>
    const newTodoDiv = document.createElement('div')
    newTodoDiv.className = 'todoItem'
    newTodoDiv.setAttribute('id', newId)
    //create new <p>
    const newTodoItem = document.createElement('p')
    // newTodoItem.innerText = newDescription
    newTodoItem.textContent = newDescription
    newTodoDiv.appendChild(newTodoItem)

    //create done button
    const doneButton = document.createElement('button')
    // doneButton.innerText = 'Not Done'
    doneButton.textContent = 'Not Done'
    newTodoDiv.appendChild(doneButton)

    //create remove button
    const removeButton = document.createElement('button')
    // removeButton.innerText = 'remove'
    removeButton.textContent = 'remove'
    newTodoDiv.appendChild(removeButton)

    listTodoDiv.appendChild(newTodoDiv)
  }
  function showNumberOfDone(numberOfDone) {
    const doneP = document.getElementById('done')
    doneP.textContent = `Number of Done:${numberOfDone}`
  }
  function showNumberOfNotDone(numberOfNotDone) {
    const notDoneP = document.getElementById('notDone')
    notDoneP.textContent = `Number of Not Done:${numberOfNotDone}`
  }
  function removeTodoItem(removeId) {
    let removeDiv = document.getElementById(removeId)
    removeDiv.remove()
  }
  return { showTodoItem, showNumberOfDone, showNumberOfNotDone, removeTodoItem }
}
export { todoUserInterface }
// module.exports = todoUserInterface

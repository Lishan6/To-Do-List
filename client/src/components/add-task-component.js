import { dom } from "../dom.js";
export function addListItem (){
const listItem=document.createElement('li');
const taskDiv = document.createElement('div');
const checkbox= document.createElement('input');
checkbox.type = 'checkbox';
const taskName = document.createElement('span')
taskName.innerText = dom.input.value;
const deleteButton = document.createElement('button');
//add a the necessary classes and icons to the buttons
taskDiv.classList.add('task-info');
deleteButton.classList.add('delete');
 deleteButton.innerHTML = '<i class="fas fa-trash"></i>'



//append method is necessary to the li and ul

listItem.appendChild(taskDiv);
listItem.appendChild(deleteButton);
taskDiv.appendChild(checkbox);
taskDiv.appendChild(taskName);

return listItem;
}

//clear the input field after adding the new task


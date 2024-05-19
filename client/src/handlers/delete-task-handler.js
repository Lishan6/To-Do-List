import{ state } from './data/state.js';


//check the delete button was clicked
if(clickedEle.classList[1]==='fa-trash'){
  const task = clickedEle.parentElement.parentElement;
 
  task.remove();
}
listItem.appendChild(deleteButton);
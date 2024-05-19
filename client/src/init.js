import { dom } from "./dom.js";
import { addListItem  } from "./components/add-task-component.js";



function addTask(event){   //function add new task
event.preventDefault(); //to prevent the page from reloading on form submission
const inputValue=dom.input.value; //get the value of the input field
console.log(inputValue);
//create the necessary elements for the new task
if(inputValue === ''){
  alert('pleas add task name')
  

}else {
  // const listItem=document.createElement('li');
  // const taskDiv = document.createElement('div');
  // const checkbox= document.createElement('input');
  // checkbox.type = 'checkbox';
  // const taskName = document.createElement('span')
  // taskName.innerText = inputValue;
  // const deleteButton = document.createElement('button');
  // //add a the necessary classes and icons to the buttons
  // taskDiv.classList.add('task-info');
  // deleteButton.classList.add('delete');
  //  deleteButton.innerHTML = '<i class="fas fa-trash"></i>'
  
  
 
  // //append method is necessary to the li and ul
  // taskList.appendChild(listItem);
  // listItem.appendChild(taskDiv);
  // listItem.appendChild(deleteButton);
  // taskDiv.appendChild(checkbox);
  // taskDiv.appendChild(taskName);
 const listItem=addListItem()
   dom.taskList.appendChild(listItem);
  // //clear the input field after adding the new task
  
  
   dom.input.value = '';
}

}

//function to modify a task
function taskModify(event){
  const clickedEle = event.target;
  console.log (clickedEle);
  

  //check the delete button was clicked
  if(clickedEle.classList[1]==='fa-trash'){
    const task = clickedEle.parentElement.parentElement;
   
    task.remove();
  }

  // check if the text was clicked
  if(clickedEle.tagName.toLowerCase() === 'span'){
    const task = clickedEle.innerHTML;
    clickedEle.innerHTML = `<input class='edit-input' type='text' value='${task}'/>`;


    const editInput = clickedEle.querySelector('input');
    editInput.addEventListener('blur', ()=>{
      const newValue= editInput.value;
      clickedEle.innerHTML=newValue;
    });

  }

}



//event listeners to add a new task and edit and delete a task
dom.form.addEventListener('submit', addTask);
//event listeners to add a new task and edit, delet atask
dom.taskList.addEventListener('click', taskModify)
 
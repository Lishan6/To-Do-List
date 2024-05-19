import { addTaskHandler} from './handlers/and-task-handler.js';

export const addTaskList=() =>{
    const addInput=document.querySelector('#add-container > input');
    const addButton = document.querySelector('#add-container > button');



    addButton.addEventListener('click', (event)=>{
        addTaskHandler(event, addInput);
    })
}

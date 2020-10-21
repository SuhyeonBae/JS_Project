const items = document.querySelector('.items');
const input = document.querySelector('input');
const addBtn = document.querySelector('.btn__add');
const deleteBtn = document.querySelector('.btn__delete');

function onAdd(){
  const text = input.value;
  if(text === ''){
    input.focus();
    return;
  }
  const item = createItem(text);
  items.appendChild(item);
  item.scrollIntoView({behavior :'smooth', block :'center'});
  
  input.value='';
  input.focus();
}


function createItem(text){
  const itemRow = document.createElement('ul');
  itemRow.setAttribute('class', 'item__row');

  const item = document.createElement('li');
  item.setAttribute('class', 'item');

  const name = document.createElement('span');
  name.setAttribute('class', 'item__name');
  name.innerText = text;

  const deleteBtn = document.createElement('button');
  deleteBtn.setAttribute('class', 'btn__delete');
  deleteBtn.innerHTML='<i class="fas fa-minus-circle"></i>';
  deleteBtn.addEventListener('click', ()=>{
    items.removeChild(itemRow);
  })

  item.appendChild(name);
  item.appendChild(deleteBtn);

  itemRow.appendChild(item);

  return itemRow;

}

addBtn.addEventListener('click', ()=>{
  onAdd();
})

input.addEventListener('keypress', event => {
  if(event.key === 'Enter'){
    onAdd();
  }
})
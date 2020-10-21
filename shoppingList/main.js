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

let id = 0;   //　現場ではUUIDなどの固有IDを使う。
function createItem(text){
  const itemRow = document.createElement('ul');
  itemRow.setAttribute('class', 'item__row');
  itemRow.setAttribute('data-id', id);
  itemRow.innerHTML = `
  <li class="item">
    <span class="item__name">${text}</span>
      <button class="btn__delete">
        <i class="fas fa-minus-circle" data-id=${id}></i>
      </button>   
  </li>
  `;
  id++;
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

items.addEventListener('click', event => {
  const id = event.target.dataset.id;
  if(id){
    const toBeDeleted = document.querySelector(`.item__row[data-id="${id}"]`);
    toBeDeleted.remove();
    }
  });

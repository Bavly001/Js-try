const list = document.querySelector('#book-list');

list.addEventListener('click', function(e){
    if(e.target.className == 'delete'){
        const li = e.target.parentElement;
        list.removeChild(li)
    }
})

// add book list
const addForm = document.forms['add-book'];

addForm.addEventListener('submit', function(e){
    e.preventDefault();
    
    const text_box=addForm.querySelector('input[type="text"]');
    const value = addForm.querySelector('input[type="text"]').value;
    const text_err = addForm.querySelector('#error');
    addForm.querySelector('input[type="text"]').value='';

    //empty value
    if (value == ''){
        text_box.style.outline="1px solid red"
        text_err.style.display="block"
    }
    else{
        if(text_err.style.display="block"){
            text_box.style.outline="none";
            text_err.style.display="none";
        }
        //create element
        const li = document.createElement('li');
        const delBtn = document.createElement('button');

        //add content
        delBtn.textContent='delete';
        delBtn.className = 'delete';
        li.textContent=value;

        //append to document
        li.appendChild(delBtn);
        list.appendChild(li);
    }
})

//hide books
const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change',function(e){
    if (hideBox.checked){
        list.style.display = "none";
    }
    else{
        list.style.display = "block";
    }
})

const searchBar = document.querySelector('#search-books input');
searchBar.addEventListener('keyup',function(e){
    const term = e.target.value.toLowerCase();
    list.querySelectorAll('li').forEach(function(book){
        const title = book.textContent;
        if(title.toLowerCase().indexOf(term) != -1){
            book.style.display = "block";
        }
        else{
            book.style.display = "none";
        }
    })
})
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
    addForm.querySelector('input[type="text"]').value='';

    //empty value
    if (value == ''){
        text_box.style.outline="1px solid red"
        addForm.innerHTML += '<p id="error">Please, Add your book name</p>'
    }
    else{
        text_box.style.outline="none";
        const text_err = addForm.querySelector('#error');
        text_err.style.display = "none";
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
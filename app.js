const list = document.querySelector('#book-list');

list.addEventListener('click', function(e){
    if(e.target.className == 'delete'){
        const li = e.target.parentElement;
        list.removeChild(li)
    }
})

// var add_btn = document.querySelector('#add-book .add-btn');

// add_btn.addEventListener('click', function(e){

// })
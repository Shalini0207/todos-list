window.onload = function () {
    function getAndUpdate(){
    let tit = document.getElementById('input-title').value;
    let desc = document.getElementById('input-description').value;
    if(localStorage.getItem('ItemsJson')==null){
        itemsJsonArray = [];
        itemsJsonArray.push([tit, desc]);
        localStorage.setItem('ItemsJson', JSON.stringify(itemsJsonArray));
        console.log('updating');
    }
    else{
        itemsJsonArrayStr = localStorage.getItem('ItemsJson');
        itemsJsonArray= JSON.parse(itemsJsonArrayStr);
        itemsJsonArray.push([tit, desc]);
        localStorage.setItem('ItemsJson', JSON.stringify(itemsJsonArray));
    }
    update();
}

function update(){
    if(localStorage.getItem('ItemsJson')==null){
        itemsJsonArray = [];
        localStorage.setItem('ItemsJson', JSON.stringify(itemsJsonArray));
    }
    else{
        itemsJsonArrayStr = localStorage.getItem('ItemsJson');
        itemsJsonArray = JSON.parse(itemsJsonArrayStr);
    }

    // populating the table
    let tablebody = document.getElementById('table-body');
    let str = "";
    itemsJsonArray.forEach((element, index) => {
        str= `
        <tr>
            <td>${index + 1}</td>
            <td>${element[0]}</td>
            <td>${element[1]}</td>
            <td><button class="btn btn-primary btn-sm" id="delete-item">Delete</button></td>
        </tr>
        `
    });
    tablebody.innerHTML+= str;
}

buttonadd = document.getElementById('add-item');
buttonadd.addEventListener('click', getAndUpdate());
update();
}



// let delitem = document.getElementById('delete-item');
// delitem.addEventListener('click', ()=>{})
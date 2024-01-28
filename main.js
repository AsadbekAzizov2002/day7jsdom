const list =document.querySelector("#list");

fetch("https://jsonplaceholder.typicode.com/photos/")
.then((res)=>{
    return res.json();
}).then((data)=>{
    data.map(item=>{

        const listItem = document.createElement("li");
        listItem.textContent=item.title

        list.appendChild(listItem);
    })
})
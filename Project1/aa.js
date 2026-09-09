let task=JSON.parse(localStorage.getItem("task"))||[]
let btn=document.getElementById("submit")
let tasklist=document.getElementById("list")

function addtask(){
    let name=document.getElementById("name").value
    let date=document.getElementById("date").value
    let taskobj={
        id:Date.now(),
        name,
        date,
    }
    if(!name || !date) return;
    task.push(taskobj)
}
function display (){
    tasklist.innerHTML=""
    task.forEach (element=>{
let st=document.createElement("li")
st.classList.add("el")
st.id=element.id
st.innerHTML=`${element.name} ${element.date} <button>Delete</button> <button onclick="check(${element.id})">Check</button>`
tasklist.appendChild(st)
    })
}
btn.addEventListener("click",(e)=>{
    e.preventDefault()
    addtask()
    display()
    save()
})

function save(){
    localStorage.setItem("task",JSON.stringify(task))
}

function check(id){
    let item=task.find(element=>element.id===id)
    if(item){
        console.log("checked","item is =",item)
    }
    let el=document.querySelectorAll("el")
    console.log(el)
        el.forEach(i=>{
            if(i.id==item.id){
                i.classlist.toggle("check")
            }
        })
}
display()
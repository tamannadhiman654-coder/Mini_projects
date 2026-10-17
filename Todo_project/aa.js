let task = JSON.parse(localStorage.getItem("task")) || []
let btn = document.getElementById("submit")
let tasklist = document.getElementById("list")

function addtask() {
    let name = document.getElementById("name").value
    let date = document.getElementById("date").value
    let taskobj = {
        id: Date.now(),
        name,
        date,
    }
    if (!name || !date) return;
    task.push(taskobj)
}
function display() {
    tasklist.innerHTML = ""
    task.forEach(element => {
        let st = document.createElement("li")
        st.classList.add("el")
        st.id = element.id
        st.innerHTML = `${element.name} ${element.date} <button onclick="deleteTask(${element.id})">Delete</button> <button onclick="check(${element.id})">Check</button>`
        tasklist.appendChild(st)
    })
}
btn.addEventListener("click", (e) => {
    e.preventDefault()
    addtask()
    display()
    save()

})

function save() {
    localStorage.setItem("task", JSON.stringify(task))
}

function check(id) {
    let item = task.find(element => element.id === id)

    let el = document.querySelectorAll(".el")
    el.forEach(i => {
        if (i.id == item.id) {
            i.classList.toggle("check")
        }
    })
    save()

}
const deleteTask = (id)=>{
    task = task.filter(el=>{
        return el.id != id
    })
    display()
    save()
}
display()
// let arr = [0, 1, 0, 13, 5]
// let arr2 = []
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] != 0) {
//         arr2.push(arr[i])

//     }
// }
// let a = arr.length - arr2.length
// for (let i = 0; i < a; i++) {
//     arr2.push(0)
// }
// console.log(arr2)

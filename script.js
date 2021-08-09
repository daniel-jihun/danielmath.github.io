import { data } from "./data.js";
const select = document.querySelectorAll("select")[0]
for (let i = 0; i < data.length; i++) {
    const obj = data[i]
    const option = document.createElement("option")
    option.innerText = obj.name
    option.className = "optionElements"
    option.id = i
   select.appendChild(option)
}

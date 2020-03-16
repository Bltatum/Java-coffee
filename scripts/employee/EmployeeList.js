import { useEmployee } from "./employeeDataProvider.js";
import { employeeHTML } from "./Employee.js";



const contentElement = document.querySelector(".employees__container")

export const employeeList = () =>{
    const employeeObjectArray = useEmployee()

    for (const employeeObject of employeeObjectArray) {
       const employeeHTMLrep = employeeHTML(employeeObject)
       contentElement.innerHTML += employeeHTMLrep 
    }
} 
import { contactList } from "./contact/ContactList.js";
import { buisinessName } from "./BusinessName.js";
import { yearEstablished } from "./YearEstablished.js";

const contentTarget = document.querySelector("#java__footer")

export const footer = () =>{
    return `
    ${yearEstablished()}
    ${buisinessName()}
    ${contactList()}
`
}

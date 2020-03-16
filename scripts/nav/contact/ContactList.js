import { useContactInfo } from "./contactDataProvider.js";
import { contactHTML } from "./Contact.js";

const contentElement = document.querySelector(".footer")

export const contactList = () => {
    const contactObjectArray = useContactInfo()
    for (const contactObject of contactObjectArray) {
        const contactHTMLrep = contactHTML(contactObject)
        contentElement.innerHTML += contactHTMLrep
        
    }
}

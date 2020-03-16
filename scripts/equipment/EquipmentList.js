import { useEquipment } from "./equipmentDataProvider.js";
import { equipmetHTML } from "./Equipment.js";

const contentElement = document.querySelector(".equipment__container")

export const equipmentList = () =>{
    const equipmentObjectArray = useEquipment()
    for (const equipmentObject of equipmentObjectArray) {
        const equipmentHTMLrep = equipmetHTML(equipmentObject)
        contentElement.innerHTML += equipmentHTMLrep
    }
}
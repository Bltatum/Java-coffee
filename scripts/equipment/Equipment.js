export const equipmetHTML = (equipment) =>{
  return `
  <div>
     <h3>${equipment.model}</h3>
    <ul>
        <li>ID: ${equipment.id}</li>
        <li>Serial Number: ${equipment.serialNumber}</li>
        <li>Functional: ${equipment.isFunctional ? "Yes" : "No"}</li>
        <li>Warranty: ${equipment.isUnderWarranty ? "Yes" : "No"}</li>
    </ul>
</div>
  `
}
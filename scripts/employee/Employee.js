export const employeeHTML = (employee) =>{
    return `
  
    <div class="employee">
         <h3>${employee.firstName} ${employee.lastName}</h3>
        <ul>
            <li>Employee ID: ${employee.id}</li>
            <li>Job Title: ${employee.jobTitle}</li>
            <li>Hours Scheduled: ${employee.hoursScheduled}</li>
        </ul>
    </div>

    `
}
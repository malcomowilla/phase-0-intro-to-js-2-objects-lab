// Write your solution in this file!
// function updateEmployeeWithKeyAndValue(){
//     return(...employee.["name"]: "sam, ["streetAddress"]:
// }
// function destructivelyUpdateEmployeeWithKeyAndValue(){
//     employee.name = "Sam",
//     employee.streetAddress = "12 Broadway."
//     return employee;
// }
// function deleteFromEmployeeByKey(){
//     const newEmployee = {...employee};
//     delete newEmployee.name;
//     return newEmployee;
// }
// deleteFromEmployeeByKey();

// function destructivelyDeleteFromEmployeeByKey(employee, key){
//     delete employee.name
//     return employee;
// }

const employee = {}

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newObj = {...obj};
    newObj[key] = value;
    return newObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee
}
 
    
function deleteFromEmployeeByKey(employee,key ) {
    const cloneEmployee = {...employee};
    delete cloneEmployee[key]
    return cloneEmployee

}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}
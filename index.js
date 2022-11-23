// Write your solution in this file!
function updateEmployeeWithKeyAndValue(){
    return(...employee.["name"]: "sam, ["streetAddress"]:
}
function destructivelyUpdateEmployeeWithKeyAndValue(){
    employee.name = "Sam",
    employee.streetAddress = "12 Broadway."
    return employee;
}
function deleteFromEmployeeByKey(){
    const newEmployee = {...employee};
    delete newEmployee.name;
    return newEmployee;
}
deleteFromEmployeeByKey();

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee.name
    return employee;
}
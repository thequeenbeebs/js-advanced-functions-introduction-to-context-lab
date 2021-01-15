function createEmployeeRecord(array) {
    let newEmployee = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return newEmployee
}

function createEmployeeRecords(arrayOfArrays) {
    return arrayOfArrays.map(array => createEmployeeRecord(array))
}

function createTimeInEvent(employeeRecord, dateTime) {
    let timeIn = {
        type: "TimeIn",
        date: dateTime.split(" ")[0],
        hour: +dateTime.split(" ")[1]
    }
    employeeRecord.timeInEvents.push(timeIn)
    return employeeRecord
}

function createTimeOutEvent(employeeRecord, dateTime) {
    let timeOut = {
        type: "TimeOut",
        date: dateTime.split(" ")[0],
        hour: +dateTime.split(" ")[1]
    }
    employeeRecord.timeOutEvents.push(timeOut)
    return employeeRecord
}

function hoursWorkedOnDate(employeeRecord, date) {
    let startTime = employeeRecord.timeInEvents.find(timeIn => timeIn.date === date)
    let endTime = employeeRecord.timeOutEvents.find(timeOut => timeOut.date === date)
    return (endTime.hour - startTime.hour) / 100
}

function wagesEarnedOnDate(employeeRecord, date) {
    let hours = hoursWorkedOnDate(employeeRecord, date)
    return hours * employeeRecord.payPerHour
}
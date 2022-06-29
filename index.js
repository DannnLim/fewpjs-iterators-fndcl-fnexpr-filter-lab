// Code your solution here
drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, string) {
    return drivers.filter(Drive => Drive.toLowerCase() === string.toLowerCase())
}

// console.log(Drive)

function fuzzyMatch(drivers, string) {
    return drivers.filter(Drive => Drive.slice(0, string.length) === string);
}

console.log(fuzzyMatch())

function matchName(driver, string) {
    return driver.filter(Drive => Drive.name === string);
}
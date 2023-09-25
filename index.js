function findMatching(drivers, driver) {
    return drivers.filter(
        (driverName) => driverName.toLowerCase() == driver.toLowerCase()
    );
}

function fuzzyMatch(drivers, driver) {
    return drivers.filter((driverName) => 
    driverName.toLowerCase().startsWith(driver.toLowerCase())
    );
}

function matchName(drivers, driver) {
    return drivers.filter(
        (driverElement) => driverElement.name.toLowerCase() == driver.toLowerCase()
    );
}

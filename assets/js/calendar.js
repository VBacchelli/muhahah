
document.addEventListener("DOMContentLoaded", () => {
    var today = new Date();
    var firstDay =  new Date('2024/12/01');

    today.setHours(0,0,0,0);
    firstDay.setHours(0,0,0,0);

    let difTime = firstDay.getTime() - today.getTime();

    let difDays = difTime  / (1000 * 3600 * 24); // different days between the dates

    // represent doors
    let doors = document.querySelector('.door');
    // array of doors
    let allDoors = [...doors];

    for (let i = 0; i < difDays; i++) {
        allDoors[i].style.background = "green";  
    }

    console.log(difDays);

});
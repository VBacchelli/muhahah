
document.addEventListener("DOMContentLoaded", () => {
    var today = new Date();
    var firstDay =  new Date('2024/12/01');

    today.setHours(0,0,0,0);
    firstDay.setHours(0,0,0,0);

    let difTime = firstDay.getTime() - today.getTime();

    let difDays = difTime  / (1000 * 3600 * 24); // different days between the dates

    // represent doors
    let doors = document.querySelectorAll('.day');

    let allDoors = [...doors];

    /*for (let i = 0; i < difDays; i++) {
        const input = allDoors[i].querySelector("input[type='checkbox']");
        input.disabled=true; 
    }*/
    doors.forEach((door, index) => {
        const input = door.querySelector("input[type='checkbox']");
        const doorDate = new Date(firstDay.getTime() + ((1000 * 3600 * 24) * index));
        // Enable doors from Dec 1 to today
        if (today>=doorDate) {
            input.disabled = false;
        } else {
            input.disabled = true;
            door.classList.add("disabled");
        }
    });

    console.log(difDays);

});

document.addEventListener("DOMContentLoaded", () => {
    var today = new Date();
    var firstDay =  new Date('2024/12/01');

    today.setHours(0,0,0,0);
    firstDay.setHours(0,0,0,0);

    // represent doors
    let doors = document.querySelectorAll('.day');

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
            door.classList.remove("disabled");
        } else {
            input.disabled = true;
            door.classList.add("disabled");
        }
    });

});

var show_msg = '';
if (show_msg !== '0') {
    var options = {view_src: "View Source is disabled!", inspect_elem: "Inspect Element is disabled!", right_click: "Right click is disabled!", copy_cut_paste_content: "Cut/Copy/Paste is disabled!", image_drop: "Image Drag-n-Drop is disabled!" }
} else {
    var options = '';
}

function nocontextmenu(e) { return false; }
document.oncontextmenu = nocontextmenu;
document.ondragstart = function() { return false;}

document.onmousedown = function (event) {
    event = (event || window.event);
    if (event.keyCode === 123) {
        if (show_msg !== '0') {show_toast('inspect_elem');}
        return false;
    }
}
document.onkeydown = function (event) {
    event = (event || window.event);
    //alert(event.keyCode);   return false;
    if (event.keyCode === 123 ||
            event.ctrlKey && event.shiftKey && event.keyCode === 73 ||
            event.ctrlKey && event.shiftKey && event.keyCode === 75) {
        if (show_msg !== '0') {show_toast('inspect_elem');}
        return false;
    }
    if (event.ctrlKey && event.keyCode === 85) {
        if (show_msg !== '0') {show_toast('view_src');}
        return false;
    }
}
function addMultiEventListener(element, eventNames, listener) {
    var events = eventNames.split(' ');
    for (var i = 0, iLen = events.length; i < iLen; i++) {
        element.addEventListener(events[i], function (e) {
            e.preventDefault();
            if (show_msg !== '0') {
                show_toast(listener);
            }
        });
    }
}
addMultiEventListener(document, 'contextmenu', 'right_click');
addMultiEventListener(document, 'cut copy paste print', 'copy_cut_paste_content');
addMultiEventListener(document, 'drag drop', 'image_drop');
function show_toast(text) {
    var x = document.getElementById("amm_drcfw_toast_msg");
    x.innerHTML = eval('options.' + text);
    x.className = "show";
    setTimeout(function () {
        x.className = x.className.replace("show", "")
    }, 3000);
}
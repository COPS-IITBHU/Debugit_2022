var time = new Date();
var hours = String(time.getHours()).padStart(2, '0');
var minutes = String(time.getMinutes()).padStart(2, '0');
var time_string = hours + ":" + minutes;
var item_addEvent_MyDay = [];
var item_addEvent_Weekend = [];
var mydaylist_index = 200;
// function mouseover(){
//     // document.getElementsByClassName("Home")[0].style.color = " red ";
// }
btn_Home();
function btn_Home() {
    if (time.getDay() == 5 || time.getDay() == 6)
    {
        if (localStorage.getItem('Event_Weekend') == null || localStorage.getItem('Event_Weekend') == '[]')
        {
            document.getElementById("content").innerHTML = `
            <style>
            .Home{color: rgba(255, 50, 50, 1);}
            </style>
            <h1 class="WelcomePage specialcolor" style="text-align: center; margin-top: 100px;">
                Welcome! Start Schedulingit!😉
            </h1>
            `
        }
        else
        {
            console.log("Its Weekend!!!")
        document.getElementById("upcontent").innerHTML = `
            <h1 class="specialcolor" style = "text-align: center;  margin-bottom: 0px; margin-top: 35px;"><u>Hey it's a Weekend!!! Get started with:</u></h1>;
            `

        document.getElementById("content").innerHTML = ' ';
        document.getElementById("content").innerHTML += "<style>    .Home{color: rgba(255, 50, 50, 1);}</style>"

        // Fetch DATA from LOCAL STORAGE

        // var string = 

        // var name, starttime, endtime, desc;

        document.getElementById("content").innerHTML += `
            <h3 class="MyDay_List colon"><b><i>S.No.</i></b></h3>
            <h3 style = "background-color: rgba(255, 0, 0, 0.5)" class="MyDay_List"><b><i>Event</i></b></h3>
            <h3 class="MyDay_List colon">:</h3>
            <h3 style = "background-color: rgba(255, 0, 0, 0.5)" class="MyDay_List"><b><i>Description</i></b></h3>
            <h3 class="MyDay_List colon" >:</h3>
            <h3 style = "background-color: rgba(255, 0, 0, 0.5)" class="MyDay_List"><b><i>From</i></b></h3>
            <h3 class="MyDay_List colon">:</h3>
            <h3 style = "background-color: rgba(255, 0, 0, 0.5)" class="MyDay_List"><b><i>To</i></b></h3>
            <h3></h3>
            <style>
                #content{
                    width: 80%; margin: auto; margin-top: 40px; display: grid; grid-template-columns: repeat(9, 1fr); column-gap: 12px; background-color: rgba(255, 255, 255, 0.8); border: 3px solid red;
                    border-radius: 20px;
                    padding: 5px;;
                }
            </style>
            `

        item_addEvent_Weekend = JSON.parse(localStorage.getItem('Event_Weekend'));
        item_addEvent_Weekend.sort(compareSecondColumn);
        localStorage.setItem('Event_Weekend', JSON.stringify(item_addEvent_Weekend));

        function compareSecondColumn(a, b) {
            if (a[1] === b[1]) {
                return 0;
            }
            else {
                return (a[1] < b[1]) ? -1 : 1;
            }
        }
        item_addEvent_Weekend.forEach(function (element, index) {
            document.getElementById("content").innerHTML += `
                <h3 class="MyDay_List colon">${index + 1}.</h3>
                <h3 class="MyDay_List">${element[0]} </h3>
                <h3 class="MyDay_List colon">:</h3>
            <h3 class="MyDay_List"> ${element[3]} </h3> 
            <h3 class="MyDay_List colon">:</h3>
            <h3 class="MyDay_List"> ${element[1]}</h3> 
            <h3 class="MyDay_List colon">:</h3> 
            <h3 class="MyDay_List">${element[2]}</h3>
            <style> .content{ width: 50%} </style>
            <h3></h3>
            <script>
            mydaylist_index = index;
            document.getElementsByClassName("MyDay_list").style.text-decoration= "overline";
            console.log("hi");
                if (time_string>element[2])
                {
                }
                else
                {
                    console.log("Bye");
                }
            </script>
    
    
            `
        });
        document.getElementById("content").innerHTML += `
            <h3></h3>
            <h3></h3>
            <h3></h3>
            <h3></h3>
            <h3></h3>
            <h3></h3>
            <h3></h3>
            <h3></h3>
            <h3></h3>
            `

        }
    }
    else 
    {
        if (localStorage.getItem('Event_MyDay') == null || localStorage.getItem('Event_MyDay') == '[]') 
        {

            document.getElementById("content").innerHTML = `
            <style>
            .Home{color: rgba(255, 50, 50, 1);}
            </style>
            <h1 class="WelcomePage specialcolor" style="text-align: center; margin-top: 100px;">
                Welcome! Start Schedulingit!😉
            </h1>
            `
        }
        else if (time.getDay() == 0 || time.getDay() == 1 || time.getDay() == 2 || time.getDay() == 3 || time.getDay() == 4) {
            document.getElementById("upcontent").innerHTML = `
            <h1 class="specialcolor"  style = "text-align: center;  margin-bottom: 0px; margin-top: 35px;"><u> Hey it's not a Weekend:( Your Event List:</u></h1>;
            `

            document.getElementById("content").innerHTML = ' ';
            document.getElementById("content").innerHTML += "<style>    .Home{color: rgba(255, 50, 50, 1);}</style>"

            // Fetch DATA from LOCAL STORAGE

            // var string = 

            // var name, starttime, endtime, desc;

            document.getElementById("content").innerHTML += `
            <h3 class="MyDay_List colon"><b><i>S.No.</i></b></h3>
            <h3 style = "background-color: rgba(255, 0, 0, 0.5)" class="MyDay_List"><b><i>Event</i></b></h3>
            <h3 class="MyDay_List colon">:</h3>
            <h3 style = "background-color: rgba(255, 0, 0, 0.5)" class="MyDay_List"><b><i>Description</i></b></h3>
            <h3 class="MyDay_List colon" >:</h3>
            <h3 style = "background-color: rgba(255, 0, 0, 0.5)" class="MyDay_List"><b><i>From</i></b></h3>
            <h3 class="MyDay_List colon">:</h3>
            <h3 style = "background-color: rgba(255, 0, 0, 0.5)" class="MyDay_List"><b><i>To</i></b></h3>
            <h3></h3>
            <style>
            #content{
                width: 80%; margin: auto; margin-top: 40px; display: grid; grid-template-columns: repeat(9, 1fr); column-gap: 12px; background-color: rgba(255, 255, 255, 0.8); border: 3px solid red;
                border-radius: 20px;
                padding: 5px;;
            }
            </style>
            `

            item_addEvent_MyDay = JSON.parse(localStorage.getItem('Event_MyDay'));
            item_addEvent_MyDay.sort(compareSecondColumn);
            localStorage.setItem('Event_MyDay', JSON.stringify(item_addEvent_MyDay));

            function compareSecondColumn(a, b) {
                if (a[1] === b[1]) {
                    return 0;
                }
                else {
                    return (a[1] < b[1]) ? -1 : 1;
                }
            }
            item_addEvent_MyDay.forEach(function (element, index) {
                document.getElementById("content").innerHTML += `
            <h3 class="MyDay_List colon">${index + 1}.</h3>
            <h3 class="MyDay_List">${element[0]} </h3>
            <h3 class="MyDay_List colon">:</h3>
            <h3 class="MyDay_List"> ${element[3]} </h3> 
            <h3 class="MyDay_List colon">:</h3>
            <h3 class="MyDay_List"> ${element[1]}</h3> 
            <h3 class="MyDay_List colon">:</h3> 
            <h3 class="MyDay_List">${element[2]}</h3>
            <style> .content{ width: 50%} </style>
            <h3></h3>
            <script>
            mydaylist_index = index;
            document.getElementsByClassName("MyDay_list").style.text-decoration= "overline";
            console.log("hi");
            if (time_string>element[2])
            {
            }
            else
            {
                console.log("Bye");
            }
            </script>


            `
            });
            document.getElementById("content").innerHTML += `
            <h3></h3>
            <h3></h3>
            <h3></h3>
            <h3></h3>
            <h3></h3>
            <h3></h3>
            <h3></h3>
            <h3></h3>
            <h3></h3>
            `
        }


    }
    // document.getElementsByClassName("Home")[0].style.color = "Red";

    // item_addEvent_MyDay.forEach(function(element){

    //     if ()


    // });


}

function btn_CreateNew() {
    document.getElementById("upcontent").innerHTML = ``;
    document.getElementById("content").innerHTML = `
    <style>
            #content{
                
                width: 30%; margin: auto; margin-top: 80px; display: grid; grid-template-rows: 3;
            }
        </style>
        <style>    .CreateNew{color: rgba(255, 50, 50, 1);}</style>  <h2 class = "CreateNew_List" onclick="btn_addMyDay()">Schedule Daily Life</h2><h2 class = "CreateNew_List" onclick="btn_addWeekend()">Schedule your Weekend</h2><h2 class = "CreateNew_List" onclick="btn_addHoliday()">Plan a Holiday</h2> `
}
function btn_MyDay() {

    document.getElementById("upcontent").innerHTML = ``;
    if (localStorage.getItem('Event_MyDay') == null || localStorage.getItem('Event_MyDay') == '[]') {

        document.getElementById("content").innerHTML = `
        <style>
        .MyDay{color: rgba(255, 50, 50, 1);}
        </style>
        <h1 class="WelcomePage specialcolor" style="text-align: center; margin-top: 100px;">
            Welcome! Start Schedulingit!😉
        </h1>
        `
    }
    else {
        document.getElementById("content").innerHTML = '';
        document.getElementById("content").innerHTML = "<style>    .MyDay{color: rgba(255, 50, 50, 1);}</style>"

        // Fetch DATA from LOCAL STORAGE

        // var string = 

        // var name, starttime, endtime, desc;
        document.getElementById("content").innerHTML += `
        <h3 class="MyDay_List colon"><b><i>S.No.</i></b></h3>
        <h3 style = "background-color: rgba(255, 0, 0, 0.5)" class="MyDay_List"><b><i>Event</i></b></h3>
        <h3 class="MyDay_List colon">:</h3>
        <h3 style = "background-color: rgba(255, 0, 0, 0.5)" class="MyDay_List"><b><i>Description</i></b></h3>
        <h3 class="MyDay_List colon" >:</h3>
        <h3 style = "background-color: rgba(255, 0, 0, 0.5)" class="MyDay_List"><b><i>From</i></b></h3>
        <h3 class="MyDay_List colon">:</h3>
        <h3 style = "background-color: rgba(255, 0, 0, 0.5)" class="MyDay_List"><b><i>To</i></b></h3>
        <h3></h3>
        <h3></h3>
        <style>
            #content{
                width: 90%; margin: auto; margin-top: 50px; display: grid; grid-template-columns: repeat(10, 1fr); column-gap: 12px; background-color: rgba(255, 255, 255, 0.8); border: 3px solid red;
                border-radius: 20px;
                padding: 5px;;
            }
        </style>
        `

        item_addEvent_MyDay = JSON.parse(localStorage.getItem('Event_MyDay'));
        item_addEvent_MyDay.sort(compareSecondColumn);
        function compareSecondColumn(a, b) {
            if (a[1] === b[1]) {
                return 0;
            }
            else {
                return (a[1] < b[1]) ? -1 : 1;
            }
        }
        localStorage.setItem('Event_MyDay', JSON.stringify(item_addEvent_MyDay));

        item_addEvent_MyDay.forEach(function (element, index) {
            document.getElementById("content").innerHTML += `
        <script>
        mydaylist_index = index;
        </script>
        <h3 class="MyDay_List colon">${index + 1}.</h3>
        <h3 class="MyDay_List">${element[0]} </h3>
        <h3 class="MyDay_List colon">:</h3>
        <h3 class="MyDay_List"> ${element[3]} </h3> 
        <h3 class="MyDay_List colon">:</h3>
        <h3 class="MyDay_List"> ${element[1]}</h3> 
        <h3 class="MyDay_List colon">:</h3> 
        <h3 class="MyDay_List">${element[2]}</h3>
        <style> .content{ width: 50%} </style>
        <h3 class="colon">:</h3>
        <button style=" height: 40px; border-radius: 5px; margin: auto; color: white; background-color: red;" type="button" class="btn btn-primary" onclick="MyDay_EventList_dlt(${index})">Delete</button>


        `
        });
        document.getElementById("content").innerHTML += `
    <h3></h3>
    <h3></h3>
    <h3></h3>
    <h3></h3>
    <h3></h3>
    <h3></h3>
    <h3></h3>
    <h3></h3>
    <h3></h3>
    <button style=" height: 35px; border-radius: 5px; margin: auto; color: white; background-color: rgba(255, 0, 0, 0.7);" type="button" class="btn btn-primary" onclick="btn_addMyDay()">Add Event</button>
    `

    }
}
function MyDay_EventList_dlt(mydaylist_index) {
    item_addEvent_MyDay = JSON.parse(localStorage.getItem('Event_MyDay'));
    item_addEvent_MyDay.splice(mydaylist_index, 1);
    localStorage.setItem('Event_MyDay', JSON.stringify(item_addEvent_MyDay));
    alert("Item Deleted");
    btn_MyDay();

}
function btn_Weekend() {
    document.getElementById("upcontent").innerHTML = ``;
    if (localStorage.getItem('Event_Weekend') == null || localStorage.getItem('Event_Weekend') == '[]') {

        document.getElementById("content").innerHTML = `
        <style>
        .Weekend{color: rgba(255, 50, 50, 1);}
        </style>
        <h1 class="WelcomePage specialcolor" style="text-align: center; margin-top: 100px;">
            Welcome! Start Scheduling your Weekend!😉
        </h1>
        `
    }
    else {
        document.getElementById("content").innerHTML = '';
        document.getElementById("content").innerHTML = "<style>    .Weekend{color: rgba(255, 50, 50, 1);}</style>"

        // Fetch DATA from LOCAL STORAGE

        // var string = 

        // var name, starttime, endtime, desc;
        document.getElementById("content").innerHTML += `
        <h3 class="MyDay_List colon"><b><i>S.No.</i></b></h3>
        <h3 style = "background-color: rgba(255, 0, 0, 0.5)" class="MyDay_List"><b><i>Event</i></b></h3>
        <h3 class="MyDay_List colon">:</h3>
        <h3 style = "background-color: rgba(255, 0, 0, 0.5)" class="MyDay_List"><b><i>Description</i></b></h3>
        <h3 class="MyDay_List colon" >:</h3>
        <h3 style = "background-color: rgba(255, 0, 0, 0.5)" class="MyDay_List"><b><i>From</i></b></h3>
        <h3 class="MyDay_List colon">:</h3>
        <h3 style = "background-color: rgba(255, 0, 0, 0.5)" class="MyDay_List"><b><i>To</i></b></h3>
        <h3></h3>
        <h3></h3>
        <style>
            #content{
                width: 90%; margin: auto; margin-top: 50px; display: grid; grid-template-columns: repeat(10, 1fr); column-gap: 12px; background-color: rgba(255, 255, 255, 0.8); border: 3px solid red;
                border-radius: 20px;
                padding: 5px;;
            }
        </style>
        `

        item_addEvent_Weekend = JSON.parse(localStorage.getItem('Event_Weekend'));
        item_addEvent_Weekend.sort(compareSecondColumn);
        function compareSecondColumn(a, b) {
            if (a[1] === b[1]) {
                return 0;
            }
            else {
                return (a[1] < b[1]) ? -1 : 1;
            }
        }
        localStorage.setItem('Event_Weekend', JSON.stringify(item_addEvent_Weekend));

        item_addEvent_Weekend.forEach(function (element, index) {
            document.getElementById("content").innerHTML += `
        <script>
        mydaylist_index = index;
        </script>
        <h3 class="MyDay_List colon">${index + 1}.</h3>
        <h3 class="MyDay_List">${element[0]} </h3>
        <h3 class="MyDay_List colon">:</h3>
        <h3 class="MyDay_List"> ${element[3]} </h3> 
        <h3 class="MyDay_List colon">:</h3>
        <h3 class="MyDay_List"> ${element[1]}</h3> 
        <h3 class="MyDay_List colon">:</h3> 
        <h3 class="MyDay_List">${element[2]}</h3>
        <style> .content{ width: 50%} </style>
        <h3 class="colon">:</h3>
        <button style=" height: 40px; border-radius: 5px; margin: auto; color: white; background-color: red;" type="button" class="btn btn-primary" onclick="Weekend_EventList_dlt(${index})">Delete</button>


        `
        });
        document.getElementById("content").innerHTML += `
    <h3></h3>
    <h3></h3>
    <h3></h3>
    <h3></h3>
    <h3></h3>
    <h3></h3>
    <h3></h3>
    <h3></h3>
    <h3></h3>
    <button style=" height: 35px;  border-radius: 5px; margin: auto; color: white; background-color: rgba(255, 0, 0, 0.7);" type="button" class="btn btn-primary" onclick="btn_addWeekend()">Add Event</button>
    `

    }

}
function Weekend_EventList_dlt(gama) {
    item_addEvent_Weekend = JSON.parse(localStorage.getItem('Event_Weekend'));
    item_addEvent_Weekend.splice(gama, 1);
    localStorage.setItem('Event_Weekend', JSON.stringify(item_addEvent_Weekend));
    alert("Item Deleted");
    btn_Weekend();

}
function btn_Holidays() {
    document.getElementById("upcontent").innerHTML = ``;
    document.getElementById("content").innerHTML = `
    <h1 class="WelcomePage" style="text-align: center; margin-top: 100px;">
            Page under construction! 🤕
        </h1><style>    .Holidays{color: rgba(255, 50, 50, 1);}</style>`
}
function btn_logout() {
    document.getElementById("upcontent").innerHTML = ``;
    document.getElementById("content").innerHTML = `<style>    .logout{color: rgba(255, 50, 50, 0.705);}</style>
    <h1 class="WelcomePage" style="text-align: center; margin-top: 100px;">
    Page under construction! 🤕
</h1>
    `
}
function btn_addMyDay() {
    document.getElementById("content").innerHTML = `
    <style>
            #content{
                
                width: 50%; margin: auto; margin-top: 8px; display: grid; 
            }
        </style>
        <style>    .CreateNew{color: rgba(255, 50, 50, 1);}</style>
    <style>    .CreateNew{color: rgba(255, 50, 50, 1);}</style>
    <h1 style="text-align: center; color: white; background-color: rgba(255, 0, 0, 0.7); border: 3px solid red;    border-radius: 20px;    padding: 5px;;" >Schedule Daily Life</h1>
    <div class="form_DailyLife">
    <style>
            .form_DailyLife{
                background-color: rgba(255, 255, 255, 0.8);
                border: 3px solid red;
                border-radius: 20px;
                padding: 5px;;
                width: 100%; margin: auto; margin-top: 8px; display: grid; 
            }
        </style>
    <h2 style="text-align: center;" >Add Event:</h2>    
    <p style="text-align: center;">Event: <input type="text" id="event_MyDay" required> </p>    
    <p style="text-align: center;">Start time: <input type="time" id="starttime_MyDay" required> </p>    
    <p style="text-align: center;">End time: <input type="time" id="endtime_MyDay" required> </p>    
    <p style="text-align: center;">Description: <textarea id="desc_MyDay" d="desc_MyDay" cols="30" rows="2"></textarea>    
    </p>    <button type="submit" style=" height: 40px; margin: auto; color: white; background-color: rgba(255, 0, 0, 0.7);" onclick="btn_addEvent_MyDay()">Add Event</button></p>
    </div>
    `
}
function btn_addEvent_MyDay() {
    let event = document.getElementById("event_MyDay").value;
    if (event == '') {
        alert("Kya kr rha hai bhai? Add an Event first!");
    }
    else {

        let starttime = document.getElementById("starttime_MyDay").value;
        if (starttime == '') {
            alert("When will you start the task bruh?");
        }
        else {

            let endtime = document.getElementById("endtime_MyDay").value;
            if (endtime == '') {
                alert("When will you end the task bruh?");
            }
            else if (endtime < starttime) {
                alert("How can you finish the task before starting it? 😂")
            }
            else {

                let desc = document.getElementById("desc_MyDay").value;
                //   item_addEvent_MyDay.push([event]);
                if (localStorage.getItem('Event_MyDay') == null) {
                    // item_addEvent_MyDay=[''];
                    item_addEvent_MyDay.push([event, starttime, endtime, desc]);
                    localStorage.setItem('Event_MyDay', JSON.stringify(item_addEvent_MyDay));
                    alert('Event added successfully');
                }
                else {
                    item_addEvent_MyDay = JSON.parse(localStorage.getItem('Event_MyDay'));
                    item_addEvent_MyDay.push([event, starttime, endtime, desc])
                    localStorage.setItem('Event_MyDay', JSON.stringify(item_addEvent_MyDay));
                    alert('Event added successfully');

                }
                starttime = document.getElementById("starttime_MyDay").value = '';
                endtime = document.getElementById("endtime_MyDay").value = '';
                desc = document.getElementById("desc_MyDay").value = '';
                document.getElementById("event_MyDay").value = '';
            }
        }
    }
}
function btn_addWeekend() {
    document.getElementById("content").innerHTML = `
    <style>
            #content{
                
                width: 50%; margin: auto; margin-top: 8px; display: grid; 
            }
        </style>
        <style>    .CreateNew{color: rgba(255, 50, 50, 1);}</style>
    <style>    .CreateNew{color: rgba(255, 50, 50, 1);}</style>
    <h1 style="text-align: center; color: white; background-color: rgba(255, 0, 0, 0.7); border: 3px solid red;    border-radius: 20px;    padding: 5px;;" >Schedule Weekend</h1>
    <div class="form_DailyLife">
    <style>
            .form_DailyLife{
                background-color: rgba(255, 255, 255, 0.8);
                border: 3px solid red;
                border-radius: 20px;
                padding: 5px;;
                width: 100%; margin: auto; margin-top: 8px; display: grid; 
            }
        </style>
    <h2 style="text-align: center;" >Add Event:</h2>    
    <p style="text-align: center;">Event: <input type="text" id="event_MyDay" required> </p>    
    <p style="text-align: center;">Start time: <input type="time" id="starttime_MyDay" required> </p>    
    <p style="text-align: center;">End time: <input type="time" id="endtime_MyDay" required> </p>    
    <p style="text-align: center;">Description: <textarea id="desc_MyDay" d="desc_MyDay" cols="30" rows="2"></textarea>    
    </p>    <button type="submit" style=" height: 40px; margin: auto; color: white; background-color: rgba(255, 0, 0, 0.7);" onclick="btn_addEvent_Weekend()">Add Event</button></p>
    </div>
    `
}
function btn_addHoliday() {
    document.getElementById("content").innerHTML = "<p>Hi</p>"
}

function btn_addEvent_Weekend() {
    let event = document.getElementById("event_MyDay").value;
    if (event == '') {
        alert("Kya kr rha hai bhai? Add an Event first!");
    }
    else {

        let starttime = document.getElementById("starttime_MyDay").value;
        if (starttime == '') {
            alert("When will you start the task bruh?");
        }
        else {

            let endtime = document.getElementById("endtime_MyDay").value;
            if (endtime == '') {
                alert("When will you end the task bruh?");
            }
            else if (endtime < starttime) {
                alert("How can you finish the task before starting it? 😂")
            }
            else {

                let desc = document.getElementById("desc_MyDay").value;
                //   item_addEvent_MyDay.push([event]);
                if (localStorage.getItem('Event_Weekend') == null) {
                    // item_addEvent_MyDay=[''];
                    item_addEvent_Weekend.push([event, starttime, endtime, desc]);
                    localStorage.setItem('Event_Weekend', JSON.stringify(item_addEvent_Weekend));
                    alert('Event added successfully');
                }
                else {
                    item_addEvent_Weekend = JSON.parse(localStorage.getItem('Event_Weekend'));
                    item_addEvent_Weekend.push([event, starttime, endtime, desc])
                    localStorage.setItem('Event_Weekend', JSON.stringify(item_addEvent_Weekend));
                    alert('Event added successfully');

                }
                starttime = document.getElementById("starttime_MyDay").value = '';
                endtime = document.getElementById("endtime_MyDay").value = '';
                desc = document.getElementById("desc_MyDay").value = '';
                document.getElementById("event_MyDay").value = '';
            }
        }
    }
}

// item_addEvent_MyDay.forEach(function(event, starttime, endtime, desc){
//     document.getElementById("content").innerHTML += '<h3>$(event)\t$(starttime)\t$(endtime)\t$(desc)</h3>';
// });

// setInterval(special(), 1);

// setInterval(special(), 1000);
// function special()
// {
//     console.log("test");
//     document.getElementsByClassName("specialcolor")[0].style.color= "aliceblue" ;
//     document.getElementsByClassName("specialcolor")[1].style.color= "aliceblue" ;   
    // setTimeout(
    //     function(){
    //         document.getElementsByClassName("specialcolor")[0].style.color= "antiquewhite" ;
    // document.getElementsByClassName("specialcolor")[1].style.color= "antiquewhite" ;  
    //     }, 500
    // )      
// }
// special();
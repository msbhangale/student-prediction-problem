//const element=document.getElementById('form');
//element.scrollIntoView();
function getData() {
    name = document.getElementById("name").value;
    branch = document.getElementById("select").value;
    grade1 = document.getElementById("g2").value;
    grade2 = document.getElementById("g1").value;
    absent = document.getElementById("absences").value;
    alcohol = document.getElementById("Dalc").value;
    freetime = document.getElementById("freetime").value;
    health = document.getElementById("health").value;
    age = document.getElementById("age").value;
    father = document.getElementById("Fedu").value;
    traveltime = document.getElementById("traveltime").value;
    mother = document.getElementById("Medu").value;
    setData();
}

function setData(){

    localStorage.setItem("excellent",JSON.stringify([9,9,10,1,5,5,4,1,4]));
    localStorage.setItem("good",JSON.stringify([7,7,20,2,4,4,3,2,3]));
    localStorage.setItem("satisfactory",JSON.stringify([5,5,40,3,3,3,2,2,2]));
    localStorage.setItem("name",name);
    localStorage.setItem("branch",branch);
    localStorage.setItem("grade1",grade1);
    localStorage.setItem("grade2",grade2);
    localStorage.setItem("absent",absent);
    localStorage.setItem("alcohol",alcohol);
    localStorage.setItem("freetime",freetime);
    localStorage.setItem("health",health);
    localStorage.setItem("age",age);
    localStorage.setItem("father",father);
    localStorage.setItem("traveltime",traveltime);
    localStorage.setItem("mother",mother);
    localStorage.setItem("schoolsup",schoolsup);
    localStorage.setItem("subject",subject);
}

function displayInputData() {

    var win = window.open('Form inputs');
    win.document.write(` <h3 style="text-align:left">Name of Student : ${localStorage.getItem("name")}
    Branch : ${localStorage.getItem("branch")} <br>Your Overall Performance : ${localStorage.getItem("result")}</h3>`);
    win.document.write(`
    <table border="3" width="300" height="150">
        <tr>
            <th> Parameter Name</th>
            <th> Value</th>
        </tr>
        <tr>
            <td>First Semester CGPA</td>
            <td>${localStorage.getItem("grade1")}</td>
        </tr>
        <tr>
            <td>Second Semester CGPA</td>
            <td>${localStorage.getItem("grade2")}</td>
        </tr>
        <tr>
            <td>Absent Days</td>
            <td>${localStorage.getItem("absent")}</td>
        </tr>
        <tr>
            <td>Alcohol Consumption</td>
            <td>${localStorage.getItem("alcohol")}</td>
        </tr>
        <tr>
            <td>Freetime</td>
            <td>${localStorage.getItem("freetime")}</td>
        </tr>
        <tr>
            <td>Health Rating</td>
            <td>${localStorage.getItem("health")}</td>
        </tr>
        <tr>
            <td>Age</td>
            <td>${localStorage.getItem("age")}</td>
        </tr>
        <tr>
            <td>Father's Education Level</td>
            <td>${localStorage.getItem("father")}</td>
        </tr>
        <tr>
            <td>Travel time</td>
            <td>${localStorage.getItem("traveltime")}</td>
        </tr>
        <tr>
            <td>Mother's Education</td>
            <td>${localStorage.getItem("mother")}</td>
        </tr>
    </table>
    <br>
    <h3>Expected Result</h3>
    `);
    var satisfactory=JSON.parse(localStorage.getItem("satisfactory"));
    var good=JSON.parse(localStorage.getItem("good"));
    var excellent=JSON.parse(localStorage.getItem("excellent"));
    win.document.write(`
    <table border="3" width="500" height="150">
        <tr>
            <th> Parameter Name</th>
            <th> Satisfactory </th>
            <th> Good </th>
            <th> Excellent </th>
        </tr>
        <tr>
            <td>First Semester CGPA</td>
            <td>${satisfactory[0]}</td>
            <td>${good[0]}</td>
            <td>${excellent[0]}</td>
        </tr>
        <tr>
            <td>Second Semester CGPA</td>
            <td>${satisfactory[1]}</td>
            <td>${good[1]}</td>
            <td>${excellent[1]}</td>
        </tr>
        <tr>
            <td>Absent Days</td>
            <td>${satisfactory[2]}</td>
            <td>${good[2]}</td>
            <td>${excellent[2]}</td>
        </tr>
        <tr>
            <td>Alcohol Consumption</td>
            <td>${satisfactory[3]}</td>
            <td>${good[3]}</td>
            <td>${excellent[3]}</td>
        </tr>
        <tr>
            <td>Freetime</td>
            <td>${satisfactory[4]}</td>
            <td>${good[4]}</td>
            <td>${excellent[4]}</td>
        </tr>
        <tr>
            <td>Health Rating</td>
            <td>${satisfactory[5]}</td>
            <td>${good[5]}</td>
            <td>${excellent[5]}</td>
        </tr>
        <tr>
            <td>Father's Education Level</td>
            <td>${satisfactory[6]}</td>
            <td>${good[6]}</td>
            <td>${excellent[6]}</td>
        </tr>
        <tr>
            <td>Travel time</td>
            <td>${satisfactory[7]}</td>
            <td>${good[7]}</td>
            <td>${excellent[7]}</td>
        </tr>
        <tr>
            <td>Mother's Education</td>
            <td>${satisfactory[8]}</td>
            <td>${good[8]}</td>
            <td>${excellent[8]}</td>
        </tr>
    </table>
    `)
    win.document.write(
    `
    <br>
    <img src="./static/result.png" width="1000" height="500" style="border:5px solid black">
    <br>
    <button onclick="window.print()">Print</button>
    `);
}
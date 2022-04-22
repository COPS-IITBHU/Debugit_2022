//  Top Doctors giving time on Saturday Sunday 
var i,j,k=7;
//saturday on day 1- 1.05.22
var free= [
    {
     Name: "A",
     Priority: 1,
     1: "No",
     2: "Yes",
     3: "No",
     4:  "No"
    },
    {
        Name: "A",
        Priority: 1,
        1: "Yes",
        2: "No",
        3: "No",
        4:  "No"
    },
    {
     Name: "A",
     Priority: 3,
     1: "Yes",
     2: "No",
     3: "Yes",
     4:  "No"
    }
   
  ];
  var x;
  for (let i = 0; i < free.length; i++) {
    var scenario = free[i];
    x = scenario.Name;
    console.log(x);
  }
  
let saveFile = () => {
    	
    // Get the data from each element on the form.
    const name = document.getElementById('txtName');
    const age = document.getElementById('txtAge');
    const gender = document.getElementById('gender');
    const coffee = document.getElementById('c');
    const water = document.getElementById('w');
    const vitC = document.getElementById('yes');
    const sugar = document.getElementById('y');
    const meals = document.getElementById('n');


    
    
    // This variable stores all the data.
    let data = 
        '\r Name: ' + name.value + ' \r\n ' + 
        'Age: ' +age.value + ' \r\n ' + 
        'Gender: ' + gender.value + ' \r\n ' + 
        'Caffeine Consumption: ' + coffee.value + ' \r\n ' + 
        'Water Consumption: ' + water.value + '\r\n' +
        'Vitamin C:' + vitC.value + '\r\n' +
        'Sugar Consumption:' + sugar.value + '\r\n' +
        'Meals:' + meals.value;
    
    // Convert the text to BLOB.
    const textToBLOB = new Blob([data], { type: 'text/plain' });
    const sFileName = 'formData.txt';	   // The file to save the data.

    let newLink = document.createElement("a");
    newLink.download = sFileName;

    if (window.webkitURL != null) {
        newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    }
    else {
        newLink.href = window.URL.createObjectURL(textToBLOB);
        newLink.style.display = "none";
        document.body.appendChild(newLink);
    }

    newLink.click(); 
}
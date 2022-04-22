let saveFile = () => {
    	
    // Get the data from each element on the form.
    const name = document.getElementById('txtName');
    const age = document.getElementById('txtAge');
    const gender = document.getElementById('gender');
    const weight = document.getElementById('weight');
    const height = document.getElementById('height');


    
    
    // This variable stores all the data.
    let data = 
        '\r Name: ' + name.value + ' \r\n ' + 
        'Age: ' +age.value + ' \r\n ' + 
        'Gender: ' + gender.value + ' \r\n ' + 
        'Height: ' + height.value + ' \r\n ' + 
        'Weight: ' + weight.value;
    
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
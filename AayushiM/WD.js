let saveFile = () => {
    	
    // Get the data from each element on the form.
    const name = document.getElementById('txtName');
    const age = document.getElementById('txtAge');
    const gender = document.getElementById('gender');
    const sleep = document.getElementById('sleep');
    const wakeup = document.getElementById('wakeup');
    const s=document.getElementById('s');
    const y=document.getElementById('y');


    
    
    // This variable stores all the data.
    let data = 
        '\r Name: ' + name.value + ' \r\n ' + 
        'Age: ' +age.value + ' \r\n ' + 
        'Gender: ' + gender.value + ' \r\n ' + 
        'Sleep Time: ' + sleep.value + ' \r\n ' + 
        'WakeUp Time: ' + wakeup.value + '\r\n' +
        'Average Sleep Time:' + s.value + '\r\n' +
        'Average Time In Bed:' + y.value;
        

    
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
function getIndexFromId(id){

    var subString1 = str.substring(
        str.indexOf("R") + 1, 
        str.lastIndexOf("C")
    );
    var i = parseInt(subString1) - 1;
    
    var subString2 = str.substring(
        str.indexOf("C") + 1, 
        str.lastIndexOf("E")
    );
    var j = parseInt(subString2) - 1;

    return [i,j];
    
}
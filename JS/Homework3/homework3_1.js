/* Write a JavaScript function which accepts a parameter and returns its type and prints it in the console. Try to call the functions 5 times for 5 different types:

object
boolean
number
string
undefined */

function checkDataType (value) {
    dataType = typeof value;
    console.log(dataType);
    return dataType;
}

checkDataType("Aneta");
checkDataType(1234);
checkDataType("123xn");
checkDataType(false);
checkDataType("");
checkDataType(null);
checkDataType([1,2,3]);
checkDataType();
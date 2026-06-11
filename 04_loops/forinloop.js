const myobject={
    js:"javascript",
    cpp:"c++",
    py:"python"
}

for (const key in myobject) {
    console.log(key)                                               // to access key in object                        
} 

for (const key in myobject) {
   //console.log(myobject[key])                                    // to access value of object
   console.log(`value ofobject : ${myobject[key]}`)
}
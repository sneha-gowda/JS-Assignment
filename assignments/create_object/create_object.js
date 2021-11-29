function CreateObject(arr) {
Create_object
    object={}
    for(var i=0;i<arr.length-1;i=i+2){

        object[arr[i]]=arr[i+1]
    }

    return object;

}



module.exports = CreateObject;

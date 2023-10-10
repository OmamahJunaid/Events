function getInput(){
    var name = document.getElementById("name")
    console.log(name.value)
    name.value= ""
}
function getInputTwo(){
    var nameTwo = document.getElementById("nameTwo")

    nameTwo.value= "defult"
    console.log(nameTwo.value)
}
function getStatus(){
  var sts = document.getElementById("sts")
  if(sts.value==="married"){
    alert("true")
  }
  else{
    alert("available")
  }
}
function getIn(){
    var input1 = document.getElementById("input")
    if (input1.value===""){
        alert("enter  string")
    }
    else{
        alert(input1.value)
    }

}

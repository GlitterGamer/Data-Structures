var names = []
function add(){
    name1=document.getElementById("name1").value
    name2=document.getElementById("name2").value
    name3=document.getElementById("name3").value
    name4=document.getElementById("name4").value


    names.push(name1)
    names.push(name2)
    names.push(name3)
    names.push(name4)


    document.getElementById("result").innerHTML=names
}

function sorting(){
    names.sort()
    document.getElementById("result").innerHTML=names
}
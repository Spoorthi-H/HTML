function validate()
{
    let p= document.getElementById("pwd").value
    let n=document.getElementById("num").value.toString()
    if(n.length<10)
    {
        document.getElementById("snum").innerHTML="Enter valid 10-digit Mobile Number"
    }
    if(p.length<5)
    {
        document.getElementById("spwd").innerHTML="password should be of minimum 6 characters"
    }
    return false
    
    
}
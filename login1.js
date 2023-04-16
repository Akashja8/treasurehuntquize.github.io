function fun1()
{
    var email = document.getElementById("email").value;
    var pass = document.getElementById("password").value;
    if(email=="admin@gmail.com" && pass=="admin123@")
    {
        window.location.assign("page1.html");
        // alert("Login succefully");
    }
    else 
    {
        alert("Invalid Information");
        return;
    }
}
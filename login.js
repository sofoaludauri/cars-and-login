var user1 = {
username: "user1",
password: "paroli"
};

var user2 = {
username: "user2",
password: "paroli2"
}
   
var user3 = {
username: "user3",
password: "paroli3"
}
    
var users = [user1, user2, user3];

function login () {
    var username = document.getElementById("user").value;
    var password = document.getElementById("password").value;
    var userfound = checkUser (username, password);
    if (userfound = true) {
        var strongPassword = isPasswordStrong(password);
        if (strongPassword == true) {
            alert("თქვენ წარმატებით შეხვედით სისტემაში");
        }else{
            alert("თქვენ წარმატებით შეხვედით სისტემაში, მაგრამ გთხოვთ დააყენოთ უფრო ძლიერი პაროლი")
        }
    
    }else{
        alert("მომხმარებელი არ მოიძებნა");
    
    }
}


function isPasswordStrong(password) {
    if(password.length < 8) {
        return false;
    }else{
        return true;
    }
}

function checkUser (username, password) {
    for (var i = 0; i < users.length; i++) {
        if (username == users[i].name && password == users[i].password) {
            return true;
        }
    }
    return false;
}
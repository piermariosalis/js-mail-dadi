//**********MAIL_LIST_APPROVED*******************
var emailList = ["boolean@true.nice", "fabioPac@teacher.com","raffa@tutor.com"];



//**************VERIFY INPUT USER MAIL************

var verifyRequest = document.getElementById("verify");

verifyRequest.addEventListener("click", function(){

var userEmail = document.getElementById('email').value;


for (var i = 0; i < emailList.length; i++) {
  if (userEmail == emailList[i]) {
    document.getElementById('result').innerHTML = "Email verificata con successo!";
    var x = i;
  }
}
if (userEmail != emailList[x]) {
  document.getElementById('result').innerHTML = "Email non presente nel database. Si prega di contattare l'amministratore.";
}
});
//******************************************************************//
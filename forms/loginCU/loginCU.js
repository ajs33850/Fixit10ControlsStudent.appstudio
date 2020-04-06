/*
req1 = Ajax("http://radlab.creighton.edu/appStudio/authLDAP.php", "POST", "j_username=" + inptNetID.value + "&j_password=" + pswdPassword.value)


btnLogin.onclick=function(){
  if (req1.status == 200) {
    lblResponse.hidden = false
    lblResponse.value = `Your LDAP return code was ${req1.responseText}`
    ChangeForm(favFoods)
  } else {
      lblResponse.hidden = false
      lblResponse.value = `Error: ${req1.status}`
      inptNetID.value = ''
      NSB.MsgBox('Login information not valid')
  }

}

btnFavFoods.onclick=function(){
  ChangeForm(favFoods)
}
*/
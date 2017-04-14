<?php
if(!empty($_POST['password'])) { 
    if(md5('blah@#$'.sha1('3NhNj8&'.$_POST['31f08514c10173b5768e390b36ef0513']) ) =='MD5 value of your password' ) {
    header("Location: http://smokezarn.github.io/home"); /* Redirect here if the password is correct */
    }
    else {
        header("Location: http://smokezarn.github.io/"); /* Return here if the password ain't correct */
    }   
}
else {
    header("Location:http://smokezarn.github.io/"); /* Return here if the field is empty */
}
?>
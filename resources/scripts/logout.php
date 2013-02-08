<?php
	ini_set("session.cookie_lifetime", 36000);
	session_start();
    $_SESSION = array();
	print(json_encode(array('success' => session_destroy())));
?>
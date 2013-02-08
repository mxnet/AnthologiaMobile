<?php
	ini_set("session.cookie_lifetime", 36000);
	session_start();
	$success = false;
	$message = 'Log in using \'demo\' as username and password.';
	if(isset($_SESSION['username']) && isset($_SESSION['password'])) {
		$success = true;
		$message = 'Welcome back, ' . $_SESSION['username'] . '!';
	}
	print(json_encode(array('success' => $success, 'message' => $message)));
?>
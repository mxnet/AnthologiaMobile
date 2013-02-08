<?php
	ini_set("session.cookie_lifetime", 36000);
	session_start();
	$success = false;
	$message = '';
	$username = (isset($_POST['username']) && ! empty($_POST['username'])) ? $_POST['username'] : NULL;
	$password = (isset($_POST['password']) && ! empty($_POST['password'])) ? $_POST['password'] : NULL;
	if(! is_null($username) && ! is_null($password)) {
		if($username == 'demo' && $password == 'demo') {
			$_SESSION['username'] = $username;
			$_SESSION['password'] = $password;
			$success = true;
			$message = 'Welcome, ' . $username . '!';
		} else {
			$message = 'The username and/or password you entered is invalid.';
		}
	}
	print(json_encode(array('success' => $success, 'message' => $message)));
?>
<?php
	$to = "p3160120@aueb.gr";
	$fname = $_POST['firstName'];
	$lname = $_POST['lastName'];
	$email = $_POST['mail'];
	$genre = $_POST['genre'];
	$song = $_POST['song'];
	$artist = $_POST['artist'];
	$body = "First Name: $fname \nLast Name: $lname \nE-mail: $email \nGenre: $genre \nFavorite Song: $song \Favorite Artist: $artist";
	mail($to, "New Form!!!", $body, "Reply to "+$email);
?>
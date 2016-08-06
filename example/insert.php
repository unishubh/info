<?php
require_once('db.php');
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
$s=$_GET['mail'];
$sql = "INSERT INTO mails (mail) VALUES (:mail)";
$q=$conn->prepare($sql);
$q->bindParam(':mail',$s);
$q->execute();


?>
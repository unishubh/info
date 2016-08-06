<?php

				$dbhost='localhost';
				$dbuser='root';
				$dbname='infotsav';
				$dbpasswd='root';
$conn=new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpasswd);
$conn->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );

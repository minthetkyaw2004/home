<?php

    header("Location:./test.php");

    $name = "min thet kyaw";

    const Name = "Min Thet Kyaw";

    function aa(){
        echo $name;
        echo Name;
    }

    echo Name;

    echo md5($name); // sh1 // crypt

    echo password_hash($name, PASSWORD_DEFAULT);

    $hash = password_hash($name, PASSWORD_DEFAULT);
    echo password_verify("min thet kyaw", $hash) ? "true" : "false";
<?php

    $x = 5;
    echo $x;

    $string = "minthetkyaw";
    echo $string;

    $arr = ["x", "y", "z"];

    $asso = [
        "name" => "mtk",
        "age" => 18,
        "status" => false
    ];

    $age = 5;

    echo $string;
    echo "<br/>";
    echo $age;
    echo "<br/>";
    print_r($arr);
    echo "<br/>";
    print_r($asso);
    echo "<br/>";

    function run() {
        return "I am a function";
    };

    echo run();

    echo "<br/>";

    $free = false;

    if($free){
        echo "This is true";
    }
    else{
        echo "This is false";
    }

    var_dump($free); // typeof function
    echo "<br/>";

    for($i=0;$i<10;$i++){
        echo "loop $i <br/>";
    }
?>

<!-- php -v
php -s localhost:8000 -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <?php

        $fruit = array('apple','orange','mango','banana');
        $mySelf = array(
            "name" => "mtk",
            "age" => 18,
            "status" => false,
            "job" => array("web development","project manager","IT consultant")
        );

        echo count($fruit);
        echo end($fruit);
        echo $fruit[array_rand($fruit)];

        echo array_sum([1,2,3,4]);

        $range = range(1,70,5);
        echo "<pre>";
        print_r($range);
        echo "</pre>";

        // echo in_array('orange',$fruit ? "yes there is" : "no there is not");

        // echo array_key_exists("age",$mySelf ? "yes it is age" : "no it is not age");

        print_r(array_keys($mySelf));

        echo implode(" - ",$fruit);

        array_push($fruit, "new one");
        array_pop($fruit);
        array_unshift($fruit, "fruits");
        array_shift($fruit);

        print_r(asort($fruit));


    ?>

</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Looping</title>
</head>
<body>
    <?php

        $array1 = ['person 1','person 2','person 3','person 4','person 5'];
        array_push($array1,'person 6');
        for($index = 7; $index <= 10; $index++){
            array_push($array1,"person $index");
        }
        for($index = 0; $index < count($array1); $index++){
            // echo $index.'<br/>';
            echo $array1[$index].'<br/>';
            $newtext = str_replace('person','Mr. ',$array1[$index]);
            echo $newtext.'<br/>';
        };

        

    ?>
</body>
</html>
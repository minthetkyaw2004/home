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

        $no = 123.45;
        $weight = 95.23;
        $height = 5.7;
        $money = 1238900;

        echo is_int($money);
        echo '<br/>';

        echo round($weight);
        echo '<br/>';

        echo sqrt(64);
        echo '<br/>';

        echo abs(-55);
        echo '<br/>'; 

        echo ceil(3.4);
        echo '<br/>';

        echo floor(5.7);
        echo '<br/>';

        echo rand(10,99);
        echo '<br/>';
    
    ?>
</body>
</html>
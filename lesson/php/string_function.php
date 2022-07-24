<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <h4>10 useful string functions</h4>
    <ol>
        <li>strlen()</li>
        <li>str_word_count()</li>
        <li>strrev() | str_shuffle()</li>
        <li>strpos(str, search)</li>
        <li>substr(start, length)</li>
        <li>strtoupper() | strtolower()</li>
        <li>strip_tags()</li>
        <li>str_replace(find,new,str)</li>
        <li>trim()</li>
        <li>str_split(string, length) | explode(separator, string, limit)</li>
    </ol>



    <?php

    $name = "min thet kyaw";
    $str = '<ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>';


    echo strlen($name);
    echo '<br/>';
    echo str_word_count($name);
    echo '<br/>';
    echo strrev($name);
    echo '<br/>';
    echo str_shuffle($name);
    echo '<br/>';
    echo strpos($name, "thet");
    echo '<br/>';
    echo substr($name,5);
    echo '<br/>';

    echo strtoupper($name);
    echo '<br/>';
    echo strtolower($name);
    echo '<br/>';
    echo ucfirst($name);
    echo '<br/>';
    echo ucwords($name);
    echo '<br/>';

    echo strip_tags($str);
    echo '<br/>';
    
    echo str_replace("min","kyaw",$name);
    echo '<br/>';

    echo trim($name);
    echo '<br/>';
    echo trim($name,"w");
    echo '<br/>';

    print_r(str_split($name, 3));
    echo '<br/>';
    print_r(explode(" ", $name, 3));

    ?>
</body>
</html>
<!-- <script>
    
    let x = 5; // var global scope

    function run() {
        let y = 1; // local variable
        return x+5;
    }

    // console.log(y);  // error

</script> -->
<?php

    $name = "aung aung ";

    $number = 10;

    $boolean = true; // return 1

    $message = "my name is ".$name." and I am ".$number." years old"; 

    $message = "my name is $name and I am $number years old";  // only double quote works

    $arr = ["x","y","z"];

    $message = "This is $arr[1]";

    $assoc = [
        "firstname" => "Min",
        "lastname" => "Kyaw"
    ];

    $message = "This is {$assoc['firstname']}";

    function run($name) { // can also be set by parameter
        return $name;
    };

    function r(){
        return $GLOBALS['name']; // globalize a variable
    };

    function w() {
        global $name; // globalize a variable
        return $name;
    };
    


    // echo $name;
    // echo $number;
    // echo $boolean;

    echo $message;

?>
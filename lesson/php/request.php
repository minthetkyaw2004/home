<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <ul>
        <li>get {url}</li>
        <li>post</li>
    </ul>

    <a href="respond.php?name=minthetkyaw&age=18&job=student">to server</a>
    <h4>url ? key=value & key=val</h4>

    <form action="respond.php" method="get"><!-- show the values in next page -->
        <input type="text" id="name" placeholder="Min Thet Kyaw"/>
        <input type="number" id="age" placeholder="18"/>
        <input type="text" id="job" placeholder="student"/>
        <input type="submit" value="Submit">
    </form>

    <form action="respond.php" method="post"><!-- do not show the values in next page -->
        <input type="text" id="name" value="Min Thet Kyaw"/>
        <input type="number" id="age" value="18"/>
        <input type="text" id="job" value="student"/>
        <input type="submit" value="Submit">
    </form>


</body>
</html>
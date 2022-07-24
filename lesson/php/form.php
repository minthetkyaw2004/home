<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        *{
            font-size: 24px;
        }
        /* .container{
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
        } */
        form{
            width: fit-content;
            padding: 20px;
            background: #f4f4f4;
        }
        .form-group{
            margin: 10px 0;
        }
        .form-label{
            display: block;
            margin-bottom: 10px;
        }
    </style>
</head>
<body>
    <section class="container">
        <form action="form.php" method="post">
            <div class="form-group">
                <label for="name" class="form-label">Name: </label>
                <input type="text" class="form-input" name="name" id="name" />
            </div>
            <div class="form-group">
                <label for="job" class="form-label">Job: </label>
                <input type="text" class="form-input" name="job" id="job" />
            </div>
            <div class="form-group">
                <label for="email" class="form-label">Email: </label>
                <input type="email" class="form-input" name="email" id="email" />
            </div>
            <input type="submit" value="Submit" />
        </form>
    </section>

    <?php
    
        $name = $_POST['name'];
        $job = $_POST['job'];
        $email = $_POST['email'];


        echo "My name is : ".$name.' .<br/>';
        echo "My occupation is : ".$job.' .<br/>';
        echo "You can send email to me at : ".$email.' . <br/>';

    ?>
</body>
</html>
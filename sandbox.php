<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Form Demo 1</title>
</head>
<?php 
include_once('includes/nav.inc.php');
require_once('db/mysqli_connect.php');
$db = db_connection();

$success = false;

  if ($_SERVER['REQUEST_METHOD'] == 'POST') {
      $required = array('email', 'password','firstName', 'lastName');
      // Loop over field names, make sure each one exists and is not empty
      $error = false;
      foreach($required as $field) {
        if (empty($_POST[$field])) {
          $error = true;
        }
      }
      if ($error) {?>
        
        <div class="container">
          <div class="row">
            <div class="col-12 text-center">
              <h3>All fields are required</h3>
    <?php } else {
        $firstName = $db->real_escape_string($_POST['firstName']);
        $lastName = $db->real_escape_string($_POST['lastName']);
        $email = $db->real_escape_string($_POST['email']);
        $password = hash('sha512',$_POST['password']);

        $sql = "INSERT INTO user (firstName,lastName,email,password) 
                VALUES('$firstName','$lastName','$email','$password')";
        // echo $sql;
        $result = $db->query($sql);
      
        if($db->error){
            echo "<h3>There was a problem registering your account. </h3>";
            echo '<h3>' . $db->error . '</h3>';
        } else { ?>
            <h3>You are now ready to go!</h3>
            </div>
          </div>
      <?php  $success = true;
      }
    }
  }
  if (!$success) { ?>
          <div class="row">
            <div class="col-12">
              <div class="modal-dialog text-center">
                  <div class="col-sm-8 main-section">
                    <div class="modal-content">
                      <div class="errors"></div>

                      <form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" method="post" autocomplete="off">
                        <div class="form-group my-2 my-lg-0">
                          <label for="email" id="email-id">Email address</label>
                          <input type="email" name="email" class="form-control" placeholder="Enter Email" value="<?php if(isset($_POST["email"])){echo $_POST["email"];} ?>">
                        </div>
                        <div class="form-group">
                          <label for="password" id="password-id">Password</label>
                          <input type="password" name="password" class="form-control" placeholder="Password" value="<?php if(isset($_POST["password"])){echo $_POST["password"];} ?>">
                        </div>
                        <div class="form-group">
                          <label for="firstName" id="firstName-id">First Name</label>
                          <input type="text" class="form-control" name="firstName" placeholder="First Name" value="<?php if(isset($_POST["firstName"])){echo $_POST["firstName"];} ?>">
                        </div>
                        <div class="form-group">
                          <label for="lastName" id="lastName-id">Last Name</label>
                          <input type="text" class="form-control" required name="lastName" placeholder="Last Name" value="<?php if(isset($_POST["lastName"])){echo $_POST["lastName"];} ?>">
                        </div>
                        <button type="submit" value="Register" id="submit" class="btn btn-primary">Submit</button>
                      </form>
                      <?php } ?>
                      <?php $db->close(); ?>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          
    
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
  <script src="js/subscriptions.js"></script>

</body>

</html>
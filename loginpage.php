<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>login/signup</title>
        <link rel="stylesheet" href="login.css">
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    </head>
    <body>
        <section class="container forms">
            <div class="form login">
                <div class="form-content">
                    <header>Login</header>
                    <form action="login1.php">
                        <?php if (isset($_GET['error'])) { ?>

                            <p class="error"><?php echo $_GET['error']; ?></p>
                
                        <?php } ?>
                        <div class="field input-field">
                            <input type="email" placeholder="Email" class="input">
                        </div>
                        <div class="field input-field">
                            <input type="Password" placeholder="Password" class="password">
                            <i class='bx bx-hide eye-icon'></i>
                        </div>
                        <div class="form-link">
                            <a href="#" class="forgot-pass">Forgot password?</a>
                        </div>
                        <div class="field button-field">
                            <button>Login</button>
                        </div>
                        <div class="form-link">
                            <span>Don't have an account?<a href="#" class="link signup-link">Sign-up</a></span>
                        </div>
                    </form>
                </div>
                
                
                
            </div>

            <!--signup form-->

            <div class="form signup">
                <div class="form-content">
                    <header>Signup</header>
                    <form action="login.php" method="post">
                        <div class="field input-field">
                            <input type="email" placeholder="Email" class="input" id="mail" name="mail" required>
                        </div>
                        <div class="field input-field">
                            <input type="password" placeholder="Create Password" class="password" id="psw" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" name="psw" required>
                        </div>
                        <div class="field input-field">
                            <input type="password" placeholder="Confirm Password" class="password" id="cpsw" name="cpsw" required>
                            <i class='bx bx-hide eye-icon'></i>
                        </div>
                        
                        <div class="field button-field">
                            <input type="submit" value="Signup" >
                        </div>
                        <div class="form-link">
                            <span>Already have an account?<a href="#" class="link login-link">login</a></span>
                        </div>
                    </form>
                </div>
                <div class="line"></div>
                <div id="message">
                    <h3>Password must contain the following:</h3>
                    <p id="letter" class="invalid">A <b>lowercase</b> letter</p>
                    <p id="capital" class="invalid">A <b>capital (uppercase)</b> letter</p>
                    <p id="number" class="invalid">A <b>number</b></p>
                    <p id="length" class="invalid">Minimum <b>8 characters</b></p>
                  </div>
                  
                
                <div class="media-options">
                    <a href="#" class="field facebook">
                        <i class='bx bxl-facebook facebook-icon'></i>
                        <span>Login with facebook</span>
                    </a>
                </div>

                <div class="media-options">
                    <a href="#" class="field google">
                        <img src="https://blog.hubspot.com/hubfs/image8-2.jpg" alt="" class="google-img">
                        <span>Login with Google</span>
                    </a>
                </div>
            </div>
        </section>

        <!--javascript-->
        <script src="login.js"></script>



        
    </body>
</html>
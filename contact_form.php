<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$headers = "From: " . $email;
$mailTo = "sletendre1023@gmail.com";
$subject = "An Email from " . $name;

mail($mailTo, $subject, $message, $headers);
header("Location: http://localhost/Will-Co-Cafe/Thank-You.html");
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <title>Will & Co. Cafe - Contact Us</title>
  <meta name="description" content="Website for Will & Co. Cafe">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- CSS -->
  <link rel="stylesheet" href="styles.css">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">

  <!-- JS, Popper.js, jQuery -->
  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
</head>

<body>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="index.html">
        <img id="navlogo" src="images/logos/logo1.png" alt="">
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav mx-auto text-center">
          <li class="nav-item">
            <a class="nav-link" href="index.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="Menu.html">Menu</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="Contact-Us.html">Contact Us<span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="About-Us.html">About Us</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
  <div class="text-center mt-4">
    <h2>Contact Us</h2>
    Do you have any questions? Please do not hesitate to contact us directly.
  </div>
  <form id="contact-form" method="post" action="contact_form.php" role="form">
    <div class="messages"></div>
    <div class="controls mb-4 mt-4">
      <div class="row">
        <div class="col-md-5 mx-auto">
          <div class="form-group">
            <label for="form_name">Name</label>
            <input id="form_name" type="text" name="name" class="form-control" placeholder="Please enter your name" required="required" data-error="Name is required.">
            <div class="help-block with-errors"></div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-5 mx-auto">
          <div class="form-group">
            <label for="form_email">Email</label>
            <input id="form_email" type="email" name="email" class="form-control" placeholder="Please enter your email" required="required" data-error="Valid email is required.">
            <div class="help-block with-errors"></div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-5 mx-auto">
          <div class="form-group">
            <label for="form_message">Message</label>
            <textarea id="form_message" name="message" class="form-control" placeholder="Message for us" rows="8" required="required" data-error="Please, leave us a message."></textarea>
            <div class="help-block with-errors"></div>
          </div>
          <div class="col-md-12">
            <input type="submit" name="submit " class="btn btn-send contact-btn" value="Send message">
          </div>
        </div>
      </div>
    </div>
  </form>
  <footer class="page-footer font-small">
    <div class="container">
      <div class="row text-center d-flex justify-content-center pt-5 mb-3 footer-links">
        <div class="col-md-2 mb-3">
          <h6 class="text-uppercase font-weight-bold">
            <a href="index.html">Home</a>
          </h6>
        </div>
        <div class="col-md-2 mb-3">
          <h6 class="text-uppercase font-weight-bold">
            <a href="Menu.html">Menu</a>
          </h6>
        </div>
        <div class="col-md-2 mb-3">
          <h6 class="text-uppercase font-weight-bold">
            <a href="Contact-Us.html">Contact Us</a>
          </h6>
        </div>
        <div class="col-md-2 mb-3">
          <h6 class="text-uppercase font-weight-bold">
            <a href="About-Us.html">About Us</a>
          </h6>
        </div>
      </div>
      <hr class="rgba-white-light" style="margin: 0 15%;">
      <div class="row d-flex text-center justify-content-center mb-md-0 mb-4 cafe-info">
        <div class="col-md-8 col-12 mt-5">
          <p>Monday-Sunday: 7:30am-3:00pm | <span class="nowrap"><a class="cafe-phone" href="tel:7747739732">774-773-9732</a></span></p>
        </div>
      </div>
      <hr class="clearfix d-md-none footer-line">
      <div class="row social">
        <div class="col mb-4">
          <a class="btn btn-primary review-btn mb-4 mr-2" href="https://search.google.com/local/writereview?placeid=ChIJK1DHDeG65IkRcY1_1dca0eI" role="button">Write a
            Review</a>
          <a class="fb-ic">
            <a href="https://www.facebook.com/willcocafe" id="facebook-btn"><i class="fab fa-facebook fa-3x white-text mr-2"></i></a>
          </a>
          <a class="ins-ic">
            <a href="https://www.instagram.com/willandco.cafe" id="instagram-btn"><i class="fab fa-instagram fa-3x white-text ml-2"></i></a>
          </a>
        </div>
      </div>
      <p>6 Court St, Plymouth, MA 02360</p>
      <div class="map">
        <iframe width="100%" height="100%" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJK1DHDeG65IkRcY1_1dca0eI&key=AIzaSyCKhc6NFn4dt0YdCSUIsfg_1XGj5DZEreI" allowfullscreen></iframe>
      </div>
    </div>
    <div class="footer-copyright text-center py-3">© 2018 Copyright: Will & Co. Cafe</div>
  </footer>
</body>

</html>
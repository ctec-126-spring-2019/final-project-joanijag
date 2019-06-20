<?php include "includes/nav.inc.php"; ?>
  <!--end nav container-->
  <div class="container-fluid mt-5">
    <div class="row">
      <div class="col-md-12 text-center">
        <h2 class="mb-4">5 Day Forecast</h2>
        <div class="mb-4">
          <input calss="input" type="text" name="userInput" value="Vancouver" id="userInput">
          <button type="button" class="btn btn-primary" value="submit" id="btnForecast" onclick="weather()">5
            Day</button>
          <div id="result"></div>
        </div>
      </div>  
    </div>
    <div class="row">
      <div class="col-md-4"></div>
      <div class="col-md-4 text-center">
      <a name="sports" id="sports"></a>
        <h2>Sports</h2>
        <div id="sportsNews"></div>
        <div class="col-md-4"></div>
      </div>
    </div>
  </div>
  
   <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
  <script src="js/sportsWeather.js"></script>

</body>

</html>
function loadcontent() {

  var page = document.getElementById('mainpage');
  var aside = document.getElementById('sidebar');
  var content = '';

  var numOfArticles = 10;
  var numOfSide = 5;
  var counter = 0;

  while(counter < numOfArticles) {
    content = content + '<div class="jumbotron" style="margin-right: 25px;"> Hello There! <br /> </div>';
    counter++;
  }

  page.innerHTML = content;

  // RESET COUNTERS
  content = '';
  counter = 0;

  while(counter < numOfSide) {
    content = content + '<div class="jumbotron"> AFGFDA! <br /> </div>';
    counter++;
  }

  aside.innerHTML = content;

  // RESET COUNTERS
  content = '';
  counter = 0;

}

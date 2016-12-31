function loadProj() {

  var page = document.getElementById('mainpage');
  var content = '';

  var article = 'Hello There!';
  var article_text = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. ';

  var numOfArticles = 10;
  var numOfSide = 5;
  var counter = 0;

  // GENERATE MAIN CONTENT
  while(counter < numOfArticles) {
    content = content +
    ' <div class="jumbotron">' +
      ' <div class="article_title">' +
        ' <h3>' + article + '</h3> <br />' +
      ' </div>' +
      ' <img src="http://lorempixel.com/400/200">' +
      ' <div class="article_text">' +
        ' <p>' + article_text + '</p> <br />' +
      ' </div>' +
    ' </div>';
    counter++;
  }

  page.innerHTML = content;

  // RESET COUNTERS
  content = '';
  counter = 0;

}

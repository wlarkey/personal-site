function loadcontent() {

  var page = document.getElementById('mainpage');
  var aside = document.getElementById('sidebar');
  var content = '';

  var article = 'Hello There!';
  var article_text = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. ';

  var thumbnail = 'What\'s This?';
  var thumbnail_text = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.';

  var numOfArticles = 10;
  var numOfSide = 5;
  var counter = 0;

  while(counter < numOfArticles) {
    content = content + '<div class="jumbotron" style="margin-right: 25px;">' +
    ' <div class="article_title">' +
    ' <p>' + article + '</p> <br />' +
    ' </div>' +
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

  while(counter < numOfSide) {
    content = content + '<div class="jumbotron">' +
    ' <div class="article_title">' +
    ' <p>' + thumbnail + '</p> <br />' +
    ' </div>' +
    ' <div class="article_text">' +
    ' <p>' + thumbnail_text + '</p> <br />' +
    ' </div>' +
    ' </div>';
    counter++;
  }

  aside.innerHTML = content;

  // RESET COUNTERS
  content = '';
  counter = 0;

}

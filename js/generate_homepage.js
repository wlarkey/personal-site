function loadcontent() {

  var page = document.getElementById('mainpage');
  var aside = document.getElementById('sidebar');
  var opening = document.getElementById('welcome');
  var content = '';

  var headline = '"The secret of getting ahead is getting started."';
  var person = '- Mark Twain';

  var article = 'Hello There!';
  var article_text = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. ';

  var thumbnail = 'What\'s This?';
  var thumbnail_text = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.';

  var numOfArticles = 10;
  var numOfSide = 5;
  var counter = 0;

  // GENERATE OPENING CONTENT
  content += '<h1>Hello World!</h1> <h3>Wyatt Larkey\'s Offical Webpage</h3>' +
    '<div class="container">' +
      '<div id="pallette" class="row">' +
        '<div id="animInPic" class="col-lg-6 col-md-6">' +
          '<img src="pics/wlarkey.jpg">' +
        '</div>' +
        '<div id="animInText" class="col-lg-6 col-md-6 hidden-sm hidden-xs">' +
          '<h2> Quote of the Day</h2>' +
          '<h3>' + headline + '</h3>' +
          '<h4>' + person + '</h4>' +
        '</div>' +
      '</div>' +
    '</div>';

  opening.innerHTML = content;

  // RESET COUNTERS
  content = '';
  counter = 0;

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

  // GENERATE THUMBNAIL CONTENT
  while(counter < numOfSide) {
    content = content +

    '<div class="jumbotron">' +
      '<button type="button" class="btn btn-block">' +
        ' <div class="thumb_title">' +
          ' <h4>' + thumbnail + '</h4> <br />' +
        ' </div>' +
        ' <img src="http://lorempixel.com/400/200">' +
        ' <div class="thumb_text">' +
          ' <h6>' + thumbnail_text + '</h6> <br />' +
        ' </div>' +
      '</button>' +
    ' </div>';
    counter++;
  }

  aside.innerHTML = content;

  // RESET COUNTERS
  content = '';
  counter = 0;

}

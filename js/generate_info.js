function loadInfo() {

  var page = document.getElementById('mainpage');
  var opening = document.getElementById('welcome');
  var content = '';

  var article = 'Hello There!';
  var article_text = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. ';

  var numOfArticles = 10;
  var numOfSide = 5;
  var counter = 0;

  var file = 'resume.pdf';
  var github = '\'https://github.com/wlarkey\'';
  var linkedIn = '\'https://www.linkedin.com/in/wyatt-larkey-a8a15111a\'';

  // GENERATE OPENING CONTENT
  content += '<h1>Who is Wyatt Larkey?</h1> <h3>Here you can find my resume, and other professional information.</h3>' +
    '<div class="container">' +
      '<div id="pallette" class="row">' +

        '<div id="animInText" class="col-lg-4 col-md-4 col-sm-4 hidden-xs">' +
          '<button onclick="location.href=\'Wyatt_Larkey_resume.docx\'" type="button" class="btn btn-block">' +
              '<img src="pics/resume.jpg">' +
              '<h5>My Resume</h5>' +
          '</button>' +
        '</div>' +
        '<div id="animInText" class="col-lg-4 col-md-4 col-sm-4 hidden-xs">' +
          '<button onclick="window.open(' + github + ')" type="button" class="btn btn-block">' +
              '<img src="pics/github.jpg">' +
              '<h5>My GitHub</h5>' +
          '</button>' +
        '</div>' +
        '<div id="animInText" class="col-lg-4 col-md-4 col-sm-4 hidden-xs">' +
          '<button onclick="window.open(' + linkedIn + ')" type="button" class="btn btn-block">' +
              '<img src="pics/linkedin.jpg">' +
              '<h5>My LinkedIn</h5>' +
          '</button>' +
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
      ' <img class="img-thumbnail" src="http://lorempixel.com/400/200">' +
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

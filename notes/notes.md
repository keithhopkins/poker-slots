
### Set up Mocha Chai on front end

```sh
bower init
bower install mocha chai

mkdir test
touch test.html test.js
```
create any specific test files that you may want

cut and paste into __test.html__
```html
<!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>Slot Poker Tests</title>
      <link rel="stylesheet" media="all" href="../../bower_components/mocha/mocha.css">
    </head>
    <body>
      <div id="mocha"><p><a href=".">Index</a></p></div>
      <div id="messages"></div>
      <div id="fixtures"></div>
      <script src="../../bower_components/jquery/dist/jquery.js"></script>
      <script src="../../bower_components/mocha/mocha.js"></script>
      <script src="../../bower_components/chai/chai.js"></script>
      <script src="../js/game.js"></script>
      <script src="../js/handEvaluator.js"></script>
      <script>mocha.setup('bdd')</script>
      <script src="game-test.js"></script>
      <script src="hand-test.js"></script>
      <script src="player-test.js"></script>
      <script>mocha.run();</script>
    </body>
  </html>
```

remember to include the correct paths based on the path set in server/app.js 




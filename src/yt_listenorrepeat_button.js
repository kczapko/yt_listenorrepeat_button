(function() {

  function addListenOnRepeatButton() {
    var
      d = document,
      $player = d.getElementById('player'),
      $button = d.createElement('button'),
      $container = d.createElement('div'),
      dest = 'http://www.listenonrepeat.com/watch/?v=',
      data = {},
      onLORButtonClick = function(e) {
        d.location.search
          .replace('?','')
          .split('&')
          .map(function(a) {
            var s = a.split('=');
            data[s[0]] = s[1];
          });

        window.open(dest + data['v']);
      };

    $container.setAttribute('style','box-sizing: border-box; width: 640px; padding: 10px; border: 1px solid #e6e6e6;');
    $button.innerHTML = "ListenOnRepeat";
    $button.setAttribute('style','background: #162eae; color: #fff; padding: 7px 12px; border-radius: 2px; cursor: pointer; font-weight: bold;');

    $container.appendChild($button);
    $player.appendChild($container);
    $button.addEventListener('click', onLORButtonClick, false);
    $button.addEventListener('mouseover', function(e) {
      $button.style.backgroundColor = '#071871';
    }, false);
    $button.addEventListener('mouseout', function(e) {
      $button.style.backgroundColor = '#162eae';
    }, false);
  }

  setTimeout(function() {
    injectScript(addListenOnRepeatButton);
  }, 100);

})();

// 4. Conditionally load the webcomponents polyfill if needed by the browser.
// This feature detect will need to change over time as browsers implement
// different features.
var webComponentsSupported = ('registerElement' in document
    && 'import' in document.createElement('link')
    && 'content' in document.createElement('template'));

if (!webComponentsSupported) {
  console.log("web components non supportés essaie de chargement qd même");
  var script = document.createElement('script');
  script.async = true;
  script.src = '/bower_components/webcomponentsjs/webcomponents-loader.js';
  script.onload = finishLazyLoading;
  document.head.appendChild(script);

} else {
  finishLazyLoading();
}

function finishLazyLoading() {
  // (Optional) Use native Shadow DOM if it's available in the browser.
  window.Polymer = window.Polymer || {dom: 'shadow'};

  // 6. Fade splash screen, then remove.
  var onImportLoaded = function() {
    var loadEl = document.getElementById('splash');
    loadEl.addEventListener('transitionend', loadEl.remove);
    //rajouté car ne semble pas disparaitre
      document.body.removeChild(document.getElementById("splash"));

    document.body.classList.remove('loading');

    // App is visible and ready to load some data!
  };

  var link = document.querySelector('#bundle');

  // 5. Go if the async Import loaded quickly. Otherwise wait for it.
  // crbug.com/504944 - readyState never goes to complete until Chrome 46.
  // crbug.com/505279 - Resource Timing API is not available until Chrome 46.
  if (link.import && link.import.readyState === 'complete') {
    onImportLoaded();

  } else {
    link.addEventListener('load', onImportLoaded);
  }

}

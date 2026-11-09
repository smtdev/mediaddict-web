// Modo claro / oscuro. Sin elección guardada sigue al sistema; el botón guarda la elección en este navegador.
(function () {
  var KEY = 'mediaddict-tema';
  var root = document.documentElement;
  var media = matchMedia('(prefers-color-scheme: light)');
  var forced = null;
  function saved() {
    try { var v = localStorage.getItem(KEY); return v === 'light' || v === 'dark' ? v : null; } catch (e) { return null; }
  }
  function current() { return saved() || forced || (media.matches ? 'light' : 'dark'); }
  function apply() {
    var t = current();
    root.setAttribute('data-theme', t);
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      if (!meta.getAttribute('data-dark')) meta.setAttribute('data-dark', meta.getAttribute('content'));
      meta.setAttribute('content', t === 'light' ? '#faf5ec' : meta.getAttribute('data-dark'));
    }
  }
  apply();
  if (media.addEventListener) media.addEventListener('change', function () { if (!saved()) apply(); });
  document.addEventListener('DOMContentLoaded', function () {
    apply();
    document.addEventListener('click', function (e) {
      var b = e.target.closest && e.target.closest('[data-theme-toggle]');
      if (!b) return;
      var next = current() === 'light' ? 'dark' : 'light';
      forced = next;
      try { localStorage.setItem(KEY, next); } catch (err) { /* sin almacenamiento: vale solo para esta visita */ }
      apply();
    });
  });
})();

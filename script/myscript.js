// Add active class to the current button (highlight it)
var header = document.getElementById("myLISTADO");
var btns = header.getElementsByClassName("listado");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("activeli");
  current[0].className = current[0].className.replace(" activeli", "");
  this.className += " activeli";
  });
}
//sercheable 
  ;(function search () {
    ;[...document.querySelectorAll('.searchable')].forEach(makeSearchable)
    function makeSearchable ($searchable) {
      const $searchableItems = [...$searchable.querySelectorAll('.searchable-item')]
      const $search = $searchable.querySelector('input')
      $search.addEventListener('keyup', (e) => {
        $searchableItems.forEach(function ($el) {
          const text = $el.getAttribute('data-search') || $el.innerText
          const show = new RegExp(e.target.value, 'i').test(text)
          $el.style.display = show ? '' : 'none'
        })
      })
    }
  })()


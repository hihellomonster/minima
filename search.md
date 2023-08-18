<style>
.my-list {
 min-height: 100hv;
  overflow-y: auto;
}

.listado {
  border: none;
  outline: none;
  padding: 10px 16px;
  cursor: pointer;
  font-size: 18px;
}

/* Style the active class, and buttons on mouse-over */
.activeli, .listado:hover {
  background-color: #f1f1f1;
}
</style>

<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<div id="Search">
    <div class="searchable">
      <div class="w3-container" style="background-color: #f1f1f1;">
      <br><input type="text" autofocus placeholder=" 🔍 Buscar Sagas de Dragon Ball Super..."/><br>   
      </div>
      <div id="myLISTADO" class="my-list ">  
         <ul class="w3-ul">
        <li class="listado searchable-item activeli" >
       1
        </li>
            <li class="listado searchable-item" >
       2
        </li>
                    
      </ul>
      </div>
    </div>
</div>
  
      <script id="rendered-js" >
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
    </script>

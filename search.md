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
.activeli, .listado:hover {
  background-color: #f1f1f1;
}
</style>

<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<script src="https://hihellomonster.github.io/minima/script/myscript.js"></script>
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

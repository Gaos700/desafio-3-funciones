['azul', 'rojo', 'verde', 'amarillo'].forEach(function(id){
    document.getElementById(id).addEventListener('click', function(){
        this.style.backgroundColor = 'black';
    });
});
let colorGlobal = "#fff"; 

document.addEventListener('keydown', function(event){
  if(event.key === 'a'){
    colorGlobal = "pink";
  }else if(event.key === 's'){
    colorGlobal = "orange";
  }else if(event.key === 'd'){
    colorGlobal = "skyblue";
  }else if(event.key === 'w'){
    colorGlobal = "purple";
  }else if(event.key === 'o'){
    colorGlobal = "gray";
  }else if(event.key === 'e'){
    colorGlobal = "saddlebrown";
  }

  if(['a','s','d','w','o','e'].includes(event.key)){
    let divKey = document.getElementById('key');
    if(!divKey){
      divKey = document.createElement('div');
      divKey.id = "key";
      divKey.style.width = "200px";
      divKey.style.height = "200px";
      divKey.style.display = "inline-block";
      divKey.style.backgroundColor = colorGlobal;
      divKey.style.color = "#fff";
      document.body.appendChild(divKey);
    }else{
      divKey.style.backgroundColor = colorGlobal;
    }
  }
});
function removeLoader(){
    document.getElementById("hide").style.display = "none";
    
    setTimeout(()=>{
       let loader = document.getElementById('loader');
      let appear = document.getElementById('hide');
    // hide the loader
    loader.style = 'display: none;';
    appear.style = 'display: block;';
    },5000);  
  }  
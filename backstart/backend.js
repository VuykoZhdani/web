
    function menu_act(){
        var btn = document.getElementById("hamburger");
        if (btn.classList.contains("open")){
            btn.classList.remove("open");
        }else{
            btn.classList.add("open");
        }
    }

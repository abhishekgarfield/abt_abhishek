	// Sticky Navbar
    let header = document.querySelector('header');
    let menu = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

     
     
    window.addEventListener('scroll', () => {
        header.classList.toggle('shadow', window.scrollY > 0);
        let skills= document.querySelector(".skills");
        let skillsTop=skills.getBoundingClientRect().top;
        let windowHeight=window.innerHeight;
        if(skillsTop-windowHeight<-350)
        {
            var percent=document.querySelectorAll(".percent-bar");
            for(var i=0;i<percent.length;i++)
            { if( percent[i].classList.contains("html-bar"))
            {
                percent[i].style.animationName="percent"
            }
            else if(percent[i].classList.contains("css-bar"))
            {
                percent[i].style.animationName="percent1"
            }
            else if(percent[i].classList.contains("js-bar"))
            {
                percent[i].style.animationName="percent2"
            }
            else if(percent[i].classList.contains("react-bar"))
            {
                percent[i].style.animationName="percent3"
            }
            else if(percent[i].classList.contains("sql-bar"))
            {
                percent[i].style.animationName="percent4"
            }
            else if(percent[i].classList.contains("mongo-bar"))
            {
                percent[i].style.animationName="percent5"
            }
            else if(percent[i].classList.contains("node-bar"))
            {
                percent[i].style.animationName="percent6"
            }
                percent[i].classList.add("activebar");
            }
        }
    });
     
    menu.onclick = () => {
        navbar.classList.toggle('active');
    }
    window.onscroll = () => {
        navbar.classList.remove('active');
    }
     
    // Dark Mode
    let darkmode = document.querySelector('#darkmode');
     
    darkmode.onclick = () => {
        if(darkmode.classList.contains('bx-moon')){
            darkmode.classList.replace('bx-moon','bx-sun');
            document.body.classList.add('active');
        }else{
            darkmode.classList.replace('bx-sun','bx-moon');
            document.body.classList.remove('active');
        }
    }

    let flipcard= document.querySelectorAll(".flip-info");
    for(var i=0;i<flipcard.length;i++)
    {
        if((i+1)%2==0)
        {
            console.log("here")
            flipcard[i].style.backgroundColor="yellow"
            flipcard[i].style.color="black"
        }
    }

    var form = document.getElementById('sheetdb-form');
        form.addEventListener("submit", e => {
            var hrl=new FormData(form)
            console.log(hrl) 
          e.preventDefault();
          fetch(form.action, {
              method : "POST",
              body: new FormData(form),
          }).then(
              response => response.json()
          ).then((html) => {
            // you can put any JS code here
           if(html.created==1)
           {
           var hio= document.querySelectorAll("form#sheetdb-form :nth-child(-n+3)")
            for(var i=0;i<hio.length;i++)
            {
                hio[i].value="";
            }
            window.alert("message sent !")
           }

          });
        });
  

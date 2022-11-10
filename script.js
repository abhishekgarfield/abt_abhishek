	// Sticky Navbar
    let header = document.querySelector('header');
    let menu = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
     
     
    window.addEventListener('scroll', () => {
        header.classList.toggle('shadow', window.scrollY > 0);
        let skills= document.querySelector(".skills");
        let skillsTop=skills.getBoundingClientRect().top;
        let windowHeight=window.innerHeight;
        console.log(windowHeight);
        console.log(`${skillsTop} skills`)
        if(skillsTop-windowHeight<-350)
        {
            var percent=document.querySelectorAll(".percent-bar");
            for(var i=0;i<percent.length;i++)
            { if( percent[i].classList.contains("html-bar"))
            {
                percent[i].style.animationName="percent"
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

  

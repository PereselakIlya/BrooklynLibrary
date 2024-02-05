  window.addEventListener("load",()=>{
  document.getElementsByClassName("profileButton").item(0).style.display="unset";
  document.getElementsByClassName("profileButton").item(1).style.display="unset";
  document.getElementsByClassName("profileButtonAuth").item(0).style.display="none";
  document.getElementsByClassName("profileButtonAuth").item(1).style.display="none";
  document.getElementById("iconProfile").style.display="unset";
  document.getElementById("ProfileLet").style.display="none";
  document.getElementById("ProfileLet").innerText=" ";
});
function OpenProfWindow(){
  var Profwindow=document.getElementById("ProfileWindow");
  var dropMenu=document.getElementById("dropMenuWithoutAuth");
  Profwindow.style.width="600px"
  Profwindow.style.visibility="visible";
  Profwindow.style.opacity="1";
  Profwindow.style.zIndex=1;
  document.getElementsByClassName("infoBlockNumber").item(0).innerText=parseInt(localStorage.getItem("AmountOfAuth"),10);
  document.getElementsByClassName("infoBlockNumber").item(1).innerText=0;
  document.getElementsByClassName("infoBlockNumber").item(3).innerText=parseInt(localStorage.getItem("AmountOfBook"),10);
  dropMenu.style.width="0px";
  dropMenu.style.opacity="0";
}
function CloseProfWindow(){
  var Profwindow=document.getElementById("ProfileWindow");
  Profwindow.style.width="0px"
  Profwindow.style.visibility="hidden";
  Profwindow.style.opacity="0";
}
function appearMenu(){
    var menu=document.getElementById("adaptMenu");
    menu.style.visibility="visible";
    menu.style.opacity="1";
    var profile=document.getElementById("iconProfile");
    profile.style.zIndex="1";
    profile.style.marginTop="31px";
    var cross=document.getElementById("cross");
    cross.style.visibility="visible"
    cross.style.opacity="1";
}
function closeOverlay(){
    var menu=document.getElementById("adaptMenu");
    menu.style.visibility="hidden";
    menu.style.opacity="0";
    var cross=document.getElementById("cross");
    cross.style.visibility="hidden";
    cross.style.opacity="0";
}
function SliderRight(){
    var images=document.getElementsByClassName("imageItem");
    if(images.item(4).style.visibility=="hidden")
    {
        images.item(0).style.visibility="hidden";
        images.item(0).style.opacity="0";
        setTimeout(()=>images.item(0).style.display="none",2000);
        setTimeout(()=>images.item(0).style.width="0px",1000);
        images.item(1).style.visibility="hidden";
        images.item(1).style.opacity="0";
        setTimeout(()=>images.item(1).style.display="none",2000);
        setTimeout(()=>images.item(1).style.width="0px",1000);
        images.item(3).style.visibility="visible";
        images.item(3).style.opacity="1";
        setTimeout(()=>images.item(3).style.display="unset",1000);
        setTimeout(()=>images.item(3).style.width="450px",2000);
        images.item(4).style.visibility="visible";
        images.item(4).style.opacity="1";
        setTimeout(()=>images.item(4).style.display="unset",1000);
        setTimeout(()=>images.item(4).style.width="450px",2000);
    }
}
function SliderLeft(){
    var images=document.getElementsByClassName("imageItem");
    if(images.item(0).style.visibility=="hidden")
    {
        images.item(0).style.visibility="visible";
        images.item(0).style.opacity="1";
        setTimeout(()=>images.item(0).style.display="unset",1000);
        setTimeout(()=>images.item(0).style.width="450px",2000);
        images.item(1).style.visibility="visible";
        images.item(1).style.opacity="1";
        setTimeout(()=>images.item(1).style.display="unset",1000);
        setTimeout(()=>images.item(1).style.width="450px",2000);
        images.item(3).style.visibility="hidden";
        images.item(3).style.opacity="0";
        setTimeout(()=>images.item(3).style.display="none",2000);
        setTimeout(()=>images.item(3).style.width="0px",1000);
        images.item(4).style.visibility="hidden";
        images.item(4).style.opacity="0";
        setTimeout(()=>images.item(4).style.display="none",2000);
        setTimeout(()=>images.item(4).style.width="0px",1000);
    }
}
function SliderMiddle(){
    var images=document.getElementsByClassName("imageItem");
    if(images.item(0).style.visibility=="hidden"||images.item(4).style.visibility=="hidden")
    {
        images.item(0).style.visibility="hidden";
        images.item(0).style.opacity="0";
        setTimeout(()=>images.item(0).style.display="none",2000);
        setTimeout(()=>images.item(0).style.width="0px",1000);
        images.item(1).style.visibility="visible";
        images.item(1).style.opacity="1";
        setTimeout(()=>images.item(1).style.display="unset",1000);
        setTimeout(()=>images.item(1).style.width="450px",2000);
        images.item(3).style.visibility="visible";
        images.item(3).style.opacity="1";
        setTimeout(()=>images.item(3).style.display="unset",1000);
        setTimeout(()=>images.item(3).style.width="450px",2000);
        images.item(4).style.visibility="hidden";
        images.item(4).style.opacity="0";
        setTimeout(()=>images.item(4).style.display="none",2000);
        setTimeout(()=>images.item(4).style.width="0px",1000);
    }
}
var currentSlideIndex=0;
function SliderRightAdapt()
{
    var imagesRad=document.getElementsByClassName("adaptivityimageItem");
    var imagesarr=[];
    for(var i=0;i<5;++i)
    {
        imagesarr[i]=imagesRad.item(i);
    }
    if(imagesarr[4].style.visibility=="hidden")
    {
    imagesarr[currentSlideIndex].style.visibility="hidden";
    imagesarr[currentSlideIndex].style.opacity="0";
    currentSlideIndex+=1;
    imagesarr[currentSlideIndex].style.visibility="visible";
    imagesarr[currentSlideIndex].style.opacity="1";
    }
 }
 function SliderLeftAdapt()
 {
     var imagesRad=document.getElementsByClassName("adaptivityimageItem");
     var imagesarr=[];
     for(var i=0;i<5;++i)
     {
         imagesarr[i]=imagesRad.item(i);
     }
     if(imagesarr[0].style.visibility=="hidden")
     {
     imagesarr[currentSlideIndex].style.visibility="hidden";
     imagesarr[currentSlideIndex].style.opacity="0";
     currentSlideIndex-=1;
     imagesarr[currentSlideIndex].style.visibility="visible";
     imagesarr[currentSlideIndex].style.opacity="1";
     }
  }
  function SliderAdapt0(){
    var imagesRad=document.getElementsByClassName("adaptivityimageItem");
    var numarr=[1,2,3,4];
    if(imagesRad.item(0).style.visibility=="hidden")
    {
    imagesRad.item(0).style.visibility="visible";
    imagesRad.item(0).style.opacity="1";
    for(var i=0;i<numarr.length;++i)
    {
    imagesRad.item(numarr[i]).style.visibility="hidden";
    imagesRad.item(numarr[i]).style.opacity="0";
    }
    }
  }
  function SliderAdapt1(){
    var imagesRad=document.getElementsByClassName("adaptivityimageItem");
    var numarr=[0,2,3,4];
    if(imagesRad.item(1).style.visibility=="hidden")
    {
    imagesRad.item(1).style.visibility="visible";
    imagesRad.item(1).style.opacity="1";
    for(var i=0;i<numarr.length;++i)
    {
    imagesRad.item(numarr[i]).style.visibility="hidden";
    imagesRad.item(numarr[i]).style.opacity="0";
    }
    }
  }
  function SliderAdapt2(){
    var imagesRad=document.getElementsByClassName("adaptivityimageItem");
    var numarr=[0,1,3,4];
    if(imagesRad.item(2).style.visibility=="hidden")
    {
    imagesRad.item(2).style.visibility="visible";
    imagesRad.item(2).style.opacity="1";
    for(var i=0;i<numarr.length;++i)
    {
    imagesRad.item(numarr[i]).style.visibility="hidden";
    imagesRad.item(numarr[i]).style.opacity="0";
    }
    }
  }
  function SliderAdapt3(){
    var imagesRad=document.getElementsByClassName("adaptivityimageItem");
    var numarr=[0,1,2,4];
    if(imagesRad.item(3).style.visibility=="hidden")
    {
    imagesRad.item(3).style.visibility="visible";
    imagesRad.item(3).style.opacity="1";
    for(var i=0;i<numarr.length;++i)
    {
    imagesRad.item(numarr[i]).style.visibility="hidden";
    imagesRad.item(numarr[i]).style.opacity="0";
    }
    }
  }
  function SliderAdapt4(){
    var imagesRad=document.getElementsByClassName("adaptivityimageItem");
    var numarr=[0,1,2,3];
    if(imagesRad.item(4).style.visibility=="hidden")
    {
    imagesRad.item(4).style.visibility="visible";
    imagesRad.item(4).style.opacity="1";
    for(var i=0;i<numarr.length;++i)
    {
    imagesRad.item(numarr[i]).style.visibility="hidden";
    imagesRad.item(numarr[i]).style.opacity="0";
    }
    }
  }
  function Spring(){
    var winter=document.getElementById("Winter");
    var spring=document.getElementById("Spring");
    var summer=document.getElementById("Summer");
    var autumn=document.getElementById("Autumn");
    var seasons=[winter,spring,summer,autumn];
    for(var i=0;i<seasons.length;++i)
    {
        if(i!=1)
        {
            seasons[i].style.opacity="0";
            seasons[i].style.visibility="hidden";
        }
        else
        {
            seasons[i].style.opacity="1";
            seasons[i].style.visibility="visible";
        }
    }
  }
  function Summer(){
    var winter=document.getElementById("Winter");
    var spring=document.getElementById("Spring");
    var summer=document.getElementById("Summer");
    var autumn=document.getElementById("Autumn");
    var seasons=[winter,spring,summer,autumn];
    for(var i=0;i<seasons.length;++i)
    {
        if(i!=2)
        {
            seasons[i].style.opacity="0";
            seasons[i].style.visibility="hidden";
        }
        else
        {
            seasons[i].style.opacity="1";
            seasons[i].style.visibility="visible";
        }
    }
  }
  function Autumn(){
    var winter=document.getElementById("Winter");
    var spring=document.getElementById("Spring");
    var summer=document.getElementById("Summer");
    var autumn=document.getElementById("Autumn");
    var seasons=[winter,spring,summer,autumn];
    for(var i=0;i<seasons.length;++i)
    {
        if(i!=3)
        {
            seasons[i].style.opacity="0";
            seasons[i].style.visibility="hidden";
        }
        else
        {
            seasons[i].style.opacity="1";
            seasons[i].style.visibility="visible";
        }
    }
  }
  function Winter(){
    var winter=document.getElementById("Winter");
    var spring=document.getElementById("Spring");
    var summer=document.getElementById("Summer");
    var autumn=document.getElementById("Autumn");
    var seasons=[winter,spring,summer,autumn];
    for(var i=0;i<seasons.length;++i)
    {
        if(i!=0)
        {
            seasons[i].style.opacity="0";
            seasons[i].style.visibility="hidden";
        }
        else
        {
            seasons[i].style.opacity="1";
            seasons[i].style.visibility="visible";
        }
    }
  }
  function openProf()
  {
    document.getElementById("dropMenuWithoutAuth").style.opacity="1";
    document.getElementById("dropMenuWithoutAuth").style.width="80px";
  }
  function Register()
  {
    document.getElementById("ModalRegister").style.opacity="1";
    document.getElementById("ModalRegister").style.zIndex="1";
    document.getElementById("ModalRegister").style.width="250px";
    document.getElementById("ModalLogIn").style.zIndex="0";
    document.getElementById("dropMenuWithoutAuth").style.opacity="0";
    document.getElementById("dropMenuWithoutAuth").style.width="0px";
  }
  function RegClose()
  {
    document.getElementById("ModalRegister").style.opacity="0";
    document.getElementById("ModalRegister").style.zIndex="0";
    document.getElementById("ModalRegister").style.width="0px"; 
 }
 function LogIn(){
    var BuyButton=document.getElementsByClassName("seasonBookButton");
    if(document.getElementById("ProfileLet").style.display!="none")
    { 
      for(var i=0;i<BuyButton.length;++i)
      {
        document.body.addEventListener("click",evt=>{
          if(evt.target.className=="seasonBookButton")
          {
          evt.target.className="seasonBookButtonOwn";
          evt.target.innerText="Own";
          localStorage.setItem("AmountOfBook",(parseInt(localStorage.getItem("AmountOfBook"),10)+1).toString());
      }});
      }
    }
    else
    {
      document.getElementById("ModalLogIn").style.opacity="1";
      document.getElementById("ModalLogIn").style.zIndex="1";
      document.getElementById("ModalLogIn").style.width="250px";
      document.getElementById("ModalRegister").style.zIndex="0";
      document.getElementById("dropMenuWithoutAuth").style.opacity="0";
      document.getElementById("dropMenuWithoutAuth").style.width="0px";
    }
  }
  function LogOut()
  {
    document.getElementById("ProfileLet").innerText=" ";
    document.getElementById("iconProfile").style.display="unset";
    document.getElementById("ProfileLet").style.display="none";
    document.getElementById("dropMenuWithoutAuth").style.opacity="0";
    document.getElementById("dropMenuWithoutAuth").style.width="0px"; 
    window.scrollTo(0,0);
  }
  function LogInModClose()
  {
    document.getElementById("ModalLogIn").style.opacity="0";
    document.getElementById("ModalLogIn").style.zIndex="0";
    document.getElementById("ModalLogIn").style.width="0px";
  }
  function AccountRegistration()
  {
    var name=document.getElementById("firstNameInput");
    var lastname=document.getElementById("LastNameInput");
    var email=document.getElementById("EmailInput");
    var password=document.getElementById("PasswordInput");
    localStorage.setItem("name",name.value);
    localStorage.setItem("lastname",lastname.value);
    localStorage.setItem("email",email.value);
    localStorage.setItem("password",password.value);
    return true;
  }
  function AccountLogIn()
  {
    var emorrcar=document.getElementById("TextEmOrRCardInput");
    var password=document.getElementById("LogPasswordInput");
    localStorage.setItem("emorcar",emorrcar.value);
    localStorage.setItem("LastSavedpassword",password.value);
    if(localStorage.getItem("emorcar")==localStorage.getItem("email")&&localStorage.getItem("LastSavedpassword")==localStorage.getItem("password"))
    {
      localStorage.setItem("AmountOfAuth",(parseInt(localStorage.getItem("AmountOfAuth"),10)+1).toString());
      document.getElementsByClassName("profileButton").item(0).style.display="none";
      document.getElementsByClassName("profileButton").item(1).style.display="none";
      document.getElementsByClassName("profileButtonAuth").item(0).style.display="unset";
      document.getElementsByClassName("profileButtonAuth").item(1).style.display="unset";
      document.getElementById("ProfileLet").innerText=localStorage.getItem("name").charAt(0)+localStorage.getItem("lastname").charAt(0);
      document.getElementById("iconProfile").style.display="none";
      document.getElementById("ProfileLet").style.display="flex";
      LogInModClose();
      window.scrollTo(0,0);
      return false;
    }
    else
    {
      emorrcar.style.color="red";
      password.style.color="red";
      return false;
    }
  }
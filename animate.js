

var i=0;
var para = document.getElementsByClassName("data");
var skil = document.getElementsByClassName("skilCon");
var nav = document.getElementsByTagName('li');
function isScrolledToView1(headi)
{
  var docTop =  window.pageYOffset;
    var docBottom = docTop+window.innerHeight;
    var rect = headi.getBoundingClientRect();
    var eleTop = rect.top;
     var eleBottom = eleTop+rect.height;
    return ((eleBottom<=docBottom) && (eleTop>=docTop))
}

window.onscroll = scroll;

function scroll(e)
{
  if(i<4)
  {
  var headi = document.getElementsByClassName("headingDiv"+i);
  if(i==0 && isScrolledToView1(headi[0]))
  {
    nav[0].setAttribute("style","border-bottom: 0px");
    nav[1].setAttribute("style","border-bottom: 0.3vw solid white;");
    // console.log("one");
    headi[0].classList.add("animateHeading");
    para[0].classList.add("animatePara");
    i++;
  }
  else {
    if(isScrolledToView1(headi[0]))
    {
      // console.log("two");
      for(var j=0;j<i;j++)
      {
      nav[j].setAttribute("style","border-bottom: 0px");
      }
      nav[i].setAttribute("style","border-bottom: 0.3vw solid white;");
      headi[0].classList.add("animateHeading"+i);
      if(i==1)
      {
      skil[0].classList.add("skilAnim");
      var toprows = skil[0].children;
      for(var j=0;j<toprows.length;j++)
      {
        if(j==0)
        {
        var progressChild = toprows[0].children;
        progressChild[0].setAttribute("data-anim","base wrapper");
        var childs = progressChild[0].children;
        childs[0].setAttribute("data-anim","base left");
        childs[1].setAttribute("data-anim","base right");
        }
        else {
          var num = j+1;
          var progressChild = toprows[j].children;
          progressChild[0].setAttribute("data-anim","base"+num+" wrapper"+num);
          var childs = progressChild[0].children;
          childs[0].setAttribute("data-anim","base"+num+" left"+num);
          childs[1].setAttribute("data-anim","base"+num+" right"+num);

        }

      }
      }
      i++;
    }
  }
}



}

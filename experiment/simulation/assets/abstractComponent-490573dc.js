import{_ as u,o as r,c as d,a as e,g as m,d as a,w as o,v as l,i as p,F as b}from"./index-7c0498ac.js";const v={data(){return{}},methods:{incorrect(n){var t=document.getElementById("snackbar");t.innerHTML=n,t.style.backgroundColor="red",t.className="show",setTimeout(function(){t.className=t.className.replace("show","")},3e3)},correct1(){var n=document.getElementById("snackbar");n.innerHTML="Correct",n.style.backgroundColor="green",n.className="show",setTimeout(function(){n.className=n.className.replace("show","")},3e3)},validate_one(){this.one.trim()=="abstract"&&this.two.trim()=="abstract"&&this.three.trim()=="sunroof"&&this.four.trim()=="Yamaha"?(this.correct1(),alert("Correct")):(this.incorrect("Try again"),alert("Incorrect, please try again"))}}},c={class:"flex-row"},y={style:{width:"50%"}},f={class:"outbox"},g={id:"buttons",class:"relative"},k={key:0,class:"navitem"};function w(n,t,x,N,T,i){return r(),d(b,null,[t[17]||(t[17]=e("header",{style:{padding:"20px"}},[e("h5",null,"HELP"),e("h1",null,"Abstract")],-1)),t[18]||(t[18]=e("div",{id:"snackbar"},"Some text some message..",-1)),e("main",null,[e("div",c,[t[16]||(t[16]=m(`<div style="width:50%;" data-v-cb59de46><h2 data-v-cb59de46>Theory</h2><div class="outbox" data-v-cb59de46><pre data-v-cb59de46>    <span id="comment" data-v-cb59de46>//an abstract class </span>
  public abstract class Animal {

  public abstract void makeSound();
  
  }
  <span id="comment" data-v-cb59de46>//concrete class that extends <br data-v-cb59de46> Animal and implements its abstract method </span>
  public class Dog extends Animal {

  public void makeSound() {

      System.out.println(&quot;Wolf&quot;);
    
    }
  }

                </pre></div><div class="content" data-v-cb59de46><p data-v-cb59de46>An abstract class is a class that cannot be instantiated i.e., cannot create an object of the abstract class directly. It provides a blueprint or template for other classes to extend and implement its abstract methods. </p></div></div>`,1)),e("div",y,[t[15]||(t[15]=e("h2",null,"Try it yourself",-1)),e("div",f,[t[7]||(t[7]=e("br",null,null,-1)),t[8]||(t[8]=a()),t[9]||(t[9]=e("br",null,null,-1)),t[10]||(t[10]=e("span",{id:"comment"},"//Initialize an 'abstract' class Bike with an 'abstract' method 'sunroof'",-1)),e("p",null,[o(e("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=s=>n.one=s)},null,512),[[l,n.one]]),t[4]||(t[4]=a("class Bike"))]),t[11]||(t[11]=e("p",null,"{",-1)),e("p",null,[o(e("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=s=>n.two=s)},null,512),[[l,n.two]]),t[5]||(t[5]=a(" void ")),o(e("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=s=>n.three=s)},null,512),[[l,n.three]]),t[6]||(t[6]=a(";"))]),t[12]||(t[12]=e("p",null,"void horn();",-1)),t[13]||(t[13]=e("p",null,"}",-1)),t[14]||(t[14]=e("br",null,null,-1))]),e("button",{class:"button-9",onClick:t[3]||(t[3]=s=>i.validate_one())},"Validate")])]),e("footer",null,[e("div",g,[n.currentStep===1?(r(),d("button",k,"Next")):p("",!0)])])])],64)}const V=u(v,[["render",w],["__scopeId","data-v-cb59de46"]]);export{V as default};

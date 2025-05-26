import{_ as u,o as a,c as r,a as e,g as p,d as l,w as o,v as i,i as m,F as v}from"./index-7c0498ac.js";const b={data(){return{}},methods:{incorrect(n){var t=document.getElementById("snackbar");t.innerHTML=n,t.style.backgroundColor="red",t.className="show",setTimeout(function(){t.className=t.className.replace("show","")},3e3)},correct1(){var n=document.getElementById("snackbar");n.innerHTML="Correct",n.style.backgroundColor="green",n.className="show",setTimeout(function(){n.className=n.className.replace("show","")},3e3)},validate_one(){this.one.trim()=="interface"&&this.two.trim()=="implements"&&this.three.trim()=="showRoom"?(this.correct1(),alert("Correct")):(this.incorrect("Try again"),alert("Incorrect, please try again"))}}},f={class:"flex-row"},y={style:{width:"50%"}},g={class:"outbox"},w={id:"buttons",class:"relative"},k={key:0,class:"navitem"};function N(n,t,x,C,V,d){return a(),r(v,null,[t[23]||(t[23]=e("header",{style:{padding:"20px"}},[e("h5",null,"HELP"),e("h1",null,"Interface")],-1)),t[24]||(t[24]=e("div",{id:"snackbar"},"Some text some message..",-1)),e("main",null,[e("div",f,[t[22]||(t[22]=p(`<div style="width:50%;" data-v-a7b2c03d><h2 data-v-a7b2c03d>Theory</h2><div class="outbox" data-v-a7b2c03d><pre data-v-a7b2c03d><span id="comment" data-v-a7b2c03d>//an interface structure</span>
public interface MyInterface {
  public void doSomething();
  public int getValue();
  }

public class MyClass implements MyInterface {
  public void doSomething() {
   
  }
  public int getValue() {
      
  }
}
<span id="comment" data-v-a7b2c03d>//Any class that implements this interface must provide implementations
   for both methods.</span>

                </pre></div><div class="content" data-v-a7b2c03d><p data-v-a7b2c03d> An interface is a blueprint of a class that specifies a set of methods and properties that a class must implement. </p></div></div>`,1)),e("div",y,[t[21]||(t[21]=e("h2",null,"Try it yourself",-1)),e("div",g,[t[9]||(t[9]=e("br",null,null,-1)),t[10]||(t[10]=l()),t[11]||(t[11]=e("br",null,null,-1)),t[12]||(t[12]=e("span",{id:"comment"},"//Initialize an 'interface' Bike ",-1)),e("p",null,[t[4]||(t[4]=l("public ")),o(e("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=s=>n.one=s)},null,512),[[i,n.one]]),t[5]||(t[5]=l(" Bike"))]),t[13]||(t[13]=e("p",null,"{",-1)),t[14]||(t[14]=e("p",null,"void display_name();",-1)),t[15]||(t[15]=e("p",null,"}",-1)),t[16]||(t[16]=e("span",{id:"comment"},"//Create a class 'showRoom' that implements the interface.",-1)),e("p",null,[t[6]||(t[6]=l(" class showRoom ")),o(e("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=s=>n.two=s)},null,512),[[i,n.two]]),t[7]||(t[7]=l()),o(e("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=s=>n.three=s)},null,512),[[i,n.three]]),t[8]||(t[8]=l(" { "))]),t[17]||(t[17]=e("p",null,"public void display_name() { ",-1)),t[18]||(t[18]=e("p",null,"System.out.println(name); }",-1)),t[19]||(t[19]=e("p",null,"}",-1)),t[20]||(t[20]=e("br",null,null,-1))]),e("button",{class:"button-9",onClick:t[3]||(t[3]=s=>d.validate_one())},"Validate")])]),e("footer",null,[e("div",w,[n.currentStep===1?(a(),r("button",k,"Next")):m("",!0)])])])],64)}const I=u(b,[["render",N],["__scopeId","data-v-a7b2c03d"]]);export{I as default};

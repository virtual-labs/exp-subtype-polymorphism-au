import{_ as a,o as s,c as i,a as t,d as o,w as u,v as d,i as m,F as p}from"./index-7c0498ac.js";const c={data(){return{}},methods:{incorrect(n){var e=document.getElementById("snackbar");e.innerHTML=n,e.style.backgroundColor="red",e.className="show",setTimeout(function(){e.className=e.className.replace("show","")},3e3)},correct1(){var n=document.getElementById("snackbar");n.innerHTML="Correct",n.style.backgroundColor="green",n.className="show",setTimeout(function(){n.className=n.className.replace("show","")},3e3)},validate_one(){this.one.trim()=="8"?(this.correct1(),alert("Correct")):(this.incorrect("Try again"),alert("Incorrect, please try again"))}}},v={class:"flex-row"},g={style:{width:"50%"}},y={class:"outbox"},x={id:"buttons",class:"relative"},b={key:0,class:"navitem"};function w(n,e,f,k,h,r){return s(),i(p,null,[e[12]||(e[12]=t("header",{style:{padding:"20px"}},[t("h5",null,"HELP"),t("h1",null,"Null Pointer Exception")],-1)),e[13]||(e[13]=t("div",{id:"snackbar"},"Some text some message..",-1)),t("main",null,[t("div",v,[e[11]||(e[11]=t("div",{style:{width:"50%"}},[t("h2",null,"Theory"),t("div",{class:"outbox"},[t("pre",null,`1.  String str = null;
2.  int length = str.length();`),t("span",{id:"comment"},"//2nd line will throw a NullPointerException because we declare a string variable str and initialize it to null. Then, we try to call the length() method on str")]),t("div",{class:"content"},[t("p",null,"Null Pointer Exception is a kind of run time exception that is thrown when the java program attempts to use the object reference that that contains the null value. ")])],-1)),t("div",g,[e[10]||(e[10]=t("h2",null,"Try it yourself",-1)),t("div",y,[e[6]||(e[6]=t("br",null,null,-1)),e[7]||(e[7]=o()),e[8]||(e[8]=t("br",null,null,-1)),e[9]||(e[9]=t("span",{id:"comment"},"//Initialize a class 'Bike'",-1)),t("pre",null,[e[2]||(e[2]=o(`1.class Bike
2.{
3.
4.int arr[] = null;
5.    public static void main (String[] args)                    
6.    {
7.    Bike mybike = new Bike();                  
8.    System.out.println(myBike.arr.length());    
9.    }
10.}
`)),u(t("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=l=>n.one=l)},null,512),[[d,n.one]]),e[3]||(e[3]=o(`
`)),e[4]||(e[4]=t("span",{id:"comment"},"//In which line excption occurs (eg:1 or 2)",-1)),e[5]||(e[5]=o(`
              `))])]),t("button",{class:"button-9",onClick:e[1]||(e[1]=l=>r.validate_one())},"Validate")])]),t("footer",null,[t("div",x,[n.currentStep===1?(s(),i("button",b,"Next")):m("",!0)])])])],64)}const B=a(c,[["render",w],["__scopeId","data-v-26e0fce4"]]);export{B as default};

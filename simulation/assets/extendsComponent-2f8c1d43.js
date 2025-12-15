import{_ as d,o as l,c as a,a as s,d as n,w as i,v as u,i as m,F as p}from"./index-7c0498ac.js";const v={data(){return{}},methods:{incorrect(t){var e=document.getElementById("snackbar");e.innerHTML=t,e.style.backgroundColor="red",e.className="show",setTimeout(function(){e.className=e.className.replace("show","")},3e3)},correct1(){var t=document.getElementById("snackbar");t.innerHTML="Correct",t.style.backgroundColor="green",t.className="show",setTimeout(function(){t.className=t.className.replace("show","")},3e3)},validate_one(){this.one.trim()=="Dog extends Animal"?(this.correct1(),alert("Correct")):(this.incorrect("Try again"),alert("Incorrect, please try again"))}}},b={class:"flex-row"},x={style:{width:"50%"}},y={class:"outbox"},c={id:"buttons",class:"relative"},g={key:0,class:"navitem"};function f(t,e,k,w,N,r){return l(),a(p,null,[e[13]||(e[13]=s("header",{style:{padding:"20px"}},[s("h5",null,"HELP"),s("h1",null,"Extends Keyword")],-1)),e[14]||(e[14]=s("div",{id:"snackbar"},"Some text some message..",-1)),s("main",null,[s("div",b,[e[12]||(e[12]=s("div",{style:{width:"50%"}},[s("h2",null,"Theory"),s("div",{class:"outbox"},[s("pre",null,`class Subclass extends Superclass {
// Subclass properties and methods
}
                `)]),s("div",{class:"content"},[s("p",null,"Extends keyword is used to create a subclass (or derived class) of an existing class. The subclass inherits all the properties and methods of the superclass (or base class), and can also add its own properties and methods. ")])],-1)),s("div",x,[e[11]||(e[11]=s("h2",null,"Try it yourself",-1)),s("div",y,[e[8]||(e[8]=s("br",null,null,-1)),e[9]||(e[9]=n()),e[10]||(e[10]=s("br",null,null,-1)),s("pre",null,[e[4]||(e[4]=n(`class Animal {
  public void makeSound() {
    System.out.println("Animal is making a sound");
}
}
        
`)),e[5]||(e[5]=s("span",{id:"comment"},"//Create a class 'Dog' that extends 'Animal'",-1)),e[6]||(e[6]=n(`
`)),s("p",null,[e[2]||(e[2]=n("class ")),i(s("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=o=>t.one=o)},null,512),[[u,t.one]]),e[3]||(e[3]=n("{"))]),e[7]||(e[7]=n(` 
        public void makeSound() {
        System.out.println("Dog is barking");
    }
}
`))])]),s("button",{class:"button-9",onClick:e[1]||(e[1]=o=>r.validate_one())},"Validate")])]),s("footer",null,[s("div",c,[t.currentStep===1?(l(),a("button",g,"Next")):m("",!0)])])])],64)}const C=d(v,[["render",f],["__scopeId","data-v-36d84ed1"]]);export{C as default};

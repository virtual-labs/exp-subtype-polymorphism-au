"use strict";(self["webpackChunkexp_7"]=self["webpackChunkexp_7"]||[]).push([[213,717],{1717:function(e,t,n){n.r(t),n.d(t,{default:function(){return k}});var o=n(3396),l=n(9242);const a=e=>((0,o.dD)("data-v-742c3880"),e=e(),(0,o.Cn)(),e),i=a((()=>(0,o._)("header",{style:{padding:"20px"}},[(0,o._)("h5",null,"HELP"),(0,o._)("h1",null,"Creating Arrays")],-1))),s=a((()=>(0,o._)("div",{id:"snackbar"},"Some text some message..",-1))),c={class:"flex-row"},r=(0,o.uE)('<div style="width:30%;" data-v-742c3880><h2 data-v-742c3880>Theory</h2><div class="outbox" data-v-742c3880><p data-v-742c3880>int a[]=new int[4];</p><span id="comment" data-v-742c3880>//variable declaration and instantiation</span><p data-v-742c3880>a[0]=33</p><p data-v-742c3880>a[1]=6</p><p data-v-742c3880>a[2]=22</p><p data-v-742c3880>a[3]=3</p><span id="comment" data-v-742c3880>//variable initialization</span><p data-v-742c3880>int b[]={22,4,5,6};</p><span id="comment" data-v-742c3880>//variable declaration and initialization of singledimentional</span><p data-v-742c3880>int arr[][]={ {1,2,3},{2,4,5},{4,4,5} };</p><span id="comment" data-v-742c3880>//variable declaration and initialization of multidimentional</span><br data-v-742c3880></div><div class="content" data-v-742c3880><p data-v-742c3880> Array is a collection of elements of the same data type. An array has a fixed size .To declare an array you need to specify the data type of the elements it will hold and the number of elements it will contain. </p></div></div>',1),u={style:{width:"70%"}},p=a((()=>(0,o._)("h2",null,"Try it yourself",-1))),d={class:"outbox"},m=a((()=>(0,o._)("br",null,null,-1))),b=a((()=>(0,o._)("br",null,null,-1))),h=a((()=>(0,o._)("span",{id:"comment"},'//Declare a singledimentional array "key" of type float with size 5',-1))),v=a((()=>(0,o._)("br",null,null,-1))),_={id:"buttons",class:"relative"},y={key:0,class:"navitem"};function g(e,t,n,a,g,C){return(0,o.wg)(),(0,o.iD)(o.HY,null,[i,s,(0,o._)("main",null,[(0,o._)("div",c,[r,(0,o._)("div",u,[p,(0,o._)("div",d,[(0,o.wy)((0,o._)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=t=>e.one=t)},null,512),[[l.nr,e.one]]),(0,o.Uk)(),(0,o.wy)((0,o._)("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=t=>e.two=t)},null,512),[[l.nr,e.two]]),(0,o.Uk)(" = "),(0,o.wy)((0,o._)("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=t=>e.three=t)},null,512),[[l.nr,e.three]]),(0,o.Uk)(),(0,o.wy)((0,o._)("input",{type:"text","onUpdate:modelValue":t[3]||(t[3]=t=>e.four=t)},null,512),[[l.nr,e.four]]),(0,o.Uk)("; "),m,b,h,v]),(0,o._)("button",{class:"button-9",onClick:t[4]||(t[4]=e=>C.validate_one())},"Validate")])]),(0,o._)("footer",null,[(0,o._)("div",_,[1===e.currentStep?((0,o.wg)(),(0,o.iD)("button",y,"Next")):(0,o.kq)("",!0)])])])],64)}var C={data(){return{}},methods:{incorrect(e){var t=document.getElementById("snackbar");t.innerHTML=e,t.style.backgroundColor="red",t.className="show",setTimeout((function(){t.className=t.className.replace("show","")}),3e3)},correct1(){var e=document.getElementById("snackbar");e.innerHTML="Correct",e.style.backgroundColor="green",e.className="show",setTimeout((function(){e.className=e.className.replace("show","")}),3e3)},validate_one(){"float"==this.one.trim()&&"key[]"==this.two.trim()&&"new"==this.three.trim()&&"float[5]"==this.four.trim()?(this.correct1(),alert("Correct ")):(this.incorrect("Try again"),alert("Incorrect, please try again"))}}},w=n(89);const j=(0,w.Z)(C,[["render",g],["__scopeId","data-v-742c3880"]]);var k=j},2213:function(e,t,n){n.r(t),n.d(t,{default:function(){return bt}});n(7658);var o=n(3396),l=n(7139),a=n(9242);const i={class:"app"},s={id:"buttons",class:"relative"};function c(e,t,n,c,r,u){return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("main",i,[(0,o._)("button",{onClick:t[0]||(t[0]=e=>r.componentSelect="InstructionsView"),style:(0,l.j5)("InstructionsView"===r.componentSelect?"background-color: #55acee":"")},"1. Instructions",4),(0,o._)("button",{onClick:t[1]||(t[1]=e=>r.componentSelect="ClassView"),style:(0,l.j5)("ClassView"===r.componentSelect?"background-color: #55acee":"")},"2. Class diagram",4),(0,o._)("button",{onClick:t[2]||(t[2]=e=>r.componentSelect="PersonView"),style:(0,l.j5)("PersonView"===r.componentSelect?"background-color: #55acee":"")},"3. Person Class",4),(0,o._)("button",{onClick:t[3]||(t[3]=e=>r.componentSelect="CustomerView"),style:(0,l.j5)("CustomerView"===r.componentSelect?"background-color: #55acee":"")},"4. Customer Class",4),(0,o._)("button",{onClick:t[4]||(t[4]=e=>r.componentSelect="ClerkView"),style:(0,l.j5)("ClerkView"===r.componentSelect?"background-color: #55acee":"")},"5. Exec Class",4),(0,o._)("button",{onClick:t[5]||(t[5]=e=>r.componentSelect="ReservationView"),style:(0,l.j5)("ReservationView"===r.componentSelect?"background-color: #55acee":"")}," 6. Reservation Class ",4),(0,o._)("button",{onClick:t[6]||(t[6]=e=>r.componentSelect="VehicleView"),style:(0,l.j5)("VehicleView"===r.componentSelect?"background-color: #55acee":"")},"7. Vehicle Class",4),(0,o._)("button",{onClick:t[7]||(t[7]=e=>r.componentSelect="ReservationSystemView"),style:(0,l.j5)("ReservationSystemView"===r.componentSelect?"background-color: #55acee":"")}," 8. Test Driver Class ",4),((0,o.wg)(),(0,o.j4)(o.Ob,null,[((0,o.wg)(),(0,o.j4)((0,o.LL)(r.componentSelect),{onTestdriverComplete:u.testDriverCallBack,onInstructionsRead:u.instructionsReadCallback},null,40,["onTestdriverComplete","onInstructionsRead"]))],1024))]),(0,o.wy)((0,o._)("footer",null,[(0,o._)("div",s,[(0,o._)("button",{class:"navitem",onClick:t[8]||(t[8]=t=>e.$router.push("/method-completion"))},"Next")])],512),[[a.F8,r.testdriver_completed]])],64)}var r=n(4151),u=n(8603),p=n(7524);const d=e=>((0,o.dD)("data-v-316a0d68"),e=e(),(0,o.Cn)(),e),m={class:"app"},b=d((()=>(0,o._)("div",{class:"codebox"},[(0,o._)("pre",null,"import java.util.Date;\n\npublic class Reservation {\n\tprivate final int reservationID;\n\tprivate Customer customerObj;\n\tprivate Vehicle vehicleObj;\n\tprivate String contractStatus;\n\tprivate Date bookingDate;\n\tprivate Date releaseDate;\n\tprivate static int reservationCount=0;\n\t\n\tpublic Reservation(Customer customerObj, Vehicle vehicleObj) {\n\t\tthis.customerObj = customerObj;\n\t\tthis.vehicleObj = vehicleObj;\n\t\treservationCount++;\n\t\tthis.reservationID=reservationCount;\n\t}\n\n\tpublic String getContractStatus() {\n\t\treturn contractStatus;\n\t}\n\n\tpublic void setContractStatus(String contractStatus) {\n\t\tthis.contractStatus = contractStatus;\n\t}\n\n\tpublic Date getBookingDate() {\n\t\treturn bookingDate;\n\t}\n\n\tpublic void setBookingDate(Date bookingDate) {\n\t\tthis.bookingDate = bookingDate;\n\t}\n\n\tpublic Date getReleaseDate() {\n\t\treturn releaseDate;\n\t}\n\t\n\tpublic Customer getCustomerObj() {\n\t\treturn customerObj;\n\t}\n\n\tpublic Vehicle getVehicleObj() {\n\t\treturn vehicleObj;\n\t}\n\n\tpublic int getReservationID() {\n\t\treturn reservationID;\n\t}\n\t\n}\n\n\n      \n      ")],-1))),h=[b];function v(e,t){return(0,o.wg)(),(0,o.iD)("main",m,h)}var _=n(89);const y={},g=(0,_.Z)(y,[["render",v],["__scopeId","data-v-316a0d68"]]);var C=g,w=n(5639);const j=e=>((0,o.dD)("data-v-6b7b8ae2"),e=e(),(0,o.Cn)(),e),k={class:"app"},f={class:"box"},x=j((()=>(0,o._)("h1",null,"Instructions",-1))),U=j((()=>(0,o._)("ol",null,[(0,o._)("li",{class:"arrow"},"To learn about upcasting, down casting and static binding, we'll be modifying the TestDriver class."),(0,o._)("li",{class:"arrow"},"Person, Customer, Exec, Reservation and Vehicle classes have been implemented and are to be referred to."),(0,o._)("li",{class:"arrow"},"Switch between instructions, classes and the class diagram by clicking on the respective elements in the top navigation bar."),(0,o._)("li",{class:"arrow"},"To proceed, finish coding the Test Driver class, after which a Next button will appear.")],-1)));function V(e,t){return(0,o.wg)(),(0,o.iD)("main",k,[(0,o._)("div",f,[x,U,(0,o._)("button",{class:"button-9",onClick:t[0]||(t[0]=t=>e.$emit("instructions-read",!0))},"Next")])])}const D={},S=(0,_.Z)(D,[["render",V],["__scopeId","data-v-6b7b8ae2"]]);var P=S;const E=e=>((0,o.dD)("data-v-609ba0f0"),e=e(),(0,o.Cn)(),e),I={class:"app"},R=E((()=>(0,o._)("div",{id:"snackbar"},"Error Message.",-1))),T={id:"myModal"},L={class:"modal-content"},H=E((()=>(0,o._)("span",{class:"close"},"×",-1))),B={class:"column",style:{position:"sticky",float:"right",top:"5%",left:"80%"}},N={class:"column"},F={class:"codebox"},G={style:{"line-height":"125%"}},z=E((()=>(0,o._)("b",null,"upcasting",-1))),O=E((()=>(0,o._)("b",null,"upcasting",-1))),A=E((()=>(0,o._)("b",null,"static binding",-1))),Z=E((()=>(0,o._)("b",null,"vobj",-1))),q=E((()=>(0,o._)("b",null,"robj1",-1))),M={class:"row"},Q={class:"column"},$={style:{display:"flex","flex-direction":"row"}},W=E((()=>(0,o._)("div",{style:{flex:"5"}},[(0,o._)("h1",{style:{padding:"25px","padding-bottom":"0px"}},"Implementing the Test Driver"),(0,o._)("p",{style:{padding:"25px","padding-top":"0px"}},"Follow the instructions in the comments to understand the concepts of upcasting and downcasting")],-1))),Y={style:{flex:"1"}},K=E((()=>(0,o._)("pre",null,"  import java.util.Scanner;\n  import java.util.Date;\n\n  public class TestDriver {\n\n      public static void main(String[] args) {",-1))),J=E((()=>(0,o._)("p",{id:"comment"},"//Create an array of type Person with 5 objects",-1))),X=E((()=>(0,o._)("br",null,null,-1))),ee=E((()=>(0,o._)("br",null,null,-1))),te=E((()=>(0,o._)("pre",null,"  import java.util.Scanner;\n  import java.util.Date;\n\n  public class TestDriver {\n\n      public static void main(String[] args) {\n          Person[] cobj= new Person[5];\n                  ",-1))),ne=E((()=>(0,o._)("br",null,null,-1))),oe=E((()=>(0,o._)("p",{id:"comment"},' //Create a new Customer object using name as "ABC" and email "abc@gmail.com" ',-1))),le=E((()=>(0,o._)("br",null,null,-1))),ae=E((()=>(0,o._)("br",null,null,-1))),ie=E((()=>(0,o._)("pre",null,'  import java.util.Scanner;\n  import java.util.Date;\n\n  public class TestDriver {\n\n      public static void main(String[] args) {\n          Person[] cobj= new Person[5];\n          cobj[0] = new Customer("ABC", "abc@gmail.com");\n          cobj[1] = new Customer("DEF", 8654678976L);\n          cobj[2] = new Customer("GHI", "ghi@gmail.com", 1234567890L);\n                  ',-1))),se=E((()=>(0,o._)("br",null,null,-1))),ce=E((()=>(0,o._)("p",{id:"comment"},' //Create a new Exec object using name as "EFG" and email as "efg@gmail.com" ',-1))),re=E((()=>(0,o._)("br",null,null,-1))),ue=E((()=>(0,o._)("br",null,null,-1))),pe=E((()=>(0,o._)("pre",null,'  import java.util.Scanner;\n  import java.util.Date;\n\n  public class TestDriver {\n\n      public static void main(String[] args) {\n          Person[] cobj= new Person[5];\n          cobj[0] = new Customer("ABC", "abc@gmail.com");\n          cobj[1] = new Customer("DEF", 8654678976L);\n          cobj[2] = new Customer("GHI", "ghi@gmail.com", 1234567890L);\n          cobj[3] = new Exec("EFG", "efg@gmail.com")\n                  ',-1))),de=E((()=>(0,o._)("br",null,null,-1))),me=E((()=>(0,o._)("p",{id:"comment"},' //Create a new Person object using name as "PQR" and email as "pqr@gmail.com" ',-1))),be=E((()=>(0,o._)("br",null,null,-1))),he=E((()=>(0,o._)("br",null,null,-1))),ve=E((()=>(0,o._)("pre",null,'  import java.util.Scanner;\n  import java.util.Date;\n\n  public class TestDriver {\n\n      public static void main(String[] args) {\n          Person[] cobj = new Person[5];gmail.com");\n          cobj[1] = new Customer("DEF", 8654678976L);\n          cobj[2] = new Customer("GHI", "ghi@gmail.com", 1234567890L);\n          cobj[3] = new Exec("EFG", "efg@gmail.com")\n          cobj[4] = new Person("PQR", "pqr@gmail.com")\n\n        ',-1))),_e=E((()=>(0,o._)("br",null,null,-1))),ye=E((()=>(0,o._)("br",null,null,-1))),ge=E((()=>(0,o._)("p",{id:"comment"},'//Set the City of first object to "Coimbatore"',-1))),Ce=E((()=>(0,o._)("br",null,null,-1))),we=E((()=>(0,o._)("br",null,null,-1))),je=E((()=>(0,o._)("br",null,null,-1))),ke=E((()=>(0,o._)("pre",null,'  import java.util.Scanner;\n  import java.util.Date;\n\n  public class TestDriver {\n\n      public static void main(String[] args) {\n          Person[] cobj = new Person[5];\n          cobj[0] = new Customer("ABC", "abc@gmail.com");\n          cobj[1] = new Customer("DEF", 8654678976L);\n          cobj[2] = new Customer("GHI", "ghi@gmail.com", 1234567890L);\n          cobj[3] = new Exec("EFG", "efg@gmail.com")\n          cobj[4] = new Person("PQR", "pqr@gmail.com")\n          cobj[0].setCity("Coimbatore");\n          cobj[1].setCity("Coimbatore");\n          cobj[2].setCity("Chennai");\n          cobj[3].setCity("Coimbatore");\n        ',-1))),fe=E((()=>(0,o._)("br",null,null,-1))),xe=E((()=>(0,o._)("p",{id:"comment"},'//Create a new Vehicle object with value "1234"',-1))),Ue=E((()=>(0,o._)("br",null,null,-1))),Ve=E((()=>(0,o._)("br",null,null,-1))),De=E((()=>(0,o._)("pre",null,'  import java.util.Scanner;\n  import java.util.Date;\n\n  public class TestDriver {\n\n      public static void main(String[] args) {\n          Person[] cobj = new Person[5];\n          cobj[0] = new Customer("ABC", "abc@gmail.com");\n          cobj[1] = new Customer("DEF", 8654678976L);\n          cobj[2] = new Customer("GHI", "ghi@gmail.com", 1234567890L);\n          cobj[3] = new Exec("EFG", "efg@gmail.com")\n          cobj[4] = new Person("PQR", "pqr@gmail.com")\n          cobj[0].setCity("Coimbatore");\n          cobj[1].setCity("Coimbatore");\n          cobj[2].setCity("Chennai");\n          cobj[3].setCity("Coimbatore");\n\n          Vehicle vobj = new Vehicle("1234");\n        ',-1))),Se=E((()=>(0,o._)("br",null,null,-1))),Pe=E((()=>(0,o._)("p",{id:"comment"}," //Create a Reservation object 'robj' and initialise it by passing cobj[0] and vobj as parameters. ",-1))),Ee=E((()=>(0,o._)("p",{id:"comment"}," //Clue: cobj[0] is of type Person but Reservation only takes Customer objects. ",-1))),Ie=E((()=>(0,o._)("br",null,null,-1))),Re=E((()=>(0,o._)("br",null,null,-1))),Te=E((()=>(0,o._)("pre",null,'  import java.util.Scanner;\n  import java.util.Date;\n\n  public class TestDriver {\n\n      public static void main(String[] args) {\n          Person[] cobj = new Person[5];\n          cobj[0] = new Customer("ABC", "abc@gmail.com");\n          cobj[1] = new Customer("DEF", 8654678976L);\n          cobj[2] = new Customer("GHI", "ghi@gmail.com", 1234567890L);\n          cobj[3] = new Exec("EFG", "efg@gmail.com")\n          cobj[4] = new Person("PQR", "pqr@gmail.com")\n          cobj[0].setCity("Coimbatore");\n          cobj[1].setCity("Coimbatore");\n          cobj[2].setCity("Chennai");\n          cobj[3].setCity("Coimbatore");\n\n          Vehicle vobj = new Vehicle("1234");\n          Reservation robj1= new Reservation((Customer)cobj[0],vobj);\n        ',-1))),Le=E((()=>(0,o._)("br",null,null,-1))),He=E((()=>(0,o._)("p",{id:"comment"},"//Set the booking date for robj1 to today's date",-1))),Be=E((()=>(0,o._)("br",null,null,-1))),Ne=E((()=>(0,o._)("br",null,null,-1))),Fe=E((()=>(0,o._)("pre",null,'  import java.util.Scanner;\n  import java.util.Date;\n\n  public class TestDriver {\n\n      public static void main(String[] args) {\n          Person[] cobj = new Person[5];\n          cobj[0] = new Customer("ABC", "abc@gmail.com");\n          cobj[1] = new Customer("DEF", 8654678976L);\n          cobj[2] = new Customer("GHI", "ghi@gmail.com", 1234567890L);\n          cobj[3] = new Exec("EFG", "efg@gmail.com")\n          cobj[4] = new Person("PQR", "pqr@gmail.com")\n          cobj[0].setCity("Coimbatore");\n          cobj[1].setCity("Coimbatore");\n          cobj[2].setCity("Chennai");\n          cobj[3].setCity("Coimbatore");\n\n          Vehicle vobj = new Vehicle("1234");\n          Reservation robj1= new Reservation((Customer)cobj[0],vobj);\n\n          robj1.setBookingDate(new Date());\n        ',-1)));function Ge(e,t,n,i,s,c){return(0,o.wg)(),(0,o.iD)("main",I,[R,(0,o._)("div",T,[(0,o._)("div",L,[H,((0,o.wg)(),(0,o.j4)((0,o.LL)(s.currentComponent)))])]),(0,o._)("div",B,[(0,o._)("div",N,[(0,o._)("div",F,[(0,o._)("ul",G,[(0,o._)("li",{class:(0,l.C_)({completed:s.completed[0]})}," Initiate an array of type Person with 5 objects. ",2),(0,o._)("li",{class:(0,l.C_)({completed:s.completed[1]})},[(0,o.Uk)(" Using the concept of "),z,(0,o.Uk)(", initiate objects 0, 1 and 2 as instances of the class Customer. ")],2),(0,o._)("li",{class:(0,l.C_)({completed:s.completed[2]})},[(0,o.Uk)(" Using the concept of "),O,(0,o.Uk)(", initiate object 3 as an instance of of the class Exec. ")],2),(0,o._)("li",{class:(0,l.C_)({completed:s.completed[3]})},[(0,o.Uk)(" Initiate object 4 as an instance of class Person using the concept of "),A],2),(0,o._)("li",{class:(0,l.C_)({completed:s.completed[4]})}," Set the city for each of the objects based on instructions in the comments ",2),(0,o._)("li",{class:(0,l.C_)({completed:s.completed[5]})},[(0,o.Uk)(" Create an object "),Z,(0,o.Uk)(" of type Vehicle with a regNum value of 1234 ")],2),(0,o._)("li",{class:(0,l.C_)({completed:s.completed[6]})},[(0,o.Uk)(" Create an object "),q,(0,o.Uk)(" of type Reservation passing cobj[0] (with proper typecasting) and vobj as parameters. ")],2),(0,o._)("li",{class:(0,l.C_)({completed:s.completed[7]})}," Set the booking date for robj1 to the current date. ",2)])])])]),(0,o._)("div",M,[(0,o._)("div",Q,[(0,o._)("div",$,[W,(0,o._)("div",Y,[(0,o._)("button",{style:(0,l.j5)([{float:"right","margin-bottom":"30px"},{display:s.display[0]}]),onClick:t[0]||(t[0]=e=>c.popup("arraysComponent")),class:"button-30"},"Help",4),(0,o._)("button",{style:(0,l.j5)([{float:"right","margin-bottom":"30px"},{display:s.display[1]}]),onClick:t[1]||(t[1]=e=>c.popup("objectCreationComponent")),class:"button-30"},"Help",4),(0,o._)("button",{style:(0,l.j5)([{float:"right","margin-bottom":"30px"},{display:s.display[2]}]),onClick:t[2]||(t[2]=e=>c.popup("objectCreationComponent")),class:"button-30"},"Help",4),(0,o._)("button",{style:(0,l.j5)([{float:"right","margin-bottom":"30px"},{display:s.display[3]}]),onClick:t[3]||(t[3]=e=>c.popup("objectCreationComponent")),class:"button-30"},"Help",4),(0,o._)("button",{style:(0,l.j5)([{float:"right","margin-bottom":"30px"},{display:s.display[4]}]),onClick:t[4]||(t[4]=e=>c.popup("setterComponent")),class:"button-30"},"Help",4),(0,o._)("button",{style:(0,l.j5)([{float:"right","margin-bottom":"30px"},{display:s.display[5]}]),onClick:t[5]||(t[5]=e=>c.popup("objectCreationComponent")),class:"button-30"},"Help",4),(0,o._)("button",{style:(0,l.j5)([{float:"right","margin-bottom":"30px"},{display:s.display[6]}]),onClick:t[6]||(t[6]=e=>c.popup("objectCreationComponent")),class:"button-30"},"Help",4),(0,o._)("button",{style:(0,l.j5)([{float:"right","margin-bottom":"30px"},{display:s.display[7]}]),onClick:t[7]||(t[7]=e=>c.popup("setterComponent")),class:"button-30"},"Help",4)])]),(0,o._)("div",{class:"codebox",id:"codebox",style:(0,l.j5)({display:s.display[0]})},[K,(0,o.Uk)("   "),(0,o.wy)((0,o._)("input",{spellcheck:"false",maxlength:"8",style:{width:"90px"},"onUpdate:modelValue":t[8]||(t[8]=t=>e.one=t)},null,512),[[a.nr,e.one]]),(0,o.Uk)(" cobj = new "),(0,o.wy)((0,o._)("input",{spellcheck:"false",id:"two",maxlength:"9",style:{width:"95px"},"onUpdate:modelValue":t[9]||(t[9]=t=>e.two=t)},null,512),[[a.nr,e.two]]),(0,o.Uk)("; "),J,X,(0,o.Uk)(" } "),ee,(0,o._)("button",{class:"button-9",id:"btn1",onClick:t[10]||(t[10]=e=>c.validate_one())},(0,l.zw)(s.button_value),1)],4),(0,o._)("div",{class:"codebox",id:"codebox",style:(0,l.j5)({display:s.display[1]})},[te,ne,(0,o.Uk)("   cobj[0] = new "),(0,o.wy)((0,o._)("input",{spellcheck:"false",maxlength:"8",style:{width:"90px"},"onUpdate:modelValue":t[11]||(t[11]=t=>e.three=t)},null,512),[[a.nr,e.three]]),(0,o.Uk)('(" '),(0,o.wy)((0,o._)("input",{spellcheck:"false",maxlength:"3",style:{width:"50px"},"onUpdate:modelValue":t[12]||(t[12]=t=>e.four=t)},null,512),[[a.nr,e.four]]),(0,o.Uk)('", " '),(0,o.wy)((0,o._)("input",{spellcheck:"false",maxlength:"13",style:{width:"130px"},"onUpdate:modelValue":t[13]||(t[13]=t=>e.five=t)},null,512),[[a.nr,e.five]]),(0,o.Uk)('") '),oe,le,(0,o.Uk)(" } "),ae,(0,o._)("button",{class:"button-9",id:"btn2",onClick:t[14]||(t[14]=e=>c.validate_two())},(0,l.zw)(s.button_value),1)],4),(0,o._)("div",{class:"codebox",id:"codebox",style:(0,l.j5)({display:s.display[2]})},[ie,se,(0,o.Uk)("   cobj[3] = new "),(0,o.wy)((0,o._)("input",{spellcheck:"false",maxlength:"4",style:{width:"60px"},"onUpdate:modelValue":t[15]||(t[15]=t=>e.six=t)},null,512),[[a.nr,e.six]]),(0,o.Uk)('(" '),(0,o.wy)((0,o._)("input",{spellcheck:"false",maxlength:"3",style:{width:"60px"},"onUpdate:modelValue":t[16]||(t[16]=t=>e.seven=t)},null,512),[[a.nr,e.seven]]),(0,o.Uk)('", " '),(0,o.wy)((0,o._)("input",{spellcheck:"false",maxlength:"13",style:{width:"130px"},"onUpdate:modelValue":t[17]||(t[17]=t=>e.eight=t)},null,512),[[a.nr,e.eight]]),(0,o.Uk)('") '),ce,re,(0,o.Uk)(" } "),ue,(0,o._)("button",{class:"button-9",id:"btn3",onClick:t[18]||(t[18]=e=>c.validate_three())},(0,l.zw)(s.button_value),1)],4),(0,o._)("div",{class:"codebox",id:"codebox",style:(0,l.j5)({display:s.display[3]})},[pe,de,(0,o.Uk)("   cobj[3] = new "),(0,o.wy)((0,o._)("input",{spellcheck:"false",maxlength:"6",style:{width:"70px"},"onUpdate:modelValue":t[19]||(t[19]=t=>e.nine=t)},null,512),[[a.nr,e.nine]]),(0,o.Uk)('(" '),(0,o.wy)((0,o._)("input",{spellcheck:"false",maxlength:"3",style:{width:"55px"},"onUpdate:modelValue":t[20]||(t[20]=t=>e.ten=t)},null,512),[[a.nr,e.ten]]),(0,o.Uk)('", " '),(0,o.wy)((0,o._)("input",{spellcheck:"false",maxlength:"13",style:{width:"130px"},"onUpdate:modelValue":t[21]||(t[21]=t=>e.eleven=t)},null,512),[[a.nr,e.eleven]]),(0,o.Uk)('") '),me,be,(0,o.Uk)(" } "),he,(0,o._)("button",{class:"button-9",id:"btn4",onClick:t[22]||(t[22]=e=>c.validate_four())},(0,l.zw)(s.button_value),1)],4),(0,o._)("div",{class:"codebox",id:"codebox",style:(0,l.j5)({display:s.display[4]})},[ve,_e,(0,o.Uk)("   cobj[0]. "),(0,o.wy)((0,o._)("input",{spellcheck:"false",maxlength:"7",style:{width:"75px"},"onUpdate:modelValue":t[23]||(t[23]=t=>e.twelve=t)},null,512),[[a.nr,e.twelve]]),(0,o.Uk)('(" '),(0,o.wy)((0,o._)("input",{spellcheck:"false",maxlength:"10",style:{width:"110px"},"onUpdate:modelValue":t[24]||(t[24]=t=>e.thirteen=t)},null,512),[[a.nr,e.thirteen]]),(0,o.Uk)('"); '),ye,(0,o.Uk)("  "),ge,Ce,(0,o.Uk)(" } "),we,(0,o.Uk)(" } "),je,(0,o._)("button",{class:"button-9",id:"btn5",onClick:t[25]||(t[25]=e=>c.validate_five())},(0,l.zw)(s.button_value),1)],4),(0,o._)("div",{class:"codebox",id:"codebox",style:(0,l.j5)({display:s.display[5]})},[ke,(0,o.Uk)("     "),(0,o.wy)((0,o._)("input",{spellcheck:"false",maxlength:"7",style:{width:"75px"},"onUpdate:modelValue":t[26]||(t[26]=t=>e.fourteen=t)},null,512),[[a.nr,e.fourteen]]),(0,o.Uk)(" vobj = new "),(0,o.wy)((0,o._)("input",{spellcheck:"false",maxlength:"7",style:{width:"75px"},"onUpdate:modelValue":t[27]||(t[27]=t=>e.fifteen=t)},null,512),[[a.nr,e.fifteen]]),(0,o.Uk)("( "),(0,o.wy)((0,o._)("input",{spellcheck:"false",maxlength:"4",style:{width:"60px"},"onUpdate:modelValue":t[28]||(t[28]=t=>e.sixteen=t)},null,512),[[a.nr,e.sixteen]]),(0,o.Uk)(";) "),fe,(0,o.Uk)(" } "),xe,Ue,(0,o.Uk)(" } "),Ve,(0,o._)("button",{class:"button-9",id:"btn6",onClick:t[29]||(t[29]=e=>c.validate_six())},(0,l.zw)(s.button_value),1)],4),(0,o._)("div",{class:"codebox",id:"codebox",style:(0,l.j5)({display:s.display[6]})},[De,(0,o.Uk)("     "),(0,o.wy)((0,o._)("input",{spellcheck:"false",maxlength:"11",style:{width:"100px"},"onUpdate:modelValue":t[30]||(t[30]=t=>e.seventeen=t)},null,512),[[a.nr,e.seventeen]]),(0,o.Uk)(" robj = new "),(0,o.wy)((0,o._)("input",{spellcheck:"false",maxlength:"11",style:{width:"100px"},"onUpdate:modelValue":t[31]||(t[31]=t=>e.eighteen=t)},null,512),[[a.nr,e.eighteen]]),(0,o.Uk)("(( "),(0,o.wy)((0,o._)("input",{spellcheck:"false",maxlength:"8",style:{width:"85px"},"onUpdate:modelValue":t[32]||(t[32]=t=>e.nineteen=t)},null,512),[[a.nr,e.nineteen]]),(0,o.Uk)(")cobj[0], vobj); "),Se,(0,o.Uk)(" } "),Pe,Ee,Ie,(0,o.Uk)(" } "),Re,(0,o._)("button",{class:"button-9",id:"btn7",onClick:t[33]||(t[33]=e=>c.validate_seven())},(0,l.zw)(s.button_value),1)],4),(0,o._)("div",{class:"codebox",id:"codebox",style:(0,l.j5)({display:s.display[7]})},[Te,(0,o.Uk)("     robj1."),(0,o.wy)((0,o._)("input",{spellcheck:"false",maxlength:"14",style:{width:"130px"},"onUpdate:modelValue":t[34]||(t[34]=t=>e.twenty=t)},null,512),[[a.nr,e.twenty]]),(0,o.Uk)("(new "),(0,o.wy)((0,o._)("input",{spellcheck:"false",maxlength:"6",style:{width:"60px"},"onUpdate:modelValue":t[35]||(t[35]=t=>e.twentyone=t)},null,512),[[a.nr,e.twentyone]]),(0,o.Uk)("); "),Le,(0,o.Uk)(" } "),He,Be,(0,o.Uk)(" } "),Ne,(0,o._)("button",{class:"button-9",id:"btn8",onClick:t[36]||(t[36]=e=>c.validate_eight())},(0,l.zw)(s.button_value),1)],4),(0,o._)("div",{class:"codebox",id:"codebox",style:(0,l.j5)({display:s.display[8]})},[Fe,(0,o._)("button",{class:"button-9",id:"btn8",onClick:t[37]||(t[37]=t=>e.$router.push("/abstraction"))},(0,l.zw)(s.button_value),1)],4)])])])}var ze=n(7756),Oe=n(3255),Ae=n(1717),Ze=n(3221),qe=n(8028),Me=n(3073),Qe=n(6277),$e=n(6376),We=n(336),Ye=n(2645),Ke=n(5401),Je=n(4880),Xe=n(4335),et=n(6171),tt=n(7440),nt=n(7836),ot=n(6596),lt=n(6945),at=n(7971),it=n(5358),st=n(7063),ct={components:{abstractComponent:ze["default"],arrayListComponent:Oe["default"],arraysComponent:Ae["default"],classCastExceptionComponent:Ze["default"],constructorWritingComponent:qe["default"],dateComponent:Me["default"],extendsComponent:Qe["default"],functionCallingWithObjectComponent:$e["default"],getterComponent:We["default"],interfaceComponent:Ye["default"],newVariableComponent:Ke["default"],nullPointerExceptionComponent:Je["default"],objectCreationComponent:Xe["default"],parseExceptionComponent:et["default"],passingArgumentsToFunctionsComponent:tt["default"],printFunctionComponent:nt["default"],setterComponent:ot["default"],stringCompareComponent:lt["default"],superKeywordComponent:at["default"],thisComponent:it["default"],tryCatchComponent:st["default"]},methods:{popup(e){this.currentComponent=e,console.log("popup");var t=document.getElementById("myModal");console.log(t);var n=document.getElementsByClassName("close")[0];t.style.display="block",console.log(t.style.display),n.onclick=function(){t.style.display="none"},window.onclick=function(e){e.target==t&&(t.style.display="none")}},correct1(){var e=document.getElementById("snackbar");e.innerHTML="Correct",e.style.backgroundColor="green",e.className="show",setTimeout((function(){e.className=e.className.replace("show","")}),3e3)},incorrect(){var e=document.getElementById("snackbar");e.innerHTML="Incorrect. Try again",e.style.backgroundColor="red",e.className="show",setTimeout((function(){e.className=e.className.replace("show","")}),3e3)},validate_one(){"Person[]"==this.one&&"Person[5]"==this.two?(this.correct1(),this.button_value=this.button_text_right,this.display[0]="none",this.display[1]="block",this.completed[0]=!0,console.log("one_correct")):this.incorrect()},validate_two(){"Customer"==this.three&&"ABC"==this.four&&"abc@gmail.com"==this.five?(this.correct1(),this.button_value=this.button_text_right,this.display[1]="none",this.display[2]="block",this.completed[1]=!0):this.incorrect()},validate_three(){"Exec"==this.six&&"EFG"==this.seven&&"efg@gmail.com"==this.eight?(this.correct1(),this.button_value=this.button_text_right,this.display[2]="none",this.display[3]="block",this.completed[2]=!0):this.incorrect()},validate_four(){"Person"==this.nine&&"PQR"==this.ten&&"pqr@gmail.com"==this.eleven?(this.correct1(),this.button_value=this.button_text_right,this.display[3]="none",this.display[4]="block",this.completed[3]=!0):this.incorrect()},validate_five(){"setCity"===this.twelve&&"Coimbatore"===this.thirteen?(this.correct1(),this.button_value=this.button_text_right,this.display[4]="none",this.display[5]="block",this.completed[4]=!0):this.incorrect()},validate_six(){"Vehicle"===this.fourteen&&"Vehicle"===this.fifteen&&"1234"===this.sixteen?(this.correct1(),this.button_value=this.button_text_right,this.display[5]="none",this.display[6]="block",this.completed[5]=!0):this.incorrect()},validate_seven(){"Reservation"===this.seventeen&&"Reservation"===this.eighteen&&"Customer"===this.nineteen?(this.correct1(),this.button_value=this.button_text_right,this.display[6]="none",this.display[7]="block",this.completed[6]=!0):this.incorrect()},validate_eight(){"setBookingDate"===this.twenty&&"Date()"===this.twentyone?(this.correct1(),this.button_value=this.button_text_right,this.display[7]="none",this.display[8]="block",this.completed[7]=!0,this.$emit("testdriverComplete",!0)):this.incorrect()}},data(){return{id:"container",class:"wrapper",button_value:"Next",button_text:"Incorrect. Try again",currentComponent:"constructorWritingComponent",button_text_right:"Next",correct:!1,display:["block","none","none","none","none","none","none","none","none"],completed:[!1,!1,!1,!1,!1,!1,!1,!1]}}};const rt=(0,_.Z)(ct,[["render",Ge],["__scopeId","data-v-609ba0f0"]]);var ut=rt,pt=n(1816),dt={components:{CustomerView:p.Z,ReservationView:C,VehicleView:w.Z,InstructionsView:P,ReservationSystemView:ut,ClassView:pt.Z,PersonView:r.Z,ClerkView:u.Z},data(){return{componentSelect:"InstructionsView",testdriver_completed:!1}},methods:{testDriverCallBack(e){console.log("Test driver callback triggered",e),this.testdriver_completed=!0},instructionsReadCallback(e){console.log("Instructions read",e),this.componentSelect="ReservationSystemView"}}};const mt=(0,_.Z)(dt,[["render",c]]);var bt=mt}}]);
//# sourceMappingURL=213.ed9f4ab1.js.map
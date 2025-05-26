import c from"./abstractComponent-490573dc.js";import d from"./arrayListComponent-cbd58c5d.js";import u from"./classCastExceptionComponent-16742f3e.js";import b from"./constructorWritingComponent-7c33f734.js";import g from"./dateComponent-7dc4c268.js";import y from"./extendsComponent-2f8c1d43.js";import v from"./functionCallingWithObjectComponent-5a6b5cc0.js";import h from"./getterComponent-ccfb0b85.js";import C from"./interfaceComponent-5deb155c.js";import f from"./newVariableComponent-e5467ccd.js";import x from"./nullPointerExceptionComponent-725a3c8f.js";import P from"./objectCreationComponent-910eaf51.js";import w from"./parseExceptionComponent-5b62bf96.js";import _ from"./passingArgumentsToFunctionsComponent-2a650db3.js";import j from"./printFunctionComponent-c896e94b.js";import S from"./setterComponent-f4a876b4.js";import k from"./StringcompareComponent-4e451caa.js";import E from"./superKeywordComponent-0152cf5f.js";import T from"./thisComponent-f82a5747.js";import N from"./tryCatchComponent-75ce3a6b.js";import{_ as F,o as p,c as A,a as n,b as D,r as V,e as s,w as q,v as B,d as L,t as m,g as I}from"./index-7c0498ac.js";const R={components:{abstractComponent:c,arrayListComponent:d,classCastExceptionComponent:u,constructorWritingComponent:b,dateComponent:g,extendsComponent:y,functionCallingWithObjectComponent:v,getterComponent:h,interfaceComponent:C,newVariableComponent:f,nullPointerExceptionComponent:x,objectCreationComponent:P,parseExceptionComponent:w,passingArgumentsToFunctionsComponent:_,printFunctionComponent:j,setterComponent:S,stringCompareComponent:k,superKeywordComponent:E,thisComponent:T,tryCatchComponent:N},methods:{popup(i){this.currentComponent=i,console.log("popup");var t=document.getElementById("myModal");console.log(t);var r=document.getElementsByClassName("close")[0];t.style.display="block",console.log(t.style.display),r.onclick=function(){t.style.display="none"},window.onclick=function(l){l.target==t&&(t.style.display="none")}},validate_one(){this.one=="abstract"?(this.button_value=this.button_text_right,this.display[0]="none",this.display[1]="block"):this.button_value=this.button_text}},data(){return{id:"container",class:"wrapper",button_value:"Next",currentComponent:"abstractComponent",button_text:"Incorrect. Try again",button_text_right:"Next",correct:!1,display:["block","none"]}}},H={id:"myModal"},M={class:"modal-content"},O={style:{display:"flex","flex-direction":"row"}},U={style:{flex:"1"}},G={class:"flex"},Q={class:"flex"};function W(i,t,r,l,e,a){return p(),A("main",null,[n("div",H,[n("div",M,[t[5]||(t[5]=n("span",{class:"close"},"×",-1)),(p(),D(V(e.currentComponent)))])]),n("div",O,[t[6]||(t[6]=n("div",{style:{flex:"5"}},[n("h1",{style:{padding:"25px","padding-bottom":"0px"}},"Adding abstraction to the Person class"),n("p",{style:{padding:"25px","padding-top":"0px"}},"To continue, make the Person class abstract. Note that it can no longer be instantiated.")],-1)),n("div",U,[n("button",{style:s([{float:"right","margin-bottom":"30px"},{display:e.display[0]}]),onClick:t[0]||(t[0]=o=>a.popup("abstractComponent")),class:"button-30"},"Help",4)])]),n("div",G,[n("div",{class:"codebox",id:"codebox",style:s({display:e.display[0]})},[n("div",null,[q(n("input",{spellcheck:"false",type:"text",id:"input1","onUpdate:modelValue":t[1]||(t[1]=o=>i.one=o),maxlength:"8"},null,512),[[B,i.one]]),t[7]||(t[7]=L(" public cd class Person { "))]),t[8]||(t[8]=n("pre",null,`	private String name;
	private String email;
	private long phone;
	private String city;

	public Person()
	{
		
	}
	
	public Person(String name, String email) {
		this.name = name;
		this.setEmail(email);
	}
	
	public Person(String name, long phone) {
		this.name = name;
		this.setPhone(phone);
	}
	
	public Person(String name, String email, long phone) {
		this.name = name;
		this.email =email;
		this.setPhone(phone);
	}

	public String getName() {
		return name;
	}
	
	
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public long getPhone() {
		return phone;
	}

	public void setPhone(long phone) {		
		if(phone >= 0000000000L && phone <= 9999999999L)
			this.phone = phone;
		else
			this.phone = 9999999999L;
		
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

}

        `,-1)),n("button",{class:"button-9",id:"btn1",onClick:t[2]||(t[2]=(...o)=>a.validate_one&&a.validate_one(...o))},m(e.button_value),1),n("button",{style:{float:"right","margin-bottom":"30px"},onClick:t[3]||(t[3]=o=>a.popup("abstractComponent")),class:"button-30"},"Help")],4),n("div",{class:"codebox",style:s({display:e.display[0]})}," Convert the class Person into an abstract class ",4)]),n("div",Q,[n("div",{class:"codebox",id:"codebox",style:s({display:e.display[1]})},t[9]||(t[9]=[n("h3",{style:{"font-family":"monospace"}},"Person.java",-1),n("p",{class:"comment"},"//Note that person is now abstract",-1),n("pre",null,`
abstract public class Person {
	private String name;
	private String email;
	private long phone;
	private String city;

	public Person()
	{
		
	}
	
	...
}

        `,-1),n("div",null,[n("h3",{style:{"font-family":"monospace"}},"Test Driver.java"),n("pre",null,`...

public class TestDriver {
	
	public static void main(String[] args) throws ParseException {

		
		Person[] cobj= new Person[5];
		
		cobj[0]=new Customer("ABC", "abc@gmail.com"); //upcasting
		cobj[1]=new Customer("DEF", 8654678976L); //upcasting
                cobj[2]=new Customer("GHI", "ghi@gmail.com", 1234567890L); //upcasting
		cobj[3]=new Exec("EFG","efg@gmail.com"); //upcasting
		cobj[4]=new Person("PQR","pqr@gmail.com"); 
		
		cobj[0].setCity("Coimbatore");
		cobj[1].setCity("Coimbatore");
		cobj[2].setCity("Chennai");
		cobj[3].setCity("Coimbatore");
		
		Vehicle vobj=new Vehicle(1234);
		
		//Downcasting required from Person to Customer
		Reservation robj1= new Reservation((Customer)cobj[0],vobj);
		robj1.setBookingDate(new Date());

	}	
}

            `)],-1)]),4),n("div",{class:"outbox",style:s({display:e.display[1]})},[t[10]||(t[10]=I('<p data-v-719ad7e9>OUTPUT</p><p style="color:#FF6262;" data-v-719ad7e9>prog.Java:12: Abstract classes cannot be instantiated. They can only be extended.</p><p style="color:#FF6262;" data-v-719ad7e9>    cobj[4]=new Person(&quot;PQR&quot;,&quot;pqr@gmail.com&quot;)</p><br data-v-719ad7e9><p style="color:#FF6262;" data-v-719ad7e9>1 Error</p><div style="height:100px;background-color:#202020;" data-v-719ad7e9></div><h4 style="font-family:monospace;color:inherit;background-color:inherit;" data-v-719ad7e9>EXPLANATION</h4><p data-v-719ad7e9>As stated in the error, abstract classes cannot be instantiated. To access the attributes and methods defined here, the classes have to be extended. In our example, Person is being extended by Customer and Exec.</p>',8)),n("button",{class:"button-9",id:"btn1",onClick:t[4]||(t[4]=o=>i.$router.push("/request-vehicle-view"))},m(e.button_value),1)],4)])])}const bt=F(R,[["render",W],["__scopeId","data-v-719ad7e9"]]);export{bt as default};

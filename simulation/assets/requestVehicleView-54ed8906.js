import y from"./abstractComponent-490573dc.js";import g from"./arrayListComponent-cbd58c5d.js";import c from"./classCastExceptionComponent-16742f3e.js";import v from"./constructorWritingComponent-7c33f734.js";import C from"./dateComponent-7dc4c268.js";import f from"./extendsComponent-2f8c1d43.js";import x from"./functionCallingWithObjectComponent-5a6b5cc0.js";import h from"./getterComponent-ccfb0b85.js";import w from"./interfaceComponent-5deb155c.js";import D from"./newVariableComponent-e5467ccd.js";import E from"./nullPointerExceptionComponent-725a3c8f.js";import k from"./objectCreationComponent-910eaf51.js";import I from"./parseExceptionComponent-5b62bf96.js";import S from"./passingArgumentsToFunctionsComponent-2a650db3.js";import V from"./printFunctionComponent-c896e94b.js";import j from"./setterComponent-f4a876b4.js";import T from"./StringcompareComponent-4e451caa.js";import B from"./superKeywordComponent-0152cf5f.js";import N from"./thisComponent-f82a5747.js";import M from"./tryCatchComponent-75ce3a6b.js";import{_ as q,o as b,c as P,a as e,b as R,r as F,e as r,d as o,w as p,v as a,t as m,g as W,h as H}from"./index-7c0498ac.js";const L={components:{abstractComponent:y,arrayListComponent:g,classCastExceptionComponent:c,constructorWritingComponent:v,dateComponent:C,extendsComponent:f,functionCallingWithObjectComponent:x,getterComponent:h,interfaceComponent:w,newVariableComponent:D,nullPointerExceptionComponent:E,objectCreationComponent:k,parseExceptionComponent:I,passingArgumentsToFunctionsComponent:S,printFunctionComponent:V,setterComponent:j,stringCompareComponent:T,superKeywordComponent:B,thisComponent:N,tryCatchComponent:M},methods:{popup(n){this.currentComponent=n,console.log("popup");var t=document.getElementById("myModal");console.log(t);var u=document.getElementsByClassName("close")[0];t.style.display="block",console.log(t.style.display),u.onclick=function(){t.style.display="none"},window.onclick=function(d){d.target==t&&(t.style.display="none")}},correct1(){var n=document.getElementById("snackbar");n.innerHTML="Correct",n.style.backgroundColor="green",n.className="show",setTimeout(function(){n.className=n.className.replace("show","")},3e3)},incorrect(){var n=document.getElementById("snackbar");n.innerHTML="Inorrect. Try again",n.style.backgroundColor="red",n.className="show",setTimeout(function(){n.className=n.className.replace("show","")},3e3)},validate_one(){this.one=="String"&&this.two=="Reservation"?(this.button_value=this.button_text_right,this.display[0]="none",this.display[1]="block",this.completed[0]=!0,this.correct1()):(this.button_value=this.button_text,this.incorrect())},validate_two(){this.three==="locateReservation"?(this.button_value=this.button_text_right,this.display[1]="none",this.display[2]="block",console.log("two_correct")):this.button_value=this.button_text}},data(){return{id:"container",class:"wrapper",button_value:"Next",currentComponent:"constructorWritingComponent",button_text:"Incorrect. Try again",button_text_right:"Next",correct:!1,display:["block","none","none","none","none","none","none","none","none"],completed:[!1,!1,!1]}}},O={class:"app"},U={id:"myModal"},A={class:"modal-content"},z={class:"row"},K={class:"column"},G={style:{display:"flex","flex-direction":"row"}},J={style:{flex:"1"}};function Q(n,t,u,d,l,s){return b(),P("main",O,[t[34]||(t[34]=e("div",{id:"snackbar"},"Error Message.",-1)),e("div",U,[e("div",A,[t[7]||(t[7]=e("span",{class:"close"},"×",-1)),(b(),R(F(l.currentComponent)))])]),e("div",z,[e("div",K,[e("div",G,[t[8]||(t[8]=e("div",{style:{flex:"5"}},[e("h1",{style:{padding:"25px","padding-top":"0px"}},"Exec class - Request Vehicle method"),e("p",{style:{padding:"25px","padding-top":"0px"}},"Add the requestVehicle method to the Exec class. This method will be used in the upcoming experiments")],-1)),e("div",J,[e("button",{style:r([{float:"right","margin-bottom":"30px"},{display:l.display[1]}]),onClick:t[0]||(t[0]=i=>s.popup("functionCallingWithObjectComponent")),class:"button-30"},"Help",4)])]),e("div",{class:"codebox",style:r({display:l.display[0]})},[t[9]||(t[9]=e("pre",null,`import java.util.*;
import java.text.*;

public class Exec extends Person{
	private final int empID;
	private static int employeeCount=0;
	
	public Exec()
	{
		super();
		employeeCount++;
		this.empID=employeeCount;
	}
	
	public Exec(String name, String email) {
		super(name, email);
		employeeCount++;
		this.empID=employeeCount;
	}
	
	public Exec(String name, long phone) {
		super(name, phone);
		employeeCount++;
		this.empID=employeeCount;
	}
	
	public Exec(String name, String email, long phone) {
		super(name, email, phone);
		employeeCount++;
		this.empID=employeeCount;
	}
	
	public int getEmpID() {
		return empID;
	}
	

`,-1)),t[10]||(t[10]=o("    public ")),p(e("input",{spellcheck:"false",id:"one","onUpdate:modelValue":t[1]||(t[1]=i=>n.one=i),style:{width:"80px"},maxlength:"6"},null,512),[[a,n.one]]),t[11]||(t[11]=o(" requestVehicle(")),p(e("input",{spellcheck:"false",id:"two","onUpdate:modelValue":t[2]||(t[2]=i=>n.two=i),maxlength:"11",style:{width:"100px"}},null,512),[[a,n.two]]),t[12]||(t[12]=o(" robj) throws ParseException{ ")),t[13]||(t[13]=e("br",null,null,-1)),t[14]||(t[14]=e("p",{id:"comment"},"//Write a function 'requestVehicle' of return type String that takes a Reservation object as parameter.",-1)),t[15]||(t[15]=e("br",null,null,-1)),e("button",{class:"button-9",id:"btn1",onClick:t[3]||(t[3]=i=>s.validate_one())},m(l.button_value),1)],4),e("div",{class:"codebox",style:r({display:l.display[1]})},[t[16]||(t[16]=e("pre",null,`import java.util.*;
import java.text.*;

public class Exec extends Person{
	private final int empID;
	private static int employeeCount=0;
	
	public Exec()
	{
		super();
		employeeCount++;
		this.empID=employeeCount;
	}
	
	public Exec(String name, String email) {
		super(name, email);
		employeeCount++;
		this.empID=employeeCount;
	}
	
	public Exec(String name, long phone) {
		super(name, phone);
		employeeCount++;
		this.empID=employeeCount;
	}
	
	public Exec(String name, String email, long phone) {
		super(name, email, phone);
		employeeCount++;
		this.empID=employeeCount;
	}
	
	public int getEmpID() {
		return empID;
	}

    public String requestVehicle(Reservation robj) throws ParseException
	{
        SimpleDateFormat sdformat = new SimpleDateFormat("yyyy-MM-dd");
    Date d = sdformat.parse("2022-02-29");
		if(robj.getBookingDate().compareTo(d)==0)
		{
	

`,-1)),t[17]||(t[17]=o("    if(robj.")),p(e("input",{spellcheck:"false",id:"three","onUpdate:modelValue":t[4]||(t[4]=i=>n.three=i),style:{width:"150px"},maxlength:"17"},null,512),[[a,n.three]]),t[18]||(t[18]=o('().compareTo("Vehicle available")==0) ')),t[19]||(t[19]=e("br",null,null,-1)),t[20]||(t[20]=o('    return "Initiate contract"; ')),t[21]||(t[21]=e("br",null,null,-1)),t[22]||(t[22]=o("   else ")),t[23]||(t[23]=e("br",null,null,-1)),t[24]||(t[24]=o('    return "Wait for vehicle"; ')),t[25]||(t[25]=e("br",null,null,-1)),t[26]||(t[26]=o("  } ")),t[27]||(t[27]=e("br",null,null,-1)),t[28]||(t[28]=o(' } return "Booking date not working"; ')),t[29]||(t[29]=e("br",null,null,-1)),t[30]||(t[30]=e("p",{id:"comment"},"//Call the appropriate function to compare the reservation to the provided string.",-1)),t[31]||(t[31]=e("br",null,null,-1)),e("button",{class:"button-9",id:"btn1",onClick:t[5]||(t[5]=i=>s.validate_two())},m(l.button_value),1)],4),e("div",{class:"codebox",style:r({display:l.display[2]})},[t[32]||(t[32]=e("pre",null,`import java.util.*;
import java.text.*;

public class Exec extends Person{
	private final int empID;
	private static int employeeCount=0;
	
	public Exec()
	{
		super();
		employeeCount++;
		this.empID=employeeCount;
	}
	
	public Exec(String name, String email) {
		super(name, email);
		employeeCount++;
		this.empID=employeeCount;
	}
	
	public Exec(String name, long phone) {
		super(name, phone);
		employeeCount++;
		this.empID=employeeCount;
	}
	
	public Exec(String name, String email, long phone) {
		super(name, email, phone);
		employeeCount++;
		this.empID=employeeCount;
	}
	
	public int getEmpID() {
		return empID;
	}

    public String requestVehicle(Reservation robj) throws ParseException
	{
        SimpleDateFormat sdformat = new SimpleDateFormat("yyyy-MM-dd");
    Date d = sdformat.parse("2022-02-29");
		if(robj.getBookingDate().compareTo(d)==0)
		{
      if(robj.locateReservation().compareTo("Vehicle available")==0)
				return "initiate contract";
			else
				return "wait for vehicle";
		}
		return "Booking date not matching";
	}
	
}
`,-1)),e("button",{class:"button-9",id:"btn1",onClick:t[6]||(t[6]=i=>n.$router.push("/locate-reservation-view"))},m(l.button_value),1)],4)]),t[33]||(t[33]=W('<div class="column" data-v-2738a91b><h1 style="padding:25px;padding-bottom:0px;" data-v-2738a91b>Class diagram.</h1><p style="padding:25px;padding-top:0px;" data-v-2738a91b>If the diagram does not fit on your screen, right click on the image and in options, choose the &#39;Open in new tab&#39; option.</p><div class="codebox sticky" data-v-2738a91b><img style="max-width:800px;" src="'+H+'" data-v-2738a91b></div></div>',1))])])}const ct=q(L,[["render",Q],["__scopeId","data-v-2738a91b"]]);export{ct as default};

import b from"./abstractComponent-666fedc9.js";import v from"./arrayListComponent-f7ec00df.js";import g from"./classCastExceptionComponent-bd25a8b4.js";import _ from"./constructorWritingComponent-d3c3f811.js";import C from"./dateComponent-c7b8be94.js";import y from"./extendsComponent-543bf979.js";import f from"./functionCallingWithObjectComponent-340b5d9c.js";import D from"./getterComponent-32f5372f.js";import x from"./interfaceComponent-1bc628f8.js";import k from"./newVariableComponent-a037137c.js";import S from"./nullPointerExceptionComponent-206ea67e.js";import j from"./objectCreationComponent-0c64cce2.js";import w from"./parseExceptionComponent-f1af9c21.js";import O from"./passingArgumentsToFunctionsComponent-6b36590a.js";import V from"./printFunctionComponent-425fd73f.js";import R from"./setterComponent-38e710f7.js";import I from"./StringcompareComponent-da78cd7a.js";import B from"./superKeywordComponent-51d382ad.js";import N from"./thisComponent-a5677222.js";import T from"./tryCatchComponent-93e4b4b6.js";import{_ as E,o as u,c as M,b as t,d as L,r as W,f as r,e as i,w as m,v as d,t as h,i as H,p as K,a as A,j as F}from"./index-5f443214.js";const U={components:{abstractComponent:b,arrayListComponent:v,classCastExceptionComponent:g,constructorWritingComponent:_,dateComponent:C,extendsComponent:y,functionCallingWithObjectComponent:f,getterComponent:D,interfaceComponent:x,newVariableComponent:k,nullPointerExceptionComponent:S,objectCreationComponent:j,parseExceptionComponent:w,passingArgumentsToFunctionsComponent:O,printFunctionComponent:V,setterComponent:R,stringCompareComponent:I,superKeywordComponent:B,thisComponent:N,tryCatchComponent:T},methods:{popup(e){this.currentComponent=e,console.log("popup");var n=document.getElementById("myModal");console.log(n);var l=document.getElementsByClassName("close")[0];n.style.display="block",console.log(n.style.display),l.onclick=function(){n.style.display="none"},window.onclick=function(c){c.target==n&&(n.style.display="none")}},correct1(){var e=document.getElementById("snackbar");e.innerHTML="Correct",e.style.backgroundColor="green",e.className="show",setTimeout(function(){e.className=e.className.replace("show","")},3e3)},incorrect(){var e=document.getElementById("snackbar");e.innerHTML="Inorrect. Try again",e.style.backgroundColor="red",e.className="show",setTimeout(function(){e.className=e.className.replace("show","")},3e3)},validate_one(){this.one=="String"&&this.two=="getVehicleObj"?(this.button_value=this.button_text_right,this.display[0]="none",this.display[1]="block",this.completed[0]=!0,this.correct1()):(this.button_value=this.button_text,this.incorrect())},validate_two(){this.three==="locateReservation"?(this.button_value=this.button_text_right,this.display[1]="none",this.display[2]="block",console.log("two_correct")):this.button_value=this.button_text}},data(){return{id:"container",class:"wrapper",currentComponent:"constructorWritingComponent",button_value:"Next",button_text:"Incorrect. Try again",button_text_right:"Next",correct:!1,display:["block","none","none","none","none","none","none","none","none"],completed:[!1,!1,!1]}}},o=e=>(K("data-v-3789713a"),e=e(),A(),e),z={class:"app"},P=o(()=>t("div",{id:"snackbar"},"Error Message.",-1)),q={id:"myModal"},G={class:"modal-content"},J=o(()=>t("span",{class:"close"},"×",-1)),Q={style:{display:"flex","flex-direction":"row"}},X=H('<div style="flex:4;" data-v-3789713a><h1 style="padding:25px;padding-top:0px;" data-v-3789713a>Reservation class - Locate Reservation method</h1><p style="padding:25px;padding-top:0px;" data-v-3789713a>Add the locateReservation method to the Reservation class. This method will be used in the upcoming experiments</p></div><div style="flex:4;" data-v-3789713a><h1 style="padding:25px;padding-bottom:0px;" data-v-3789713a>Class diagram.</h1><p style="padding:25px;padding-top:0px;" data-v-3789713a>If the diagram does not fit on your screen, right click on the image and in options, choose the &#39;Open in new tab&#39; option.</p></div>',2),Y={style:{flex:"1"}},Z={class:"row"},$=o(()=>t("pre",null,`import java.util.Date;

public class Reservation {
	private final int reservationID;
	private Customer customerObj;
	private Vehicle vehicleObj;
	private String contractStatus;
	private Date bookingDate;
	private Date releaseDate;
	private static int reservationCount=0;
	
	public Reservation(Customer customerObj, Vehicle vehicleObj) {
		this.customerObj = customerObj;
		this.vehicleObj = vehicleObj;
		reservationCount++;
		this.reservationID=reservationCount;
	}

	public String getContractStatus() {
		return contractStatus;
	}

	public void setContractStatus(String contractStatus) {
		this.contractStatus = contractStatus;
	}

	public Date getBookingDate() {
		return bookingDate;
	}

	public void setBookingDate(Date bookingDate) {
		this.bookingDate = bookingDate;
	}

	public Date getReleaseDate() {
		return releaseDate;
	}
	
	public Customer getCustomerObj() {
		return customerObj;
	}

	public Vehicle getVehicleObj() {
		return vehicleObj;
	}

	public int getReservationID() {
		return reservationID;
	}	

`,-1)),tt=o(()=>t("br",null,null,-1)),et=o(()=>t("br",null,null,-1)),nt=o(()=>t("br",null,null,-1)),ot=o(()=>t("br",null,null,-1)),it=o(()=>t("br",null,null,-1)),st=o(()=>t("p",{id:"comment"},"//Write a method 'locateReservation' of return type String.",-1)),at=o(()=>t("p",{id:"comment"},"//Compare the key status vehicle of the Vehicle object to the provided string.",-1)),rt=o(()=>t("br",null,null,-1)),lt=o(()=>t("pre",null,`import java.util.Date;

public class Reservation {
	private final int reservationID;
	private Customer customerObj;
	private Vehicle vehicleObj;
	private String contractStatus;
	private Date bookingDate;
	private Date releaseDate;
	private static int reservationCount=0;
	
	public Reservation(Customer customerObj, Vehicle vehicleObj) {
		this.customerObj = customerObj;
		this.vehicleObj = vehicleObj;
		reservationCount++;
		this.reservationID=reservationCount;
	}

	public String getContractStatus() {
		return contractStatus;
	}

	public void setContractStatus(String contractStatus) {
		this.contractStatus = contractStatus;
	}

	public Date getBookingDate() {
		return bookingDate;
	}

	public void setBookingDate(Date bookingDate) {
		this.bookingDate = bookingDate;
	}

	public Date getReleaseDate() {
		return releaseDate;
	}
	
	public Customer getCustomerObj() {
		return customerObj;
	}

	public Vehicle getVehicleObj() {
		return vehicleObj;
	}

	public int getReservationID() {
		return reservationID;
	}
	
	public String locateReservation(){
		if(this.getVehicleObj().getKeyStatus().compareTo("available")==0)
			return "Vehicle available";
		else
			return "Vehicle on trip";
	}
	
	public String releaseContract(){
		this.setContractStatus("Reservation released");
		return this.getContractStatus();
	}

}

`,-1)),ct=o(()=>t("div",{class:"column"},[t("div",{class:"codebox sticky"},[t("img",{style:{"max-width":"800px"},src:F})])],-1));function pt(e,n,l,c,s,p){return u(),M("main",z,[P,t("div",q,[t("div",G,[J,(u(),L(W(s.currentComponent)))])]),t("div",Q,[X,t("div",Y,[t("button",{style:r([{float:"right","margin-bottom":"30px"},{display:s.display[0]}]),onClick:n[0]||(n[0]=a=>p.popup("thisComponent")),class:"button-30"},"Help",4)])]),t("div",Z,[t("div",{class:"codebox",style:r({display:s.display[0]})},[$,i("    public "),m(t("input",{spellcheck:"false",id:"one","onUpdate:modelValue":n[1]||(n[1]=a=>e.one=a),style:{width:"80px"},maxlength:"6"},null,512),[[d,e.one]]),i(" locateReservation(){ "),tt,i("    if(this."),m(t("input",{spellcheck:"false",id:"two","onUpdate:modelValue":n[2]||(n[2]=a=>e.two=a),style:{width:"120px"},maxlength:"13"},null,512),[[d,e.two]]),i('().getKeyStatus().compareTo("available") == 0) '),et,i('     return "Vehicle available" '),nt,ot,i("    else "),it,i('     return "Vehicle on trip" '),st,at,rt,t("button",{class:"button-9",id:"btn1",onClick:n[3]||(n[3]=a=>p.validate_one())},h(s.button_value),1)],4),t("div",{class:"codebox",style:r({display:s.display[1]})},[lt,t("button",{class:"button-9",id:"btn1",onClick:n[4]||(n[4]=a=>e.$router.push("/sign-contract-view"))},h(s.button_value),1)],4),ct])])}const Bt=E(U,[["render",pt],["__scopeId","data-v-3789713a"]]);export{Bt as default};

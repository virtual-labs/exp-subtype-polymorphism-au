import y from"./abstractComponent-6547a5e3.js";import f from"./arrayListComponent-cf2e4c4b.js";import _ from"./classCastExceptionComponent-1535f07d.js";import g from"./constructorWritingComponent-5a99af78.js";import b from"./dateComponent-64a40a8d.js";import v from"./extendsComponent-9deea258.js";import C from"./functionCallingWithObjectComponent-4aea711b.js";import x from"./getterComponent-14b953c7.js";import S from"./interfaceComponent-a101315c.js";import k from"./newVariableComponent-89f353e1.js";import w from"./nullPointerExceptionComponent-8435887d.js";import N from"./objectCreationComponent-78c90e29.js";import V from"./parseExceptionComponent-e954f798.js";import K from"./passingArgumentsToFunctionsComponent-82993787.js";import I from"./printFunctionComponent-9f05b60c.js";import T from"./setterComponent-70c1f39f.js";import E from"./StringcompareComponent-bae635af.js";import B from"./superKeywordComponent-2559fc23.js";import M from"./thisComponent-5d32583f.js";import U from"./tryCatchComponent-d592393a.js";import{_ as j,o as d,c as D,b as t,d as H,r as L,f as l,e as s,w as m,v as u,t as h,i as W,p as A,a as F,j as O}from"./index-0ea5eeaf.js";const R={components:{abstractComponent:y,arrayListComponent:f,classCastExceptionComponent:_,constructorWritingComponent:g,dateComponent:b,extendsComponent:v,functionCallingWithObjectComponent:C,getterComponent:x,interfaceComponent:S,newVariableComponent:k,nullPointerExceptionComponent:w,objectCreationComponent:N,parseExceptionComponent:V,passingArgumentsToFunctionsComponent:K,printFunctionComponent:I,setterComponent:T,stringCompareComponent:E,superKeywordComponent:B,thisComponent:M,tryCatchComponent:U},methods:{popup(e){this.currentComponent=e,console.log("popup");var o=document.getElementById("myModal");console.log(o);var r=document.getElementsByClassName("close")[0];o.style.display="block",console.log(o.style.display),r.onclick=function(){o.style.display="none"},window.onclick=function(p){p.target==o&&(o.style.display="none")}},correct1(){var e=document.getElementById("snackbar");e.innerHTML="Correct",e.style.backgroundColor="green",e.className="show",setTimeout(function(){e.className=e.className.replace("show","")},3e3)},incorrect(){var e=document.getElementById("snackbar");e.innerHTML="Inorrect. Try again",e.style.backgroundColor="red",e.className="show",setTimeout(function(){e.className=e.className.replace("show","")},3e3)},validate_one(){this.one==="String"&&this.two==="setKeyStatus"?(this.button_value=this.button_text_right,this.display[0]="none",this.display[1]="block",this.completed[0]=!0,this.correct1()):(this.button_value=this.button_text,this.incorrect())},validate_two(){this.three==="locateReservation"?(this.button_value=this.button_text_right,this.display[1]="none",this.display[2]="block",console.log("two_correct")):this.button_value=this.button_text}},data(){return{id:"container",class:"wrapper",button_value:"Next",currentComponent:"constructorWritingComponent",button_text:"Incorrect. Try again",button_text_right:"Next",correct:!1,display:["block","none","none","none","none","none","none","none","none"],completed:[!1,!1,!1]}}},n=e=>(A("data-v-f89af44d"),e=e(),F(),e),z={class:"app"},P=n(()=>t("div",{id:"snackbar"},"Error Message.",-1)),q={id:"myModal"},G={class:"modal-content"},J=n(()=>t("span",{class:"close"},"×",-1)),Q={class:"row"},X={class:"column"},Y={style:{display:"flex","flex-direction":"row"}},Z=n(()=>t("div",{style:{flex:"5"}},[t("h1",{style:{padding:"25px","padding-top":"0px"}},"Vehicle class - Update Key Status method"),t("p",{style:{padding:"25px","padding-top":"0px"}},"Add the updateKeyStatus method to the Vehicle class. This method will be used in the upcoming experiments")],-1)),$={style:{flex:"1"}},tt=n(()=>t("pre",null,`public class Vehicle {
	private final int regNum;
	private String keyStatus;
	
	public Vehicle(int regNum)
	{
		this.regNum=regNum;
		this.keyStatus="available";
	}
`,-1)),et=n(()=>t("br",null,null,-1)),ot=n(()=>t("br",null,null,-1)),nt=n(()=>t("br",null,null,-1)),st=n(()=>t("br",null,null,-1)),it=n(()=>t("p",{id:"comment"},'//Call the appropriate function to set the key status to "on trip".',-1)),at=n(()=>t("br",null,null,-1)),lt=n(()=>t("pre",null,`
public class Vehicle {
	private final int regNum;
	private String keyStatus;
	
	public Vehicle(int regNum)
	{
		this.regNum=regNum;
		this.keyStatus="available";
	}
	
	public String updateKeyStatus()
	{
		this.setKeyStatus("on trip");
		return this.getKeyStatus();
	}

	public String getKeyStatus() {
		return keyStatus;
	}

	public void setKeyStatus(String keyStatus) {
		this.keyStatus = keyStatus;
	}

	public int getRegNum() {
		return regNum;
	}
	
}

`,-1)),rt=W('<div class="column" data-v-f89af44d><h1 style="padding:25px;padding-bottom:0px;" data-v-f89af44d>Class diagram.</h1><p style="padding:25px;padding-top:0px;" data-v-f89af44d>If the diagram does not fit on your screen, right click on the image and in options, choose the &#39;Open in new tab&#39; option.</p><div class="codebox sticky" data-v-f89af44d><img style="max-width:800px;" src="'+O+'" data-v-f89af44d></div></div>',1);function pt(e,o,r,p,i,c){return d(),D("main",z,[P,t("div",q,[t("div",G,[J,(d(),H(L(i.currentComponent)))])]),t("div",Q,[t("div",X,[t("div",Y,[Z,t("div",$,[t("button",{style:l([{float:"right","margin-bottom":"30px"},{display:i.display[0]}]),onClick:o[0]||(o[0]=a=>c.popup("thisComponent")),class:"button-30"},"Help",4)])]),t("div",{class:"codebox",style:l({display:i.display[0]})},[tt,s("    public "),m(t("input",{spellcheck:"false",id:"one","onUpdate:modelValue":o[1]||(o[1]=a=>e.one=a),style:{width:"80px"},maxlength:"6"},null,512),[[u,e.one]]),s(" updateKeyStatus() "),et,s("    { "),ot,s("     this."),m(t("input",{spellcheck:"false",id:"two","onUpdate:modelValue":o[2]||(o[2]=a=>e.two=a),maxlength:"12",style:{width:"130px"}},null,512),[[u,e.two]]),s('("on trip"); '),nt,s("     return this.getKeyStatus(); "),st,s("    } "),it,at,t("button",{class:"button-9",id:"btn1",onClick:o[3]||(o[3]=a=>c.validate_one())},h(i.button_value),1)],4),t("div",{class:"codebox",style:l({display:i.display[1]})},[lt,t("button",{class:"button-9",id:"btn1",onClick:o[4]||(o[4]=a=>e.$router.push("/method-completion"))},h(i.button_value),1)],4)]),rt])])}const Et=j(R,[["render",pt],["__scopeId","data-v-f89af44d"]]);export{Et as default};

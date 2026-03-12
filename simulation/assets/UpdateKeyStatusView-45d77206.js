import g from"./abstractComponent-490573dc.js";import c from"./arrayListComponent-cbd58c5d.js";import b from"./classCastExceptionComponent-16742f3e.js";import f from"./constructorWritingComponent-7c33f734.js";import v from"./dateComponent-7dc4c268.js";import C from"./extendsComponent-2f8c1d43.js";import x from"./functionCallingWithObjectComponent-5a6b5cc0.js";import h from"./getterComponent-ccfb0b85.js";import k from"./interfaceComponent-5deb155c.js";import S from"./newVariableComponent-e5467ccd.js";import w from"./nullPointerExceptionComponent-725a3c8f.js";import N from"./objectCreationComponent-910eaf51.js";import V from"./parseExceptionComponent-5b62bf96.js";import K from"./passingArgumentsToFunctionsComponent-2a650db3.js";import T from"./printFunctionComponent-c896e94b.js";import E from"./setterComponent-f4a876b4.js";import B from"./StringcompareComponent-4e451caa.js";import I from"./superKeywordComponent-0152cf5f.js";import M from"./thisComponent-f82a5747.js";import U from"./tryCatchComponent-75ce3a6b.js";import{_ as D,o as d,c as H,a as n,b as L,r as W,e as l,d as o,w as m,v as u,t as y,g as _,h as j}from"./index-7c0498ac.js";const A={components:{abstractComponent:g,arrayListComponent:c,classCastExceptionComponent:b,constructorWritingComponent:f,dateComponent:v,extendsComponent:C,functionCallingWithObjectComponent:x,getterComponent:h,interfaceComponent:k,newVariableComponent:S,nullPointerExceptionComponent:w,objectCreationComponent:N,parseExceptionComponent:V,passingArgumentsToFunctionsComponent:K,printFunctionComponent:T,setterComponent:E,stringCompareComponent:B,superKeywordComponent:I,thisComponent:M,tryCatchComponent:U},methods:{popup(e){this.currentComponent=e,console.log("popup");var t=document.getElementById("myModal");console.log(t);var r=document.getElementsByClassName("close")[0];t.style.display="block",console.log(t.style.display),r.onclick=function(){t.style.display="none"},window.onclick=function(p){p.target==t&&(t.style.display="none")}},correct1(){var e=document.getElementById("snackbar");e.innerHTML="Correct",e.style.backgroundColor="green",e.className="show",setTimeout(function(){e.className=e.className.replace("show","")},3e3)},incorrect(){var e=document.getElementById("snackbar");e.innerHTML="Inorrect. Try again",e.style.backgroundColor="red",e.className="show",setTimeout(function(){e.className=e.className.replace("show","")},3e3)},validate_one(){this.one==="String"&&this.two==="setKeyStatus"?(this.button_value=this.button_text_right,this.display[0]="none",this.display[1]="block",this.completed[0]=!0,this.correct1()):(this.button_value=this.button_text,this.incorrect())},validate_two(){this.three==="locateReservation"?(this.button_value=this.button_text_right,this.display[1]="none",this.display[2]="block",console.log("two_correct")):this.button_value=this.button_text}},data(){return{id:"container",class:"wrapper",button_value:"Next",currentComponent:"constructorWritingComponent",button_text:"Incorrect. Try again",button_text_right:"Next",correct:!1,display:["block","none","none","none","none","none","none","none","none"],completed:[!1,!1,!1]}}},F={class:"app"},O={id:"myModal"},R={class:"modal-content"},z={class:"row"},P={class:"column"},q={style:{display:"flex","flex-direction":"row"}},G={style:{flex:"1"}};function J(e,t,r,p,s,a){return d(),H("main",F,[t[23]||(t[23]=n("div",{id:"snackbar"},"Error Message.",-1)),n("div",O,[n("div",R,[t[5]||(t[5]=n("span",{class:"close"},"×",-1)),(d(),L(W(s.currentComponent)))])]),n("div",z,[n("div",P,[n("div",q,[t[6]||(t[6]=n("div",{style:{flex:"5"}},[n("h1",{style:{padding:"25px","padding-top":"0px"}},"Vehicle class - Update Key Status method"),n("p",{style:{padding:"25px","padding-top":"0px"}},"Add the updateKeyStatus method to the Vehicle class. This method will be used in the upcoming experiments")],-1)),n("div",G,[n("button",{style:l([{float:"right","margin-bottom":"30px"},{display:s.display[0]}]),onClick:t[0]||(t[0]=i=>a.popup("thisComponent")),class:"button-30"},"Help",4)])]),n("div",{class:"codebox",style:l({display:s.display[0]})},[t[7]||(t[7]=n("pre",null,`public class Vehicle {
	private final int regNum;
	private String keyStatus;
	
	public Vehicle(int regNum)
	{
		this.regNum=regNum;
		this.keyStatus="available";
	}
`,-1)),t[8]||(t[8]=o("    public ")),m(n("input",{spellcheck:"false",id:"one","onUpdate:modelValue":t[1]||(t[1]=i=>e.one=i),style:{width:"80px"},maxlength:"6"},null,512),[[u,e.one]]),t[9]||(t[9]=o(" updateKeyStatus() ")),t[10]||(t[10]=n("br",null,null,-1)),t[11]||(t[11]=o("    { ")),t[12]||(t[12]=n("br",null,null,-1)),t[13]||(t[13]=o("     this.")),m(n("input",{spellcheck:"false",id:"two","onUpdate:modelValue":t[2]||(t[2]=i=>e.two=i),maxlength:"12",style:{width:"130px"}},null,512),[[u,e.two]]),t[14]||(t[14]=o('("on trip"); ')),t[15]||(t[15]=n("br",null,null,-1)),t[16]||(t[16]=o("     return this.getKeyStatus(); ")),t[17]||(t[17]=n("br",null,null,-1)),t[18]||(t[18]=o("    } ")),t[19]||(t[19]=n("p",{id:"comment"},'//Call the appropriate function to set the key status to "on trip".',-1)),t[20]||(t[20]=n("br",null,null,-1)),n("button",{class:"button-9",id:"btn1",onClick:t[3]||(t[3]=i=>a.validate_one())},y(s.button_value),1)],4),n("div",{class:"codebox",style:l({display:s.display[1]})},[t[21]||(t[21]=n("pre",null,`
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

`,-1)),n("button",{class:"button-9",id:"btn1",onClick:t[4]||(t[4]=i=>e.$router.push("/method-completion"))},y(s.button_value),1)],4)]),t[22]||(t[22]=_('<div class="column" data-v-630d46f3><h1 style="padding:25px;padding-bottom:0px;" data-v-630d46f3>Class diagram.</h1><p style="padding:25px;padding-top:0px;" data-v-630d46f3>If the diagram does not fit on your screen, right click on the image and in options, choose the &#39;Open in new tab&#39; option.</p><div class="codebox sticky" data-v-630d46f3><img style="max-width:800px;" src="'+j+'" data-v-630d46f3></div></div>',1))])])}const bt=D(A,[["render",J],["__scopeId","data-v-630d46f3"]]);export{bt as default};

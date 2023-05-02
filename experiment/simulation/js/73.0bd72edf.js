"use strict";(self["webpackChunkexp_7"]=self["webpackChunkexp_7"]||[]).push([[73],{3073:function(t,e,a){a.r(e),a.d(e,{default:function(){return U}});var n=a(3396),d=a(9242);const r=t=>((0,n.dD)("data-v-d25cd7b6"),t=t(),(0,n.Cn)(),t),l=r((()=>(0,n._)("header",{style:{padding:"20px"}},[(0,n._)("h5",null,"HELP"),(0,n._)("h1",null,"Date and Time")],-1))),o=r((()=>(0,n._)("div",{id:"snackbar"},"Some text some message..",-1))),s={class:"flex-row"},i=(0,n.uE)('<div style="width:50%;" data-v-d25cd7b6><h2 data-v-d25cd7b6>Theory</h2><div class="outbox" data-v-d25cd7b6><p data-v-d25cd7b6>Date currentDate = new Date();</p><span id="comment" data-v-d25cd7b6>//Date object creation </span><p data-v-d25cd7b6>System.out.println(currentDate.toString());</p><span id="comment" data-v-d25cd7b6>// displays time and date using toString()</span><p data-v-d25cd7b6>SimpleDateFormat sdf = new SimpleDateFormat (&quot;E yyyy.MM.dd &#39;at&#39; hh:mm:ss a zzz&quot;);</p><span id="comment" data-v-d25cd7b6>//displays time and date using user defined format</span><p data-v-d25cd7b6>System.out.println(&quot;Current Date: &quot; + sdf.format(dNow));</p><br data-v-d25cd7b6></div><div class="content" data-v-d25cd7b6><p data-v-d25cd7b6> Date object represents date and time value. </p><p data-v-d25cd7b6> SimpleDateFormat is a concrete class for formatting and parsing dates in a locale-sensitive manner. SimpleDateFormat allows you to start by choosing any user-defined patterns for date-time formatting. </p></div></div>',1),c={style:{width:"50%"}},u=r((()=>(0,n._)("h2",null,"Try it yourself",-1))),m={class:"outbox"},p=r((()=>(0,n._)("br",null,null,-1))),b=r((()=>(0,n._)("br",null,null,-1))),v=r((()=>(0,n._)("span",{id:"comment"},'//create a date object with name "df" ',-1))),y=r((()=>(0,n._)("br",null,null,-1))),h=r((()=>(0,n._)("br",null,null,-1))),_=r((()=>(0,n._)("br",null,null,-1))),f=r((()=>(0,n._)("br",null,null,-1))),w=r((()=>(0,n._)("span",{id:"comment"},'//create SimpleDateFormat object with name "sdf" with user defined pattern "date.month.year"',-1))),D={id:"buttons",class:"relative"},g={key:0,class:"navitem"};function k(t,e,a,r,k,S){return(0,n.wg)(),(0,n.iD)(n.HY,null,[l,o,(0,n._)("main",null,[(0,n._)("div",s,[i,(0,n._)("div",c,[u,(0,n._)("div",m,[(0,n.wy)((0,n._)("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=e=>t.one=e)},null,512),[[d.nr,t.one]]),(0,n.Uk)(),(0,n.wy)((0,n._)("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=e=>t.two=e)},null,512),[[d.nr,t.two]]),(0,n.Uk)(" = new "),(0,n.wy)((0,n._)("input",{type:"text","onUpdate:modelValue":e[2]||(e[2]=e=>t.three=e)},null,512),[[d.nr,t.three]]),(0,n.Uk)("; "),p,b,v,y,h,(0,n.Uk)(' SimpleDateFormat sdf=new SimpleDateFormat("'),(0,n.wy)((0,n._)("input",{type:"text","onUpdate:modelValue":e[3]||(e[3]=e=>t.four=e)},null,512),[[d.nr,t.four]]),(0,n.Uk)('"); '),_,f,w]),(0,n._)("button",{class:"button-9",onClick:e[4]||(e[4]=t=>S.validate_one())},"Validate")])]),(0,n._)("footer",null,[(0,n._)("div",D,[1===t.currentStep?((0,n.wg)(),(0,n.iD)("button",g,"Next")):(0,n.kq)("",!0)])])])],64)}var S={data(){return{}},methods:{incorrect(t){var e=document.getElementById("snackbar");e.innerHTML=t,e.style.backgroundColor="red",e.className="show",setTimeout((function(){e.className=e.className.replace("show","")}),3e3)},correct1(){var t=document.getElementById("snackbar");t.innerHTML="Correct",t.style.backgroundColor="green",t.className="show",setTimeout((function(){t.className=t.className.replace("show","")}),3e3)},validate_one(){"Date"==this.one.trim()&&"df"==this.two.trim()&&"Date()"==this.three.trim()&&"dd.MM.yyyy"==this.four.trim()?(this.correct1(),alert("Correct")):(this.incorrect("Try again"),alert("Incorrect, please try again"))}}},x=a(89);const C=(0,x.Z)(S,[["render",k],["__scopeId","data-v-d25cd7b6"]]);var U=C}}]);
//# sourceMappingURL=73.0bd72edf.js.map
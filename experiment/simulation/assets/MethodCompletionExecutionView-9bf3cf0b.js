import{_ as o,o as a,c as s,a as t,g as r}from"./index-7c0498ac.js";const i={},l={class:"flex"},c={class:"outbox"};function d(n,e){return a(),s("main",null,[e[3]||(e[3]=t("div",{style:{"padding-left":"2%"}},[t("h1",null,"Understanding the Output"),t("p",null,"The TestDriver code on the left end creates the required Customer, Exec, Vehicle and Reservation ojbects and performs a reservation. Observe the output on the right end.")],-1)),t("div",l,[e[2]||(e[2]=t("div",{class:"codebox"},[t("h3",{style:{"font-family":"monospace"}},"Test Driver.java"),t("pre",null,`...

public class TestDriver {
	
	public static void main(String[] args) throws ParseException {
		// TODO Auto-generated method stub
		
		RentalSystem rentalSystem = new RentalSystem();
		
		rentalSystem.execobj=new Exec[1];
		rentalSystem.execobj[0]=new Exec("EFG", "efg@gmail.com");
		
		rentalSystem.cobj= new Customer[3];
		rentalSystem.cobj[0]=new Customer("ABC", "abc@gmail.com");
		rentalSystem.cobj[1]=new Customer("DEF", 8654678976L);
		rentalSystem.cobj[2]=new Customer("GHI", "ghi@gmail.com", 1234567890L);
		rentalSystem.cobj[0].setCity("Coimbatore");
		rentalSystem.cobj[1].setCity("Coimbatore");
		rentalSystem.cobj[2].setCity("Chennai");
		
		rentalSystem.vobj = new Vehicle[1];
		rentalSystem.vobj[0]=new Vehicle(1234);
		
		rentalSystem.robj=new Reservation[1];
		rentalSystem.robj[0]= new Reservation(rentalSystem.cobj[0],rentalSystem.vobj[0]);
		SimpleDateFormat sdformat = new SimpleDateFormat("yyyy-MM-dd");
        Date d = sdformat.parse("2022-02-29");
		rentalSystem.robj[0].setBookingDate(d);
		rentalSystem.robj[0].setContractStatus("Reservation not released");
		
		rentalSystem.visitOffice(rentalSystem.robj[0]);
	}	
}


            `)],-1)),t("div",c,[e[1]||(e[1]=r('<p data-v-ef81f429>OUTPUT</p><p style="color:#fff;" data-v-ef81f429>Vehicle is available, initiating contract..</p><p style="color:#fff;" data-v-ef81f429>Reservation released</p><p style="color:#fff;" data-v-ef81f429>Vehicle key handedover</p><br data-v-ef81f429><p style="color:#fff;" data-v-ef81f429>Process finished with exit code 0</p><div style="height:100px;background-color:#202020;" data-v-ef81f429></div>',7)),t("button",{class:"button-9",id:"btn1",onClick:e[0]||(e[0]=m=>n.$router.push("/congratulations"))},"Continue")])])])}const y=o(i,[["render",d],["__scopeId","data-v-ef81f429"]]);export{y as default};

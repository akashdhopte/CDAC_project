package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.cdac.Donation;
import com.project.cdac.DonerClass;
import com.project.cdac.EventClass;
import com.project.cdac.Login;
import com.project.cdac.OrphanClass;
import com.project.cdac.appointment;
import com.repository.DaoClass;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class Controller {
	

	@Autowired
	private DaoClass registerRepository;
	
//-----------------donor register----------------------//	
	@PostMapping("/reguser")
	public Status register(@RequestBody DonerClass as) {
		Status s1=new Status(); 
		registerRepository.RegisterUser(as);
		s1.setStatusCode(333);
		return s1;		
	}
	
//-----------------orphanage register----------------------//
	@PostMapping("/regorphan")
	public Status orpahnregister(@RequestBody OrphanClass obj) {
		registerRepository.OrphanRegistration(obj);
		Status s2=new Status();
		s2.setStatusCode(333);
		return s2;
	}
	
//----------------doner login------------------------------//
	@PostMapping("/loginuser")
	public Status LoginUser(@RequestBody DonerClass login) {
		
		long count = registerRepository.isValidLogin(login.getEmail(),login.getPassword());
		System.out.println(count);
		if(count == 0) {
			Status status = new Status();
			status.setStatusCode(222);
			status.setStatusMessage("Invalid Username/Password");
			return status;		
		}
		else {
			DonerClass customer = registerRepository.fetch(login.getEmail());
			
			Status status = new Status();
			status.setStatusCode(333);
			return status;
		}
	}
	
//----------------orphnge login------------------------------//
	@PostMapping("/logorphan")
	public Status orphanlogin(@RequestBody OrphanClass login) {
		
		long count = registerRepository.ophanageLogin(login.getEmail(),login.getPassword());
		if(count == 0) {
			Status status = new Status();
			status.setStatusCode(222);
			status.setStatusMessage("Invalid Username/Password");
			return status;		
		}
		else {
			OrphanClass orphan = registerRepository.fetchorphanage(login.getEmail());
			Status status = new Status();
			status.setStatusCode(333);
			status.setStatusMessage("Login Successful");
			status.setLoggedInCustomer(orphan);
			return status;
		}			
	}

//-----------------Search orphanage-----------------------//
	@GetMapping("/search")
	public List<OrphanClass> search()
	{
		List<OrphanClass>st=registerRepository.Searchorp();
		return st;
	}
	
//-----------------whole orphanages-------------------//	
	@GetMapping("/detaillist")
	public List<OrphanClass> detail()
	{
		List<OrphanClass>st=registerRepository.listorp();
		return st;
	}
	
//-----------------mumbai list------------------------//
	@PostMapping("/mumlist")
	public List<OrphanClass> mudetail(OrphanClass re)
	{
		List<OrphanClass>st=registerRepository.mulistorp(re.getCity());
		return st;
	}

	//-----------------nagpur list------------------------//
		@PostMapping("/nagpurlist")
		public List<OrphanClass> nagdetail(OrphanClass re)
		{
			List<OrphanClass>st=registerRepository.naglistorp(re.getCity());
			return st;
		}
		//-----------------pune list------------------------//
				@PostMapping("/punelist")
				public List<OrphanClass> punedetail(OrphanClass re)
				{
					List<OrphanClass>st=registerRepository.punelistorp(re.getCity());
					return st;
				}
		
//------------------Donation-------------------------//
	@GetMapping("/donation")
	public List<Donation> donate()
	{
		List<Donation> requirement=registerRepository.donation();
		return requirement;
	}
	
//-----------------post items in database-------------//
	@PostMapping("/postitems")
	public void register(@RequestBody Donation obj) {
	registerRepository.ListRequirements(obj);
	}
	
//-----------------fetch item from orphanage------------//
	@GetMapping("/getitems")
	public List<Donation> Getitems() {
		
		List<Donation> st =registerRepository.getitems();
		System.out.println(st);
		return st;
	}
	//--------------------------APPOINTMENT--------------------------------//
	
		@PostMapping("/appointment")
		public void appointmentmethod(@RequestBody appointment a) {
			
			System.out.println(a);
			registerRepository.getappointment(a);
			
		}
		
		
		
		//_________________________  GET APPOINTMENT DETAILS ___________________________//
		
		@GetMapping("/getappointment")
		public List<appointment> getappointment() {
			
			List<appointment> st =registerRepository.Detailappointment();
			System.out.println(st);
			return st;
		}
		
		//___________________________ CREATE EVENT ____________________________//
		
		
		@PostMapping("/createevent")
		public Status register(@RequestBody EventClass as) {
				
			Status s1=new Status(); 
//			System.out.println(as);
			registerRepository.CreateEvent(as);
			
			s1.setStatusCode(333);
			return s1;//register;		
		
		}	
		
	//	
	//	
	//	
//		@GetMapping("/getevent")
//		public List<EventClass> GetEventDetails() {
//			
//			List<EventClass> st =registerRepository.EventDetails();
//			System.out.println(st);
//			return st;
//		}
		
	
//----------------------Status Class-----------------------//
	
	
	public static class Status {
		private int statusCode;
		private String statusMessage;
		private OrphanClass loggedInOrphan;

		
		public OrphanClass getLoggedInCustomer() {
			return loggedInOrphan;
		}
		public void setLoggedInCustomer(OrphanClass loggedInOrphan) {
			this.loggedInOrphan = loggedInOrphan;
		}
		public int getStatusCode() {
			return statusCode;
		}
		public void setStatusCode(int statusCode) {
			this.statusCode = statusCode;
		}
		public String getStatusMessage() {
			return statusMessage;
		}
		public void setStatusMessage(String statusMessage) {
			this.statusMessage = statusMessage;
		}	
	}
}
package com.project.cdac;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="orphanage")
public class OrphanClass {

	
	
	@Id
	private int registrationid;
	
	
	private String username;
	private String email;
	private String mobile;
	private String address;
	private String city;
	private String nooforphan;
	private  String password;
	
	
		public int getRegistrationid() {
		return registrationid;
	}


	public void setRegistrationid(int registrationid) {
		this.registrationid = registrationid;
	}


	public String getUsername() {
		return username;
	}


	public void setUsername(String username) {
		this.username = username;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getMobile() {
		return mobile;
	}


	public void setMobile(String mobile) {
		this.mobile = mobile;
	}


	public String getAddress() {
		return address;
	}


	public void setAddress(String address) {
		this.address = address;
	}


	public String getCity() {
		return city;
	}


	public void setCity(String city) {
		this.city = city;
	}


	public String getNooforphan() {
		return nooforphan;
	}


	public void setNooforphan(String nooforphan) {
		this.nooforphan = nooforphan;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


		@Override
	public String toString() {
		return "OrphanClass [registrationid=" + registrationid + ", username=" + username + ", email=" + email
				+ ", mobile=" + mobile + ", address=" + address + ", city=" + city + ",nooforphan=\" + nooforphan + \", password=" + password + "]";
	}
}

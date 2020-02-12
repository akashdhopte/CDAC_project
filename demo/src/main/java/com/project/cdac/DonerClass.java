package com.project.cdac;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="Doner")
public class DonerClass {
	

	
	@Id
	@GeneratedValue
	private int id;
	private String mobile;
	private String username;
	private  String password;
	private String email;
	
	
	
	
	
	@Override
	public String toString() {
		return "DonerClass [id=" + id + ", mobile=" + mobile + ", username=" + username + ", password=" + password
				+ ", email=" + email + "]";
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
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
	

}
  
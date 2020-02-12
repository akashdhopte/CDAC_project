package com.project.cdac;

public class Login {
	

	public String email;
	
	@Override
	public String toString() {
		return "Login [email=" + email + ", password=" + password + ", getEmail()=" + getEmail() + ", getPassword()="
				+ getPassword() + ", getClass()=" + getClass() + ", hashCode()=" + hashCode() + ", toString()="
				+ super.toString() + "]";
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String password;
	
}
  
package com.project.cdac;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Donation {
	@Id
	@GeneratedValue
	private int id;
	private int food;
	private int stationary;
	private int cloths;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getFood() {
		return food;
	}
	public void setFood(int food) {
		this.food = food;
	}
	public int getStationary() {
		return stationary;
	}
	public void setStationary(int stationary) {
		this.stationary = stationary;
	}
	public int getCloths() {
		return cloths;
	}
	public void setCloths(int cloths) {
		this.cloths = cloths;
	}


}

package com.project.cdac;

import javax.persistence.Entity;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication(scanBasePackages =  {"com.controller,com.project.cdac,com.repository"})
@EntityScan(basePackages = {"com.project.cdac"})
public class CodeProject1Application {

	public static void main(String[] args) {
		SpringApplication.run(CodeProject1Application.class, args);
			System.out.println("connected with server...!");
	}
}

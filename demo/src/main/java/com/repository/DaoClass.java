package com.repository;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.project.cdac.Donation;
import com.project.cdac.DonerClass;
import com.project.cdac.EventClass;
import com.project.cdac.OrphanClass;
import com.project.cdac.appointment;

@Repository
public class DaoClass {

	@PersistenceContext
	private EntityManager entityManage;
	
	@Transactional
	public  void RegisterUser(DonerClass  as)
	{
		entityManage.merge(as);
	}
	
	public DonerClass fetch(String email) {
		return (DonerClass)
				entityManage
				.createQuery("select r from DonerClass r where r.email = :em")
				.setParameter("em", email)
				.getSingleResult();
	}
	
	public long isValidLogin(String email, String password) {
		return (Long) 
	   			entityManage
				.createQuery("select count(r) from DonerClass r where r.email = :em and r.password = :pwd")
				.setParameter("em", email)
				.setParameter("pwd", password)
				.getSingleResult();
	}
	
	public List<OrphanClass> mulistorp(String re){
		List<OrphanClass>list=entityManage.createQuery("Select c from OrphanClass c where c.city='mumbai'").getResultList();
		return list;
	}
	public List<OrphanClass> naglistorp(String re){
		List<OrphanClass>list=entityManage.createQuery("Select c from OrphanClass c where c.city='nagpur'").getResultList();
		return list;
	}
	public List<OrphanClass> punelistorp(String re){
		List<OrphanClass>list=entityManage.createQuery("Select c from OrphanClass c where c.city='pune'").getResultList();
		return list;
	}
	
	public List<OrphanClass> Searchorp(){
		List<OrphanClass>list=entityManage.createQuery("Select c.city from OrphanClass c").getResultList();
		return list;
	}
	
	public List<OrphanClass> listorp(){
		List<OrphanClass>list=entityManage.createQuery("Select c from OrphanClass c").getResultList();
		return list;
	}
	
	public List<Donation> donation(){
		List<Donation> list=(List<Donation>) entityManage.createQuery("select d from Donation ");
		return list;
	}
	
	@Transactional
	public  void ListRequirements(Donation obj){
		entityManage.merge(obj);
	}
	
	public List<Donation> getitems() {
		List<Donation> d =	entityManage.createQuery("select c from Donation c").getResultList();
		return d;
	}
	
//--------------Orphanage Registration----------------//
	@Transactional
	public  void OrphanRegistration(OrphanClass  obj){
		entityManage.merge(obj);
	}
	
	
//----------------------Orphanage Login-----------------//
	public OrphanClass fetchorphanage(String email) {
		return (OrphanClass)
				entityManage
				.createQuery("select o from OrphanClass o where o.email = :ri")
				.setParameter("ri", email)
				.getSingleResult();
	}
	
	public long ophanageLogin(String email, String password) {
		return (Long) 
	   			entityManage
				.createQuery("select count(c) from OrphanClass c where c.email = :ri and c.password = :pwd")
				.setParameter("ri", email)
				.setParameter("pwd", password)
				.getSingleResult();
	}	


//-------------------------------------vivek---------------//

//-------------------------------APPOINTMENT METHOD-----------------------//
@Transactional
public void getappointment(appointment a)
{
	System.out.print(a);
	entityManage.merge(a);
}


public List<appointment> Detailappointment()
{
	List<appointment> oplist=	entityManage.createQuery("select c from appointment c")
	
			.getResultList();
		return oplist;

}

//____________________________ CREATE EVENT __________________________//


@Transactional
public  void CreateEvent(EventClass  as)
{
	//System.out.println("done");
	entityManage.merge(as);
}


//public List<EventClass> EventDetails()
//{
//	List<EventClass> oplist=	entityManage.createQuery("select c from event c")
//	
//			.getResultList();
//		return oplist;
//
//}

}

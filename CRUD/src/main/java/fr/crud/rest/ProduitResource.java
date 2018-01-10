package fr.crud.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import fr.crud.dao.ProduitRepository;
import fr.crud.entity.Produit;

@RestController
@RequestMapping("/api")
public class ProduitResource {
	@Autowired
	ProduitRepository produitDao;
	
	@RequestMapping(value="produits", method = RequestMethod.GET)
	public List<Produit> getAll(){
		return produitDao.findAll();
	}
	
	@RequestMapping(value="produits/{id}", method = RequestMethod.GET)
	public Produit getOne(@PathVariable("id") Long id){
		return produitDao.getOne(id);
	}
	
	@RequestMapping(value="produits", method = RequestMethod.POST)
	public Produit save(@RequestBody Produit produit){
		return produitDao.save(produit);
	}
	
	@RequestMapping(value="produits", method = RequestMethod.PUT)
	public Produit update(@RequestBody Produit produit){
		return produitDao.save(produit);
	}
	
	@RequestMapping(value="produits/{id}", method = RequestMethod.DELETE)
	public void delete(@PathVariable("id") Long id){
		produitDao.delete(id);
	}
	


}

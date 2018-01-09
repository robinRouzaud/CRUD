package fr.crud.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import fr.crud.entity.Fournisseur;
import fr.crud.service.IFournisseurService;

@RestController
@RequestMapping("/api")
public class FournisseurResource {

	@Autowired
	private IFournisseurService fournisseurService;
	
	@RequestMapping(value = "/fournisseurs", method = RequestMethod.POST, produces="application/json")
	public Fournisseur ajouterFournisseur(@RequestBody Fournisseur fournisseur) {
		Fournisseur f = fournisseurService.createFournisseur(fournisseur);
		return f;
	}
	
	@RequestMapping(value="/fournisseur", method=RequestMethod.GET)
	public List<Fournisseur> getFournisseur() {
		return fournisseurService.getAllFournisseur();
	}
	
	@RequestMapping(value="/fournisseur/{id}", method=RequestMethod.DELETE)
	public void deleteFournisseur(@PathVariable("id") Long id) {
		fournisseurService.deleteFournisseur(id);
	}
}

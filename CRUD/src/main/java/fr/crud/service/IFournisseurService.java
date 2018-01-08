package fr.crud.service;

import java.util.List;

import fr.crud.entity.Fournisseur;

public interface IFournisseurService {

	public Fournisseur createFournisseur(Fournisseur fournisseur);
	
	public List<Fournisseur> getAllFournisseur();
	
	public void deleteFournisseur(Long id);
}

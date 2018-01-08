package fr.crud.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fr.crud.dao.FournisseurRepository;
import fr.crud.entity.Fournisseur;

@Service
public class FournisseurServiceImpl implements IFournisseurService {

	@Autowired
	private FournisseurRepository dao;
	
	@Override
	public Fournisseur createFournisseur(Fournisseur fournisseur) {
		return dao.save(fournisseur);
	}

	@Override
	public List<Fournisseur> getAllFournisseur() {
		return (List<Fournisseur>) dao.findAll();
	}

	@Override
	public void deleteFournisseur(Long id) {
		dao.delete(id);
	}

	
}

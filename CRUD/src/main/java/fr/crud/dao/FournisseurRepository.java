package fr.crud.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import fr.crud.entity.Fournisseur;

public interface FournisseurRepository extends JpaRepository<Fournisseur, Long>{

	public Fournisseur findFournisseurByNom(String nom);
}

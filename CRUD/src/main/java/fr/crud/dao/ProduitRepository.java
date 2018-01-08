package fr.crud.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import fr.crud.entity.Fournisseur;
import fr.crud.entity.Produit;

public interface ProduitRepository extends JpaRepository<Produit, Long>{

	public List<Produit> findProduitByFournisseur(Fournisseur fournisseur);
}

package de.htw.inventur.repository;

import de.htw.inventur.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

/**Communication between Backend and Database*/
/**Spring will automatically generate SQL from function-name*/
@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

    Optional<User> findByEmail(String email);
}

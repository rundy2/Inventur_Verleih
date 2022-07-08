package de.htw.inventur.controller;

import de.htw.inventur.entity.User;
import de.htw.inventur.repository.UserRepository;
import de.htw.inventur.request.AuthRequest;
import de.htw.inventur.security.JwtTokenProvider;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

/**Controller for authentication*/
//@CrossOrigin(origins="http://141.56.180.173:3000")
@RestController
@RequestMapping("/auth")
public class AuthController {

    private UserRepository userRepository;

    private PasswordEncoder passwordEncoder;

    private AuthenticationManager authenticationManager;

    private JwtTokenProvider jwtTokenProvider;

    public AuthController(UserRepository userRepository, PasswordEncoder passwordEncoder, AuthenticationManager authenticationManager, JwtTokenProvider jwtTokenProvider) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.authenticationManager = authenticationManager;
        this.jwtTokenProvider = jwtTokenProvider;
    }

    /**For register requests*/
    @PostMapping(value = "/register")
    public ResponseEntity<User> register(@RequestBody AuthRequest authRequest){
        Optional<User> userOptional = userRepository.findByEmail(authRequest.getEmail());

        /**If User is already registered (checked by email) error*/
        if(userOptional.isPresent()){
            return ResponseEntity.badRequest().build();
        }

        /**Else create new User*/
        User user = new User();
        user.setEmail(authRequest.getEmail());
        user.setPassword(passwordEncoder.encode(authRequest.getPassword()));

        /**And save in Database*/
        User created = userRepository.save(user);
        return ResponseEntity.ok(created);
    }

    /**For login requests*/
    @PostMapping(value = "/login")
    public ResponseEntity<String> login(@RequestBody AuthRequest authRequest){
        /**Authenticate User from received Data*/
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        authRequest.getEmail(),
                        authRequest.getPassword()
                )
        );
        /**Generate and return Auth-Token(Bearer)*/
        return ResponseEntity.ok(jwtTokenProvider.generateToken(authentication));
    }
}

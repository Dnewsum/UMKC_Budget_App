package com.mint_condition.springboot.controller;

import com.mint_condition.springboot.dto.LoginRequest;
import com.mint_condition.springboot.model.Login;
import com.mint_condition.springboot.repository.LoginRepository;
import com.mint_condition.springboot.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {

    private final JwtUtil jwtUtil;
    private final LoginRepository loginRepository;

    @Autowired
    public AuthController(JwtUtil jwtUtil, LoginRepository loginRepository) {
        this.jwtUtil = jwtUtil;
        this.loginRepository = loginRepository;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        String email = loginRequest.getEmail();
        String password = loginRequest.getPassword();

        Optional<Login> optionalUser = loginRepository.findByEmail(email);

        if (optionalUser.isPresent()) {
            Login user = optionalUser.get();

            // TEMP: plain-text password check (replace with hashing later)
            if (user.getPassword().equals(password)) {
                String token = jwtUtil.generateToken(user.getUsername());
                return ResponseEntity.ok(Map.of("token", token));
            }
        }

        return ResponseEntity.status(401).body("Invalid credentials");
    }
}

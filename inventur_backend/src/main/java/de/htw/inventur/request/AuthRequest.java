package de.htw.inventur.request;

import lombok.Data;

//Structure of Requests for login/register
@Data
public class AuthRequest {

    private String email;

    private String password;
}

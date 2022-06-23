package de.htw.inventur.request;

import lombok.Data;

@Data
public class UpdateStateRequest {
    private int state;

    private String token;
}

package de.htw.inventur.request;

import lombok.Data;

@Data
public class AddObjectRequest {
    private String name;
    private String room;
    private String storage;
    private String section;
}

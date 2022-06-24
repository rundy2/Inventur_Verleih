package de.htw.inventur;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.PropertySource;

@SpringBootApplication
//@PropertySource("file: ~\\Documents\\InventurApplication\\.applicationConfig\\application.properties")
public class InventurApplication {

    public static void main(String[] args) {
        SpringApplication.run(InventurApplication.class, args);
    }

}

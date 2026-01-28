package com.fernando.course.springboot.webapp.springboot_web.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class UserController {

    @GetMapping("/details")
    public String details() {
        // retorna una vista llamada "details" que existe en
        // resources/templates/details.html
        return "details";
    }

}

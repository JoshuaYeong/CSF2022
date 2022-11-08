package vttp2022.csf.miniproject.controllers;

import java.util.logging.Logger;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import vttp2022.csf.miniproject.models.Contact;
import vttp2022.csf.miniproject.models.Response;

@RestController
@RequestMapping(path = "/api/contact", produces = MediaType.APPLICATION_JSON_VALUE)
public class ContactRESTController {

    private Logger logger = Logger.getLogger(ContactRESTController.class.getName());

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)

    public ResponseEntity<String> postContact(@RequestBody String payload) {

        Contact cont;
        Response resp;

        logger.info("Payload: %s".formatted(payload));

        try {
            cont = Contact.create(payload);
        } catch (Exception ex) {
            resp = new Response();
            resp.setCode(400);
            resp.setMessage(ex.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(resp.toJson().toString());
        }

        resp = new Response();
        resp.setCode(201);
        resp.setData(cont.toJson().toString());
        return ResponseEntity.status(HttpStatus.CREATED).body(resp.toJson().toString());
    }

}

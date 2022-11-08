package vttp2022.csf.miniproject.models;

import java.io.StringReader;

import jakarta.json.Json;
import jakarta.json.JsonObject;
import jakarta.json.JsonReader;

public class Contact {

    private String name;
    private String email;
    private String mobile;

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getMobile() {
        return mobile;
    }
    public void setMobile(String mobile) {
        this.mobile = mobile;
    }
    
    public static Contact create(String json) {

        JsonReader reader = Json.createReader(new StringReader(json));
        JsonObject data = reader.readObject();

        final Contact cont = new Contact();
        cont.setName(data.getString("name"));
        cont.setEmail(data.getString("email"));
        cont.setMobile(data.getString("mobile"));
        return cont;
    }

    public JsonObject toJson() {
        return Json.createObjectBuilder()
            .add("name", name)
            .add("email", email)
            .add("mobile", mobile)
            .build();
    }
}

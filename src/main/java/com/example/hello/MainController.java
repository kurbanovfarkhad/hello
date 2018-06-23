package com.example.hello;

import com.example.hello.mapper.UsMapper;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.Map;

@Controller
public class MainController {

    private UsMapper usMapper;

    public MainController(UsMapper usMapper) {
        this.usMapper = usMapper;
    }


    @GetMapping("/")
    public String main(Map<String,Object> model){
        model.put("name",usMapper.findAll().getMessage());
        return "index";
    }
}

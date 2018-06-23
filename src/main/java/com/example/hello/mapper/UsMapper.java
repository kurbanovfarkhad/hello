package com.example.hello.mapper;

import com.example.hello.model.Mess;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface UsMapper {
    @Select("select * from hello_world")
    Mess findAll();
}

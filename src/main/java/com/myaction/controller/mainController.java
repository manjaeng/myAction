package com.myaction.controller;

import com.myaction.domain.UserVO;
import com.myaction.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

/**
 * Created by manjaeng-desk on 2018-01-02.
 */

@Controller
public class mainController {
    private static final Logger log = LoggerFactory.getLogger(mainController.class);
    @Autowired
    UserService userService;

    @RequestMapping("/login")
    public String greeting(@RequestParam(value="name", required=false, defaultValue="World") String name, Model model) {
        model.addAttribute("name", name);
        List<UserVO> userList = userService.getUserList();
        log.debug("logSize1" ,userList.size());
        log.info("logSize2" ,userList.size());
        log.warn("logSize3" ,userList.size());
        log.error("logSize4" ,userList.size());
        model.addAttribute("userList", userList );
        return "login";
    }

}

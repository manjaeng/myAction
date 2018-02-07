package com.myaction.controller;


import com.myaction.dto.ResultDTO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;



@RestController
public class restController {

    private static final Logger log = LoggerFactory.getLogger(restController.class);


    @RequestMapping(value = "/api/deliver")
    public ResponseEntity<ResultDTO> deliver() {
        ResultDTO resultVO = new ResultDTO();

        StringBuffer contentBuffer = new StringBuffer();
        contentBuffer.append("{");
        contentBuffer.append("'data': 'dleiver data',");
        contentBuffer.append("'location': 'here',");
        contentBuffer.append("'date': 'now',");
        contentBuffer.append("'data1': 'dleiver data1',");
        contentBuffer.append("'data2': 'dleiver data2',");
        contentBuffer.append("'data3': 'dleiver data3',");
        contentBuffer.append("'data4': 'dleiver data4'");
        contentBuffer.append("}");

        resultVO.setContents(contentBuffer.toString());
        resultVO.setResult("SUCCESS");
        if (resultVO.getResult().isEmpty()) {
            return new ResponseEntity(HttpStatus.NO_CONTENT);
            // You many decide to return HttpStatus.NOT_FOUND
        }
        return new ResponseEntity<ResultDTO>(resultVO, HttpStatus.OK);
    }


}

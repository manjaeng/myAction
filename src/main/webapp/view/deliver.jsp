<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<script id="deliverTemplate" type="text/x-handlebars-template">
 주문하신 상품의 배송 정보는 다음과 같습니다.
 결과 : {{result}}

 ID : {{contents.data}}
 Status : {{contents.location}}

 date0 : {{contents.date}}
 data1 : {{contents.data1}}
 data2 : {{contents.data2}}
 data3 : {{contents.data3}}
 data4 : {{contents.data4}}
</script>
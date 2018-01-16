<%@ page import="com.myaction.domain.UserVO" %>
<%@ page import="java.util.List" %>
<%@ page import="java.util.Enumeration" %><%--
  Created by IntelliJ IDEA.
  User: manjaeng-desk
  Date: 2017-12-24
  Time: 오전 1:49
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
  System.out.println("======================");
  Enumeration<String> attributeNames = request.getAttributeNames();
  while(attributeNames.hasMoreElements()){
    System.out.println(attributeNames.nextElement());
  }
  System.out.println("======================");
  List<UserVO> userVOList = (List<UserVO>) request.getAttribute("userList");
  String UserName = userVOList.get(0).getMaUserName();
%>
<html>
  <head>
    <title>tetle</title>
  </head>
  <body>
Name : <%=UserName%>
  </body>
</html>

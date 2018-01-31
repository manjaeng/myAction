<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<%@ page import="com.myaction.domain.UserVO" %>
<%@ page import="java.util.List" %>
<%@ page import="java.util.Enumeration" %><%--
  Created by IntelliJ IDEA.
  User: manjaeng-desk
  Date: 2017-12-24
  Time: 오전 1:49
  To change this template use File | Settings | File Templates.
--%>

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
    <link rel="stylesheet" href="/css/jquery-ui.min.css">
    <link rel="stylesheet" href="/css/style.css">

    <script type="text/javascript" src="/js/jquery-3.2.1.js"></script>
    <script type="text/javascript" src="/js/jquery-ui.min.js"></script>
    <script type="text/javascript" src="/js/chatbot.js"></script>

  </head>
  <body class="  pace-done" style="position: relative; min-height: 100%; top: 0px;">
  Name : <%=UserName%>

  <div class="fixed_msg"><button type="button" onclick="openMessenger();"><span>MESSENGER</span></button></div>
  </body>
</html>

<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<script id="deliverTemplate" type="text/x-handlebars-template">
	<br>
	<span>주문하신 상품의 배송 정보는 다음과 같습니다.</span><br>
	<br>
	<span>결과:  {{result}}</span><br>
	<span>ID :  {{contents.data}}</span><br>
	<br>
	<table width="90%" cellpadding="5" cellspacing="0" border="1" align="center" style="border-collapse:collapse; border:1px #8b0000 solid;">
		<tr bgcolor="#db202a">
			<th><font color="white">Data</font></th>
			<th><font color="white">Content</font></th>
		<tr>
			<td>Status</td>
			<td>{{contents.location}}</td>
		</tr>
		<tr>
			<td>date0</td>
			<td>{{contents.date}}</td>
		</tr>
		<tr>
			<td>data1</td>
			<td>{{contents.data1}}</td>
		</tr>
		<tr>
			<td>data2</td>
			<td>{{contents.data2}}</td>
		</tr>
		<tr>
			<td>data3</td>
			<td>{{contents.data3}}</td>
		</tr>
		<tr>
			<td>data4</td>
			<td>{{contents.data4}}</td>
		</tr>
	</table>
</script>
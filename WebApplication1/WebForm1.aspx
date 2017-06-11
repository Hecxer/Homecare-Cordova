<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WebForm1.aspx.cs" Inherits="WebApplication1.WebForm1" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
    <asp:SqlDataSource runat="server" ConnectionString="<%$ ConnectionStrings:Homecare1ConnectionString2 %>" SelectCommand="SELECT * FROM [pickMed_rec]"></asp:SqlDataSource>
    </div>
        <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:Homecare1ConnectionString %>" SelectCommand="SELECT * FROM [user]"></asp:SqlDataSource>
    </form>
</body>
</html>

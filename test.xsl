<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" 
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/">
		<!-- TODO: Auto-generated template -->
		<html>
		<head>
		</head>
		<body bgcolor="#6ecce6">
		<h1 style="text-align:center"><u>Tables</u></h1>
		<table border="4" align="left" bgcolor="white">
		<caption>EMPLOYEE</caption>
		<tr>
		<th>Name</th>
		<th>Age</th>
		<th>Salary</th>
		<th>Station</th>
		</tr>
		<xsl:for-each select="Railway/Employee">
		<xsl:sort select="Name"></xsl:sort>
		<tr>
		<td>
		<xsl:value-of select="Name"></xsl:value-of>
		</td>
		<td>
		<xsl:value-of select="Age"></xsl:value-of>
		</td>
		<td>
		<xsl:value-of select="Salary"></xsl:value-of>
		</td>
		<td>
		<xsl:value-of select="Station"></xsl:value-of>
		</td>
		</tr>
		</xsl:for-each>
		</table>

		<table border="4" align="right" bgcolor="white">
		<caption>Train</caption>
		<tr>
		<th>Train_no</th>
		<th>Name</th>
		<th>From</th>
		<th>To</th>
		<th>Arrival</th>
		<th>Departure</th>
		<th>Fare</th>
		</tr>
		<xsl:for-each select="Railway/Train">
		<xsl:sort select="Train_no"></xsl:sort>
		<tr>
		<td>
		<xsl:value-of select="Train_no"></xsl:value-of>
		</td>
		<td>
		<xsl:value-of select="Train_Name"></xsl:value-of>
		</td>
		<td>
		<xsl:value-of select="From"></xsl:value-of>
		</td>
		<td>
		<xsl:value-of select="To"></xsl:value-of>
		</td>
		<td>
		<xsl:value-of select="Arrival"></xsl:value-of>
		</td>
		<td>
		<xsl:value-of select="Departure"></xsl:value-of>
		</td>
		<td>
		<xsl:value-of select="Fare"></xsl:value-of>
		</td>
		</tr>
		</xsl:for-each>
		</table>
		<br></br>
		<br></br>
		<br></br>
		<br></br>
		<br></br>
		<br></br>
		<br></br>
		<br></br>
		<br></br>
		<br></br>
		<br></br>
		<br></br>
		<br></br>
		<table border="4" align="left" bgcolor="white">
		<caption>EMPLOYEE</caption>
		<tr>
		<th>Leave ID</th>
		<th>Date</th>
		<th>Description</th>
		</tr>
		<xsl:for-each select="Railway/Leave">
		<xsl:sort select="Name"></xsl:sort>
		<tr>
		<td>
		<xsl:value-of select="Leave_id"></xsl:value-of>
		</td>
		<td>
		<xsl:value-of select="Leave_date"></xsl:value-of>
		</td>
		<td>
		<xsl:value-of select="Leave_desc"></xsl:value-of>
		</td>
		</tr>
		</xsl:for-each>
		</table>
		
		</body>
		</html>
	</xsl:template>
</xsl:stylesheet>
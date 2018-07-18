
var bGraphShown = false;

$(document).ready(function( )
{
	initControls( );


	$(document).on("click", "#ToggleSwitch", function( )
	{
		if ($(this).find("input").prop("checked") == true)
		{
			if ($("#DashboardGraphs").css("display") != "block")
				$("#DashboardGraphs").show("blind");

			if ($("#DashboardIcons").css("display") == "block")
				$("#DashboardIcons").hide("blind");


			$.cookie($("#DashboardGraphs").attr("rel"), "Y");

			showGraphs($("#DashboardGraphs").attr("rel"));
		}

	

	else if (sDashboard == "PayrollDashboard")
	{
		google.charts.setOnLoadCallback(setupPayrollSummaryChart);
		google.charts.setOnLoadCallback(setupLoanSummaryChart);
		google.charts.setOnLoadCallback(setupYearlySummaryChart);
	}

	else if (sDashboard == "SchoolsDashboard")
	{
		google.charts.setOnLoadCallback(setupMonthlyBillingChart);
		google.charts.setOnLoadCallback(setupMonthlyQueriesChart);
		google.charts.setOnLoadCallback(setupYearlyRoyaltySummaryChart);
		google.charts.setOnLoadCallback(setupSchoolLocationCityWiseChart);
		google.charts.setOnLoadCallback(setupSchoolLocationTehsilWiseChart);
		google.charts.setOnLoadCallback(setupSchoolLocationDistrictWiseChart);
		google.charts.setOnLoadCallback(setupSchoolLocationProvinceWiseChart);
		google.charts.setOnLoadCallback(setupStudentsClassWiseChart);
		google.charts.setOnLoadCallback(setupEmployeesDepartmentsChart);
		google.charts.setOnLoadCallback(setupMonthlySummaryChart);
		google.charts.setOnLoadCallback(setupYearlySummaryChart);
	}


	bGraphShown = true;
}
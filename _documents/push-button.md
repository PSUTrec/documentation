---
title: Pedestrian Estimated Volumes From Push Button Actuations
---

The pedestrian estimated volumes from push button actuations is now available on BikePed Portal. The model and research supporting this work was conducted for Oregon DOT by Kothuri et al. (2024). The final report can be found [here](https://www.oregon.gov/odot/Programs/ResearchDocuments/SPR857_ACTIVE-TRANSPORTATION-COUNTS.pdf).  
  
The following sections will guide you through the different tools available on the [_Push Button Actuations_](https://bikeped.trec.pdx.edu/pushbutton/) page. A video tutorial is also available [here](https://www.youtube.com/watch?v=ouU8R9zkP_8).

### Step 1: Selecting your station(s) of interest
There are two ways to select your station(s) of interest: A) select by clicking on the different locations on the map, and B) select by using the filtering options on the metadata table.

__A) Selecting by using the map__  
The map viewing boundary is set at the state level. The number within each circle icon indicates the number of locations that are available within that area. As you zoom in, the circle icons will disaggregate into more circle icons as the location of the intersections become more accurate. Each time you select a station by clicking on a circle icon, the icon will change to a light blue color and a list of stations representing that icon will show up on the right sidebar under "Stations View" (Fig. 1).

<figure class="align-left">
    <img src="{{ site.url }}{{ site.baseurl }}/assets/images/push-fig1.png" alt="">
    <figcaption>Fig. 1: Within the purple box on the map, the selected circle icon, in blue, represents 14 intersections within that area. The right sidebar lists all 14 stations by name under "Stations View".</figcaption>
</figure>

From the "Stations View" sidebar, click on the "+" to add it to the "Analysis Stations" for futher analysis and visualizations (Fig. 2). The selected stations for further analysis will change the circle icons on the map from blue to purple. To unselect a station from the "Analysis Stations", click the "-" button located under the station name.  

<figure class="align-left">
    <img src="{{ site.url }}{{ site.baseurl }}/assets/images/push-fig2.png" alt="" width="500">
    <figcaption>Fig. 2: Within the purple box on the map, the selected "Analysis Stations" are highlighted in purple and the selected "Stations View" are highlighted in light blue. The right sidebar shows the lists of the selected "Analysis Stations" and "Stations View"; note the "+" or "-" buttons under the station names. </figcaption>
</figure>

If you click the "i" icon next to the "+" or "-" buttons, a pop-up of the basic metadata for that station will appear.  

__B) Select by using the "Metadata" table filters__  
The second way to select stations is to use the "Metadata" table filters. To get to the "Metadata" table, click on the "graph" icon in the lower left corner of the map (Fig. 3). Once you click on the "graph" icon, a bottom panel will pop up with three labeled tabs. 

<figure class="align-left">
    <img src="{{ site.url }}{{ site.baseurl }}/assets/images/push-fig3.png" alt="" width="500">
    <figcaption>Fig. 3: The "graph" icon is located on the map in the lower left corner. Click on the "graph" icon to get to the data visualization tools and the metadata table. </figcaption>
</figure>

By selecting the "Metadata" tab, a metadata table for all the stations will be displayed along with the filter menu options on the left sidebar (Fig. 4).

<figure class="align-left">
    <img src="{{ site.url }}{{ site.baseurl }}/assets/images/push-fig4.png" alt="" width="500">
    <figcaption>Fig. 4: The bottom panel pop up is selected to show the "Metadata" tab. The purple circles highlight the filter menu option along the left sidebar, the "+ add to analysis stations" button, and the search bar.</figcaption>
</figure>

The bottom panel can be expanded moving the mouse cursor to the upper edge of the panel and then clicking to drag the panel up or down. You can either use the search window located in the upper right of the metadata panel, or use the filter options on the left sidebar of the panel to find the stations of interest. To add stations from the metadata table to the "Analysis Station" selection, click on the "+ add to analysis stations" button located at along the top border of the panel. You will also notice additional options to display the selected stations on the map, examine the data availability, and to download the metadata table in a variety of formats.  
  
### Step 2: Check the "Station Health"
For each station selected, or for any station of interest, you can also check the station "health". By now, you will have noticed a color bar under each of the stations icon. The health of each station is determined by the amount of data received over the amount of data expected within a fifteen minute period. This means that we expect four records per hour, regardless of if a push button was actuated as long as there is signals data. Within one day we would expect 96 records (four records per hour, 24 hours per day). This lets the user know that even if there are no pedestrian actuations, data is still being generated by the signal (e.g. it is not common for a pedestrian to push the pedestrian button at 3am, but the intersection is still online).  
  
You can set the "Health Scale" and date range of interest by using the filters under the "Station Health" menu within in the right sidebar. After you've set your thresholds, don't forget to click the "Update" button. To check the data availablity of a given station, click on the star button located underneath the station name, and the data availibility figure will pop-up showing the selected date range and thresholds (Fig. 5). The hamburger menu (the three stacked bars in the upper right corner of the data availability chart), will allow you to either download an image of the chart or the data being used to generate the chart.

<figure class="align-left">
    <img src="{{ site.url }}{{ site.baseurl }}/assets/images/push-fig5.png" alt="" width="500">
    <figcaption>Fig. 5: Note the "Station Health" menu option in the right sidebar to set your date range and data availability thresholds. Those thresholds are then visualized on the chart. Click on any of the buttons with a star to data availability chart for either a singular station, or an average of all stations selected for analysis. The hamburger menu icon (three stacked lines) in the upper right corner of the chart will allow you to download an image of the chart or the data behind it.</figcaption>
</figure>

### Step 3: Analyze data using the "Two-Quantity Chart" option  
Once you've selected the stations you want to analyze you can either click the "Analyze" button under the "Analysis Stations" menu in the right sidebar, or you can click the graph icon in the lower left corner of the map (Fig. 3). A lower panel will appear with the default tab set to "Two-Quantity Chart". If main area of the lower panel is blank, check the selected date range (in most cases data are lagged by one day). Once you've selected a date range, click the "Reload" button. Anytime you update a filter or parameter you must click the "Reload" button for those changes to take effect. If you've selected more than on station, by default, the chart will display the average of the selected stations (Fig. 6A). To show the values for each individual station, select the "Ungroup Stations" button and then click the "Reload" button (Fig. 6B).  

<figure class="align-left">
    <img src="{{ site.url }}{{ site.baseurl }}/assets/images/push-fig6.png" alt="" width="500">
    <figcaption>Fig. 6: A) If you selected more than one station to be analyzed, the default visual will show the average for all selected stations. B) To show values for each individual station, select the "Ungroup" button and then click the "Reload" button highlighted in the upper right portion of the main panel.</figcaption>
</figure>

__Data display options__
There are three models that were employed to estimate pedestrian volumes:
- All crosswalk users
- Pedestrians, skateboarders, and wheelchair users
- Pedestrian only
For more information on how these three models were derived, please refer to the final report [Kothuri et al. 2024](https://www.oregon.gov/odot/Programs/ResearchDocuments/SPR857_ACTIVE-TRANSPORTATION-COUNTS.pdf). Each of these models are available to display. In addition you can also display the data availability.  
  
You can also display the data available for each station or average among all selected stations. Remember that for each out we expect four records per hour because we ingest data at 15-min aggregated level. The models used to calculated the estimated volumes are based on hourly data.  

_Example_  
The right sidebar displays all the selectors and filters that will allow you to do some basic visualizations and manipulations. For example, if you're interested in the hourly weekday PM peak estimated total volumes for all crosswalk users compared with pedestrians only, you would select the follow parameters (Fig. 7):  
- 1st Quantity: Total Volume (all crosswalk users), Line Chart, Left y-axis
- 2nd Quantity: Total Volume (only pedestrians), Line Chart, Left y-axis
- Start Date: 02/01/2025
- End Date: 02/28/2025
- Time Range: 15:00 - 19:00
- Days of Week: Mon - Fri (unselect Sunday and Saturday)
- Data Resolution: 1 hour
- Phase: All
- Group: Yes (Average)  

<figure class="align-left">
    <img src="{{ site.url }}{{ site.baseurl }}/assets/images/push-fig7.png" alt="" width="500">
    <figcaption>Fig. 7: Using the selectors and filters using the options provided in the right sidebar to get the weekday PM hourly peak volumes for both all crosswalk users and pedestrian only users.</figcaption>
</figure>
  
_Note: You can zoom in and out of the chart by selecting any section within each of the chart panels. A "Reset zoom" option button will pop-up to reset. Again, you can download the chart image or the data behind the chart by selecting the hamburger menu in the upper right corner of the chart panels. You can also click on the legend options at the bottom of each chart panel to turn a specific quantity "on" or "off"._
  
### Step 4: Analyze historical data one quantity at a time
For historical comparisons, select the "One-Quantity Historic Comparison" tab. We allow one quantity comparisons at a time otherwise it becomes visually cluttered. For historical comparisons you can compare by days, weeks, months, or years, and up to three periods. You have the same filters and parameters as provided for the Two-Quantity Chart visualization. 
  
_Example_  
In this example, we want to compare monthly daily total volumes for all crosswalk users. The following parameters were selected for several stations (Fig. 8):
- Quantity: Total Volume (all crosswalk users)
- Line Chart
- I want to compare: Months
- Start Period 1: 12/2024
- Start Period 2: 01/2025
- Start Period 3: 02/2025 (this is selected with a checkbox)
- Time range: All
- Days of Week: All
- Data Resolution: 1 day
- Phase: All
- Group: No

<figure class="align-left">
    <img src="{{ site.url }}{{ site.baseurl }}/assets/images/push-fig8.png" alt="" width="500">
    <figcaption>Fig. 8: One-quantity historic chart for comparing monthly daily total volume for all crosswalk users. </figcaption>
</figure>
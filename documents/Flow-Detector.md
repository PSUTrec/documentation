## Flow Detectors

The flow detector links the _Detector_ information with _Flow_. The required parameters for _Flow Detectors_ are:

* latitude and longitude of the flow detector location

Latitude and longitude values are in decimal degrees with projection coordinates of WGS84 datum.

If a GPS unit is not available to determine the location of a flow detector use Google Earth to determine an approximate location. In most cases, there is one flow detector associated with one flow; however, multiple flow detectors can be associated with one flow when automated counters are changed, or comparisons among different types of detectors are being tested.

Additional optional attributes associated with _Flow Detector_ are:

* start date
* stop date
* eco channel ID

### Example
If bicyclists are being manually counted at the intersection of 14th St and Folsom, there are ten potential flow detectors (Figure 6). Flow detector locations were approximated on Google Earth where each detector location represents where a bicyclist might be located from initial travel direction (e.g. Flow Detector 1 is located where a bicyclist traveling eastbound on 14th St might turn right onto southbound Folsom St.)

<figure align = "center">
<img src="images/flowdetectors.jpg" width="700">
<figcaption>Fig 6. Intersection of Folsom St and 14th St, San Francisco, California, showing 10 possible flow detectors.</figcaption>
</figure>

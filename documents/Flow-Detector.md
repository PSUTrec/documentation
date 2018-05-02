## Flow Detectors

The flow detector links the _Detector_ information with _Flow_. The required parameters for _Flow Detectors_ are:

* latitude and longitude of the flow detector location

Latitude and longitude values are in decimal degrees with projection coordinates of WGS84 datum.

If a GPS unit is not available to record the location of a flow detector use Google Earth to determine an approximate location. A _Flow Detector_ is unique based on the combination of the _Detector_, the _Flow_, and the location (latitude and longitude). A single location can have multiple _Flow Detectors_ (multiple _Flow Detectors_ can be co-located).

A

Additional optional attributes associated with _Flow Detector_ are:

* start date
* stop date
* eco channel ID

### Example

#### Intersections
If bicyclists are being manually counted at the intersection of 14th St and Folsom, there are ten potential flow detectors (Figure 6) to represent the different possible flows. Similar to linear segment areas, flow detectors that share the same initial flow direction can share the same flow detector location (e.g. Flow Detectors 1-3 can have the same latitude and longitude).

<figure align = "center">
<img src="https://github.com/PSUTrec/documentation/blob/master/images/flowdetectors.jpg" width="700">
<figcaption>Fig 6. Intersection of Folsom St and 14th St, San Francisco, California, showing four possible flow detectors.</figcaption>
</figure>



[Back to Table of Contents](https://github.com/PSUTrec/documentation)

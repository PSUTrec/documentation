---
title: "Flow Detectors"
---
The flow detector links the _Detector_ information with _Flow_. The required parameters for _Flow Detectors_ are:

* latitude and longitude of the flow detector location

Latitude and longitude values are in decimal degrees with projection coordinates of WGS84 datum.

If a GPS unit is not available to record the location of a flow detector use [Google Earth]({{ site.url }}{{ base.url }}/documents/08-additional-resources.md) to determine an approximate location. A _Flow Detector_ is unique based on the combination of the _Detector_, the _Flow_, and the location (latitude and longitude). A single location can have multiple _Flow Detectors_ (multiple _Flow Detectors_ can be co-located).

Additional optional attributes associated with _Flow Detector_ are:

* start date
* stop date
* eco channel ID

### Example

#### Intersections
If bicyclists are being manually counted at the intersection of 14th St and Folsom St, there are nine potential flows (represented by arrows in Fig. 1) which will result in nine _Flow Detectors_. _Flow Detectors_ that share the same initial flow direction can share the same flow detector location. For example, Detector A has the same location information for the three different possible flows. Each of those three different _Flows_ combined with the same geographical information for Detector A will create three different _Flow Detectors_.

<figure class="align-left">
  <img src="{{ site.url }}{{ base.url }}/assets/images/flowdetectors-img.png" width="700">
  <figcaption>Fig 1. Intersection of Folsom St and 14th St, San Francisco, California, showing four possible flow detectors.</figcaption>
</figure>  

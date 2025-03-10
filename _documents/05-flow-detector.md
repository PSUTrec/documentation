---
title: "Flow Detectors"
---
The flow detector links the _Detector_ information with _Flow_. The required parameters for _Flow Detectors_ are:

* latitude
* longitude

Latitude and longitude values are in decimal degrees with projection coordinates of WGS84 datum. The lat/lon should be the location of where the count is being recorded, not the location of the detector hardware.  

Additional optional attributes associated with _Flow Detector_ are:
  
* start date - start date of data being recorded at this location
* stop date - stop date of data being recorded, but typically left blank
* eco channel ID - this is specifically used for Eco-Counter hardware

### Example

#### Intersections
If bicyclists are being manually counted at the intersection of 14th St and Folsom St, there are nine potential flows (represented by arrows in Fig. 1) which will result in nine _Flow Detectors_. _Flow Detectors_ that share the same initial flow direction can share the same flow detector location. For example, Detector A has the same location information for the three different possible flows. Each of those three different _Flows_ combined with the same geographical information for Detector A will create three different _Flow Detectors_.

<figure class="align-left">
  <img src="{{ site.url }}{{ site.baseurl }}/assets/images/flowdetectors-img.png" alt="">
  <figcaption>Fig 1. Intersection of Folsom St and 14th St, San Francisco, California, showing four possible flow detectors.</figcaption>
</figure>  

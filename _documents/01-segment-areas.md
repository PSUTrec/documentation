---
title: "Segment Area"
---
_Segment Areas_ are uniquely defined (and required) by the following parameters:
* _Segment Area Name_
* [_Functional Classification_](https://psutrec.github.io/documentation/documents/07-parameter-definitions.md)
* _State_
* _County_

Additional parameters include:
* speed limit
* route type
* paved/un-paved
* route sign number
* observed land use

A _Segment Area_ cannot have more than one _Functional Classification_.

A typical _Segment Area_ extends along a road or pathway until a user is able to change their direction of travel, unless the _Segment Area_ is part of an intersection count (see below). A _Segment Area_ is composed of all _Facilities_, _Detectors_, _Flows_, and _Flow Detectors_.

### Example 1
If counts are being recorded on either side and both directions on Hawthorne Bridge the _Segment Area_ is "Hawthorne Bridge" (Fig. 1).

<figure class="left-align">
  <img src="{{ site.url }}{{site.baseurl }}/assets/images/seg-hawthorn-bridge-img.jpg" alt = "">
  <figcaption>Fig. 1. Hawthorne Bridge, Portland, Oregon.</figcaption>
</figure>  

## Intersections
The name of the segment should start with the road name from where the count originates. The second part of the segment name is the road name of the intersection. There are several instances where an intersection can have more than two unique _Segment Areas_.

### Example 2
There are two _Segment Areas_ at the intersection of 17th St and Valencia St. If bicyclists are being counted on Valencia St either continuing travel on Valencia St or turning onto 17th St. The _Segment Area Name_ would be "Valencia St & 17th St" (Fig. 2). If bicyclists are being counted on 17th St and are either continuing to travel on 17th St or turning onto Valencia St, the _Segment Area Name_ would be "17th St & Valencia St".

<figure align = "center">
  <img src="{{ site.url }}{{site.baseurl }}/assets/images/seg-17thSt-ValenciaSt-img.png" alt="">
  <figcaption>Fig. 2. 17th St & Valencia St, San Francisco, California.</figcaption>
</figure>  

### Example 3
There are three _Segment Areas_ at the intersection of Circle Blvd and Kings Blvd because the _Functional Classification_ of Circle Blvd changes from "Minor Collector" to "Minor Arterial" (Fig. 3).

<figure class="left-align">
  <img src="{{ site.url }}{{ site.baseurl }}/assets/images/seg-CircleBlvd-KingsBlvd-img.png" alt="">
  <figcaption>Fig. 3. Circle Blvd & Kings Blvd, Corvallis, Oregon. The highlighted blue area represents "Minor Arterial" and the highlighted purple area represents "Major Collector".</figcaption>
</figure>

The name of the segment should start with the road name from where the count originates and include the functional classifcation in parentheses. The second part of the segment name is the road name of the intersection. The three segment names for Example 2 are:
- Circle Blvd (Minor Arterial) & Kings Blvd
- Circle Blvd (Major Collector) & Kings Blvd
- Kings Blvd & Circle Blvd

### Example 4
There are 12 _Segment Areas_ where 8th St, Townsend St, Division St, and Henry Adams St intersect around a roundabout. Division St and Townsend St are both "Major Collectors", 8th St is a "Minor Arterial", and Henry Adams St is a "Local" road (Fig. 4).

<figure class="align-left">
  <img src="{{ site.url }}{{ site.baseurl }}/assets/images/seg-8thSt-TownsendSt-img.png" alt="">
  <figcaption>Fig. 4. A five way roundabout in San Francisco, California. The highlighted blue area represents "Minor Arterial", the highlighted purple area represents "Major Collector", and the highlighted gray area represents "Local" functional classes.</figcaption>
</figure>

The 12 segment names for Example 3 are:
- Division St & Henry Adams St
- Division St & Townsend St
- Division St & 8th St
- Henry Adams St & Division St
- Henry Adams St & Townsend St
- Henry Adams St & 8th St
- Townsend St & 8th St
- Townsend St & Division St
- Townsend St & Henry Adams St
- 8th St & Townsend St
- 8th St & Division St
- 8th St & Henry Adams St

Additional exceptions: If there is an intersection where the name changes after an intersection following the same flow of traffic creating a separate _Segment Area_ is recommended to avoid confusion when creating and uploading metadata or count data. In addition, if there is an intersection where a bicyclist or pedestrian can turn in the same flow direction but onto two different facilities (insert figure here of trail versus street), creating a separate _Segment Area_ is also recommended to avoid confusion.  

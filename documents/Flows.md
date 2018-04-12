## Flows: Intersections!

Flows specifically refer to the direction of travel of each facility type. The _Direction_ of travel is a required parameter where there can be multiple flows per facility type. At an intersection, the _Direction_ includes the initial direction of travel and the final direction of travel (e.g. "E, N", "E, E", "E, S"). If the direction inital or final direction of travel is unknown (e.g. automated counter, scramble-type crossing), or the flow is an aggregate of all flow directions within a _Segment_Area_ for counts associated with bicyclist wearing helmets, gender of user, etc. the direction should be set to "undefined".

Additional characteristics of _Flow_ include:
* bicycle
* pedestrian
* equestrian
* off road
* motor vehicles
* other

These types of flows are not mutually exclusive and allow flexibility for choosing multiple flow types when unknown (e.g. infrared counters are unable to distinguish bicyclists, pedestrians, and equestrians on multiuser trails). When applicable, select the appropriate flow types.

### Example
Bicyclists traveling eastbound in a bike line on 14th St have an option to travel in three directions at the intersection with Folsom St (Figure 5).

<figure align = "center">
<img src="https://github.com/PSUTrec/documentation/blob/master/images/14thSt%26FolsomSt_flow.png" width="700">
<figcaption>Fig 5. Intersection of Folsom St and 14th St, San Francisco, California, showing three possible travel _directions_ from eastbound 14th St.</figcaption>
</figure>

If all directions of travel are observed then there will be three "bicycle" type flows associated with this one _Facility_. The _Direction_ for traveling eastbound on 14th St and then turning right going southbound on Folsom St would be "E, S", where the first direction is the initial direction of travel and the second direction is the continued direction of travel at the intersection. The _Direction_ for traveling eastbound on 14th St and then continuing on 14th St would be "E, E". The _Direction_ for traveling eastbound on 14th St and then turning left going northbound on Folsom St would be "E, N".

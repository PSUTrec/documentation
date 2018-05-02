## Facilities

For each unique segment area there can be multiple facility types within a given _Segment Area_ (e.g. roadway and sidewalk). Required parameters for _Facilities_ include _Facility Type_ and a brief _Description_. In addition, facilities can change over time (e.g. a roadway one year turns into a bike lane the next year). A new _Facility Type_ must be created each time it changes. _Facility Types_ included are:

* bike lane
* general activity count
* roadway
* path/trail
* sidewalk
* cycle track
* crosswalk

Only include _Facility Type_ where traffic counts are observed. For example, if bicycle counts are the only measurement on a typical urban street with a bike lane and sidewalks, and no bicyclists were observed on the sidewalk, then the only facility would be the bike line. Additional characteristics associated with facilities should be included when applicable (e.g. sharrows or bike route signs on roadways). These additional characteristics are:

* paved
* side
* facility width
* color
* color type
* buffer
* overpass
* underpass
* sharrows
* bike route signs
* bike boulevard
* intersection

The "side" of the facility should be included if the flow direction of travel is ambiguous.

### Example

Figure 4 shows the intersection of Folsom St and 14th St where pedestrian and bicyclist counts were measured. There are two unique _Segment Areas_, "Folsom St & 14th St" and "14th St & Folsom St". The "Folsom St & 14th St" _Segment Area_ has three potential _Facility Types_:
* bike lane on Folsom St
* sidewalk on the east side of Folsom St
* sidewalk on the west side of Folsom St

The "14th St & Folsom St" _Segment Area_ has four potential facility types:
* eastbound bike lane along a one way street that terminates at Folsom St,
* roadway with sharrows on 14th St east of Folsom St
* sidewalk on north side of 14th St
* sidewalk on south side of 14th St

Other characteristics associated with facilities should be included when applicable (e.g. sharrows along 14th St east of Folsom St) because these additional types of characteristics often change over time.

<figure align = "center">
<img src="https://github.com/PSUTrec/documentation/blob/master/images/FolsomSt%2614thSt.jpg" width="700">
<figcaption>Fig 4. Intersection of Folsom St and 14th St, San Francisco, California.</figcaption>
</figure>

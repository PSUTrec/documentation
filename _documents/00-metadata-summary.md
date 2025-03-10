---
title: "Summary and Structure of Metadata and Data"
---

The following tutorial and example sections describes the metadata and data attribute requirements for uploading manual and short-term duration count data into BikePed Portal. Metadata must be created prior to uploading or adding any count data.  
  
The general relationship between metadata and data are shown in Figure 1. _Segment Area_, _Facility_, _Flow_, _Detector_, and _Flow Detector_ are the main sections defining metadata. A single location, or _Segment Area_, can capture multiple types of count data based on combinations of facility types, flow types, and detector(s).  

<figure class="align-left">
  <img src="{{ site.url }}{{ site.baseurl }}/assets/images/metadata-data-fig.png" alt="">
  <figcaption>Fig. 1. A general depiction of the one to many relationship of a single location representing different types of count data.</figcaption>
</figure>

Figure 2 is an example describing how one _Segment Area_ can capture multiple types of count data. For each _Segment Area_ there can be multiple _Facilities_ (e.g. sidewalk, roadway). For each _Facility_ there can be multiple _Flows_ (e.g. direction, mode). For each _Flow_ there can be multiple detectors, or just one detector. Which then produces a unique _Flow Detector_ for each type of data being recorded (e.g. bicycles traveling northbound on a roadway can be different from bicycles traveling southbound on a roadway). For each _Flow Detector_ there is only one type of _Data_ being counted.  

<figure class="align-left">
  <img src="{{ site.url }}{{ site.baseurl }}/assets/images/metadata-data-example-fig.png" alt="">
  <figcaption>Fig. 2. Example of how one location (Segment Area) represents multiple types of count data.</figcaption>
</figure>

The proceeding documentation sections for Metadata and Data lists and describes the required and optional attributes recorded in BikePed Portal. Examples are provided in each section. If there are any examples that are not listed that would be helpful, or more clarity is required, please let us know so that we can continue to improve the documentation.
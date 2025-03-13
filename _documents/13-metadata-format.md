---
title: "Metadata for Manual Counts"
---

Metadata is the data about the location of where counts are being observed. The more metadata that is provided, the more context is given about the location. The _metadata\_template.xlsx_ file contains two worksheets described as "Required" and "Optional" (Fig. 1). In BikePed Portal, there is a set number of required attributes and a number of optional attributes that can also be included. 

<figure class="align-left">
  <img src="{{ site.url }}{{ site.baseurl }}/assets/images/meta-fig1.png" alt="">
  <figcaption>Fig. 1. The metadata template file has two worksheets: one containing all the required attributes, and one containing all the optional attributes.</figcaption>
</figure>
  
Each column is named by a category and a descriptive attribute. For example, `segment_areas.segment_name` indicates that the attribute belongs to a category `segment_areas` with the specific attribute of `segment_name`; any attribute that is associated with the facility (e.g. roadway, sharrow, bike lane, sidewalks, west side of the side walk, etc.) will have a column name that starts with `facilties` with an attribute name associated with the `facilities` category (e.g. `facilities.pavement`) (Fig. 2). There is extensive documentation and examples of each attribute is defined under the _Framework_ section (see sidebar menu) for each major category.  

<figure class="align-left">
  <img src="{{ site.url }}{{ site.baseurl }}/assets/images/meta-fig2.png" alt="">
  <figcaption>Fig. 2. Column attribute names for two categories `segment_areas` and `facilities`.</figcaption>
</figure>

Remember that one row equals one observation. The Framework Summary describes how one location, or _Segment Area_, can define multiple observations based on what facilities are being included, the flow of direction, and travel mode.
  
The first row of data provides an example of the type of data and format that is required. Some of attributes have pre-populated options for the type of data or information that is required (Fig. 3),and some attributes have a specific format that must be followed (e.g. any start/end date must be in "yyyy-mm-dd hh:mm:ss-tz"). Table 1 lists the required attributes, type of data (format), and an example.  

<figure class="align-left">
  <img src="{{ site.url }}{{ site.baseurl }}/assets/images/meta-fig3.png" alt="">
  <figcaption>Fig. 3. Example of a column where values of a specific attribute are predefined.</figcaption>
</figure>

If you are including any of the "Optional" attributes, copy or cut the attribute column from the "Optional" worksheet, and insert the column within the group of columns representing that particular category.
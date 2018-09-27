---
title: "Summary and Structure of Metadata"
---

The following tutorial and examples section describes metadata and data requirements for uploading data into BikePed Portal. For a more detailed explanation and definition of parameter terms used in this section please refer to _Parameter Definitions_ in the _References_ section of the documentation.

Prior to uploading any count data into BikePed Portal, metadata of any type of count data must be created. Figure 1 shows the general relationship of required metadata parameters and data parameters.

<figure class="align-left">
  <img src="{{ site.url }}{{ site.baseurl }}/assets/images/metadata-data-image.png" alt="">
  <figcaption>Fig. 1. Example representation of data required for sharing and available in BikePed Portal.</figcaption>
</figure>

_Segment Area_, _Facility_, _Flow_, and _Flow Detector_ are the main sections defining metadata. Figure 1 indicates that for each _Segment Area_ there can be multiple _Facilities_. For each _Facility_ there can be multiple _Flows_, and for each _Flow_ there can be multiple _Flow Detectors_. For each _Flow Detector_ there is only one type of _Count Data_; but, there can be multiple _Count Data_ uploads for each _Flow Detector_ (e.g. data is manually uploaded periodically for different time periods). Under each main metadata and data section lists the required parameters. Optional parameters are available and will be discussed in the subsequent _Tutorial and Examples_ sections.  

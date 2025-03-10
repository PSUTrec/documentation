---
title: "Detectors"
---
Multiple flows can be detected by a single detector within a certain facility of a segment area. Additionally, detectors are decoupled from a segment area to allow for detector devices to move multiple times in multiple areas.

Required parameters for _Detectors_ are:

* Jurisdiction - if the hardware is owned by another organization, or the location jurisdiction is different from the organization
* Organization - should be the same as listed in _Segment Area_
* Description - user defined description
* Short Name - user defined short name

Optional parameters are:
* Serial Number
* Make
* Model
* Automated  
  
If counts are detected by an automated counter, the Serial Number, Make, and Model should be recorded in the event the automated counter is re-used for a different flow, facility, or segment area; and to monitor the functional status of the counter.

If counts are manually recorded then the Make or Model field should be filled with "Manual".

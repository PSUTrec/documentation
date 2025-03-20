---
title: "Metadata for Manual Counts"
---

## How to fill out the metadata template file

### Step 1: Understanding the metadata
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

### Step 2: Fill out the metadata attributes - one row = one unique description 
__"Required" attributes__  
The first few rows of the metadata template file provides an example of the type of data and format that is required and how one location can have many descriptive observations. Some of attributes have pre-populated options for the type of data or information that is required (Fig. 3),and some attributes have a specific format that must be followed (e.g. any start/end date must be in "yyyy-mm-dd hh:mm:ss-tz"). Table 1 lists the required attributes, type of data (format), and an example.  

<figure class="align-left">
  <img src="{{ site.url }}{{ site.baseurl }}/assets/images/meta-fig3.png" alt="">
  <figcaption>Fig. 3. Example of a column where values of a specific attribute are predefined.</figcaption>
</figure>

__"Optional" attributes__  
If you are including any of the "Optional" attributes, copy or cut the attribute column from the "Optional" worksheet, and insert the column within the group of columns representing that particular category.  

### Step 3: Provide a unique identifier for each row of metadata observations
The last column of the "Required" attributes in the template file is the `meta_id`. The `meta_id` is a user defined unique ID that links the one unique row of metadata to the count data ([that is provided and described in a separate file](https://psutrec.github.io/documentation/documents/14-data-format/) associated with that unique row of metadata.

### Step 4: Save file as CSV
After the metadata template has been completed, rename the file and save the "Required" worksheet as a CSV formatted file.
  
|Table 1. List of required attributes, format, and examples|
|---- | --- | --- |
| Category & Attribute | Format | Example |
| --- | --- | --- |
| `segement_areas.segment_name` | character/text |  Main St. at 12th St. |
| `segment_areas.start_time` | yyyy-mm-dd hh:mm:ss-tz | 2025-03-25 14:30:00-08 |
| `segment_areas.county` | character/text | Multnomah |
| `segment_areas.state` | two letter abbreviation | OR |
| `segment_areas.city` | character/text | Portland |
| `segment_areas.functional_classification` | predefined | Local |
| `segment_areas.route_sign_number` | numeric, if unknown `0`| `0` |
| `segment_areas.org_name` | your organization | Portland State University |
| `facilities.facility_type` | predefined | Roadway |
| `facilities.description` | user defined, character/text | Local road near school |
| `facilities.paved` | predefined T/F | TRUE |
| `flows.direction` | character/text | N, S |
| `flows.bike` | predefined T/F | TRUE |
| `flows.[mode]` | predefined T/F | FALSE |
| `detectors.jurisdiction` | organization owning the hardware, can also be `*.org_name` | DOT |
| `detectors.org_name` | organization recording data, same as `segment_areas.org_name` | Portland State University |
| `detectors.description` | user defined, character/text | Manual Count |
| `detectors.short_name` | user defined, character/text | Manual Count |
| `detectors.serial_num` | serial number of hardware if using an automatic counter, otherwise "Manual Count" | Manual Count |
| `detectors.make` | Make of the detector if using an automatic counter, otherwise "Manual Count" | Manual Count |
| `detectors.model` | Model of the detector is using automatic counter, otherwise "Manual Count" | Manual Count |
| `detectors.automated` | predefined T/F | FALSE |
| `flow_detectors.latitude` | decimal degrees, WGS84 datum | 37.780497 |
| `flow_detectors.longitude` | decimal degrees, WGS84 datum | -122.482652 |
| `flow_detectors.start_date` | yyyy-mm-dd hh:mm:ss-tz | 2025-05-01 12:00:00-08 |
| `flow_detectors.end_date` | yyyy-mm-dd hh:mm:ss-tz (can be left blank) | |
| `meta_id` | user defined character/text | 2025main12 |


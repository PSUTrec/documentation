var store = [{
        "title": "Summary and Structure of Metadata",
        "excerpt":"The following tutorial and examples section describes metadata and data requirements for uploading data into BikePed Portal. For a more detailed explanation and definition of parameter terms used in this section please refer to Parameter Definitions in the References section of the documentation. Prior to uploading any count data into...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/documentation/documents/00-metadata-summary/",
        "teaser":null},{
        "title": "Segment Area",
        "excerpt":"Segment Areas are uniquely defined (and required) by the following parameters: Segment Area Name Functional Classification State CountyAdditional parameters include: speed limit route type paved/un-paved route sign number observed land useA Segment Area cannot have more than one Functional Classification. A typical Segment Area extends along a road or pathway...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/documentation/documents/01-segment-areas/",
        "teaser":null},{
        "title": "Facilities",
        "excerpt":"For each unique segment area there can be multiple facility types within a given Segment Area (e.g. roadway and sidewalk). Required parameters for Facilities include Facility Type and a brief Description. In addition, facilities can change over time (e.g. a roadway one year turns into a bike lane the next...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/documentation/documents/02-facilities/",
        "teaser":null},{
        "title": "Flows",
        "excerpt":"Flows specifically refer to the direction of travel of each facility type. The Direction of travel is a required parameter where there can be multiple flows per facility type. At an intersection, the Direction includes the initial direction of travel and the final direction of travel (e.g. “E, N”, “E,...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/documentation/documents/03-flows/",
        "teaser":null},{
        "title": "Detectors",
        "excerpt":"Multiple flows can be detected by a single detector within a certain facility of a segment area. Additionally, detectors are decoupled from a segment area to allow for detector devices to move multiple times in multiple areas. Required parameters for Detectors are: Jurisdiction Description Short NameOptional parameters are: Serial Number...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/documentation/documents/04-detectors/",
        "teaser":null},{
        "title": "Flow Detectors",
        "excerpt":"The flow detector links the Detector information with Flow. The required parameters for Flow Detectors are: latitude and longitude of the flow detector locationLatitude and longitude values are in decimal degrees with projection coordinates of WGS84 datum. If a GPS unit is not available to record the location of a...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/documentation/documents/05-flow-detector/",
        "teaser":null},{
        "title": "Data",
        "excerpt":"Data required for uploading counts include the following: Start time (yyyy-mm-dd hh:mm:ss) End time (yyyy-mm-dd hh:mm:ss) VolumeStart and End time must be reported in 24-hour format using the location’s local time. If uploading a bulk file for multiple flow detectors then the following parameters are also required: Latitude of flow...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/documentation/documents/06-data/",
        "teaser":null},{
        "title": "Parameter Definitions",
        "excerpt":"Functional Classification Roadway type defined by FHWA. Waze has a list of resources by state for determining the functional class of each segment area. Functional classes used in BikePed Portal are: Interstate Principal Arterial - Other Freeways and Expressways Principal Arterial - Other Minor Arterial Major Collector Minor Collector Local...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/documentation/documents/07-parameter-definitions/",
        "teaser":null},{
        "title": "Additional Resources",
        "excerpt":"Exporting Multiple Flow Detector Locations from Google Earth Gathering a single or few Flow Detector latitude and longitude coordinates in Google Earth is not difficult. However, generating many coordinates can be tedious. Depending on the number of coordinates we suggest two ways to obtain these coordinates. Example 1 Example 2...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/documentation/documents/08-additional-resources/",
        "teaser":null},{
        "title": "QAQC",
        "excerpt":"BikePed Portal employs QAQC flags to all permanent count locations. The QAQC flags include: zero-run length (e.g. the number of consecutive zeros) non-zero run length (e.g. the number of consecutive non-zero volumes) rolling median (daily volume compared to median volume from past 27 days)For more details on how the calculations...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/documentation/documents/09-qaqc/",
        "teaser":null},{
        "title": "Annotation",
        "excerpt":"The following tutorial explains how to annotate your data in BikePed Portal, using our annotation tool. Accessing the Annotation Tool Suppose your organization is the Portland Bureau of Transportation, and you want to make an annotation regarding a sensor on the Tilikum Crossing Bridge: Fig. 1. Click on \"Annotations\" Fig....","categories": [],
        "tags": [],
        "url": "http://localhost:4000/documentation/documents/10-annotations/",
        "teaser":null},{
        "title": "Adding a Correction Factor",
        "excerpt":"The following tutorial explains how to use the new correction factor feature of the annotation tool. Accessing the Correction Factor Tool From the dashboard, click on Annotations. Fig. 1Data Correction is currently only enabled for the Rock Creek Trail @ Peirce Mill segment area. Fig. 2. Select region Fig. 3....","categories": [],
        "tags": [],
        "url": "http://localhost:4000/documentation/documents/11-data-correction/",
        "teaser":null},{
        "title": "Switch to GitHub Pages",
        "excerpt":"User documentation for BikePed Portal has been switched from a standard GitHub repository to using GitHub Pages using Minimal Mistakes theme. ","categories": [],
        "tags": ["updates&notices"],
        "url": "http://localhost:4000/documentation/update/",
        "teaser":null},{
        "title": "National Capital Region Trail Monitoring and Analysis Program",
        "excerpt":"Fig. 1. Count locations within the National Capital RegionFor the past couple of years we have been working with UNC and VT on the National Capital Region Trail Monitoring and Analysis Program. The program is funded by the National Parks Service and consists of several regional partners within the DC,...","categories": [],
        "tags": ["notices"],
        "url": "http://localhost:4000/documentation/NCR-project-post-1/",
        "teaser":null},{
        "title": "Region-level dashboard now available",
        "excerpt":"Now available on the Dashboard page, you can select to view a dashboard on a regional level. The regions are pre-defined based on our project partners. Let us know what you think! ","categories": [],
        "tags": ["notices"],
        "url": "http://localhost:4000/documentation/regional-dashboard-ui/",
        "teaser":null}]

---
title: "How to Use the QAQC Feature"
---

BikePed Portal employs QAQC flags to all permanent count locations. The QAQC flags include:
- zero-run length (e.g. the number of consecutive zeros)
- non-zero run length (e.g. the number of consecutive non-zero volumes)
- rolling median (daily volume compared to median volume from past 27 days)  
  
For more details on how the calculations were determined please refer to [McNeil and Tufte (2018)](https://nitc.trec.pdx.edu/research/project/1026/Biking_and_Walking_Quality_Counts:_Using_%E2%80%9CBikePed_Portal%E2%80%9D_Counts_to_Develop_Data_Quality_Checks).  
  
## Learning objectives  
By the end of the tutorial users should be able to:
- 

### Step 1: Select a flow detector
After selecting the QAQC tab on the left sidebar, you will automatically be shown the organizations you have permission to view or edit. If your organization membership has detectors located in multiple states, you will then be directed to pick a state before being given the option to select a segment area of interest.  
  
<figure class="align-left">
  <img src="{{ site.url }}{{ site.baseurl }}/assets/images/qaqc-segarea-interest.png" alt="">
  <figcaption>Fig. 1. Example of user interface at the for selecting a segment area of interest. Note that you can also type in the search bar if you're looking for a specific area.</figcaption>
</figure>  

Once the segment area of interest has been selected, a list of flow detectors will be displayed providing the flow detector ID, flow type (e.g. bike, pedestrian, other), and direction (e.g. E, W, undefined). Once the flow detector of interest has been selected, interface will switch to the "Review" tab.

### Step 2: Select the data period  
A display of the most recent month of data is the default display. Use the sidebar on the right to select the data period (e.g. year, month) and see which months have "no data", "not yet reviewed", "fully reviewed", and "partially reviewed".  
  
Once a data period has been selected, the chart will update with the raw data and any visual flags for that month.   
  
<figure class="align-left">
  <img src="{{ site.url }}{{ site.baseurl }}/assets/images/qaqc-review-page.png" alt="">
  <figcaption>Fig. 2. Example of review page for a specific flow detector. Note the options in the right sidebar area and definitons for flagged data values and review status.</figcaption>
</figure>  
  
User can either use range selector at the bottom of the figure, or highlight the figure, to select the range of data of interest. The table will update to show which rows of data have been selected. Once the data are selected, choose one of three reviewer options "mark selected as valid", "mark selected as unsure", or "mark selected as invalid". Changes made will be updated immediately.  

### Step 3: Download data
When users download data from the "Download Data" page data flags and review status are also included.
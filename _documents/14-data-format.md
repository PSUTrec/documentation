---
title: Data for Manual Counts
---

## How to fill out the data template file

You're finished creating and formatting the metadata for all your count locations, and provided a unique `metaID`. You will now use that `metaID` with the "data_template.xlsx" file. You have the option to either have all your count data in one file or divide your count data into multiple files, user preference.

### Step 1: Understanding the data
A single row of data represents a single unique observation. There are five columns for five different attributes:
- `meta_id`: unique metadata ID created in the metadata file
- `start_time`: start time of the count period (yyyy-mm-dd hh:mm:ss-tz)
- `end_time`: end time of the count period (yyyy-mm-dd hh:mm:ss-tz)
- `measure_period`: the duration of the count period (e.g. 00:15:00 for 15 min, 01:00:00 for one hour)
- `volume`: count or volume

### Step 2: Complete the data file 
Many count programs collect their manual count data in many different formats. Unfortunately, those count formats will need to be reformatted into the format described in this documentation. An example of the acceptable format is provided in the data template file. Note that the example includes data using two unique `meta_id`s for counts representing two unique types of metadata (Fig. 1). It is up to you if you want to submit one data file or submit multiple data files.

<figure class="align-left">
  <img src="{{ site.url }}{{ site.baseurl }}/assets/images/data-fig1.png" alt="">
  <figcaption>Fig. 1. Example data file format. Note that there are two types of count data as indicated by the two different `meta_id`s.</figcaption>
</figure>

### Step 3: Save as CSV
After the data template has been completed, rename the file and save the "Required" worksheet as a CSV formatted file.  
  
You are now ready to submit your file.  
  
If at any point you have any question, do not hesitate to contact us.
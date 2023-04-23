---
title: "Annotation"
---
The following tutorial explains how to annotate your data in BikePed Portal, using our annotation tool. To access the annotation tool, start from the _Dashboard_ view of your account. From the left sidebar menu, click on _Annotations_, and select your organization, state, segment area of interest, and flow detector of interest. You will then arrive at the annotation tool.

### Entering Bulk Annotations
You may want to enter an annotation for an event that applies to multiple detectors. For this, you will use _bulk mode_. While following the instructions above, when you reach the step to _Select segment of interest_, click on the icon of a text bubble and a plus sign at the top of the left sidebar. This will open up an annotation window wherein you may select all the devices in all the segment areas affected, enter date range and annotation type, and make a note that applies to them all.

<figure class="align-left">
    <img src="{{ site.url }}{{ site.baseurl }}/assets/images/annotation-bulk-mode.jpg alt="">
    <figcaption>Fig. 1. Entering annotations in bulk mode</figcaption>
</figure>

Note that the default date/time setting for annotations in bulk mode will be the day you make the annotation, from 12:00 AM to 11:59 PM.

<figure class="align-left">
    <img src="{{ site.url }}{{ site.baseurl }}/assets/images/annotation-bulk-default-time.jpg alt="">
    <figcaption>Fig. 2. Default date/time, bulk mode</figcaption>
</figure>

Please note, the tool does not support data visualization for bulk annotations, so the rest of this tutorial will apply only to _Review Mode_, where a single detector is selected.

### Review Mode

### Controlling Plot View
In _Review Mode_, the view is of a plot with data points, the horizontal axis of which represents time, and the vertical axis, volume of data. In the upper left region of the plot, next to the word _Zoom_, there are buttons you can use to adjust the time interval shown by the plot.

You can select: 

- 1 day
- 1 month
- 1 year
- All

Each of these selections comes with a particular data resolution, which is shown at the top of the plot. Data resolution refers to the size of the interval of time over which the data contained in a single data point was collected. 

If you've selected 1 day or 1 month, the data resolution will show as _raw data_, which is 15-minute aggregates. If you've selected 1 year, the data will be in 1-day aggregates. If you've selected All, it will be in 1-month aggregates.

If you want the plot to show a custom interval of time not supported by the buttons, you can use the date range tool in the upper right region of the plot. Click on the dates shown to adjust them.

At the bottom of the plot, below the horizontal axis, you will see a long rectangular graph whose horizontal and vertical axes represent the same things as on the larger plot, but whose timescale will always remain the total interval over which data has been collected by the flow detector you've selected. This graph shows the long-term fluctuations of the volume of data collected. 

<figure class="align-left">
    <img src="{{ site.url }}{{ site.baseurl }}/assets/images/annotation-tool-review-mode.jpg alt="">
    <figcaption>Fig. 3. The annotation tool, in review mode</figcaption>
</figure>

#### An Alternative Method to Adjusting the Time Interval Shown by the Plot

There is a shaded region overlaid on the small graph which represents the section of it shown by the larger plot. You can move this shaded region around using the arrow buttons at either end of the graph, or by putting your cursor in the middle of the shaded region and dragging it. You can also adjust its size by clicking and slowly dragging one of its endpoints. 

### Adding an Annotation

To make a new annotation, click on the icon of a text bubble and a plus sign at the top of the left sidebar. The icon background will turn blue when selected. The right sidebar will turn green and a message will appear instructing you how to proceed:

<figure class="align-left">
    <img src="{{ site.url }}{{ site.baseurl }}/assets/images/new-annotation-green.jpg alt="">
    <figcaption>Fig. 4. New annotation: step 1</figcaption>
</figure>

When you click on the start point for your annotation, a green vertical line will appear on the plot to mark it. The right sidebar will turn red and a message will appear with the next instruction:

<figure class="align-left">
    <img src="{{ site.url }}{{ site.baseurl }}/assets/images/new-annotation-red.jpg alt="">
    <figcaption>Fig. 5. New annotation: step 2</figcaption>
</figure>

When you click on the end point for your annotation, a red vertical line will appear on the plot to mark it, and an annotation window will pop up, preloaded with the start and end times you selected. In the window, you can adjust these if needed, select a category of anomaly, and enter any clarifications you might have into a text box. Click _Save_ to create the annotation.

<figure class="align-left">
    <img src="{{ site.url }}{{ site.baseurl }}/assets/images/annotation-window.jpg alt="">
    <figcaption>Fig. 6. New annotation: step 3</figcaption>
</figure>

Your annotation will now show up in the right sidebar. Click on it to select or deselect it. When selected, the background around it will turn blue. You can then click the pencil icon to edit it, the X to delete it, or the magnifying glass icon to zoom in to whatever time period it covers.

<figure class="align-left">
    <img src="{{ site.url }}{{ site.baseurl }}/assets/images/annotation-created-right-sidebar.jpg alt="">
    <figcaption>Fig. 7. Annotation info in right sidebar</figcaption>
</figure>

### Viewing Multiple Annotations

To view and contextualize all the annotations you've made, click on _Zoom All_. The annotations will show up as strips of color in the upper region of the plot. Each color refers to a different category of annotation, providing a quick visual shorthand to assess which types of anomaly were the most prevalent during particular periods of time. 

You can mouse over these strips and see the annotation category and the start and end date. Click on a strip to put it into the right sidebar for zooming in, editing or deletion.

<figure class="align-left">
    <img src="{{ site.url }}{{ site.baseurl }}/assets/images/annotations-in-plot.jpg alt="">
    <figcaption>Fig. 8. Multiple annotations of different types</figcaption>
</figure>

If you have multiple annotations of the same type, these will show up as a list in the right sidebar, and as a color strip on the data plot with a number in it corresponding to how many annotations are in the list. You can use the small diamond/triangle icons to sort by start and end time, the pencil icon to edit, the X to delete, and the magnifying glass icon to zoom in.

<figure class="align-left">
    <img src="{{ site.url }}{{ site.baseurl }}/assets/images/annotation-list.jpg alt="">
    <figcaption>Fig. 9. Multiple annotations of the same type</figcaption>
</figure>



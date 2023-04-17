---
title: "Annotation"
---
The following tutorial explains how to annotate your data in BikePed Portal, using our annotation tool. To access the annotation tool, start from the _Dashboard_ view of your account. From the left sidebar menu, click on _Annotations_, and select your organization, state, segment area of interest, and flow detector of interest. You will then arrive at the annotation tool.

### Entering Bulk Annotations
You may want to enter an annotation for an event that applies to multiple detectors. For this, you will use _bulk mode_. While following the instructions above, when you get to the part of the process where you're instructed to "Select segment of interest", click on the icon of a text bubble and a plus sign at the top of the left sidebar. This will open up an annotation window wherein you may select all the devices in all the segment areas affected, enter date range and annotation type, and make a note that applies to them all.

Please note, the tool does not support data visualization for bulk annotations, so the rest of this tutorial will apply only to individual detector mode.

<figure class="align-left">
    <img src="{{ site.url }}{{ site.baseurl }}/assets/images/annotation-bulk-mode.jpg" alt="">
    <figcaption>Fig. 1. Entering annotations in bulk mode</figcaption>
</figure>

### Controlling Plot View
You will see a plot with data points, the horizontal axis of which represents time, and the vertical axis, volume of data. In the upper left region of the plot, next to the word _Zoom_, there are buttons you can use to adjust the time interval shown by the plot.

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
    <img src="{{ site.url }}{{ site.baseurl }}/assets/images/annotation-tool-view.jpg" alt="">
    <figcaption>Fig. 2. The annotation tool</figcaption>
</figure>

#### An Alternative Method to Adjusting the Time Interval Shown by the Plot

There is a shaded region overlaid on the small graph which represents the section of it shown by the larger plot. You can move this shaded region around using the arrow buttons at either end of the graph, or by putting your cursor in the middle of the shaded region and dragging it. You can also adjust its size by clicking and slowly dragging one of its endpoints. 

### Adding an Annotation

To make a new annotation, click on the icon of a text bubble and a plus sign at the top of the left sidebar. Then go to the plot and click on the data point you want to annotate. A vertical line will appear, aligned with that data point. If you want to annotate data over a larger interval of time than the data point contains, click on the data point at the left endpoint of that interval. A window will pop up.

<figure class="align-left">
    <img src="{{ site.url }}{{ site.baseurl }}/assets/images/new-annotation-icon.jpg" alt="">
    <figcaption>Fig. 3. Where to click for new annotation</figcaption>
</figure>

In the window, you can adjust the start and end date/time of your annotation, select what category it belongs to, and enter any clarifications you might have into a text box. Click _Save_ to create the annotation.

<figure class="align-left">
    <img src="{{ site.url }}{{ site.baseurl }}/assets/images/annotation-window.jpg" alt="">
    <figcaption>Fig. 4. Creating an annotation</figcaption>
</figure>

Your annotation will now show up in the right sidebar. You can click the pencil icon to edit it, or the X to delete it.

<figure class="align-left">
    <img src="{{ site.url }}{{ site.baseurl }}/assets/images/annotation-created-right-sidebar.jpg" alt="">
    <figcaption>Fig. 5. Annotation info in right sidebar</figcaption>
</figure>

### Viewing Multiple Annotations

The right sidebar will only show information about your most recent annotations. To view and contextualize all the annotations you've made, click on Zoom All. The annotations will show up as strips of color in the upper region of the plot (see Fig. N). Each color refers to a different category of annotation, providing a quick visual shorthand to assess which types of anomaly were the most prevalent during particular periods of time. 

You can mouse over these strips and see the annotation category and the start and end date. Click on a strip to put it into the right sidebar for editing or deletion.

<figure class="align-left">
    <img src="{{ site.url }}{{ site.baseurl }}/assets/images/annotations-in-plot.jpg" alt="">
    <figcaption>Fig. 6. Multiple annotations of different types</figcaption>
</figure>

If you have multiple annotations of the same type, these will show up as a list in the right sidebar, and as a color strip on the data plot with a number in it corresponding to how many annotations are in the list. You can use the small diamond/triangle icons to sort by start and end time, the pencil icon to edit, and the X to delete.

<figure class="align-left">
    <img src="{{ site.url }}{{ site.baseurl }}/assets/images/annotation-list.jpg" alt="">
    <figcaption>Fig. 7. Multiple annotations of the same type</figcaption>
</figure>



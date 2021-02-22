# Marketing Developer Assignment Overview
## The Goal
The goal of this assignment is for our team to assess your attention to detail, as well as your front-end chops.


## Project Details
- Translate this [figma file](https://www.figma.com/file/88oRMWaJ1Ib5Y1Vf0m1WA8/Marketing-Developer-Take-Home-Assignment?node-id=0%3A1) design mock as if it were a section of a landing page.
	- Within copy, link Webflow to their [101 crash course page](https://university.webflow.com/courses/webflow-101-crash-course). Style the link as a “Standard Link” according to our [digital style guide](https://www.lob.com/style-guide).
	- On both hover and click, have What does Lob value? dropdown roll out of button, mimicking "Scale Down" animation [found here](https://codinhood.com/micro/10-dropdown-menu-animations-css-transform).
	- All graphics can be found [in this folder](https://drive.google.com/drive/folders/1toKgWeBKr7VxrfaIecQsKWX6Mmch_niu?usp=sharing).
	- You can reference our Larsseit font via AWS links, below:
		- [Larsseit Thin](https://s3-us-west-2.amazonaws.com/public.lob.com/marketing/fonts/Type+Dynamic+-+Larsseit-Thin.otf)
		- [Larsseit Light](https://s3-us-west-2.amazonaws.com/public.lob.com/marketing/fonts/Type+Dynamic+-+Larsseit-Light.otf)
		- [Larsseit Regular](https://s3-us-west-2.amazonaws.com/public.lob.com/marketing/fonts/Type+Dynamic+-+Larsseit-Regular.otf)
		- [Larsseit Medium](https://s3-us-west-2.amazonaws.com/public.lob.com/marketing/fonts/Type+Dynamic+-+Larsseit-Medium.otf)
		- [Larsseit Bold](https://s3-us-west-2.amazonaws.com/public.lob.com/marketing/fonts/Type+Dynamic+-+Larsseit+Bold.otf)
	- When finished, please submit the code as a zip file via Greenhouse (Bonus if you can host it and share the URL with us). We appreciate your hard work on this assignment; feel free to add it to your growing portfolio.
	- Treat yourself to a nice walk around the block and have a lovely rest of the day! 🙂

## Dev Notes
- Completed with mobile-first approach
- Mimicked dropdown option hover state from [Lob digital style guide](https://www.lob.com/style-guide)
- Bugfix: On iOS, double-tap is expected behavior to trigger click event. There's no true JS method to detect for device type. Instead, I found and updated to an alternative solution to detect for platform. Now hover events trigger only for non-iOS platforms to avoid double-tapping to expand dropdown.

### Additional Features
- Scroll page smoothly back up when dropdown is collapsed
	- Added smooth scrolling polyfill for Safari support
- Adaptive design support for medium viewport widths between Figma designs for iPhone8 and Macbook
- Include metadata for favicon

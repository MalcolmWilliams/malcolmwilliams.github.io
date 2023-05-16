---
layout: post
title:  "Delta 3D Printer"
date:   2015-03-09 12:00:00 -0400
categories: [mechanical]
img: /delta_3d_printer/render.jpeg
---

This 3D printer was a challenging mechanical project. I started it in the first year of my undergrad and finished it while on Chirstmas break. 

![render](/assets/delta_3d_printer/render.jpeg)
*Render of the final design*

The printer quickly became one of my most useful tools and has assisted numerous other projects.

![controller_debugging](/assets/delta_3d_printer/controller_debug.png)
*Electronics debugging after a power supply failure*

I was inspired by a home build of a delta printer by a friend. The delta design is not necessarily better, but it is undeniably funner to watch. In the years since I've built it I'm sure I've wasted hours just watching a print in progress.

The core components are:
- Smoothieboard
    - Previously an Azteeg x5, which released magic smoke after a power supply failure.
- Raspberry Pi with OctoPrint
- E3D V6 hot end

![first_print](/assets/delta_3d_printer/first_print.jpeg)
*Shortly after the first print*

![final_cleanup](/assets/delta_3d_printer/final_cleanup.png)

<!-- blank space needed to prevent wrapping on caption -->
*Prettied up after several months up constant use*

## Extruder Design 

Numerical methods was one of my favourite courses during my undergrad. We were tasked with an open ended project to use simulation to improve a design. This is my favourite type of assignment and something I feel should be much more common in school. 

We decided to look at optimizing the extruder of the printer. The extruder melts the plastic filament in a small chamber called the hot end. The melted plastic can be extruded at a controlled rate by pushing new, non melted plastic into the hot end. The transition from cold to hot must be very short. If there is too much heat leakage, the filament you are attempting to push will melt, causing the printer to clog.

![solidworks_screenshot](/assets/3d_printer_extruder_optimization/solidworks_screenshot.png)
*The extruder design was based on the E3D V6*

Looking at the model above, we can see how E3D approached the problem: A very narrow heat break to reduce conduction and then large heat sinks to quickly dispel any heat. The heat break should be constructed of a relatively insulating material. Of all the metals stanless steel would be the best choice due to the availability, durability (so the walls can be thin), and relatively low thermal conductivity. A high temperature plastic could also be considered, but that was out of the scope of the project. The project instead chose to focus on the heat sink itself. A few variations are presented below. The simulations were preformed in Ansys. 

![sim_results](/assets/3d_printer_extruder_optimization/sim_results.png)
*Ansys simulation results*

As would be expected, the larger fins provide the best results. I machined the best perfoming model and we presented the "real world" results versus the standard E3D hot end with the help of some thermocouples. The results closely matched the simulations. 


![machining_1](/assets/3d_printer_extruder_optimization/machining_1.jpeg)

![finished_extruder](/assets/3d_printer_extruder_optimization/finished.jpeg)



#Boid’s Class idea:

#Variables

- Int vx
- Int vy
- Int x
- Int y
- Int z

#Functions:

- moveBoid(int x1, int y1) – return new boid position

Algorithm File

- code imp
    - src
        - Boid.js
        - BoidImplementation.js       
    - styles
    - index.html


    # Edgecase testing:

    1. 2 boids - with velocities not in min aor max speed levels
        a. check if seperation works
        b. check cohesion and alignment
    2. 2 boids - with velocites closer to min and max speed
        a. check speed limit
    3. check for more boids


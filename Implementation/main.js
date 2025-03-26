import { Boid } from "./src/Boid.js";

function randomize(n)
{
    
    let boids = [];
    for (let i = 0; i < n; i++) {
        boids.push(new Boid(Math.random()*101, Math.random()*201, Math.random()*11, Math.random()*11));
    }  
    return boids;
} 

function controller()
{
    // create a array of boids with random position and random velocities  
    let boids = randomize(10);

    // visual range of boids
    let vis_range = 20;

    //protective range
    let protective_range = 10;

    //avoid factor for seperation
    let avoid_factor = 1.5;

    // matching factor for alignment
    let matching_factor = 0.75;

    // centering factor for cohesion
    let centering_factor = 1.25;

    //min speed and mzx speed
    let min_speed = 1.2,
        max_Speed = 10;

    

    for (let i= 0; i < boids.length; i++)
    {
        // set accumulator variables to zero
    let dx,dy,close_dx, close_dy, xvel, yvel, xpos_avg, ypos_avg, xvel_avg, yvel_avg,neighbours = 0;

    let temp = boids[i];
    for (let j = 0; j != i && j <boids.length; j++)
    {
        dx = temp.x - boid[j].x;
        dy = temp.y - boid[j].y;

        if( Math.abs(dx) < vis_range && Math.abs(dy) < vis_range)
        {
            let sq_distance = dx*dx + dy*dy;
            // check seperation 
            if(sq_distance < (protective_range*protective_range))
            {
                close_dx = temp.x - boid[j].x;
                close_dy = temp.y - boid[j].y;

            } 
            //check alignment i cohesion 
            else if (sq_distance < (vis_range * vis_range))
            {
                xpos_avg += boids[j].x;
                ypos_avg += boids[j].y;
                xvel_avg += boids[j].vx;
                yvel_avg += boids[j].vy;

                neighbours += 1;

            }
            
        }

    }

    if (neighbours > 0)
    {
        //normalizing average vectors w.r.t number of neghbours

        xpos_avg = xpos_avg/neighbours;
        ypos_avg = ypos_avg/neighbours;
        xvel_avg = xvel_avg/neighbours;
        yvel_avg = yvel_avg/neighbours;

        //change the velocity according to alignment and cohesion factors
        
        temp.vx = temp.vx + (temp.x - xpos_avg) * centering_factor + (temp.vx - xvel_avg) * matching_factor; 
        temp.vy = temp.vx + (temp.y - ypos_avg) * centering_factor + (temp.vy - yvel_avg) * matching_factor;
    }

    // set velocity for seperation
    temp.vx += close_dx * avoid_factor;
    temp.vy += close_dy * avoid_factor;

    //Limit speed
    let speed = Math.sqrt((temp.vx * temp.vx)+(temp.vy * temp.vy));
    if(speed < min_speed) 
    {
        temp.vx = (temp.vx/speed) * min_speed;
        temp.vy = (temp.vy/speed) * min_speed;
    }
    if(speed > max_Speed) 
    {
        temp.vx = (temp.vx/speed) * max_speed;
        temp.vy = (temp.vy/speed) * max_speed;
    }

    //update positions of boid
    temp.x = temp.x + temp,vx;
    temp.y =  temp.y + temp.vy;
    
}
}

controller();
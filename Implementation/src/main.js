import { Boid } from "./Boid.js";

function randomize(n)
{
    console.clear();
    let boids = [];
    
    boids.push(new Boid(2,3,3,3));
    Printer("Added first boid "+"Position: "+boids[boids.length-1].x+","+boids[boids.length-1].y+" With initial velocity: "+boids[boids.length-1].vx+","+boids[boids.length-1].vy); 
    boids.push(new Boid(8,5,1,3));
    Printer("Added boid "+"Position: "+boids[boids.length-1].x+","+boids[boids.length-1].y+" With initial velocity: "+boids[boids.length-1].vx+","+boids[boids.length-1].vy);
    boids.push(new Boid(16,-10,3,3));
    Printer("Added boid "+"Position: "+boids[boids.length-1].x+","+boids[boids.length-1].y+" With initial velocity: "+boids[boids.length-1].vx+","+boids[boids.length-1].vy);
    boids.push(new Boid(40,37,3,3));
    Printer("Added boid "+"Position: "+boids[boids.length-1].x+","+boids[boids.length-1].y+" With initial velocity: "+boids[boids.length-1].vx+","+boids[boids.length-1].vy);  

    /*for (let i = 0; i < n; i++) {
        boids.push(new Boid(Math.random()*101, Math.random()*201, Math.random()*11, Math.random()*11));
    } */ 
    return boids;
} 

function controller()
{
    // create a array of boids with random position and random velocities  
    let boids = randomize(10);

    // visual range of boids
    let vis_range = 21;

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
        max_speed = 10;

    

    for (let i= 0; i < boids.length; i++)
    {
        // set accumulator variables to zero
        let dx =0 ,
            dy = 0,
            close_dx = 0, 
            close_dy = 0, 
            xpos_avg = 0, 
            ypos_avg = 0, 
            xvel_avg = 0, 
            yvel_avg = 0,
            neighbours = 0;

        let temp = boids[i];
        for (let j = 0; j <boids.length; j++)
        {
            if(i==j) continue;

            Printer("Enetered Boid Algorithm...."+ " Current boid: " + i + " Other Boid: " + j);
            dx = temp.x - boids[j].x;
            dy = temp.y - boids[j].y;
            Printer("dx: "+Math.abs(dx)+" dy: "+Math.abs(dy));

            let sq_distance = dx*dx + dy*dy;

            let dist = Math.sqrt(sq_distance);

            Printer("Distance between "+i+"and "+j+": "+dist+" Protected range: "+ protective_range+" Visual range: "+ vis_range);

           if( Math.abs(dx) < vis_range && Math.abs(dy) < vis_range)
            {
                
                

                
                // check seperation 
                if(dist < protective_range)
                {
                    
                    close_dx += temp.x - boids[j].x;
                    close_dy += temp.y - boids[j].y;
                    Printer("Seperation has been done between boid "+i+" and "+j+":" + " close_dx = " + close_dx + "close_dy = " + close_dy);

                } 
                //check alignment i cohesion 
                else if (dist < vis_range)
                {
                    xpos_avg += boids[j].x;
                    ypos_avg += boids[j].y;
                    xvel_avg += boids[j].vx;
                    yvel_avg += boids[j].vy;

                    neighbours += 1;
                    Printer("Boid "+ j+ " added as neighbour to "+i);


                }   
            
            }

        }

        if (neighbours > 0)
        {
            Printer("Number of neighbours for Boid "+i+": "+neighbours);
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
        if(speed > max_speed) 
        {
            temp.vx = (temp.vx/speed) * max_speed;
            temp.vy = (temp.vy/speed) * max_speed;
        }

        //update positions of boid
        temp.x = temp.x + temp.vx;
        temp.y =  temp.y + temp.vy;

        Printer("\nFinal position of boid"+(i)+": "+temp.x+","+temp.y+"\n\n");
        
    }
}

controller();

function Printer (s)
{
    console.log(s);
}
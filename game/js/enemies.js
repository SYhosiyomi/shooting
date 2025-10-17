export const enemies=[];
const SIZE=26;

function pushEnemys(canvas){
    const w=SIZE;
    const h=SIZE;
    const x=Math.random()*(canvas.Width-w)
    const y=-h;
    const vy=5;
    enemies.push({x,y,Width:w,height:h,vy});
}

export function SpawnEnemy(canvas){
    if(enemies.length<5){
        spawnEnemy(canvas);
    }
}

// export function updateEnemy(canvas){
//     for(let i =enemies.length-1;i>=0;i--){
//         const e=enemies[i];
//         e.y+=e.vy;
//         if(e.y>canvas.height){
//             enemies.splice(i,1);
//         }
//     }
// }

// export function drawEnemmies(ctx){
//     ctx.fillStyle="crimson";
//     for(const e of enemies){

//     }
// }
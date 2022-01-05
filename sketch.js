 let ball = 0;
 var l2 = 100;
 var col = [];
 let net
 let model
 let xs

 function setup()
 {

 	createCanvas(500, 500);
 	for (let k = 0; k < l2; k++)
 	{
 		col[k] = [];
 	}

 	for (let k = 0; k < l2; k++)
 	{
 		for (let g = 0; g < l2; g++)
 		{
 			col[k][g] = [];
 		}
 	}

 	for (let k = 0; k < l2; k++)
 	{
 		for (let g = 0; g < l2; g++)
 		{
 			for (let i = 0; i < 3; i++)
 			{
 				col[k][g][i] = tan(ball) * 200;
 				ball += 5;
 			}
 		}
 	}


 }




 function gen()
 {
 	for (let k = 0; k < l2; k++)
 	{
 		for (let g = 0; g < l2; g++)
 		{
 			for (let i = 0; i < 3; i++)
 			{
 				col[k][g][i] = tan(ball) * 200;
 				ball += random(0.5, 0.6);

 			}
 		}
 	}
 }

 function draw()
 {
 	rectMode(CORNERS);
 	background(225);
 	gen();
 	// for (let k = 0; k < l2; k++) {
 	//         for (let g = 0; g < l2; g++) {
 	//                     for (let i = 0; i < 3; i++) {
 	//             col[k][g][i] = tan(ball) * 200;
 	//             ball+=random(2,2.1);

 	//         }
 	//         }
 	//     }
 	let fish = 0;
 	for (let i = 0; i < l2; i++)
 	{
 		for (let j = 0; j < l2; j++)
 		{
 			//console.log(col[i][j]);

 			fill(col[i][j]);
 			noStroke();
 			rect(map(i, 0, l2, 0, width), map(j, 0, l2, 0, height), map(i + 1, 0, l2, 0, width), map(j + 1, 0, l2, 0, height));
 			fish++;
 		}
 	}

 }

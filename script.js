const sales = [600, 900, 1200, 1500, 800, 1400, 1600, 1300, 1500, 1550, 1600, 1750];
});


// x-axis labels
ctx.fillStyle = '#7b82a3';
ctx.font = `${12*DPR}px sans-serif`;
ctx.textAlign = 'center';
labels.forEach((lab,i)=>{
const x = padding + i*(barWidth + barGap) + barWidth/2;
ctx.fillText(lab, x, h - 8*DPR);
});
}


function roundRect(ctx, x, y, width, height, radius){
ctx.beginPath();
ctx.moveTo(x+radius, y);
ctx.lineTo(x+width-radius, y);
ctx.quadraticCurveTo(x+width, y, x+width, y+radius);
ctx.lineTo(x+width, y+height-radius);
ctx.quadraticCurveTo(x+width, y+height, x+width-radius, y+height);
ctx.lineTo(x+radius, y+height);
ctx.quadraticCurveTo(x, y+height, x, y+height-radius);
ctx.lineTo(x, y+radius);
ctx.quadraticCurveTo(x, y, x+radius, y);
ctx.closePath();
}


// populate orders table
const orders = [
{num:9999,cid:'786PSG',product:'DM Jeans',qty:2,pid:678352679,status:'Pending',rating:'0/5'},
{num:9998,cid:'867MDK',product:'Jackets',qty:3,pid:453789256,status:'Shipping',rating:'0/5'},
{num:9997,cid:'367HGY',product:'Sweaters',qty:1,pid:768354231,status:'Completed',rating:'4.5/5'},
{num:9996,cid:'574RNY',product:'Coat',qty:2,pid:676545673,status:'Shipping',rating:'0/5'},
{num:9995,cid:'925MGD',product:'Hoodie',qty:4,pid:986478973,status:'Completed',rating:'4.9/5'},
];


function populateOrders(){
const tbody = document.getElementById('ordersTable');
tbody.innerHTML = '';
orders.forEach(o=>{
const tr = document.createElement('tr');
tr.innerHTML = `
<td>${o.num}</td>
<td>${o.cid}</td>
<td>${o.product}</td>
<td>${o.qty}</td>
<td>${o.pid}</td>
<td><span class="status ${o.status.toLowerCase()}">${o.status}</span></td>
<td>${o.rating}</td>
`;
tbody.appendChild(tr);
});
}


// initialize
window.addEventListener('load', ()=>{
drawBarChart('salesChart', sales, labels);
populateOrders();
// redraw on resize for crispness
window.addEventListener('resize', ()=> drawBarChart('salesChart', sales, labels));
});
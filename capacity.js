function calculateCapacity(v){
 const keys=['high','medium','low','highRate','mediumRate','lowRate','staff','capacity'];
 if(keys.some(k=>!Number.isFinite(v[k])||v[k]<0)||v.capacity===0) throw new Error('Enter nonnegative numbers for every input and a capacity greater than zero.');
 if(['high','medium','low'].some(k=>!Number.isInteger(v[k]))) throw new Error('Member counts must be whole numbers.');
 const members=v.high+v.medium+v.low;
 const demand=v.high*v.highRate+v.medium*v.mediumRate+v.low*v.lowRate;
 const available=v.staff*v.capacity;
 const gap=demand-available;
 return {members,demand,available,gap,load:available>0?demand/available:null,required:demand/v.capacity,additional:Math.max(0,Math.ceil((gap-1e-9)/v.capacity))};
}
if(typeof module!=='undefined') module.exports={calculateCapacity};
if(typeof document!=='undefined'){
 const defaults={high:600,medium:1800,low:600,highRate:3,mediumRate:1,lowRate:1/3,staff:25,capacity:160};
 const fmt=n=>n.toLocaleString('en-US',{maximumFractionDigits:1});
 function update(){
  const error=document.getElementById('error'), results=document.getElementById('results'), interpretation=document.getElementById('interpretation');
  try{
   const v=Object.fromEntries(Object.keys(defaults).map(k=>[k,document.getElementById(k).valueAsNumber]));
   const r=calculateCapacity(v);error.textContent='';results.replaceChildren();
   const rows=[['Assigned members',fmt(r.members)],['Expected contacts',fmt(r.demand)],['Available contact capacity',fmt(r.available)],['Demand as a share of capacity',r.load===null?'Not defined (zero staff)':fmt(r.load*100)+'%'],['Staff equivalents required',fmt(r.required)],['Additional whole staff equivalents',fmt(r.additional)]];
   for(const [label,value] of rows){const dt=document.createElement('dt'),dd=document.createElement('dd');dt.textContent=label;dd.textContent=value;results.append(dt,dd);}
   interpretation.textContent=r.gap>1e-9?`Demand exceeds capacity by ${fmt(r.gap)} contacts per month under these assumptions.`:`Capacity exceeds or matches demand, with ${fmt(Math.max(0,-r.gap))} contacts of estimated monthly headroom.`;
  }catch(e){error.textContent=e.message;results.replaceChildren();interpretation.textContent='';}
 }
 for(const k of Object.keys(defaults)) document.getElementById(k).addEventListener('input',update);
 document.getElementById('reset').addEventListener('click',()=>{for(const [k,v] of Object.entries(defaults))document.getElementById(k).value=v;update();});
 update();
}

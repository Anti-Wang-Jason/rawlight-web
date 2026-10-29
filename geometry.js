export function cropGeometry(width,height,rotation,ratio){
 if(!Number.isSafeInteger(width)||!Number.isSafeInteger(height)||width<1||height<1||![0,1,2,3].includes(rotation))throw Error('Invalid image geometry');
 const rw=rotation%2?height:width,rh=rotation%2?width:height;
 let w=rw,h=rh;
 if(ratio!=='original'){
  const r=Number(ratio);if(!Number.isFinite(r)||r<=0)throw Error('Invalid crop ratio');
  if(rw/rh>r)w=Math.max(1,Math.round(rh*r));else h=Math.max(1,Math.round(rw/r));
 }
 const x=Math.floor((rw-w)/2),y=Math.floor((rh-h)/2);
 return {width:w,height:h,crop:[x/rw,y/rh,w/rw,h/rh]};
}

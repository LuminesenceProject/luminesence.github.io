let True=!1;function gam(){var e=document.getElementById("cursor");e.style.left=(.5*window.innerWidth-.5*e.width).toString()+"px",e.style.top=(.5*window.innerHeight-.5*e.height).toString()+"px";var t=new Stats;t.showPanel(0),document.body.appendChild(t.dom),requestAnimationFrame(function e(){t.begin(),t.end(),requestAnimationFrame(e)}),noise.seed(Math.random());var n=new THREE.Scene;n.background=new THREE.Color(0);var a=new THREE.WebGLRenderer;a.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(a.domElement);var o=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,.1,1e3);function r(e,t,n,a,o){this.x=e,this.y=t,this.z=n,this.placed=a,this.blockType=o}var i=[],s=0,h=0,l=.05,d=30+70*Math.random(),c=4,p=10,f=5,u=-250;o.position.x=c*p/2*5,o.position.z=c*p/2*5,o.position.y=50;for(var y=new THREE.TextureLoader,g=new THREE.BoxGeometry(5,5,5),m=[new THREE.MeshBasicMaterial({map:y.load("https://assets.codepen.io/3581324/side.jpg")}),new THREE.MeshBasicMaterial({map:y.load("https://assets.codepen.io/3581324/side.jpg")}),new THREE.MeshBasicMaterial({map:y.load("https://assets.codepen.io/3581324/top.jpg")}),new THREE.MeshBasicMaterial({map:y.load("https://assets.codepen.io/3581324/bottom.jpg")}),new THREE.MeshBasicMaterial({map:y.load("https://assets.codepen.io/3581324/side.jpg")}),new THREE.MeshBasicMaterial({map:y.load("https://assets.codepen.io/3581324/side.jpg")})],w=[new THREE.MeshBasicMaterial({map:y.load("https://assets.codepen.io/3581324/dirt.png")}),new THREE.MeshBasicMaterial({map:y.load("https://assets.codepen.io/3581324/dirt.png")}),new THREE.MeshBasicMaterial({map:y.load("https://assets.codepen.io/3581324/dirt.png")}),new THREE.MeshBasicMaterial({map:y.load("https://assets.codepen.io/3581324/dirt.png")}),new THREE.MeshBasicMaterial({map:y.load("https://assets.codepen.io/3581324/dirt.png")}),new THREE.MeshBasicMaterial({map:y.load("https://assets.codepen.io/3581324/dirt.png")})],M=[new THREE.MeshBasicMaterial({map:y.load("https://assets.codepen.io/3581324/cobblestone.png")}),new THREE.MeshBasicMaterial({map:y.load("https://assets.codepen.io/3581324/cobblestone.png")}),new THREE.MeshBasicMaterial({map:y.load("https://assets.codepen.io/3581324/cobblestone.png")}),new THREE.MeshBasicMaterial({map:y.load("https://assets.codepen.io/3581324/cobblestone.png")}),new THREE.MeshBasicMaterial({map:y.load("https://assets.codepen.io/3581324/cobblestone.png")}),new THREE.MeshBasicMaterial({map:y.load("https://assets.codepen.io/3581324/cobblestone.png")})],E=[{name:"grass",materialArray:m,mesh:new THREE.InstancedMesh(g,m,c*c*p*p*f),count:0,range:[0]},{name:"dirt",materialArray:w,mesh:new THREE.InstancedMesh(g,w,c*c*p*p*f),count:0,range:[1,2]},{name:"cobblestone",materialArray:M,mesh:new THREE.InstancedMesh(g,M,c*c*p*p*f),count:0,range:[3,4]}],x=["grass","dirt","cobblestone"],b=0;b<c;b++)for(j=0;j<c;j++){for(var v=[],k=b*p;k<b*p+p;k++)for(var z=j*p;z<j*p+p;z++){s=l*k,h=l*z;for(var T=5*Math.round(noise.perlin2(s,h)*d/5),H=0;H<f;H++){if(T-5*H<u)continue;let e=(new THREE.Matrix4).makeTranslation(5*k,T-5*H,5*z);for(var R=0;R<E.length;R++)E[R].range.includes(H)&&(E[R].mesh.setMatrixAt(E[R].count,e),E[R].count++,v.push(new r(5*k,T-5*H,5*z,!1,E[R].name)))}}i.push(v)}for(b=0;b<E.length;b++)n.add(E[b].mesh);var B=[],A=!0,I={forward:"w",backward:"s",right:"d",left:"a",jump:" ",placeBlock:"q"},P=[],L=[];for(k=0;k<c;k++)for(z=0;z<c;z++)L.push({x:k,z:z});function C(e,t){for(var n=e-X(),a=t-Z(),o=Math.floor(n/(5*p)),r=Math.floor(a/(5*p)),i=void 0,s=0;s<L.length;s++)if(L[s].x==o&&L[s].z==r){i=s;break}return i}var S=0,F=!1;document.addEventListener("keydown",function(e){if("w"==e.key){var t=(new Date).getTime();t-S<=300&&(F=!0),S=t}if(B.push(e.key),e.key==I.jump&&1==A&&(D=-1,A=!1),e.key==I.placeBlock){const e=new THREE.Raycaster,t=new THREE.Vector2;var a;t.x=0,t.y=0,e.setFromCamera(t,o);for(var s=!1,h=1/0,l=0;l<E.length;l++){var d=e.intersectObject(E[l].mesh);null!=d[0]&&d[0].distance<40&&d[0].distance<h&&(s=!0,a=d,h=d[0].distance)}if(s){console.log(a[0]);var y=a[0].face.materialIndex,m=a[0].point,w=0,M=0,b=0;const e=2.5;switch(y){case 0:w=m.x+e,M=5*Math.round(m.y/5),b=5*Math.round(m.z/5);break;case 1:w=m.x-e,M=5*Math.round(m.y/5),b=5*Math.round(m.z/5);break;case 2:w=5*Math.round(m.x/5),M=m.y+e,b=5*Math.round(m.z/5);break;case 3:w=5*Math.round(m.x/5),M=m.y-e,b=5*Math.round(m.z/5);break;case 4:w=5*Math.round(m.x/5),M=5*Math.round(m.y/5),b=m.z+e;break;case 5:w=5*Math.round(m.x/5),M=5*Math.round(m.y/5),b=m.z-e}if((M=Math.round(M))>u){var v=new r(w,M,b,!0,"cobblestone");if(!K(v.x,v.y,v.z,5,5,5,V.x,V.y,V.z,V.w,V.h,V.d)){i[C(w,b)].push(v),P.push(v);var k=x.indexOf("cobblestone");n.remove(E[k].mesh),E[k].mesh=new THREE.InstancedMesh(g,E[k].materialArray,c*c*p*p*f+P.length),E[k].count=0;for(l=0;l<i.length;l++)for(var z=0;z<i[l].length;z++){let e=(new THREE.Matrix4).makeTranslation(i[l][z].x,i[l][z].y,i[l][z].z);"cobblestone"==i[l][z].blockType&&(E[k].mesh.setMatrixAt(E[k].count,e),E[k].count++)}n.add(E[k].mesh)}}}}}),document.addEventListener("keyup",function(e){for(var t=[],n=0;n<B.length;n++)B[n]!=e.key&&t.push(B[n]);(B=t).includes("w")||(F=!1)});var W=new THREE.PointerLockControls(o,document.body),O=[];document.body.addEventListener("click",function(){if(W.lock(),W.isLocked){const k=new THREE.Raycaster,z=new THREE.Vector2;var e;z.x=0,z.y=0,k.setFromCamera(z,o);for(var t=1/0,a=0;a<E.length;a++){var s=k.intersectObject(E[a].mesh);null!=s[0]&&s[0].distance<40&&s[0].distance<t&&(!0,e=s,t=s[0].distance)}if(null!=e[0]&&e[0].distance<40){console.log(e[0].point);var h=e[0].face.materialIndex,l=e[0].point,d=0,u=0,y=0;const t=2.5;switch(h){case 0:d=l.x-t,u=5*Math.round(l.y/5),y=5*Math.round(l.z/5);break;case 1:d=l.x+t,u=5*Math.round(l.y/5),y=5*Math.round(l.z/5);break;case 2:d=5*Math.round(l.x/5),u=l.y-t,y=5*Math.round(l.z/5);break;case 3:d=5*Math.round(l.x/5),u=l.y+t,y=5*Math.round(l.z/5);break;case 4:d=5*Math.round(l.x/5),u=5*Math.round(l.y/5),y=l.z-t;break;case 5:d=5*Math.round(l.x/5),u=5*Math.round(l.y/5),y=l.z+t}var m=C(d,y),w=i[m];u=Math.round(u);var M=null;for(a=0;a<w.length;a++)if(w[a].x==d&&w[a].y==u&&w[a].z==y){if(w[a].placed){for(var b=0;b<P.length;b++)if(P[b].x==d&&P[b].y==u&&P[b].z==y){P.splice(b,1);break}}else O.push(new r(d,u,y,!1,w[a].blockType));M=w[a].blockType,i[m].splice(a,1);break}var v=x.indexOf(M);n.remove(E[v].mesh),E[v].mesh=new THREE.InstancedMesh(g,E[v].materialArray,c*c*p*p*f+P.length),E[v].count=0;for(a=0;a<i.length;a++)for(b=0;b<i[a].length;b++){let e=(new THREE.Matrix4).makeTranslation(i[a][b].x,i[a][b].y,i[a][b].z);i[a][b].blockType==M&&(E[v].mesh.setMatrixAt(E[v].count,e),E[v].count++)}n.add(E[v].mesh)}}}),W.addEventListener("lock",function(){}),W.addEventListener("unlock",function(){B=[]});var q=.5,D=0,G=.065,V={w:.6,h:8,d:.5,x:o.position.x,y:o.position.y,z:o.position.z,forward:function(e){W.moveForward(e),this.updatePosition()},backward:function(e){W.moveForward(-1*e),this.updatePosition()},right:function(e){W.moveRight(e),this.updatePosition()},left:function(e){W.moveRight(-1*e),this.updatePosition()},updatePosition:function(){this.x=o.position.x,this.y=o.position.y-this.h/2,this.z=o.position.z,this.y<=-50&&(this.y=25,o.position.y=25,this.x+=25,o.position.x+=25)}};function K(e,t,n,a,o,r,i,s,h,l,d,c){return e-a/2<=i+l/2&&e+a/2>=i-l/2&&t-o/2<=s+d/2&&t+o/2>=s-d/2&&n-r/2<=h+c/2&&n+r/2>=h-c/2}var J=1.35,N=0,Q=0,U=1.6;function X(){for(var e=[],t=0;t<i.length;t++)for(var n=0;n<i[t].length;n++)e.push(i[t][n].x);return Math.min.apply(null,e)}function Y(){for(var e=[],t=0;t<i.length;t++)for(var n=0;n<i[t].length;n++)e.push(i[t][n].x);return Math.max.apply(null,e)}function Z(){for(var e=[],t=0;t<i.length;t++)for(var n=0;n<i[t].length;n++)e.push(i[t][n].z);return Math.min.apply(null,e)}function $(){for(var e=[],t=0;t<i.length;t++)for(var n=0;n<i[t].length;n++)e.push(i[t][n].z);return Math.max.apply(null,e)}window.addEventListener("resize",function(){a.setSize(window.innerWidth,window.innerHeight),o.aspect=window.innerWidth/window.innerHeight,o.updateProjectionMatrix(),e.style.left=(.5*window.innerWidth-.5*e.width).toString()+"px",e.style.top=(.5*window.innerHeight-.5*e.height).toString()+"px"});const _=new THREE.Raycaster,ee=new THREE.Vector2;var te;ee.x=0,ee.y=0,function e(){requestAnimationFrame(e),function(){if(V.updatePosition(),B.includes(I.forward)){V.forward(q*(F?U:1)),N=1*q;for(var e=0;e<i.length;e++)for(var t=0;t<i[e].length;t++)K((j=i[e][t]).x,j.y,j.z,5,5,5,V.x,V.y,V.z,V.w,V.h,V.d)&&j.y-2.5<V.y+V.h/2&&j.y+2.5>V.y-V.h/2&&(V.backward(q*(F?U:1)),N=0,Q=0,F=!1)}if(B.includes(I.backward))for(V.backward(q*(F?U:1)),N=-1*q,e=0;e<i.length;e++)for(t=0;t<i[e].length;t++)K((j=i[e][t]).x,j.y,j.z,5,5,5,V.x,V.y,V.z,V.w,V.h,V.d)&&j.y-2.5<V.y+V.h/2&&j.y+2.5>V.y-V.h/2&&(V.forward(q*(F?U:1)),N=0,Q=0,F=!1);if(B.includes(I.right))for(V.right(q*(F?U:1)),Q=1*q,e=0;e<i.length;e++)for(t=0;t<i[e].length;t++)K((j=i[e][t]).x,j.y,j.z,5,5,5,V.x,V.y,V.z,V.w,V.h,V.d)&&j.y-2.5<V.y+V.h/2&&j.y+2.5>V.y-V.h/2&&(V.left(q*(F?U:1)),N=0,Q=0,F=!1);if(B.includes(I.left))for(V.left(q*(F?U:1)),Q=-1*q,e=0;e<i.length;e++)for(t=0;t<i[e].length;t++)K((j=i[e][t]).x,j.y,j.z,5,5,5,V.x,V.y,V.z,V.w,V.h,V.d)&&j.y-2.5<V.y+V.h/2&&j.y+2.5>V.y-V.h/2&&(V.right(q*(F?U:1)),N=0,Q=0,F=!1);if(!(B.includes(I.forward)||B.includes(I.backward)||B.includes(I.right)||B.includes(I.left))){for(N/=J,Q/=J,e=0;e<i.length;e++){for(t=0;t<i[e].length;t++)if(K((j=i[e][t]).x,j.y,j.z,5,5,5,V.x,V.y,V.z,V.w,V.h,V.d)&&j.y-2.5<V.y+V.h/2&&j.y+2.5>V.y-V.h/2){var a=!0;N/=-J,Q/=-J,F=!1;break}if(a)break}V.forward(N*(F?U:1)),V.right(Q*(F?U:1))}for(o.position.y=o.position.y-D,D+=G,e=0;e<i.length;e++)for(t=0;t<i[e].length;t++)K((j=i[e][t]).x,j.y+10,j.z,5,5,5,V.x,V.y,V.z,V.w,V.h,V.d)&&o.position.y<=i[e][t].y+2.5+V.h&&o.position.y>=i[e][t].y&&(o.position.y=i[e][t].y+2.5+V.h,D=0,A=!0),K(j.x,j.y,j.z,5,5,5,V.x,V.y,V.z,V.w,V.h,V.d)&&o.position.y>=i[e][t].y-2.5&&o.position.y<=i[e][t].y&&(D=.5);var y=p*c*5;if(o.position.z<Z()+.4*y){var m=[];for(e=0;e<i.length;e++)(e+1)%c!=0&&m.push(i[e]);var w=X(),M=Z();for(e=0;e<c;e++){for(var x=[],b=w+e*p*5;b<w+e*p*5+5*p;b+=5)for(var v=M-5*p;v<M;v+=5){s=l*b/5,h=l*v/5;for(var k=5*Math.round(noise.perlin2(s,h)*d/5),z=0;z<f;z++)if(!(k-5*z<u)){for(var T=!1,H=0;H<O.length;H++)if(O[H].x==b&&O[H].y==k-5*z&&O[H].z==v){T=!0;break}if(!T)for(var R=0;R<E.length;R++)if(E[R].range.includes(z)){x.push(new r(b,k-5*z,v,!1,E[R].name));break}}for(var j=0;j<P.length;j++)P[j].x==b&&P[j].z==v&&x.push(new r(P[j].x,P[j].y,P[j].z,!0,P[j].blockType))}m.splice(e*c,0,x)}for(i=m,e=0;e<E.length;e++)n.remove(E[e].mesh),E[e].mesh=new THREE.InstancedMesh(g,E[e].materialArray,c*c*p*p*f+P.length),E[e].count=0;for(e=0;e<i.length;e++)for(t=0;t<i[e].length;t++){let n=(new THREE.Matrix4).makeTranslation(i[e][t].x,i[e][t].y,i[e][t].z);for(R=0;R<E.length;R++)if(E[R].name==i[e][t].blockType){E[R].mesh.setMatrixAt(E[R].count,n),E[R].count++;break}}for(e=0;e<E.length;e++)n.add(E[e].mesh)}if(o.position.z>$()-.4*y){for(m=[],e=0;e<i.length;e++)e%c!=0&&m.push(i[e]);w=X();var L=$();for(e=0;e<c;e++){for(x=[],b=w+e*p*5;b<w+e*p*5+5*p;b+=5)for(v=L+5;v<L+5+5*p;v+=5){for(s=l*b/5,h=l*v/5,k=5*Math.round(noise.perlin2(s,h)*d/5),z=0;z<f;z++)if(!(k-5*z<u)){for(T=!1,H=0;H<O.length;H++)if(O[H].x==b&&O[H].y==k-5*z&&O[H].z==v){T=!0;break}if(!T)for(R=0;R<E.length;R++)if(E[R].range.includes(z)){x.push(new r(b,k-5*z,v,!1,E[R].name));break}}for(j=0;j<P.length;j++)P[j].x==b&&P[j].z==v&&x.push(new r(P[j].x,P[j].y,P[j].z,!0,P[j].blockType))}m.splice((e+1)*c-1,0,x)}for(i=m,e=0;e<E.length;e++)n.remove(E[e].mesh),E[e].mesh=new THREE.InstancedMesh(g,E[e].materialArray,c*c*p*p*f+P.length),E[e].count=0;for(e=0;e<i.length;e++)for(t=0;t<i[e].length;t++){let n=(new THREE.Matrix4).makeTranslation(i[e][t].x,i[e][t].y,i[e][t].z);for(R=0;R<E.length;R++)if(E[R].name==i[e][t].blockType){E[R].mesh.setMatrixAt(E[R].count,n),E[R].count++;break}}for(e=0;e<E.length;e++)n.add(E[e].mesh)}if(o.position.x>Y()-.4*y){for(m=[],e=c;e<i.length;e++)m.push(i[e]);var C=Y();for(M=Z(),e=0;e<c;e++){for(x=[],v=M+e*p*5;v<M+e*p*5+5*p;v+=5)for(b=C+5;b<C+5+5*p;b+=5){for(s=l*b/5,h=l*v/5,k=5*Math.round(noise.perlin2(s,h)*d/5),z=0;z<f;z++)if(!(k-5*z<u)){for(T=!1,H=0;H<O.length;H++)if(O[H].x==b&&O[H].y==k-5*z&&O[H].z==v){T=!0;break}if(!T)for(R=0;R<E.length;R++)if(E[R].range.includes(z)){x.push(new r(b,k-5*z,v,!1,E[R].name));break}}for(j=0;j<P.length;j++)P[j].x==b&&P[j].z==v&&x.push(new r(P[j].x,P[j].y,P[j].z,!0,P[j].blockType))}m.splice(i.length-(c-e),0,x)}for(i=m,e=0;e<E.length;e++)n.remove(E[e].mesh),E[e].mesh=new THREE.InstancedMesh(g,E[e].materialArray,c*c*p*p*f+P.length),E[e].count=0;for(e=0;e<i.length;e++)for(t=0;t<i[e].length;t++){let n=(new THREE.Matrix4).makeTranslation(i[e][t].x,i[e][t].y,i[e][t].z);for(R=0;R<E.length;R++)if(E[R].name==i[e][t].blockType){E[R].mesh.setMatrixAt(E[R].count,n),E[R].count++;break}}for(e=0;e<E.length;e++)n.add(E[e].mesh)}if(o.position.x<X()+.4*y){for(m=[],e=0;e<i.length-c;e++)m.push(i[e]);for(w=X(),M=Z(),e=0;e<c;e++){for(x=[],v=M+e*p*5;v<M+e*p*5+5*p;v+=5)for(b=w-5*p;b<w;b+=5){for(s=l*b/5,h=l*v/5,k=5*Math.round(noise.perlin2(s,h)*d/5),z=0;z<f;z++)if(!(k-5*z<u)){for(T=!1,H=0;H<O.length;H++)if(O[H].x==b&&O[H].y==k-5*z&&O[H].z==v){T=!0;break}if(!T)for(R=0;R<E.length;R++)if(E[R].range.includes(z)){x.push(new r(b,k-5*z,v,!1,E[R].name));break}}for(j=0;j<P.length;j++)P[j].x==b&&P[j].z==v&&x.push(new r(P[j].x,P[j].y,P[j].z,!0,P[j].blockType))}m.splice(e,0,x)}for(i=m,e=0;e<E.length;e++)n.remove(E[e].mesh),E[e].mesh=new THREE.InstancedMesh(g,E[e].materialArray,c*c*p*p*f+P.length),E[e].count=0;for(e=0;e<i.length;e++)for(t=0;t<i[e].length;t++){let n=(new THREE.Matrix4).makeTranslation(i[e][t].x,i[e][t].y,i[e][t].z);for(R=0;R<E.length;R++)if(E[R].name==i[e][t].blockType){E[R].mesh.setMatrixAt(E[R].count,n),E[R].count++;break}}for(e=0;e<E.length;e++)n.add(E[e].mesh)}}(),function(){var e;_.setFromCamera(ee,o);for(var t=!1,r=1/0,i=0;i<E.length;i++){var s=_.intersectObject(E[i].mesh);null!=s[0]&&s[0].distance<40&&s[0].distance<r&&(t=!0,e=s,r=s[0].distance)}if(t)if(n.children.includes(te)){te.visible=!0;var h=e[0].face.materialIndex,l=e[0].point,d=0,c=0,p=0;const t=.1;switch(h){case 0:te.rotation.x=0,te.rotation.y=Math.PI/2,te.rotation.z=0,d=l.x+t,c=5*Math.round(l.y/5),p=5*Math.round(l.z/5);break;case 1:te.rotation.x=0,te.rotation.y=Math.PI/2,te.rotation.z=0,d=l.x-t,c=5*Math.round(l.y/5),p=5*Math.round(l.z/5);break;case 2:te.rotation.x=Math.PI/2,te.rotation.y=0,te.rotation.z=0,d=5*Math.round(l.x/5),c=l.y+t,p=5*Math.round(l.z/5);break;case 3:te.rotation.x=Math.PI/2,te.rotation.y=0,te.rotation.z=0,d=5*Math.round(l.x/5),c=l.y-t,p=5*Math.round(l.z/5);break;case 4:te.rotation.x=0,te.rotation.y=0,te.rotation.z=0,d=5*Math.round(l.x/5),c=5*Math.round(l.y/5),p=l.z+t;break;case 5:te.rotation.x=0,te.rotation.y=0,te.rotation.z=0,d=5*Math.round(l.x/5),c=5*Math.round(l.y/5),p=l.z-t}te.position.x=d,te.position.y=c,te.position.z=p}else{var f=new THREE.PlaneGeometry(5,5),u=new THREE.MeshBasicMaterial({color:16777215,side:THREE.DoubleSide});u.transparent=!0,u.opacity=.5,te=new THREE.Mesh(f,u),n.add(te)}else te&&(te.visible=!1);a.render(n,o)}()}()}document.addEventListener("keydown",function(e){if(82==e.keyCode&&e.ctrlKey){e.preventDefault();let t=prompt("render distance?");parseInt(t)&&(document.getElementById("sus").style.display="none",renderDistance=t,True?location.reload():(gam(),True=!0))}});
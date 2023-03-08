let music = [ 
];



for(let i=1;i<=98;i++){
   if(i<=9){
      music.push( {
         singer:' Audio in English',
         song:`track_1_0${i}`,
         id:1,
         img:`pic${i}`
      },)
   }else{
      music.push( {
         singer:' Audio in English',
         song:`track_1_${i}`,
         id:1,
         img:`pic${i}`
      },)
   }
}

for(let i=1;i<=73;i++){
   if(i<=9){
      music.push( {
         singer:' Audio in English',
         song:`track_2_0${i}`,
         id:1,
         img:`pic${i}`
      },)
   }else{
      music.push( {
         singer:' Audio in English',
         song:`track_2_${i}`,
         id:1,
         img:`pic${i}`
      },)
   }
}
for(let i=1;i<=67;i++){
   if(i<=9){
      music.push( {
         singer:' Audio in English',
         song:`track_3_0${i}`,
         id:1,
         img:`pic${i}`
      },)
   }else{
      music.push( {
         singer:' Audio in English',
         song:`track_3_${i}`,
         id:1,
         img:`pic${i}`
      },)
   }
}
for(let i=1;i<=60;i++){
   if(i<=9){
      music.push( {
         singer:' Audio in English',
         song:`track_3_0${i}`,
         id:1,
         img:`pic${i}`
      },)
   }else{
      music.push( {
         singer:' Audio in English',
         song:`track_3_${i}`,
         id:1,
         img:`pic${i}`
      },)
   }
}
for(let i=1;i<=60;i++){
  if(i<=9){
   music.push( {
      singer:' Audio in English',
      song:`track_4_0${i}`,
      id:1,
      img:`pic${i+1}`
   },)
  }else{
   music.push( {
      singer:' Audio in English',
      song:`track_4_${i}`,
      id:1,
      img:`pic${i+1}`
   },)
  }
}
let letter=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x']
console.log(letter.length)
for(let i=0;i<24;i++){
   music.push( {
      singer:' Audio in English',
      song:`track_4_60${letter[i]}`,
      id:1,
      img:`pic${i+1}`
   },)
}
for(let i=62;i<=67;i++){
   music.push( {
      singer:' Audio in English',
      song:`track_4_${i}`,
      id:1,
      img:`pic${i+1}`
   },)
}


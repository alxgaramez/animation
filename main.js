
var t1 = just.animate({
    targets: ".ball1",
    duration: 1000,
    props: {
      innerHTML: ['movimiento'] 
    },
    web: {
       transform: [
          { offset: 0, value: "scale(.1, 1)" },
          { offset: 0.1, value: "scale(.2, .8)" },
          { offset: 0.2, value: "scale(.4, .6)" },
          { offset: 0.3, value: "scale(.6, .4)" },
          { offset: 0.4, value: "scale(.8, .2)" },
          { offset: 0.5, value: "scale(1, 1)" },
          { offset: 0.6, value: "scale(.8, .2)" },
          { offset: 0.7, value: "scale(.6, .4)" },
          { offset: 0.8, value: "scale(.4, .6)" },
          { offset: 0.9, value: "scale(.2, .8)" },
          { offset: 1,   value: "scale(1, 1)" }
       ]
    }
 });

 var t2 = just.animate({
   targets: ".ball2",
   duration: 2000,
   props: {
     innerHTML: ['animacion'] 
   },
   web: {
      opacity: [0,1,0,1]
   }
});

var t3 = just.animate({
   targets: ".ball3",
   duration: 2000,
   props: {
     innerHTML: ['X', 'y', 'movimiento'] 
   },
   web: {
      transform: ['translateX(200px)', 'translatey(200px)','translateX(-200px)','translateY(-200px)','translateX(0px)','translateY(0px)']
   }
});

var t4 = just.animate({
   targets: ".ball4",
   duration: 2000,
   props: {
      innerHTML: ['desvanece', 'mueve'] 
    },
    web: {
       transform: ['translateX(200px)', 'translatey(200px)','translateX(-200px)','translateY(-200px)','translateX(0px)','translateY(0px)'],
       opacity: [0,1,0,1]
    }
});

var t5 = just.animate({
   targets: ".ball5",
   duration: 2000,
   props: {
      innerHTML: ['animacion'] 
    },
    web: {
      transform: [
         { offset: 0, value: "scale(1, .1)" },
         { offset: 0.1, value: "scale(2, 2)" },
         { offset: 0.2, value: "scale(4, 4)" },
         { offset: 0.3, value: "scale(8, 8)" },
         { offset: 0.4, value: "scale(16, 16)" },
         { offset: 0.5, value: "scale(32, 32)" },
         { offset: 0.6, value: "scale(64, 64)" },
         { offset: 0.7, value: "scale(128, 128)" },
         { offset: 0.8, value: "scale(256, 256)" },
         { offset: 0.9, value: "scale(512, 512)" },
         { offset: 1,   value: "scale(1, 1)" }
      ]
   }
});
var t6 = just.animate({
   targets: ".ball6",
   duration: 2000,
   props: {
      innerHTML: ['gira'] 
    },
    web: {
      opacity: [0,1,0,1],
      rotate: [50,1800]
    }
});

var t7 = just.animate({
   targets: ".ball7",
   duration: 2000,
   props: {
      innerHTML: ['voltea'] 
    },
    web: {
      opacity: [0,1,0,1],
      rotateX: [50,1800]
    }
});

var t8 = just.animate({
   targets: ".ball8",
   duration: 2000,
   props: {
      innerHTML: ['BOOM'] 
    },
    web: {
      rotate: [50,1800],
      rotateX: [50,1800],
    }
});
var t9 = just.animate({
   targets: ".ball9",
   duration: 2000,
   props: {
      innerHTML: ['BOOM'] 
    },
    web: {
      rotateX: [50,1800],
      rotateY: [50,1800],
    }
});
var t10 = just.animate({
   targets: ".ball10",
   duration: 1000,
   props: {
      innerHTML: ['bota '] 
    },
    web: {
      transform: [
         { offset: 0,   value: 'translateY(100px)' },
         { offset: 0.1, value: 'translateY(150px)' },
         { offset: 0.2, value: 'translateY(200px)' },
         { offset: 0.3, value: 'translateY(250px)'},
         { offset: 0.4, value: 'translateY(300px)'},
         { offset: 0.5, value: 'translateY(350px)'},
         { offset: 0.6, value: 'translateY(200px)'},
         { offset: 0.7, value: 'translateY(250px)'},
         { offset: 0.8, value: 'translateY(280px)'},
         { offset: 0.9, value: 'translateY(300px)'},
         { offset: 1,   value: 'translateY(0px)'}
      ]
    }
});

 
 
 
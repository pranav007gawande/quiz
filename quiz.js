const quiz =[
{
    quection :"what is the capital of india ?",
    option :['delhi','mumbai','pune','nagpur'],
    answer :'delhi'
},
{
    quection :"what is the color apple ?",
    option :['yellow','red','green','orange'],
    answer :'red'
},
{
    quection :"who is the prime menister of India ?",
    option :['Rahul Gandi','Raj Thakre','Narendra Modi','Nirmala Sitarman'],
    answer :'Narendra Modi'
},
{
    quection :"what is the capital of Maharashtra ?",
    option :['delhi','mumbai','pune','nagpur'],
    answer :'mumbai'
},
{
    quection :"who is the CM of Maharashtra ?",
    option :['Devendra Fadanvi','Yekanath Shinde','Raj Thakre','Ajit Pawar'],
    answer :'Yekanath Shinde'
},
]

let quectionele=document.getElementById('quection');
let optionele=document.getElementById('option');
let scoreEle=document.getElementById('score');
let nextel=document.getElementById('btn');
// variable
let score=0;
let currentQuection=0;
let totalMarks=quiz.length;
showQuection() 
    

// manipuleting the dom
function showQuection()
{
    // deststructuring object  es6
    let {quection,option,answer}=quiz[currentQuection];
    quectionele.innerText=quection;
    // shuffleoptions  call
let shuffleoptions=shuffleOptions(option)
shuffleoptions.forEach((opt)=>{
    let btn=document.createElement('button');
    btn.innerText=opt;
    optionele.appendChild(btn);
    // add event lissinner
    btn.addEventListener('click',function()
    {
      if(opt===answer)
      {
        score++;
      }
      else{
        score-=0.25;
      }
      scoreEle.innerHTML=`Score ${score} /${totalMarks}`;
   
    //   optionele.innerHTML="";
    // to call next quection add function
    nextQuection();
    
   
      })
    
    })
}
function nextQuection() 
{
  currentQuection++;
  optionele.innerHTML=' ';
  if(currentQuection>=quiz.length)
  {
    quectionele.innerHTML="Quiz Completed";
    nextel.innerText=' '
  }
  else{

    
      showQuection();
    }

  }
  nextel.addEventListener('click',()=>{
    nextQuection();
    scoreEle.innerHTML=`Score ${score}/${totalMarks}`;
  })
    
function shuffleOptions(option)
{
    for(let i=option.length-1;i>=0;i--)
    {
    let j=Math.floor(Math.random()*i+1);
    [option[i],option[j]]=[option[j],option[i]]
    }
return option;
}
// console.log(shuffleOptions([1,2,3,4,5]));
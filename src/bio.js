function Bio() {
  
  return (      
    <Card      
      bgcolor="secondary"       
      txtcolor="white"      
      body={(
        <>        
          <div class="card bg-dark text-black" style={{width: "100%", hight:"auto"}}>        
            <img class="card-img" src="media/paper.jpg" alt="Card image"/>          
            <div class="card-img-overlay">
            <h4 style={{fontFamily:"Times New Roman", marginTop:"3%", marginRight:"10px", marginLeft:"10px"}}>
            <h1>Biography</h1><br/>
            <h4>Hello,</h4>
              My name is James. I am a developer located in the Greater New York area. 
              I studied full stack development at MIT. I currently hold a Bachelor of 
              Science Degree from the University of Phoenix where I studied Information 
              Technology. I hold two professional certificates one in Coding from MIT 
              xPro, and the second in General Music Studies from the Berklee College 
              of Music. I enjoy playing the electric bass guitar, wood working, and 
              illustrating in my off time.
            </h4>                           
            </div>                
          </div>        
        </>
      )}
    />  
   )
}



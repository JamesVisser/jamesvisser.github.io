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
            My name is James. I am a developer located in the eastern region of North America. 
            I am currently studying full stack development at MIT. I currently hold a Bachelor of 
            Science Degree in Information Technology from The University of Phoenix and a Professional 
            Certificate in General Music Studies from the Berklee College of Music. 
            I have worked in operational support for over twenty years in various technical roles. 
            I provided support to both government and the private sector mainly in transportation and traffic control. 
            </h4>                           
            </div>                
          </div>        
        </>
      )}
    />  
   )
}



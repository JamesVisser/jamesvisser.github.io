function Contact() {
  
  return (      
    <Card      
      bgcolor="secondary"       
      txtcolor="white"       
      body={(
        <>        
          <div class="card bg-dark text-black" style={{width: "100%", hight:"auto"}}>        
            <img class="card-img" src="media/paper.jpg" alt="Card image"/>          
            <div class="card-img-overlay">
              <h1 class="card-title" style={{marginTop:"4%", fontFamily:"Times New Roman"}}>Contact Information:</h1><br/>
              <h3 class="card-text" style={{fontFamily:"Times New Roman", paddingBottom:"3%"}}>Those who would like to contact or connect with me can do so through LinkedIn. 
              The address is https://www.linkedin.com/in/jv4/ or click the button below.</h3>
              <a type="link" className="btn btn-dark" href="https://www.linkedin.com/in/jv4/" target="_blank"   data-placement="bottom" title="LinkedIn">LinkedIn</a>
            </div>
          </div>        
        </>
      )}
    />   
   )
}






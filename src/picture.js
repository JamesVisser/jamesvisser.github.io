function Picture() {

  return (
    <Card      
    bgcolor="secondary"       
    txtcolor="white"
      body={(               
        <div class="card bg-dark text-black" style={{width: "100%", hight:"auto"}}>        
          <img class="card-img" src="media/paper.jpg" alt="Card image"/>          
          <div class="card-img-overlay">
          <h1 class="card-title" style={{marginTop:"3%", fontFamily:"Times New Roman"}}>Photo</h1><br/>
          <img class="card-img" src="media/BioPic.png" alt="Card image" style={{width: "49%", hight:"auto"}} />            
          </div>
        </div>
      )}
    />    
  );
}
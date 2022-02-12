function Home(){
  return (
    
    <Card      
    bgcolor="secondary"       
    txtcolor="white"
    body={(              
        <div class="card bg-dark text-black" style={{width: "100%", hight:"auto"}}>        
          <img class="card-img" src="media/paper.jpg" alt="Card image"/>          
          <div class="card-img-overlay">
            <p class="card-title display-2" style={{marginTop:"15%", marginBottom:"auto"}}>Welcome to my portfolio!</p>
            <p class="card-text display-4" style={{marginTop:"auto", marginBottom:"auto"}}>My name is James.</p>            
          </div>
        </div>
      )}
    />      
  );  
}

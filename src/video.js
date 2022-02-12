
function Video(){
  
  return (
    <Card      
    bgcolor="secondary"       
    txtcolor="white"
      body={(
               
          <div class="card bg-dark text-black" style={{width: "100%", hight:"auto"}}>        
            <img class="card-img" src="media/paper.jpg" alt="Card image"/>          
            <div class="card-img-overlay">
            <h1 class="card-title" style={{marginTop:"4%", fontFamily:"Times New Roman"}}>Video</h1><br/>
            <iframe class="card-img-thumbnail"  width="80%" height="70%"  src="https://www.youtube.com/embed/CpoO46UyLu8?&autoplay=1"frameborder="0" allowfullscreen ></iframe>
            </div>
          </div>        
        
      )}
    />
  );
}





    
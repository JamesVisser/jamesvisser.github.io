function NavBar(){
  return(
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#src/"  data-placement="bottom" title="Bad Bank">James Visser</a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ol className="navbar-nav">
              <li className="nav-item" class="color">          
                <a className="nav-link" href="#/src/projects/"  data-placement="bottom" title="Navigate to Projects">Projects</a>
              </li>
              <li className="nav-item" class="color">
                <a className="nav-link" href="#/src/bio/"  data-placement="bottom" title="Navigate to Bio">Bio</a>
              </li>
              <li className="nav-item" class="color">
                <a className="nav-link" href="#/src/contact/"  data-placement="bottom" title="Navigate to Contact">Contact</a>
              </li>
              <li className="nav-item" class="color">
                <a className="nav-link" href="#/src/picture/"  data-placement="bottom" title="Navigate to Picture">Picture</a>
              </li> 
              <li className="nav-item" class="color">
                <a className="nav-link" href="#/src/video/"  data-placement="bottom" title="Navigate to Video">Video</a>
              </li>              
              <li className="nav-item" class="color">
                <a className="nav-link" href="#src/"  data-placement="bottom" title="Navigate to Home Page">Home</a>
              </li>          
            </ol>
          </div>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
            <ul class="navbar-nav">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <span class="color"><span class="navbar-toggler-icon"  data-placement="bottom" title="Drop Down Menu"></span></span>
                </a>
                <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                  <li class="color"><a class="dropdown-item" href="#/src/projects/">Projects</a></li>
                  <li class="color"><a class="dropdown-item" href="#/src/Bio/">Bio</a></li>
                  <li class="color"><a class="dropdown-item" href="#/src/contact/">Contact</a></li>
                  <li class="color"><a class="dropdown-item" href="#/src/picture/">picture</a></li>
                  <li class="color"><a class="dropdown-item" href="#/src/video/">Video</a></li>                  
                  <li class="color"><a class="dropdown-item" href="#src/">Home</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>    
      </nav>   
    </>
  );
}
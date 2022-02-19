function Projects() {  

  return (
    <main>
    <div class="row">
    <article class="col">
      <Card      
        bgcolor="secondary"       
        txtcolor="white" 
        header={<header class="header">Bad Bank</header>}
        title={<h5 class="htag">
        Bad Bank is a react banking app that can create an acount, render the acount to a card from Json'
        deposit funds, and move the deposit to the withdraw page. The application was then moved to AWS for hosting.        
        </h5>}
        
        body={( 
          <>
            <img src="media/badbank.png" className="img-fluid" alt="Responsive image" style={{maxWidth: "auto", maxHight:"auto"}}/>
            <br/>
            <a type="link" className="btn btn-secondary" href="https://mybadbank.s3.amazonaws.com/index.html#/" target="_blank"   data-placement="bottom" title="Application">Application</a>
            <a type="link" className="btn btn-secondary" href="https://github.com/JamesVisser" target="_blank"   data-placement="bottom" title="Repository">Repository</a>
          </>
        )}
      /> 
    </article>
    <article class="col">    
      <Card      
        bgcolor="secondary"       
        txtcolor="white" 
        header={<header class="header">Eyes</header>}
        title={<h5 class="htag">
        This program is called Eyes. This program demonstrates movement of objects 
        created in the DOM while they track user input and movement.</h5>}        
        body={(
          <>
          <img src="media/eyes.png" className="img-fluid" alt="Responsive image" style={{maxWidth: "auto", maxHight:"auto"}}/>
          <br/>
          <a type="link" className="btn btn-secondary" href="pro/eyes/indexEyes.html" target="_blank"   data-placement="bottom" title="Application">Application</a>
          <a type="link" className="btn btn-secondary" href="https://github.com/JamesVisser/Eyes" target="_blank"   data-placement="bottom" title="Repository">Repository</a>
          </>
        )}
      />  
      </article>      
      <article class="col">
      <Card      
        bgcolor="secondary"       
        txtcolor="white" 
        header={<header class="header">Book Stop</header>}
        title={<h5 class="htag">This program demonstrates the use of page routing. 
        Linking is used to locate different book titles within a page.</h5>}        
        body={(
          <>
          <img src="media/BookStop.png" className="img-fluid" alt="Responsive image" style={{maxWidth: "auto", maxHight:"auto"}}/>
          <br/>
          <a type="link" className="btn btn-secondary" href="pro/book/indexBooks.html" target="_blank"   data-placement="bottom" title="Application">Application</a>
          <a type="link" className="btn btn-secondary" href="https://github.com/JamesVisser/BookStop" target="_blank"   data-placement="bottom" title="Repository">Repository</a>
          </>
        )}
      /> 
      </article>
    </div> 
    <div class="row">
    <article class="col">
      <Card      
        bgcolor="secondary"       
        txtcolor="white" 
        header={<header class="header">ToDo Application</header>}
        title={<h5 class="htag">
        This program is called To-Do. This is a list generating program that will take the users input and create a list.
        The list will contain the input and a subtraction symbol for removal once the task is complete.</h5>}        
        body={(
          <>
          <img src="media/todo.png" className="img-fluid" alt="Responsive image" style={{maxWidth: "auto", maxHight:"auto"}}/>
          <br/>
          <a type="link" className="btn btn-secondary" href="https://jamesvisser.github.io/My-ToDo-App" target="_blank"   data-placement="bottom" title="Application">Application</a>
          <a type="link" className="btn btn-secondary" href="https://github.com/JamesVisser/My-ToDo-App" target="_blank"   data-placement="bottom" title="Repository">Repository</a>
          </>
        )}
      /> 
      </article>
      <article class="col">    
        <Card      
          bgcolor="secondary"       
          txtcolor="white" 
          header={<header class="header">Web ATM</header>}
          title={<h5 class="htag">This program is built using React and is called WebATM. The app deposits and performs cashback options. The application
          was built using Create-React-App and deployed using AWS</h5>}        
          body={(
            <>
            <img src="media/WebATM.png" className="img-fluid" alt="Responsive image" style={{maxWidth: "auto", maxHight:"auto"}}/>
            <br/>
            <a type="link" className="btn btn-secondary" href="https://webatm.s3.amazonaws.com/index.html" target="_blank"   data-placement="bottom" title="Application">Application</a>
            <a type="link" className="btn btn-secondary" href="https://github.com/JamesVisser/WebATM" target="_blank"   data-placement="bottom" title="Repository">Repository</a>
            </>
          )}
        />  
      </article>
      <article class="col">
        <Card      
          bgcolor="secondary"       
          txtcolor="white" 
          header={<header class="header">Pac-Men</header>}
          title={<h5 class="htag">This Program is called Pac-Men. The program will create four images on the screen when the user selects the create button. 
          When the user selects the move button the images will move randomly around the screen.       
          </h5>}
          body={(
            <>
            <img src="media/pacmen.png" className="img-fluid" alt="Responsive image" style={{maxWidth: "auto", maxHight:"auto"}}/>
            <br/>
            <a type="link" className="btn btn-secondary" href="pro/pacmen/indexPac.html" target="_blank"   data-placement="bottom" title="Application">Application</a>
            <a type="link" className="btn btn-secondary" href="https://github.com/JamesVisser/PacMen" target="_blank"   data-placement="bottom" title="Repository">Repository</a>
            </>
          )}
        /> 
      </article>
    </div> 
    <div class="row">
    <article class="col">    
      <Card      
        bgcolor="secondary"       
        txtcolor="white" 
        header={<header class="header">Real Time Bus Tracker</header>}
        title={<h5 class="htag">
        The program is called Real Time Bus Tracker. The map is of a small town in Southern California containing
        various bus stops along a bus route. The markers will show where the bus travels.</h5>}        
        body={(
          <>
          <img src="media/buss 22.png" className="img-fluid" alt="Responsive image" style={{maxWidth: "auto", maxHight:"auto"}}/>
          <br/>
          <a type="link" className="btn btn-secondary" href="pro/rtbt/indexRTBT.html" target="_blank"   data-placement="bottom" title="Application">Application</a>
          <a type="link" className="btn btn-secondary" href="https://github.com/JamesVisser/RealTimeBusTracker" target="_blank"   data-placement="bottom" title="Repository">Repository</a>
          </>
        )}
      />  
    </article>      
    <article class="col">
      <Card      
        bgcolor="secondary"       
        txtcolor="white" 
        header={<header class="header">React Shopping Cart</header>}
        title={<h5 class="htag">This is a stand alone React Application of a shopping cart. 
        The shopping cart holds a stock of produce and provides a user interface to choose what items to add to the cart. 
        The cart will show the amount in total and the product will decrease upon selecting an item. 
        The stock is located on a local server and will not replenish with the selection. 
        On the local server I used Strapi to create the database, postman to pass data and graphQl to query specific items. 
        I used AWS to deploy the application</h5>}        
        body={(
          <>
          <img src="media/shoppingcart.png" className="img-fluid" alt="Responsive image" style={{maxWidth: "auto", maxHight:"auto"}}/>
          <br/>
          <a type="link" className="btn btn-secondary" href="https://productcart.s3.amazonaws.com/index.html" target="_blank"   data-placement="bottom" title="Application">Application</a>
          <a type="link" className="btn btn-secondary" href="https://github.com/JamesVisser/ShoppingCart" target="_blank"   data-placement="bottom" title="Repository">Repository</a>
          </>
        )}
      /> 
      </article>
      <article class="col">
        <Card      
          bgcolor="secondary"       
          txtcolor="white" 
          header={<header class="header">PacMouse</header>}
          title={<h5 class="htag">This program is called Pac-Mouse. The program was created to have fun with illustrating in Adobe and also 
          displaying how to manipulate the DOM- Document Object Model. The mouse will Applicationear on the screen automatically. The user will click the image to see the mouse move through 
          different illustrations and detect edging to reverse itself.</h5>}          
          body={(
            <>
            <img src="media/mousepic.png" className="img-fluid" alt="Responsive image" style={{maxWidth: "auto", maxHight:"auto"}}/>
            <br/>
            <a type="link" className="btn btn-secondary" href="pro/pacmouse/indexMouse.html" target="_blank"   data-placement="bottom" title="Application">Application</a>
            <a type="link" className="btn btn-secondary" href="https://github.com/JamesVisser/PacMouse" target="_blank"   data-placement="bottom" title="Repository">Repository</a>
            </>
          )}
        /> 
      </article>
    </div>
    <div class="row">
    <article class="col">    
      <Card      
        bgcolor="secondary"       
        txtcolor="white" 
        header={<header class="header">T3 - Tic Tac Toe</header>}
        title={<h5 class="htag">
        The program is called T3 Tic Tac Toe. This game is a basic tic tac toe game that is written in React JavaScript. 
        The game displays button boxes that hold a state of which player has chosen the current box. 
        The Game will follow selections and determine which player wins.</h5>}        
        body={(
          <>
          <img src="media/T3.png" className="img-fluid" alt="Responsive image" style={{maxWidth: "auto", maxHight:"auto"}}/>
          <br/>
          <a type="link" className="btn btn-secondary" href="pro/t3/indext3.html" target="_blank"   data-placement="bottom" title="Application">Application</a>
          <a type="link" className="btn btn-secondary" href="https://github.com/JamesVisser/T3-Tic-Tac-Toe" target="_blank"   data-placement="bottom" title="Repository">Repository</a>
          </>
        )}
      />  
    </article>      
    <article class="col">
        <Card      
          bgcolor="secondary"       
          txtcolor="white" 
          header={<header class="header">Coming Soon</header>}
          title={<h5 class="htag">This is a Place Holder</h5>}          
          body={(
            <>
            <img src="media/moredev.png" className="img-fluid" alt="Responsive image" style={{maxWidth: "auto", maxHight:"auto"}}/>
            <br/>
            <a type="link" className="btn btn-secondary" href="#" data-placement="bottom" title="Application">Home</a>
            <a type="link" className="btn btn-secondary" href="#" data-placement="bottom" title="Repository">Home</a>
            </>
          )}
        /> 
      </article>
      <article class="col">
        <Card      
          bgcolor="secondary"       
          txtcolor="white" 
          header={<header class="header">Coming Soon</header>}
          title={<h5 class="htag">This is a Place Holder</h5>}          
          body={(
            <>
            <img src="media/moredev.png" className="img-fluid" alt="Responsive image" style={{maxWidth: "auto", maxHight:"auto"}}/>
            <br/>
            <a type="link" className="btn btn-secondary" href="#" data-placement="bottom" title="Application">Home</a>
            <a type="link" className="btn btn-secondary" href="#" data-placement="bottom" title="Repository">Home</a>
            </>
          )}
        /> 
      </article>
    </div>
    </main>
  )
}

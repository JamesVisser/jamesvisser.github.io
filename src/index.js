function Spa() {
  return (
    <HashRouter>
      <NavBar/>      
        <div className="container" style={{padding: "20px"}}>
          <Route path="/src/" exact component={Home} />
          <Route path="/src/projects/" component={Projects} />
          <Route path="/src/extra/" component={Extra} />
          <Route path="/src/bio/" component={Bio} />
          <Route path="/src/picture/" component={Picture} />
          <Route path="/src/contact/" component={Contact} />
          <Route path="/src/video/" component={Video} />
        </div>           
    </HashRouter>
  );
}

ReactDOM.render(
  <Spa/>,
  document.getElementById('root')
);

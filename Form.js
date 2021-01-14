class Form {
    constructor() {
      this.title = createElement('h2')
      this.input = createInput("Name");
      this.button = createButton('Play');
      this.greeting = createElement('h3');
    }
  
    display(){
      var title = createElement('h2')
      this.title.html("Car Racing Game");
      this.title.position(130, 0);
    
      
      
    
      
      this.input.position(130, 160);
      this.button.position(250, 200);
  
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
  
        var name = this.input.value();
        
        this.playerCount+=1;
        this.player.update(name)
        this.player.updateCount(playerCount);
        this.greeting.html("Hello " + name )
      this.greeting.position(130, 160)
    });

  }
}
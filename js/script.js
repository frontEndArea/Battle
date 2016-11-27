class Warrior {
    constructor(name, profession, health) {
        
    // Context //
        
        this.value = '50';
        this.arguments = arguments;
        this.name = name;
        this.profession = profession;
        this.health = health;
        this.IDforHealth = this.addID();
        this.IDforBar = this.addID();
   
    // Creating warrior template //
    
      this.createWarriorTemplate();
   
    // Load methods //
   
        var fight = document.querySelector("button[name='startBattle']");
        
            fight.addEventListener('click', (e) => {
                e.preventDefault();
                this.interval();
            }, false);

        }
   
        createWarriorTemplate() {
            let warriorTemplate = $('#warrior-template').get(0).textContent;
            let warriorsArea = $('.warriors-area');
            let element = $(warriorTemplate);
            element.find('.warrior-name').text(`Name: ${this.name}`);
            element.find('.warrior-profession').text(`Profession: ${this.profession}`);
            element.find('.health-level').text(this.health).attr('id', this.IDforHealth);
            element.find('.bar').attr('id', this.IDforBar);
            element.appendTo(warriorsArea);  
        }
    
        addID() {
            
            var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9],
                ID = [];
            for(var i = 0; i < arr.length; i++) {  
               ID.push(Math.round(Math.random() * arr.length + 1));
            }
            return ID.join('').toString(); 
        }
    
        interval() {
            
             var healthLevel = $(`#${this.IDforHealth}`);
             this.interval = setInterval(() => {
                healthLevel.textContent = this.attack(healthLevel);
             }, 1000 );
        }
    
        attack(health) {
            
            if(health.text() > 0) {
                var attackVal = Math.round(Math.random() * 100 ),
                    reducedHealth = health.text() - attackVal,
                    bar = $(`#${this.IDforBar}`);

                bar.stop().animate({
                    'width': this.progressBar(attackVal, bar.css('width'), reducedHealth)
                }, 500);

                health.text(`${reducedHealth}`);

                return health;
            } else {
                clearInterval(this.interval);
                var loser = document.querySelector("h1");
                loser.textContent = `Zawodnik: ${this.name} przegrał. Jego poziom życia wynosi: ${health.text()}`;
            } 
        }
    
        progressBar(attackVal, width, health) {
            var percent = (attackVal/health),
                parsed = parseInt(width, 10),
                finalWidth = Math.round(parsed - (parsed * percent));

            return finalWidth;
        }
}
 

    var inputs = document.querySelectorAll("input"),
        addWarior = document.querySelector("button[name='addWarrior']");
 
    addWarior.onclick = function(e) {
        e.preventDefault();
        return new Warrior(inputs[0].value, inputs[1].value, parseInt(inputs[2].value, 10));
    }
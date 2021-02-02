new Vue({
    el: '#app',
    data: {
        player_health: 100,
        monster_health: 100,
        game_started: false,
        game_over: false
    },

    methods: {

        gameStart: function(){
            this.game_started = true;
            this.player_health = 100; 
            this.monster_health = 100;
        },
        healthUp: function(health){
            if(health == 'player'){
                this.player_health += 10
            }
            else {
                this.monster_health +=10
            }
        },
        healthDown: function(health){
            if(health == 'player'){
                this.player_health -= 10
            }
            else {
                this.monster_health -=10
            }
            this.checkOver();
        },
        checkOver: function(){
            if (this.player_health <=0 || this.monster_health <=0){
                this.game_over = true;
                setTimeout(function(that){that.game_started = false}, 3000, this);
            }
        }
    }
})
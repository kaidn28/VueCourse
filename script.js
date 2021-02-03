new Vue({
    el: '#app',
    data: {
        p1_health: 100,
        p2_health: 100,
        game_started: false,
        game_over: false,
        turns: []
    },

    methods: {

        gameStart: function(){
            this.game_started = true;
            this.game_over = false;
            this.p1_health = 100; 
            this.p2_health = 100;
        },
        healthUp: function(health){
            var hp = Math.floor(Math.random() * 11)+10
            if(health == 'player1'){
                this.p1_health += hp;
                this.turns.unshift({
                    isp1: true,
                    text:'player 1 healed ' + hp + ' hp'})
            }
            else {
                this.p2_health +=hp;
                this.turns.unshift({
                    isp1: false,
                    text:'player 2 healed ' + hp + ' hp'})
            }
        },
        healthDown: function(health){
            var hp = Math.floor(Math.random() * 11)+10
            if(health == 'player1'){
                this.p1_health -= hp
                this.turns.unshift({
                    isp1: false,
                    text:'player 2 dealt ' + hp + ' damage'})
            }
            else {
                this.p2_health -=hp
                this.turns.unshift({
                    isp1: true,
                    text:'player 1 dealt ' + hp + ' damage'})
            }
            this.checkOver();
        },
        checkOver: function(){
            if (this.p1_health <=0 || this.p2_health <=0){
                this.game_over = true;
                setTimeout(function(that){that.game_started = false}, 3000, this);
            }
        }
    }
})
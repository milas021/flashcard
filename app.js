const cards = [
    {
        front: "Aplle",
        back: "سیب",
        flipped: false
    },
    {
        front: "Banana",
        back: "موز",
        flipped: true
    },
    {
        front: "coconut",
        back: "نارگیل",
        flipped: false
    },
    {
        front: "cucumber",
        back: "خیار",
        flipped: false
    },
]

new Vue({
    el: "#flashcard-app",
    data: {
        cards: cards,
        newFront: "",
        newBack: "",
        error : false
    },
    methods: {
        toggleCard: function (card) {
            card.flipped = !card.flipped;
        } ,
        addNew :function()
        {
            if(this.newFront =='' || this.newBack=='')
            {
                this.error=true;
            }
            else
            {
                this.cards.push({
                    front:this.newFront ,
                    back:this.newBack ,
                    flipped:false
                });

                this.newFront ='';
                this.newBack='';
            }
           
        },

        deleteCard : function(index)
        {
            cards.splice(index , 1);
        }
    }
});
var app = new Vue({
    el: '#app',
    data: {
        // creo l'array vuoto per le email
      emailList : [],
    },
    mounted() {
        // seleziono this e lo salvo in una costante per richiamare data di VUE 
        const self = this;
        // ciclo per 10 volte 
        for (let i = 0; i < 10; i++) {
            // ogni volta richiedo una email all'api 
            axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(function(element){
                // pusho l' email nell' array 
                self.emailList.push(element.data.response)
            });
        }
        console.log(self.emailList);
    }
  });
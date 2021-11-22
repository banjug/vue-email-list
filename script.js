var app = new Vue({
    el: '#app',
    data: {
      emailList : [],
    },
    mounted() {
        const self = this;
        for (let i = 0; i < 10; i++) {
            axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(function(element){
                self.emailList.push(element.data.response)
            });
        }
        console.log(self.emailList);
    }
  });
const { createApp } = Vue;

const app = createApp({
  data () {
    return {
      users: []
    };
  },
  methods: {
 
    pushNuovaEmail () {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((resp) => {
             
                this.users.push(resp.data.response)
                console.log(resp.data);
            })

    },

 

},
mounted () {
    this.pushNuovaEmail();
}

}).mount('#app');
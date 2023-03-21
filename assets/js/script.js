Vue.component('portfolio-item',{
    template:`
        <div class="portfolio-item" @click="redirect">
            <div class="pi-info">
                <h3 class="pi-title">{{ pi_title }}</h3>
                <p class="pi-desc">{{ pi_desc }}</p>
            </div>
        </div>
    `,
    props: ["pi_title","pi_desc"],
    methods: {
        redirect: function () {
            if (this.pi_title == 'Les Vieilles Charettes') {
                window.open('http://oc7prawfzz.preview.infomaniak.website/', '_blank');
            }
            else if (this.pi_title == 'Maison Levasseur') {
                window.open('https://www.figma.com/file/40bPtFzbyO7tmnP6Vx9sdh/Pr%C3%A9sentation-Maison-Levasseur?node-id=0%3A1&t=gARiwMHpExicFMnT-1', '_blank');
            }
            else if (this.pi_title == 'Instant Gaming') {
                window.open('https://hawksleynem.github.io/instant-gaming/', '_blank');
            }
            else if (this.pi_title == 'Musée du Petit Palais') {
                window.open('https://www.figma.com/file/pNL1jkP3oRBQmSvZVAywgq/Mus%C3%A9e-du-Petit-Palais?node-id=0%3A1&t=z1E3bCW1p5vviBlx-1', '_blank');
            }
            else if (this.pi_title == 'Popchill') {
                window.open('https://hawksleynem.github.io/popchill/', '_blank');
            }
            else if (this.pi_title == 'Les Trouvailles de Thaïs') {
                window.open('https://les-trouvailles-de-thais.les-vielles-charrettes-tm.fr/', '_blank');
            }
        },
    },
});


var app = new Vue({
    el: '#app'
});
class QuickLinks {
    constructor(){
        this.links=JSON.parse(localStorage.getItem('links'));
        console.log(this.links);
        if(!this.links){
            this.links={};
            localStorage.setItem('links',JSON.stringify(this.links));
        }
    }
    addLink(name,url){
        this.links[name]=url;
        localStorage.setItem('links',JSON.stringify(this.links));

    }
    removeLink(name){
        if(this.links[name]){
            delete this.links[name];
            console.log(this.links);
            localStorage.setItem('links',JSON.stringify(this.links));
        }
        
    }
    static getIconURL(url){
        return 'https://s2.googleusercontent.com/s2/favicons?domain_url=https://'+url;
    }

    
}
localStorage.clear();
const q=new QuickLinks();
q.addLink('youtube','www.youtube.com');
q.addLink('Google', 'www.google.com');
q.addLink('Facebook', 'www.facebook.com');
q.addLink('Reddit', 'www.reddit.com');
q.addLink('Tumblr', 'www.tumblr.com');
q.addLink('Github', 'www.github.io');
UiController.displayLinks(q.links);

console.log(q.links);
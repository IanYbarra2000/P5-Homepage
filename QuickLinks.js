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
    static getIconURL(name,url){
        const lowerName=name.toLowerCase();
        switch(lowerName){
            case 'drive':
                return 'media/Assembled%20Assets/Assembled%20Assets/Icons/Drive.png';
            case 'facebook':
                return 'media/Assembled%20Assets/Assembled%20Assets/Icons/Facebook.png';
            case 'gmail':
                return 'media/Assembled%20Assets/Assembled%20Assets/Icons/Gmail.png';
            case 'outlook':
                return 'media/Assembled%20Assets/Assembled%20Assets/Icons/Outlook.png';
            case 'pintrest':
                return 'media/Assembled%20Assets/Assembled%20Assets/Icons/Pintrest.png';
            case 'reddit':
                return 'media/Assembled%20Assets/Assembled%20Assets/Icons/Reddit.png';
            case 'spotify':
                return 'media/Assembled%20Assets/Assembled%20Assets/Icons/Spotify.png';
            case 'translate':
                return 'media/Assembled%20Assets/Assembled%20Assets/Icons/translate%20icon.png';
            case 'tumblr':
                return 'media/Assembled%20Assets/Assembled%20Assets/Icons/Tumblr.png';
            case 'twitch':
                return 'media/Assembled%20Assets/Assembled%20Assets/Icons/Twitch.png';
            case 'twitter':
                return 'media/Assembled%20Assets/Assembled%20Assets/Icons/Twitter.png';
            case 'youtube':
                return 'media/Assembled%20Assets/Assembled%20Assets/Icons/Youtube.png';
        }
        return 'https://s2.googleusercontent.com/s2/favicons?domain_url=https://'+url;
    }

    
}
const q=new QuickLinks();

UiController.displayLinks(q.links);

console.log(q.links);
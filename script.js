let hightestZ = 1;
class Paper {
    holdingpaper = false;
    preMouseX = 0;
    preMouseY = 0;

    MouseX = 0;
    MouseY = 0;

    velocityX = 0;
    velocityY = 0;
    
    currentpaperX = 0;
    currentpaperY = 0;



    init(paper) {
        paper.addEventListener('mousedown',(e) => {
            this.holdingpaper = true;
            paper.style.zIndex = hightestZ;
            hightestZ+= 1;
        
        
            if (e.button === 0) {
                this.preMouseX = this.MouseX;
                this.preMouseY = this.MouseY;

                console.log(this.preMouseX);
                console.log(this.preMouseY);
            }
        })

            
        document.addEventListener('mousemove',(e) => {
            this.MouseX = e.clientX;
            this.MouseY = e.clientY;

            this.velocityX = this.MouseX - this.preMouseX;
            this.velocityY =this.MouseY - this.preMouseY;

            if(this.holdingpaper) {
                this.currentpaperX += this.velocityX;
                this.currentpaperY += this.velocityY;

                this.preMouseX = this.MouseX;
                this.preMouseY = this.MouseY;
                
                paper.style.transform = `translateX(${this.currentpaperX}px) translateY(${this.currentpaperY}px)`
            }
        })
        window.addEventListener('mouseup', (e) => {
            this.holdingpaper = false;
            console.log ('mouse button is realse');
        })
    }

    
}
const papers =Array.from(document.querySelectorAll('.paper'))
papers.forEach(paper => {
    const p = new Paper();
    p.init(paper);
})



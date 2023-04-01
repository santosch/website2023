
function helloWorld(): string {
    return `
                                                                                                                                                                                dddddddd     
HHHHHHHHH     HHHHHHHHH                   lllllll lllllll                       WWWWWWWW                           WWWWWWWW                                 lllllll             d::::::d !!! 
H:::::::H     H:::::::H                   l:::::l l:::::l                       W::::::W                           W::::::W                                 l:::::l             d::::::d!!:!!
H:::::::H     H:::::::H                   l:::::l l:::::l                       W::::::W                           W::::::W                                 l:::::l             d::::::d!:::!
HH::::::H     H::::::HH                   l:::::l l:::::l                       W::::::W                           W::::::W                                 l:::::l             d:::::d !:::!
  H:::::H     H:::::H      eeeeeeeeeeee    l::::l  l::::l    ooooooooooo         W:::::W           WWWWW           W:::::W ooooooooooo   rrrrr   rrrrrrrrr   l::::l     ddddddddd:::::d !:::!
  H:::::H     H:::::H    ee::::::::::::ee  l::::l  l::::l  oo:::::::::::oo        W:::::W         W:::::W         W:::::Woo:::::::::::oo r::::rrr:::::::::r  l::::l   dd::::::::::::::d !:::!
  H::::::HHHHH::::::H   e::::::eeeee:::::eel::::l  l::::l o:::::::::::::::o        W:::::W       W:::::::W       W:::::Wo:::::::::::::::or:::::::::::::::::r l::::l  d::::::::::::::::d !:::!
  H:::::::::::::::::H  e::::::e     e:::::el::::l  l::::l o:::::ooooo:::::o         W:::::W     W:::::::::W     W:::::W o:::::ooooo:::::orr::::::rrrrr::::::rl::::l d:::::::ddddd:::::d !:::!
  H:::::::::::::::::H  e:::::::eeeee::::::el::::l  l::::l o::::o     o::::o          W:::::W   W:::::W:::::W   W:::::W  o::::o     o::::o r:::::r     r:::::rl::::l d::::::d    d:::::d !:::!
  H::::::HHHHH::::::H  e:::::::::::::::::e l::::l  l::::l o::::o     o::::o           W:::::W W:::::W W:::::W W:::::W   o::::o     o::::o r:::::r     rrrrrrrl::::l d:::::d     d:::::d !:::!
  H:::::H     H:::::H  e::::::eeeeeeeeeee  l::::l  l::::l o::::o     o::::o            W:::::W:::::W   W:::::W:::::W    o::::o     o::::o r:::::r            l::::l d:::::d     d:::::d !!:!!
  H:::::H     H:::::H  e:::::::e           l::::l  l::::l o::::o     o::::o             W:::::::::W     W:::::::::W     o::::o     o::::o r:::::r            l::::l d:::::d     d:::::d  !!! 
HH::::::H     H::::::HHe::::::::e         l::::::ll::::::lo:::::ooooo:::::o              W:::::::W       W:::::::W      o:::::ooooo:::::o r:::::r           l::::::ld::::::ddddd::::::dd     
H:::::::H     H:::::::H e::::::::eeeeeeee l::::::ll::::::lo:::::::::::::::o               W:::::W         W:::::W       o:::::::::::::::o r:::::r           l::::::l d:::::::::::::::::d !!! 
H:::::::H     H:::::::H  ee:::::::::::::e l::::::ll::::::l oo:::::::::::oo                 W:::W           W:::W         oo:::::::::::oo  r:::::r           l::::::l  d:::::::::ddd::::d!!:!!
HHHHHHHHH     HHHHHHHHH    eeeeeeeeeeeeee llllllllllllllll   ooooooooooo                    WWW             WWW            ooooooooooo    rrrrrrr           llllllll   ddddddddd   ddddd !!! 

`
}

const headline = 'color: #00bbff; font-weight: bold; font-size: 1.2rem';
const unset = 'color: unset; font-weight: unset; font-size: unset;';

export default function consoleGreeting(): void {
    console.log('%c' + helloWorld(), 'color: #00bbff');
    console.log(`    
👋 Hello fellow developer! I see you are interested in the technology behind this page!
   So let's have a look 😊   
    `);
    console.table({
        NextJS: 13,
        React: 18,
        Typescript: 4.9,
        SASS: 1.58,
        'Apex Charts': 3,
        'React Icons': 4.7,
        'React Intersection Observer': 9.4,
        eslint: 8.34
    });
    console.log(`    
%c👀 Want to see more?
%cCheck out the repository at https://github.com/santosch/website2023

%c💻 Want to hire me?
%cWell, why don't you create a pull-request there and show me, what you would change in this code.
Too busy? Ok ok - just mailto://write@sebastian-antosch.de 💌
    `,
        headline, unset, headline, unset);
}
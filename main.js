const d = document;



function hamburgerMenu (panelBtn, panel, panelClose, section, checkBtn, checkPanel){

    d.addEventListener('click', (e) =>{

        if(e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)) {

            d.querySelector(panel).classList.toggle('is-active'); 
            d.querySelector(panelBtn).classList.toggle('is-active');

            d.querySelector(checkPanel).classList.remove('is-active'); 
            d.querySelector(checkBtn).classList.remove('is-active');

           
            
        }

        if(e.target.matches(panelClose) || e.target.matches(`${panelClose} *`)) {

            d.querySelector(panel).classList.remove('is-active'); 
            d.querySelector(panelBtn).classList.remove('is-active');
        }

        if(e.target.matches(section) || e.target.matches(`${section} *`)) {

            d.querySelector(panel).classList.remove('is-active'); 
            d.querySelector(panelBtn).classList.remove('is-active');
        }

        
    });
}


function Checkcart(checkBtn, checkPanel, section){

    d.addEventListener('click', (e) =>{

        if(e.target.matches(checkBtn) || e.target.matches(`${checkBtn} *`)) {

            d.querySelector(checkPanel).classList.toggle('is-active'); 
            d.querySelector(checkBtn).classList.toggle('is-active');
        }



        if(e.target.matches(section) || e.target.matches(`${section} *`)) {

            d.querySelector(checkPanel).classList.remove('is-active'); 
            d.querySelector(checkBtn).classList.remove('is-active');
        }
    })
}

hamburgerMenu('.open-menu', '.panel', '.close', '.section', '.open-cart', '.checkout-panel');
Checkcart('.open-cart', '.checkout-panel', '.section');



document.addEventListener('DOMContentLoaded', function(e){
    e.preventDefault();

    const menuLinkGet = document.querySelectorAll('[data-line-effect]');
    menuLinkGet ? mainEffect() : null;

    function mainEffect(){
        menuLinkGet.forEach(menuParams => {
            const menuLinks = menuParams.querySelectorAll('a');
            const getTimeEffect = menuParams.dataset.lineEffect ? menuParams.dataset.lineEffect : 150;

            menuLinks.length ? createItems(menuLinks, getTimeEffect) : null;
        })

        function createItems(menuLinks, getTimeEffect){
            const paramsForDynamic = {
                top: `transform: translateY(-100%);`,
                bottom: `transform: translateY(100%);`,
                startPosition: `transform: translateY(0);`,
                transition: `transition: transform ${getTimeEffect}ms ease;`,
            }

            menuLinks.forEach(link => {
                link.insertAdjacentHTML('beforeend', `
                    <div class="container" style="transform: translateY(-100%);">
                        <div style="transform: translateY(100%);" class="text">${link.textContent}</div>
                    </div>
                `);

                link.onmouseenter = link.onmouseleave = addDynamic;
            });

            function addDynamic(e){
                const container = e.target.querySelector('.container');
                const text = e.target.querySelector('.text');

                const height = container.offsetHeight;
                const half = height / 2;
                const menuLinkPosition = e.pageY - (e.target.getBoundingClientRect().top + scrollY);

                if(e.type === 'mouseenter'){
                    container.style.cssText = menuLinkPosition < half ? paramsForDynamic.top : paramsForDynamic.bottom;
                    text.style.cssText = menuLinkPosition < half ? paramsForDynamic.bottom : paramsForDynamic.top;

                    setTimeout(function(){
                        container.style.cssText = paramsForDynamic.startPosition + paramsForDynamic.transition;
                        text.style.cssText = paramsForDynamic.startPosition + paramsForDynamic.transition;
                    }, 5);
                }

                if(e.type === 'mouseleave'){
                    container.style.cssText = menuLinkPosition < half ? paramsForDynamic.top + paramsForDynamic.transition : paramsForDynamic.bottom + paramsForDynamic.transition;
                    text.style.cssText = menuLinkPosition < half ? paramsForDynamic.bottom + paramsForDynamic.transition : paramsForDynamic.top + paramsForDynamic.transition;
                }
            }
        }
    }
});
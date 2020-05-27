(function (w) {
    const WAIT_TIME = 1000;
    const storage = new WeakMap();
    
    const wait = time => new Promise((resolve) => setTimeout(resolve, time));
    const clearTimer = (el) => { storage.get(el).timer = null };
    
    const trans = (el, prop, to) => new Promise((resolve) => {
        const cb = () => {
            el.removeEventListener('transitionend', cb);
            resolve();
        };
    
        el.style[prop] = to;
        el.addEventListener('transitionend', cb)
    });
    
    const fadeOut = el => trans(el, 'opacity', 0);
    const fadeIn = el => trans(el, 'opacity', 1);
    
    const nextFade = el => wait(WAIT_TIME)
        .then(() => fadeOut(el))
        .then(() => {
            const data = storage.get(el);
            el[data.prop] = data.contents.pop();
            return fadeIn(el);
        })
        .then(() => storage.get(el).contents.length ? nextFade(el) : clearTimer(el));
    
    const makeSingleFade = el => fadeOut(el)
        .then(() => {
            const data = storage.get(el);
            el[data.prop] = data.contents.pop();
            return fadeIn(el);
        });
    
    w.changeSmoothly = (el, content) => {
        if (!storage.has(el)) {
            storage.set(el, {
                prop: el.src ? 'src' : 'textContent',
                contents: [],
                timer: null,
            });
        }
    
        const data = storage.get(el);
        data.contents.push(content);
        if (data.timer) return;
        
        data.timer = setTimeout(() => {
            if (data.contents.length > 1) {
                return nextFade(el);
            }
    
            data.timer = null;
    
            makeSingleFade(el);
        }, 0);
    };
})(window);
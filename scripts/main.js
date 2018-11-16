;(function(){
    // 1. 初始化数据
    const keyBoardData = init()
    const keys = keyBoardData.keys
    const links = keyBoardData.links

    // 2. 生成键盘及事件
    generateKeyBorad(keys, links)

    // 3. 监听用户按键
    listenToUser(links)


    // 工具函数
    function init() {
        const keys = [
            [
                {key: 'Esc', class: 'key0'},
                {key: 'F1', class: 'key0'},
                {key: 'F2', class: 'key0'},
                {key: 'F3', class: 'key0'},
                {key: 'F4', class: 'key0'},
                {key: 'F5', class: 'key0'},
                {key: 'F6', class: 'key0'},
                {key: 'F7', class: 'key0'},
                {key: 'F8', class: 'key0'},
                {key: 'F9', class: 'key0'},
                {key: 'F10', class: 'key0'},
                {key: 'F11', class: 'key0'},
                {key: 'F12', class: 'key0'},
                {key: '退出', class: 'key0'},
            ],
            [
                {key: '~', class: 'key1'},
                {key: '1', class: 'key1'},
                {key: '2', class: 'key1'},
                {key: '3', class: 'key1'},
                {key: '4', class: 'key1'},
                {key: '5', class: 'key1'},
                {key: '6', class: 'key1'},
                {key: '7', class: 'key1'},
                {key: '8', class: 'key1'},
                {key: '9', class: 'key1'},
                {key: '0', class: 'key1'},
                {key: '- —', class: 'key1'},
                {key: '= +', class: 'key1'},
                {key: 'Backsapce', class: 'special1'},
            ],
            [
                {key: 'Tab', class: 'special0'},
                {key: 'q', class: 'key1 capital'},
                {key: 'w', class: 'key1 capital'},
                {key: 'e', class: 'key1 capital'},
                {key: 'r', class: 'key1 capital'},
                {key: 't', class: 'key1 capital'},
                {key: 'y', class: 'key1 capital'},
                {key: 'u', class: 'key1 capital'},
                {key: 'i', class: 'key1 capital'},
                {key: 'o', class: 'key1 capital'},
                {key: 'p', class: 'key1 capital'},
                {key: '[', class: 'key1 capital'},
                {key: ']', class: 'key1 capital'},
                {key: '\\ |', class: 'special0'},
            ],
            [   
                {key: 'Caps Lock', class: 'special1'},
                {key: 'a', class: 'key1 capital'},
                {key: 's', class: 'key1 capital'},
                {key: 'd', class: 'key1 capital'},
                {key: 'f', class: 'key1 capital'},
                {key: 'g', class: 'key1 capital'},
                {key: 'h', class: 'key1 capital'},
                {key: 'j', class: 'key1 capital'},
                {key: 'k', class: 'key1 capital'},
                {key: 'l', class: 'key1 capital'},
                {key: ';', class: 'key1 capital'},
                {key: '‘', class: 'key1 capital'},
                {key: 'Enter', class: 'special2'},
            ],
            [   
                {key: 'Shift', class: 'special2'},
                {key: 'z', class: 'key1 capital'},
                {key: 'x', class: 'key1 capital'},
                {key: 'c', class: 'key1 capital'},
                {key: 'v', class: 'key1 capital'},
                {key: 'b', class: 'key1 capital'},
                {key: 'n', class: 'key1 capital'},
                {key: 'm', class: 'key1 capital'},
                {key: ',', class: 'key1 capital'},
                {key: '.', class: 'key1 capital'},
                {key: '/', class: 'key1 capital'},
                {key: 'Shift', class: 'special3'},
            ],
            [   
                {key: 'Ctrl', class: 'special1'},
                {key: '⌘', class: 'key2'},
                {key: 'Fn', class: 'key2'},
                {key: 'Alt', class: 'key2'},
                {key: '', class: 'special4'},
                {key: 'Alt', class: 'key2'},
                {key: '⌘', class: 'key2'},
                {key: '菜单', class: 'key2'},
                {key: 'Ctrl', class: 'special1'}, 
            ],
        ]
        
        let links = {
            q: 'www.qq.com',
            w: 'www.weibo.com',
            e: 'www.ele.me',
            r: 'www.renren.com',
        }
        
        const linksInLocal = getLinksFromLocal('navKeys')
        if(linksInLocal) {
            links = linksInLocal
        }
    
        return {
            keys,
            links,
        }
    }
    
    function createTag(tagName, attributes) {
        const element = document.createElement(tagName)
        for(let key in attributes) {
            element[key] = attributes[key]
        }
        return element
    }
    
    function getLinksFromLocal(localName) {
        return JSON.parse(localStorage.getItem(localName) || 'null') 
    }
    
    function setLinksFromLocal(localName, obj) {
        return localStorage.setItem(localName, JSON.stringify(obj))
    }
    
    function generateKeyBorad() {
        keys.forEach(row => {
            let keygroups = document.createElement('div')
            keygroups.className = 'keygroup'
            row.forEach(item => {
                const key = createTag('kbd', {
                    className: `key ${item.class}`,
                    textContent: item.key,
                })
                const editButton = createTag('button', {
                    className: 'editButton',
                    textContent: 'E',
                    id: item.key,
                })
                editButton.onclick = function(event) {
                    const targetKey = event.target
                    const newLink = prompt('请输入要添加的导航网址，请不要加http/https')
                    links[targetKey.id] = newLink
                    if (targetKey.nextElementSibling) {
                        targetKey.nextElementSibling.src = `//${newLink}/favicon.ico`
                    }else {
                        const icon = createTag('img', {
                            className: 'icon',
                            src: `//${links[item.key]}/favicon.ico`,
                            onerror: function (event) {
                                event.target.src = '//i.loli.net/2017/11/10/5a05afbc5e183.png'
                                console.log(event.target.src)
                            }
                        })
                        key.appendChild(icon)
                    }
                    setLinksFromLocal('navKeys', links)
                }
                key.appendChild(editButton) 
        
                if (links[item.key] && item.key) {
                    const icon = createTag('img', {
                        className: 'icon',
                        src: `//${links[item.key]}/favicon.ico`,
                        onerror: function (event) {
                            event.target.src = '//i.loli.net/2017/11/10/5a05afbc5e183.png'
                            console.log(event.target.src)
                        }
                    })
                    key.appendChild(icon)
                }
                keygroups.appendChild(key)
            })
            container.appendChild(keygroups)
        })
    }
    
    function listenToUser(links) {
        document.onkeypress = (event) => {
            const pressKey = event.key
            const website = links[pressKey]
            if (website) {
                window.open(`http://${website}`, '_blank')
            }
        }
    }
})()


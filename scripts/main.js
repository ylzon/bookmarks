let keys = [
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
        {key: 'Ctrl', class: 'key2'},
        {key: 'Fn', class: 'key2'},
        {key: '微软', class: 'key2'},
        {key: 'Alt', class: 'special1'},
        {key: ' ', class: 'special4'},
        {key: 'Alt', class: 'special1'},
        {key: '微软', class: 'key2'},
        {key: '菜单', class: 'key2'},
        {key: 'Ctrl', class: 'key2'}, 
    ],
]

let links = {
    q: 'www.qq.com',
    w: 'www.weibo.com',
    e: 'www.ele.me',
    r: 'www.renren.com',
}

keys.forEach(row => {
    let keygroups = document.createElement('div')
    keygroups.className = 'keygroup'
    row.forEach(item => {
        let key = document.createElement('kbd')
        key.className = `key ${item.class}`
        key.innerText = item.key
        keygroups.appendChild(key)
    })
    container.appendChild(keygroups)
})

document.onkeypress = (event) => {
    const pressKey = event.key
    const website = links[pressKey]
    if (website) {
        window.open(`http://${website}`, '_blank')
    }
}
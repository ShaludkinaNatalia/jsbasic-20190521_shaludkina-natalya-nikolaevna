'use strict';

/**
 * Генерация HTML списка друзей
 * @param {Friend[]} friends
 * @return {HTMLUListElement}
 */


function makeFriendsList(friends) {

    const ul = document.createElement('ul');


    for (const item of friends) {
        const li = document.createElement('li');
        li.innerHTML = `${item.firstName} ${item.lastName}`;
        ul.appendChild(li);
    }
    document.body.appendChild(ul);
    return ul;
}

import androids from './android';
import cameras from './camera';
import laptops from './laptop';

const fakeData = [...androids, ...cameras, ...laptops];

const ship = [0, 3.99, 7.99, 13.99];

var newItems = laptops.map(item => { 
    var index = Math.round(Math.random() * 3);
    item.shipping = ship[index];
    return item;
}) 

console.log(JSON.stringify(newItems));

const shuffle = a => {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

shuffle(fakeData);

export default fakeData;
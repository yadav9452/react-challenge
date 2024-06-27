var count = 0;
import { addCommand, removeTab } from '../redux/action';
import store from './../redux/store';

export function allowDrop(e) {
    e.preventDefault();
}

export function drag(e) {
    e.dataTransfer.setData('dragId', e.target.id);
}

export function drop(e) {
    e.preventDefault();

    const id = e.dataTransfer.getData('dragId');

    if (!id || id.startsWith('dragged') || id.startsWith('sprite')) {
        return;
    }

    const nodeCopy = document.getElementById(id).cloneNode(true);

    nodeCopy.id = 'dragged' + id + count++;

    const sprite = store.getState().currentTab;
    store.dispatch(addCommand(sprite, nodeCopy.id, nodeCopy.textContent));

    nodeCopy.addEventListener('dragstart', drag);

    e.target.appendChild(nodeCopy);
}

export function deleteDiv(e, force = false) {
    e.preventDefault();

    const id = e.dataTransfer.getData('dragId');

    if (!id.startsWith('dragged') && !force) return;

    const el = document.getElementById(id);
    el.parentNode.removeChild(el);
}

export function deleteSprite(e) {
    const id = e.dataTransfer.getData('dragId');
    if (!id.startsWith('sprite')) return;
    store.dispatch(removeTab(id.split('-')[1]));
}

import './styles.scss'

export default function (todo) {
    return `
        <li data-id="${ todo.id }" class="${ todo.completed ? 'completed' : '' }">
            <div class="view">
            <input class="toggle" type="checkbox" ${ todo.completed ? 'checked' : '' } />
            <label>${ todo.content }</label>
            <button class="destroy"></button>
            </div>
        </li>
    `;
}
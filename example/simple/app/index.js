import './template/style.scss';
import redux from './redux';
import './actions';


redux.on((a) => {
    console.info('current state', a, a.test, a.process);
});

$(() => {
    const text = 'Javasript simple project.';
    console.log(text);

    $('#page').prepend(`${text}<br><br>`);

    $('#one').on('click', () => {
        redux.actions.Test('#one');
    });

    $('#two').on('click', () => {
        redux.actions.actAsync('#three');
    });
    $('#three').on('click', () => {
        redux.actions.actAsync('error', true);
    });
});

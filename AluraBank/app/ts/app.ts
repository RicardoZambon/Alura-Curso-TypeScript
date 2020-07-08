import { NegotiationController } from './controllers/NegotiationController';

const controller = new NegotiationController();

$('.form').submit(controller.add.bind(controller));

$('#button-import').click(function() {
    controller.importData.bind(controller);
});
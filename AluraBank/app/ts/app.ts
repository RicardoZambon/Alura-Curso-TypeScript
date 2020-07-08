import { NegotiationController } from './controllers/NegotiationController';

const controller = new NegotiationController();

$('.form').submit(controller.add.bind(controller));

$('#btnImport').click(controller.importData.bind(controller));
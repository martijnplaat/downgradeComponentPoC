import { element } from "@angular/upgrade/static/src/common/angular1";

const template = require('./products.html');

const productsComponent = {
    template: template,
    bindings: {},
    controller: productsComponentController
};

productsComponentController.$inject = ['productService'];
function productsComponentController(productService){
    var vm = this;
    vm.title = 'Products';
    vm.saveSuccess = false;
    vm.$onInit = function() {
        return productService.getProducts()
            .then((data) => vm.products = data);
    };

    vm.updateLabel = async function(label: string) {
        vm.saveSuccess = await timeout();

        if (vm.saveSuccess) {
            vm.products = updateAllLabels(vm.products, label);
        }
    }
}

function timeout() {
    return new Promise((resolve) => setTimeout(() => {
        resolve(true) }, 4000));
}

function updateAllLabels(products, newLabel: string) {
    return products.map(element => {
        return  { ...element, name : newLabel }
    });
}

export default productsComponent;
angular.module('app')
    .component('simpleComponent',
    {
        template: "Hello {{$ctrl.name}}, I'm {{$ctrl.myName}}!",
        bindings: { name: '@' },
        controller: function () {
            this.myName = 'Patrick';
        }

    });

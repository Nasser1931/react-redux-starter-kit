export default () => ({
    path: 'contact',
    /*  Async getComponent is only invoked when route matches   */
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            const Contact = require('./components/Contact').default
            cb(null, Contact)
        }, 'contact')
    }

})

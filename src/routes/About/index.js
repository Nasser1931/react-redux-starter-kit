export default () => ({
    path: 'about',
    /*  Async getComponent is only invoked when route matches   */
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            const About = require('./components/About').default
            cb(null, About)
        }, 'about')
    }

})

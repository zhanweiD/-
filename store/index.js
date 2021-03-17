 import Vue from 'vue'
    import Vuex from 'vuex'

    import moduleA from '@/store/modules/moduleA'
    import moduleB from '@/store/modules/moduleB'

    Vue.use(Vuex)
    export default new Vuex.Store({
        modules:{
            moduleA,moduleB
        }
    })
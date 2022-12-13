import { createStore } from 'vuex';
import getters from './getters';

const modulesFiles = import.meta.glob('./modules/*.js', { eager: true })

let modules = {}

for(const file in modulesFiles){
    modules[file.replace(/(\.\/modules\/|\.js)/g, '')] = modulesFiles[file].default
}

const store = createStore({
    getters,
    modules
})

export default store

const app = Vue.createApp({
    data(){
        return {
            count: 0,
            fname: '',
            lname: '',
            fullName: '',
            skils: ['HTML', 'CSS', 'JS', 'PHP', 'NODE JS'],
            skilsObj: {
                skil_1: 'HTML',
                skil_2: 'CSS',
                skil_3: 'JS',
                skil_4: 'PHP',
                skil_5: 'NODE JS'
            },
            newSkil: '',
            newSkilArr: '',
        }
    },

    methods: {
        increment(){
            this.count++
            console.log(1);
        },
        decrement(){
            this.count--
            console.log(2);
        },
        handleSumbit(){
            this.fullName = this.fname + ' ' + this.lname;
        },
        handleAdd(){
            this.skilsObj[this.newSkil] = this.newSkil;
            this.newSkil = '';
            console.log(3);
        },
        handleClose(key){
            delete this.skilsObj[key];
            console.log(4);
        },
        handleAddWArr(){
            this.skils.push(this.newSkilArr);
            this.newSkilArr = '';
            console.log(5);

        },
        handleRemoveWArr(index){
            this.skils.splice(index,1)
            console.log(6);
        }
    }
}).mount('#app')
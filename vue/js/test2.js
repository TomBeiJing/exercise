const vm = new Vue({
	el:'#app',
	data:{
		firstName:'assad',
		lastName:'1213',
		fullName2:'23ddfdd'
	},
	computed:{
		//什么时候执行：初始化显示
		fullName1(){//计算属性中的一个方法，方法的返回值作为属性值
			return this.firstName+""+this.lastName
		},
		fullname3:{
			get( ){
				return this.firstName + ' ' + this.lastName;
			},
			//回调函数，当属性值发生改变时回调，更新相关的属性数据
			set(value){
				// value 就是fullName3的最新属性值
				const names = value.split(' ');
				this.firstName=names[0];
				this.lastName=names[1];
			}
		}
	},
	watch:{
		firstName:function(value){
			this.fullName2 = value + '' + this.lastName;
		}
		// lastName:function(value){
		// 	this.fullName2 = this.firstName + '' + value;
		// }
	}
})
// vm.$watch('lastName',function(value){
// 	this.fullName2 = this.firstName + '' + value;
// })


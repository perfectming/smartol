// module.exports = {
// 	get(){
// 		byId: function(id) {
// 			return typeof id === "string" ? document.getElementById(id) : id
// 		},
// 		byClass: function(sClass, oParent) {
// 			var aClass = [];
// 			var reClass = new RegExp("(^| )" + sClass + "( |$)");
// 			var aElem = this.byTagName("*", oParent);
// 			for (var i = 0; i < aElem.length; i++) reClass.test(aElem[i].className) && aClass.push(aElem[i]);
// 			return aClass
// 		},
// 		byTagName: function(elem, obj) {
// 			return (obj || document).getElementsByTagName(elem)
// 		}
// 	};
// 	// var dragMinWidth = 250;
// 	// var dragMinHeight = 124;
// 	/*-------------------------- +
// 	  拖拽函数
// 	 +-------------------------- */

// };
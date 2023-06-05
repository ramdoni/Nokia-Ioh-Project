// inline data demo
jQuery('#treeExample1').jstree({
	'core' : {
		'data' : [
			{
				"text" : "Root node",
				"children" : [
					{ "text" : "Child node 1" },
					{ "text" : "Child node 2" }
			]}
		]
	}
});

// html demo
jQuery('#treeExample2, #treeExample3, #treeExample4').jstree();

// Json demo
jQuery('#treeExample5').jstree({
	'core' : {
		'data' : {
			"url" : "assets/data/treeview_jstree.json",
			"dataType" : "json" // needed only if you do not supply JSON headers
		}
	}
});

// Ajax demo
jQuery('#treeExample6').jstree({
	'core' : {
		'data' : {
			"url" : "//www.jstree.com/fiddle/?lazy",
			"data" : function (node) {
				return { "id" : node.id };
			}
		}
	}
});

// data from callback
jQuery('#treeExample7').jstree({
	'core' : {
		'data' : function (node, cb) {
			if(node.id === "#") {
				cb([{"text" : "Root", "id" : "1", "children" : true}]);
			}
			else {
				cb(["Child"]);
			}
		}
	}
});

// interaction and events
jQuery('#evts_button').on("click", function () {
	var instance = jQuery('#treeExample8').jstree(true);
	instance.deselect_all();
	instance.select_node('1');
});
jQuery('#treeExample8')
	.on("changed.jstree", function (e, data) {
		if(data.selected.length) {
			alert('The selected node is: ' + data.instance.get_node(data.selected[0]).text);
		}
	})
	.jstree({
		'core' : {
			'multiple' : false,
			'data' : [
				{ "text" : "Root node", "children" : [
						{ "text" : "Child node 1", "id" : 1 },
						{ "text" : "Child node 2" }
				]}
			]
		}
	});

// Checkbox
$("#treeExample9").jstree({
	"plugins" : [ "checkbox" ]
});

// Drag and drop
$("#treeExample10").jstree({
	"core" : {
		"check_callback" : true
	},
	"plugins" : [ "dnd" ]
});

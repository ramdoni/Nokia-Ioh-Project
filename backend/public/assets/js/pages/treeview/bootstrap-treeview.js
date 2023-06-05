var defaultData = [
	{
	  text: 'Parent 1',
	  href: '#parent1',
	  tags: ['4'],
	  nodes: [
		{
		  text: 'Child 1',
		  href: '#child1',
		  tags: ['2'],
		  nodes: [
			{
			  text: 'Grandchild 1',
			  href: '#grandchild1',
			  tags: ['0']
			},
			{
			  text: 'Grandchild 2',
			  href: '#grandchild2',
			  tags: ['0']
			}
		  ]
		},
		{
		  text: 'Child 2',
		  href: '#child2',
		  tags: ['0']
		}
	  ]
	},
	{
	  text: 'Parent 2',
	  href: '#parent2',
	  tags: ['0']
	},
	{
	  text: 'Parent 3',
	  href: '#parent3',
	   tags: ['0']
	},
	{
	  text: 'Parent 4',
	  href: '#parent4',
	  tags: ['0']
	},
	{
	  text: 'Parent 5',
	  href: '#parent5'  ,
	  tags: ['0']
	}
  ];

$('#treeview1').treeview({
	data: defaultData
});

$('#treeview2').treeview({
	levels: 1,
	showBorder: false,
	data: defaultData
});

$('#treeview3').treeview({
	levels: 99,
	showBorder: false,
	data: defaultData
});

$('#treeview4').treeview({
	expandIcon: 'icon-arrow-right',
	collapseIcon: 'icon-arrow-down',
	nodeIcon: 'icon-folder',
	showBorder: false,
	data: defaultData
});

$('#treeview5').treeview({
	showTags: true,
	showBorder: false,
	data: defaultData
  });

$('#treeview6').treeview({
	data: defaultData,
	showIcon: false,
	showCheckbox: true,
	showBorder: false,
});

// Searchable
var $searchableTree = $('#treeview7').treeview({
	data: defaultData,
	showBorder: false,
});

var search = function(e) {
	var pattern = $('#input-search').val();
	var options = {
	  ignoreCase: true,
	  exactMatch: false,
	};
	var results = $searchableTree.treeview('search', [ pattern, options ]);
}
$('#btn-search').on('click', search);
$('#input-search').on('keyup', search);

// Selectable
var initSelectableTree = function() {
	return $('#treeview8').treeview({
		data: defaultData,
		showBorder: false,
	  multiSelect: $('#chk-select-multi').is(':checked'),
	  onNodeSelected: function(event, node) {
		// $('#selectable-output').prepend('<p>' + node.text + ' was selected</p>');
		toastr.options.closeButton = true;
		toastr.options.positionClass = 'toast-top-right';
		toastr.options.showDuration = 1000;
		toastr['info'](node.text + ' was selected');
	  },
	  onNodeUnselected: function (event, node) {
		// $('#selectable-output').prepend('<p>' + node.text + ' was unselected</p>');
		toastr.options.closeButton = true;
		toastr.options.positionClass = 'toast-top-right';
		toastr.options.showDuration = 1000;
		toastr['error'](node.text + ' was unselected');
	  }
	});
};
var $selectableTree = initSelectableTree();

// JSON
var json = '[' +
          '{' +
            '"text": "Parent 1",' +
            '"nodes": [' +
              '{' +
                '"text": "Child 1",' +
                '"nodes": [' +
                  '{' +
                    '"text": "Grandchild 1"' +
                  '},' +
                  '{' +
                    '"text": "Grandchild 2"' +
                  '}' +
                ']' +
              '},' +
              '{' +
                '"text": "Child 2"' +
              '}' +
            ']' +
          '},' +
          '{' +
            '"text": "Parent 2"' +
          '},' +
          '{' +
            '"text": "Parent 3"' +
          '},' +
          '{' +
            '"text": "Parent 4"' +
          '},' +
          '{' +
            '"text": "Parent 5"' +
          '}' +
		']';
		
var $tree = $('#treeview9').treeview({
	data: json,
	showBorder: false
});
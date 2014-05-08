# CBHD Bootstrap Select

A simple plugin that creates a [Bootstrap](http://getbootstrap.com) [button dropdown](http://getbootstrap.com/components/#btn-dropdowns) from a select form element. The new button dropdown will also update the select each time a new selection is made so that the menu can be used in a typical form. 

## Installation

This plugin requires that you be using Bootstrap as well as jQuery. Just add the jquery.cbhd-bootstrap-select.min.js file to your html after jQuery and Bootstrap .js files. You must use the Bootstrap [dropdown plugin](http://getbootstrap.com/javascript/#dropdowns) for the button dropdown to work.

## Documentation

Use a typical Bootstrap formatted [select tag](http://getbootstrap.com/css/#forms). And add a class to target the select menu.

```html
<select class="form-control" class="bootstrap-select">
	<option>1</option>
	<option>2</option>
	<option>3</option>
	<option>4</option>
	<option>5</option>
</select>
```

### Basic implementation

For basic implementation all you need to do is call the plugin.

```js
$(document).ready(function(){
	$(".bootstrap-select").cbhd_bootstrap_select();
});
```

### Advanced implementation

For a more advance implementation you can add several options.

| Parameter  | Default | Options | Description |
| ------------- | ------------- | ------------- | ------------- |
| icon | "glyphicon" | "glyphicon", "caret", "custom" | Which icon is used
| custom_icon  | none | HTML string for the caret | Custom HTML used for the icon
| use_first_option_as_title | false | true, false | Use the first ```<option>``` tag as the title of the button and remove it from the options

```js
$(document).ready(function(){
	$(".bootstrap-select").cbhd_bootstrap_select({ 
		icon: "custom",
		custom_icon: '<i class="fa fa-chevron-down"></i>',
		use_first_option_as_title: true
	});
});
```


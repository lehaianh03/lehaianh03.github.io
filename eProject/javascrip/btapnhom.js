var countdown = function(end,elements, callback) {
	var _second = 1000,
	_minutes = _second*60,
	_hours = _minutes*60, 
	_days = _hours*24,

	end = new Date(end),
	timer,

	calculate = function()
	{
		var now = new Date(),
		remaining = end.getTime()-now.getTime(),
		data;
		if(isNaN(end))
		{
			console.log('Invalid date/time');
			return;
		};

		if(remaining <= 0)
		{
			clearInterval(time);
			if(typeos(callback)==='function')
			{
				callback();
			};
		}else 
		{
			if(!timer)
			{
				timer = setInterval(calculate,_second);
			};
		};

		data = {
			'days': Math.floor(remaining/_days),
			'hours': Math.floor((remaining % _days)/_hours),
			'minutes': Math.floor((remaining % _hours)/_minutes),
			'second': Math.floor((remaining % _minutes)/_second)
		}

		if(elements.length)
		{
			for(x in elements)
			{
				var x = elements[x];
				data[x] = ('00' + data[x]).slice(-2);
				document.getElementById(x).innerHTML = data[x];
			}
		};

	}
	calculate();
}


var countdown2 = function(end,elements, callback) {
	var _second = 1000,
	_minutes = _second*60,
	_hours = _minutes*60, 
	_days = _hours*24,

	end = new Date(end),
	timer,

	calculate = function()
	{
		var now = new Date(),
		remaining = end.getTime()-now.getTime(),
		data;
		if(isNaN(end))
		{
			console.log('Invalid date/time');
			return;
		};

		if(remaining <= 0)
		{
			clearInterval(time);
			if(typeos(callback)==='function')
			{
				callback();
			};
		}else 
		{
			if(!timer)
			{
				timer = setInterval(calculate,_second);
			};
		};

		data = {
			'days2': Math.floor(remaining/_days),
			'hours2': Math.floor((remaining % _days)/_hours),
			'minutes2': Math.floor((remaining % _hours)/_minutes),
			'second2': Math.floor((remaining % _minutes)/_second)
		}

		if(elements.length)
		{
			for(x in elements)
			{
				var x = elements[x];
				data[x] = ('00' + data[x]).slice(-2);
				document.getElementById(x).innerHTML = data[x];
			}
		};

	}
	calculate();
}


var countdown3 = function(end,elements, callback) {
	var _second = 1000,
	_minutes = _second*60,
	_hours = _minutes*60, 
	_days = _hours*24,

	end = new Date(end),
	timer,

	calculate = function()
	{
		var now = new Date(),
		remaining = end.getTime()-now.getTime(),
		data;
		if(isNaN(end))
		{
			console.log('Invalid date/time');
			return;
		};

		if(remaining <= 0)
		{
			clearInterval(time);
			if(typeos(callback)==='function')
			{
				callback();
			};
		}else 
		{
			if(!timer)
			{
				timer = setInterval(calculate,_second);
			};
		};

		data = {
			'days3': Math.floor(remaining/_days),
			'hours3': Math.floor((remaining % _days)/_hours),
			'minutes3': Math.floor((remaining % _hours)/_minutes),
			'second3': Math.floor((remaining % _minutes)/_second)
		}

		if(elements.length)
		{
			for(x in elements)
			{
				var x = elements[x];
				data[x] = ('00' + data[x]).slice(-2);
				document.getElementById(x).innerHTML = data[x];
			}
		};

	}
	calculate();
}


var countdown4 = function(end,elements, callback) {
	var _second = 1000,
	_minutes = _second*60,
	_hours = _minutes*60, 
	_days = _hours*24,

	end = new Date(end),
	timer,

	calculate = function()
	{
		var now = new Date(),
		remaining = end.getTime()-now.getTime(),
		data;
		if(isNaN(end))
		{
			console.log('Invalid date/time');
			return;
		};

		if(remaining <= 0)
		{
			clearInterval(time);
			if(typeos(callback)==='function')
			{
				callback();
			};
		}else 
		{
			if(!timer)
			{
				timer = setInterval(calculate,_second);
			};
		};

		data = {
			'days4': Math.floor(remaining/_days),
			'hours4': Math.floor((remaining % _days)/_hours),
			'minutes4': Math.floor((remaining % _hours)/_minutes),
			'second4': Math.floor((remaining % _minutes)/_second)
		}

		if(elements.length)
		{
			for(x in elements)
			{
				var x = elements[x];
				data[x] = ('00' + data[x]).slice(-2);
				document.getElementById(x).innerHTML = data[x];
			}
		};

	}
	calculate();
}



var countdown5 = function(end,elements, callback) {
	var _second = 1000,
	_minutes = _second*60,
	_hours = _minutes*60, 
	_days = _hours*24,

	end = new Date(end),
	timer,

	calculate = function()
	{
		var now = new Date(),
		remaining = end.getTime()-now.getTime(),
		data;
		if(isNaN(end))
		{
			console.log('Invalid date/time');
			return;
		};

		if(remaining <= 0)
		{
			clearInterval(time);
			if(typeos(callback)==='function')
			{
				callback();
			};
		}else 
		{
			if(!timer)
			{
				timer = setInterval(calculate,_second);
			};
		};

		data = {
			'day5': Math.floor(remaining/_days),
			'hours5': Math.floor((remaining % _days)/_hours),
			'minutes5': Math.floor((remaining % _hours)/_minutes),
			'second5': Math.floor((remaining % _minutes)/_second)
		}

		if(elements.length)
		{
			for(x in elements)
			{
				var x = elements[x];
				data[x] = ('00' + data[x]).slice(-2);
				document.getElementById(x).innerHTML = data[x];
			}
		};

	}
	calculate();
}


var countdown6 = function(end,elements, callback) {
	var _second = 1000,
	_minutes = _second*60,
	_hours = _minutes*60, 
	_days = _hours*24,

	end = new Date(end),
	timer,

	calculate = function()
	{
		var now = new Date(),
		remaining = end.getTime()-now.getTime(),
		data;
		if(isNaN(end))
		{
			console.log('Invalid date/time');
			return;
		};

		if(remaining <= 0)
		{
			clearInterval(time);
			if(typeos(callback)==='function')
			{
				callback();
			};
		}else 
		{
			if(!timer)
			{
				timer = setInterval(calculate,_second);
			};
		};

		data = {
			'days6': Math.floor(remaining/_days),
			'hours6': Math.floor((remaining % _days)/_hours),
			'minutes6': Math.floor((remaining % _hours)/_minutes),
			'second6': Math.floor((remaining % _minutes)/_second)
		}

		if(elements.length)
		{
			for(x in elements)
			{
				var x = elements[x];
				data[x] = ('00' + data[x]).slice(-2);
				document.getElementById(x).innerHTML = data[x];
			}
		};

	}
	calculate();
}


var countdown7 = function(end,elements, callback) {
	var _second = 1000,
	_minutes = _second*60,
	_hours = _minutes*60, 
	_days = _hours*24,

	end = new Date(end),
	timer,

	calculate = function()
	{
		var now = new Date(),
		remaining = end.getTime()-now.getTime(),
		data;
		if(isNaN(end))
		{
			console.log('Invalid date/time');
			return;
		};

		if(remaining <= 0)
		{
			clearInterval(time);
			if(typeos(callback)==='function')
			{
				callback();
			};
		}else 
		{
			if(!timer)
			{
				timer = setInterval(calculate,_second);
			};
		};

		data = {
			'days7': Math.floor(remaining/_days),
			'hours7': Math.floor((remaining % _days)/_hours),
			'minutes7': Math.floor((remaining % _hours)/_minutes),
			'second7': Math.floor((remaining % _minutes)/_second)
		}

		if(elements.length)
		{
			for(x in elements)
			{
				var x = elements[x];
				data[x] = ('00' + data[x]).slice(-2);
				document.getElementById(x).innerHTML = data[x];
			}
		};

	}
	calculate();
}


var countdown8 = function(end,elements, callback) {
	var _second = 1000,
	_minutes = _second*60,
	_hours = _minutes*60, 
	_days = _hours*24,

	end = new Date(end),
	timer,

	calculate = function()
	{
		var now = new Date(),
		remaining = end.getTime()-now.getTime(),
		data;
		if(isNaN(end))
		{
			console.log('Invalid date/time');
			return;
		};

		if(remaining <= 0)
		{
			clearInterval(time);
			if(typeos(callback)==='function')
			{
				callback();
			};
		}else 
		{
			if(!timer)
			{
				timer = setInterval(calculate,_second);
			};
		};

		data = {
			'days8': Math.floor(remaining/_days),
			'hours8': Math.floor((remaining % _days)/_hours),
			'minutes8': Math.floor((remaining % _hours)/_minutes),
			'second8': Math.floor((remaining % _minutes)/_second)
		}

		if(elements.length)
		{
			for(x in elements)
			{
				var x = elements[x];
				data[x] = ('00' + data[x]).slice(-2);
				document.getElementById(x).innerHTML = data[x];
			}
		};

	}
	calculate();
}

var countdown9 = function(end,elements, callback) {
	var _second = 1000,
	_minutes = _second*60,
	_hours = _minutes*60, 
	_days = _hours*24,

	end = new Date(end),
	timer,

	calculate = function()
	{
		var now = new Date(),
		remaining = end.getTime()-now.getTime(),
		data;
		if(isNaN(end))
		{
			console.log('Invalid date/time');
			return;
		};

		if(remaining <= 0)
		{
			clearInterval(time);
			if(typeos(callback)==='function')
			{
				callback();
			};
		}else 
		{
			if(!timer)
			{
				timer = setInterval(calculate,_second);
			};
		};

		data = {
			'days9': Math.floor(remaining/_days),
			'hours9': Math.floor((remaining % _days)/_hours),
			'minutes9': Math.floor((remaining % _hours)/_minutes),
			'second9': Math.floor((remaining % _minutes)/_second)
		}

		if(elements.length)
		{
			for(x in elements)
			{
				var x = elements[x];
				data[x] = ('00' + data[x]).slice(-2);
				document.getElementById(x).innerHTML = data[x];
			}
		};

	}
	calculate();
}

var countdown10 = function(end,elements, callback) {
	var _second = 1000,
	_minutes = _second*60,
	_hours = _minutes*60, 
	_days = _hours*24,

	end = new Date(end),
	timer,

	calculate = function()
	{
		var now = new Date(),
		remaining = end.getTime()-now.getTime(),
		data;
		if(isNaN(end))
		{
			console.log('Invalid date/time');
			return;
		};

		if(remaining <= 0)
		{
			clearInterval(time);
			if(typeos(callback)==='function')
			{
				callback();
			};
		}else 
		{
			if(!timer)
			{
				timer = setInterval(calculate,_second);
			};
		};

		data = {
			'days10': Math.floor(remaining/_days),
			'hours10': Math.floor((remaining % _days)/_hours),
			'minutes10': Math.floor((remaining % _hours)/_minutes),
			'second10': Math.floor((remaining % _minutes)/_second)
		}

		if(elements.length)
		{
			for(x in elements)
			{
				var x = elements[x];
				data[x] = ('00' + data[x]).slice(-2);
				document.getElementById(x).innerHTML = data[x];
			}
		};

	}
	calculate();
}

var countdown11 = function(end,elements, callback) {
	var _second = 1000,
	_minutes = _second*60,
	_hours = _minutes*60, 
	_days = _hours*24,

	end = new Date(end),
	timer,

	calculate = function()
	{
		var now = new Date(),
		remaining = end.getTime()-now.getTime(),
		data;
		if(isNaN(end))
		{
			console.log('Invalid date/time');
			return;
		};

		if(remaining <= 0)
		{
			clearInterval(time);
			if(typeos(callback)==='function')
			{
				callback();
			};
		}else 
		{
			if(!timer)
			{
				timer = setInterval(calculate,_second);
			};
		};

		data = {
			'days11': Math.floor(remaining/_days),
			'hours11': Math.floor((remaining % _days)/_hours),
			'minutes11': Math.floor((remaining % _hours)/_minutes),
			'second11': Math.floor((remaining % _minutes)/_second)
		}

		if(elements.length)
		{
			for(x in elements)
			{
				var x = elements[x];
				data[x] = ('00' + data[x]).slice(-2);
				document.getElementById(x).innerHTML = data[x];
			}
		};

	}
	calculate();
}

var countdown12 = function(end,elements, callback) {
	var _second = 1000,
	_minutes = _second*60,
	_hours = _minutes*60, 
	_days = _hours*24,

	end = new Date(end),
	timer,

	calculate = function()
	{
		var now = new Date(),
		remaining = end.getTime()-now.getTime(),
		data;
		if(isNaN(end))
		{
			console.log('Invalid date/time');
			return;
		};

		if(remaining <= 0)
		{
			clearInterval(time);
			if(typeos(callback)==='function')
			{
				callback();
			};
		}else 
		{
			if(!timer)
			{
				timer = setInterval(calculate,_second);
			};
		};

		data = {
			'days12': Math.floor(remaining/_days),
			'hours12': Math.floor((remaining % _days)/_hours),
			'minutes12': Math.floor((remaining % _hours)/_minutes),
			'second12': Math.floor((remaining % _minutes)/_second)
		}

		if(elements.length)
		{
			for(x in elements)
			{
				var x = elements[x];
				data[x] = ('00' + data[x]).slice(-2);
				document.getElementById(x).innerHTML = data[x];
			}
		};

	}
	calculate();
}

var countdown13 = function(end,elements, callback) {
	var _second = 1000,
	_minutes = _second*60,
	_hours = _minutes*60, 
	_days = _hours*24,

	end = new Date(end),
	timer,

	calculate = function()
	{
		var now = new Date(),
		remaining = end.getTime()-now.getTime(),
		data;
		if(isNaN(end))
		{
			console.log('Invalid date/time');
			return;
		};

		if(remaining <= 0)
		{
			clearInterval(time);
			if(typeos(callback)==='function')
			{
				callback();
			};
		}else 
		{
			if(!timer)
			{
				timer = setInterval(calculate,_second);
			};
		};

		data = {
			'days13': Math.floor(remaining/_days),
			'hours13': Math.floor((remaining % _days)/_hours),
			'minutes13': Math.floor((remaining % _hours)/_minutes),
			'second13': Math.floor((remaining % _minutes)/_second)
		}

		if(elements.length)
		{
			for(x in elements)
			{
				var x = elements[x];
				data[x] = ('00' + data[x]).slice(-2);
				document.getElementById(x).innerHTML = data[x];
			}
		};

	}
	calculate();
}

var countdown14 = function(end,elements, callback) {
	var _second = 1000,
	_minutes = _second*60,
	_hours = _minutes*60, 
	_days = _hours*24,

	end = new Date(end),
	timer,

	calculate = function()
	{
		var now = new Date(),
		remaining = end.getTime()-now.getTime(),
		data;
		if(isNaN(end))
		{
			console.log('Invalid date/time');
			return;
		};

		if(remaining <= 0)
		{
			clearInterval(time);
			if(typeos(callback)==='function')
			{
				callback();
			};
		}else 
		{
			if(!timer)
			{
				timer = setInterval(calculate,_second);
			};
		};

		data = {
			'days14': Math.floor(remaining/_days),
			'hours14': Math.floor((remaining % _days)/_hours),
			'minutes14': Math.floor((remaining % _hours)/_minutes),
			'second14': Math.floor((remaining % _minutes)/_second)
		}

		if(elements.length)
		{
			for(x in elements)
			{
				var x = elements[x];
				data[x] = ('00' + data[x]).slice(-2);
				document.getElementById(x).innerHTML = data[x];
			}
		};

	}
	calculate();
}
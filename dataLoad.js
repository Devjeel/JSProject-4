var data = JSON.parse('data.json');

function loadData(jsonObj){
	var loadProducts = jsonObj;
	for (var i = 0; i < loadProducts.length; i++) {
		var article = document.createElement('article');
		var h4 = document.createElement('h4');
		var img = document.createElement('img');
		var para1 = document.createElement('p');
		var para2 = document.createElement('p');
		var list = document.createElement('ul');
		img.setAttribute('src', './images/' + loadProducts[i].image);
		img.setAttribute('alt', loadProducts[i].product);
		h4.textContent = loadProducts[i].product;
		para1.textContent = 'Price: ' + loadProducts[i].price;
		para2.textContent = 'Description: ' + loadProducts[i].description;
		
		article.appendChild(img);
		article.appendChild(h2);
		article.appendChild(p1);
		article.appendChild(p2);
		article.appendChild(list);
		section.appendChild(article);
	}
} 
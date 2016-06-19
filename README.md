<h2>Image Search Abstraction Layer</h2>

<h4>User Stories</h4>

<ol>
	<li>I can get the image URLs, alt text and page urls for a set of images relating to a given search string.</li>
	<li>I can paginate through the responses by adding a ?offset=2 parameter to the URL.</li>
	<li>I can get a list of the most recently submitted search strings.</li>
</ol>

<h3>Sample request</h3>
<div><code>https://smoore-imagesearch.herokuapp.com/imagesearch/landscape?offset=10</code></div>

<h3>Sample results</h3>
<div>
	<code>
		[<br />
		&nbsp;&nbsp;{<br />
		&nbsp;&nbsp;&nbsp;&nbsp;"url": "http://upload.wikimedia.org/wikipedia/commons/d/de/Derbyshire_Landscape.jpg",<br />
		&nbsp;&nbsp;&nbsp;&nbsp;"snippet": "Description Derbyshire Landscape.jpg",<br />
		&nbsp;&nbsp;&nbsp;&nbsp;"thumbnail": "https://tse2.mm.bing.net/th?id=OIP.M7f8839ebf460b71bcd94460ddf11866co0&pid=Api",<br />
		&nbsp;&nbsp;&nbsp;&nbsp;"context": "commons.wikimedia.org/wiki/File:Derbyshire_Landscape.jpg"<br />
		&nbsp;&nbsp;},<br />
		&nbsp;&nbsp;{<br />
		&nbsp;&nbsp;&nbsp;&nbsp;...<br />
		&nbsp;&nbsp;},<br />
		&nbsp;&nbsp;...<br />
		]
	</code>
</div>

<h3>Other request options</h3>
<div><code>...</code></div>
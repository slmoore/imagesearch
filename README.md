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
		&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://i.ytimg.com/vi/c7oV1T2j5mc/maxresdefault.jpg",<br />
		&nbsp;&nbsp;&nbsp;&nbsp;"snippet": "Landscape Photography",<br />
		&nbsp;&nbsp;&nbsp;&nbsp;"thumbnail": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR3p1jNPx2fv8Zi4S3gGmzidO6yrMFmj_lwZ2Ml9Z1cJpNNTZl3dmqhzm4",<br />
		&nbsp;&nbsp;&nbsp;&nbsp;"context": "https://www.youtube.com/watch?v=c7oV1T2j5mc"<br />
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
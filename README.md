## Example of api usage
### POST BODY
```
{
		"title": "Validation test",
		"pageCount": 342,
		"publishDate": "2009-04-01T00:00:00.000-0700",
		"shortDescription": "Unlocking Android: A Developer's Guid ...",
		"longDescription": "Android is an open source mobile phone platform based os... ",
		"status": "PUBLISH",
	"thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson.jpg",
		"authors": [
					"W. Frank Ableson",
					"Charlie Collins",
					"Robi Sen"
					]
}
```

### UPDATE BODY
```
{
	"update": {
		"title": "newUpdatedTitleTwice",
		"authors": [
		"W. Frank Ableson",
		"Charlie Collins"
	]
	}
}
```

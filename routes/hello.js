
/*
 * GET home page.
 */

exports.view = function(req, res){
  var nameToShow = req.params.userName; //added
  res.render('hello', {
  	'name': nameToShow //just '' works instead of nameToShow 
  });
};
